import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are the official Axiogen AI Concierge & Support Assistant for Team Axiogen (team.axiogen.in).
Axiogen is an elite Deep Tech & Creative Digital Engineering Studio based in Kolhapur & Sangli, Maharashtra, India.

Core Capabilities & Services:
1. AI & Neural Systems: Custom LLM fine-tuning, autonomous agent pipelines, multimodal vision architectures, real-time edge inference, conversational voice agents.
2. Full-Stack Web Platforms: High-velocity, ultra-responsive web applications engineered with Next.js, React, Tailwind CSS, TypeScript, Supabase, and distributed serverless backends.
3. Mobile App Development: High-performance iOS and Android native & cross-platform applications with offline synchronization, biometric security, and real-time state.
4. Cloud & Cybersecurity: Zero-trust architecture, encrypted storage vaults, hardened container clusters, edge telemetry, and 99.9% uptime SLA.
5. Brand & UI/UX Engineering: Coherent design systems, immersive 3D/canvas micro-interactions, brand identity, and conversion-optimized experiences.

Production Products & Platforms:
- Axiogen ClinicOS: Modern clinic operating system with live token queue TV displays, electronic prescriptions, and WhatsApp patient notifications.
- Axiogen Voice Engine v2: Neural text-to-speech with low-latency streaming and high emotional fidelity.
- Axiogen QR Engine: Dynamic branded QR system with logo deadzone masking.
- Axiogen Vault: Zero-exposure cryptographic file delivery system.

Contact & Project Onboarding:
- Email: axiogen01@gmail.com
- Starting a Project: Visitors can start a project directly on the site via the Contact section, request a quotation, or schedule a technical call.
- Typical delivery: Fast-track sprint cycles from 2 to 6 weeks depending on project scope.

Tone & Instructions:
- Be warm, modern, technologically knowledgeable, concise, and helpful.
- Keep responses compact (1-3 paragraphs or bullet points).
- Offer next steps: invite them to submit their project details, contact via axiogen01@gmail.com, or check out our selected work.
- Strict constraint: Never reference any third-party entities like Goat Funded Trader or prop trading. You represent only Team Axiogen.`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages = [], message = '' } = body;

    const groqKey =
      process.env.GROQ_API_KEY ||
      process.env.GROQ_KEYS ||
      '';

    // Format messages for Groq OpenAI-compatible API
    const formattedMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.filter((m: any) => m && m.content),
    ];

    if (message && (!messages.length || messages[messages.length - 1]?.content !== message)) {
      formattedMessages.push({ role: 'user', content: message });
    }

    if (formattedMessages.length === 1) {
      return NextResponse.json({
        success: true,
        text: 'Hello! Welcome to Team Axiogen. How can we assist you with your project or engineering goals today?',
      });
    }

    const groqModels = [
      'openai/gpt-oss-120b',
      'openai/gpt-oss-20b',
      'groq/compound-mini',
      'qwen/qwen3.6-27b',
    ];

    for (const model of groqModels) {
      try {
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${groqKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model,
            messages: formattedMessages,
            temperature: 0.7,
            max_tokens: 600,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          const reply = data?.choices?.[0]?.message?.content;
          if (reply) {
            return NextResponse.json({ success: true, text: reply });
          }
        }
      } catch (err) {
        console.error(`Groq error for model ${model}:`, err);
      }
    }

    // Graceful fallback
    return NextResponse.json({
      success: true,
      text: "Thanks for reaching out to Team Axiogen! We build high-performance AI systems, web platforms, and custom software. Feel free to leave your project requirements or reach our engineering leads directly at axiogen01@gmail.com.",
    });
  } catch (err: any) {
    console.error('Chat API Error:', err);
    return NextResponse.json(
      { error: err.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
