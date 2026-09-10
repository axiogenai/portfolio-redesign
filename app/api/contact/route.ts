import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

function mapServicesToCrmCategory(services: string[]): string {
  if (!Array.isArray(services) || services.length === 0) return 'website';
  const s = services.join(' ').toLowerCase();
  if (s.includes('mobile') || s.includes('app')) return 'app';
  if (s.includes('e-commerce') || s.includes('ecommerce') || s.includes('store')) return 'ecommerce';
  if (s.includes('brand') || s.includes('identity')) return 'branding';
  if (s.includes('ui') || s.includes('ux') || s.includes('design')) return 'uiux';
  if (s.includes('landing')) return 'landing';
  if (s.includes('web') || s.includes('site')) return 'website';
  return 'other';
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, services, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and project brief are required." },
        { status: 400 }
      );
    }

    const servicesList =
      Array.isArray(services) && services.length > 0
        ? services.join(", ")
        : "General Inquiry";

    // 1. Immediately record inbound lead into Supabase CRM
    if (supabaseAdmin) {
      try {
        const crmService = mapServicesToCrmCategory(services);
        const { error: crmError } = await supabaseAdmin.from('leads').insert([
          {
            name,
            email: email || null,
            phone: phone || null,
            service: crmService,
            niche: servicesList,
            status: 'lead',
            priority: 'high',
            source: 'portfolio_contact',
            notes: `Project Brief:\n${message}\n\nSelected Services: ${servicesList}`,
            has_website: true,
            follow_up_done: false,
          },
        ]);
        if (crmError) {
          console.error('[CRM Lead Error] Supabase insert failed:', crmError);
        } else {
          console.log(`[CRM Lead Synced] Successfully captured lead '${name}' in Dashboard CRM.`);
        }
      } catch (crmErr) {
        console.error('[CRM Lead Exception]', crmErr);
      }
    }

    // 2. Deliver email via SMTP
    const user = process.env.SMTP_USER || "axiogen01@gmail.com";
    const rawPass = process.env.SMTP_PASS || "";
    const pass = rawPass.replace(/\s+/g, ""); // strip any whitespace from 16-character app password
    const to = process.env.SMTP_TO || user;

    const mailOptions = {
      from: `"${name}" <${user}>`,
      replyTo: email,
      to,
      subject: `[Axiogen Lead] ${name} - ${servicesList}`,
      text: `New Lead from Axiogen Portfolio\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nServices: ${servicesList}\n\nProject Brief:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 28px; border-radius: 16px; background-color: #0e0e0e; color: #ffffff; border: 1px solid #222222;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 20px;">
            <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #FF6B42;"></span>
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.16em; color: #888888; font-weight: bold;">Team Axiogen • Inbound Lead</span>
          </div>
          
          <h2 style="color: #ffffff; margin: 0 0 24px 0; font-size: 22px; font-weight: 700; border-bottom: 1px solid #1f1f1f; padding-bottom: 16px;">
            New Project Inquiry
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; color: #888888; width: 120px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em;">Client Name</td>
              <td style="padding: 10px 0; font-weight: 600; font-size: 15px; color: #ffffff;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888888; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em;">Work Email</td>
              <td style="padding: 10px 0; font-size: 15px;"><a href="mailto:${email}" style="color: #FF6B42; text-decoration: none; font-weight: 500;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888888; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em;">Phone / WA</td>
              <td style="padding: 10px 0; font-size: 15px; color: #ffffff;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888888; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em;">Services</td>
              <td style="padding: 10px 0; font-size: 14px; color: #ffffff;">
                <span style="display: inline-block; background: #1c1c1c; padding: 4px 12px; border-radius: 9999px; border: 1px solid #2e2e2e; font-weight: 500;">
                  ${servicesList}
                </span>
              </td>
            </tr>
          </table>

          <div style="background-color: #161616; padding: 20px; border-radius: 12px; border-left: 3px solid #FF6B42; margin-bottom: 24px;">
            <p style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; color: #888888; letter-spacing: 0.14em; font-weight: 600;">Project Brief</p>
            <p style="margin: 0; font-size: 14px; line-height: 1.65; color: #dddddd; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="border-top: 1px solid #1f1f1f; padding-top: 16px; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #555555;">Sent securely via Axiogen Portfolio SMTP Integration</p>
          </div>
        </div>
      `,
    };

    if (pass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: { user, pass },
        });
        await transporter.sendMail(mailOptions);
        console.log(`[SMTP Sent] Email notification delivered to ${to}`);
      } catch (smtpErr) {
        console.error("[SMTP Error] Email dispatch failed:", smtpErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully. Team Axiogen will get back to you shortly.",
    });
  } catch (error: any) {
    console.error("SMTP Error:", error);
    return NextResponse.json(
      {
        error:
          error?.message || "Failed to deliver email through SMTP server.",
      },
      { status: 500 }
    );
  }
}
