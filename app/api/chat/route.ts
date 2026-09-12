import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are the official Team Axiogen AI Concierge (team.axiogen.in).
Axiogen is an elite Deep Tech & Creative Digital Engineering Studio based in Kolhapur & Sangli, Maharashtra, India, founded by Aditya Patil (Principal Systems Architect) and Aditya Minchekar (Co-Founder & Technology Lead).

Studio Capabilities & Services:
1. AI & Neural Systems: Custom LLM fine-tuning, autonomous agent pipelines, multimodal vision architectures, real-time edge inference, conversational voice agents.
2. Full-Stack Web Platforms: High-velocity, sub-second web applications built with Next.js, React, Tailwind CSS, TypeScript, Supabase, and distributed serverless backends.
3. Mobile Apps: Native iOS & Android applications with offline sync, biometric auth, and real-time state.
4. Cloud & Cybersecurity: Zero-trust architecture, encrypted storage vaults, hardened container clusters, edge telemetry, and 99.9% uptime SLA.
5. Brand & UI/UX Engineering: Coherent design systems, immersive micro-interactions, brand identity, and conversion-optimized experiences.

Production Products & Platforms:
- Axiogen ClinicOS: Modern clinic operating system with live token queue TV displays, electronic prescriptions, and WhatsApp patient notifications.
- Axiogen Voice Engine v2: Neural text-to-speech with low-latency streaming and high emotional fidelity.
- Axiogen QR Engine: Dynamic branded QR system with logo deadzone masking.
- Axiogen Vault: Zero-exposure cryptographic file delivery system.

Project Onboarding & Quotations:
- Pricing: Fixed-scope deliverables with milestone-based payouts (typically starting from ₹40,000 for focused MVPs and custom-scoped for full platforms).
- Delivery Timelines: Fast-track sprint cycles from 2 to 6 weeks.
- Direct Contact: Email axiogen01@gmail.com or submit a project brief directly via the /contact page. Clients partner directly with the architects writing production code (no middlemen).

Guidelines:
- Always answer naturally, dynamically, and specifically to whatever question the user asks.
- Never use generic boilerplate or repetitive statements. Be conversational, direct, and helpful.
- Keep answers concise and readable (1-3 short paragraphs or bullet points).
- Strict rule: You represent ONLY Team Axiogen. Never mention third-party entities.`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages = [], message = '' } = body;

    const groqKey =
      process.env.GROQ_API_KEY ||
      process.env.GROQ_KEYS ||
      '';

    // Format conversation history for Groq chat completions
    const formattedMessages: { role: string; content: string }[] = [
      { role: 'system', content: SYSTEM_PROMPT },
    ];

    for (const m of messages) {
      if (m && typeof m.content === 'string' && m.content.trim()) {
        formattedMessages.push({
          role: m.role === 'user' ? 'user' : 'assistant',
          content: m.content.trim(),
        });
      }
    }

    if (
      message &&
      (!formattedMessages.length ||
        formattedMessages[formattedMessages.length - 1]?.content !== message)
    ) {
      formattedMessages.push({ role: 'user', content: message.trim() });
    }

    if (formattedMessages.length <= 1) {
      return NextResponse.json({
        success: true,
        text: 'Hello! I am Team Axiogen’s AI Concierge. How can I help you with your project, technology stack, or quotation today?',
      });
    }

    // Active models on this Groq key
    const models = [
      'openai/gpt-oss-120b',
      'openai/gpt-oss-20b',
      'qwen/qwen3.8-27b',
      'groq/compound-mini',
    ];

    let lastError = null;

    for (const model of models) {
      try {
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${groqKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model,
            messages: formattedMessages,
            temperature: 0.7,
            max_tokens: 500,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          const reply = data?.choices?.[0]?.message?.content;
          if (reply && typeof reply === 'string' && reply.trim()) {
            return NextResponse.json({ success: true, text: reply.trim() });
          }
        } else {
          const errData = await res.json().catch(() => null);
          lastError = errData?.error?.message || `HTTP ${res.status}`;
          console.warn(`Groq model ${model} failed:`, lastError);
        }
      } catch (err: any) {
        lastError = err?.message || 'Network error';
        console.warn(`Groq fetch failed for ${model}:`, lastError);
      }
    }

    return NextResponse.json(
      {
        success: false,
        error: 'AI service temporarily unavailable: ' + (lastError || 'Unknown error'),
      },
      { status: 502 }
    );
  } catch (err: any) {
    console.error('Chat API Error:', err);
    return NextResponse.json(
      { error: err.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
