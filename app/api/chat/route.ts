import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are the official Team Axiogen AI Concierge (team.axiogen.in).
Team Axiogen is an elite Deep Tech & Creative Digital Engineering Studio based in Maharashtra, India.

Core Members & Leadership (Exactly 3 Members):
1. Aditya Patil: Founder & CEO
2. Aditya Minchekar: Co-Founder
3. Ajinkya More: Co-Founder

Studio Capabilities & Services:
1. AI & Neural Systems: Custom LLM fine-tuning, autonomous agent pipelines, multimodal vision architectures, real-time edge inference, conversational voice agents.
2. Intelligent Software Systems: High-velocity, sub-second distributed software systems, modern digital platforms, and mission-critical cloud infrastructure.
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

CRITICAL RESPONSE RULES:
1. MANDATORY NAME: You must ALWAYS refer to the company as "Team Axiogen". NEVER say only "Axiogen". Every single mention must be "Team Axiogen".
2. ABSOLUTELY NO ASTERISKS OR STARS: Do NOT use markdown bold asterisks (**text**) or italic asterisks (*text*). Do NOT write any stars anywhere in your response. Write clean, natural, plain text only without asterisks or formatting symbols.
3. FOUNDERS & TEAM: When asked about the founders, team, or who built it, state clearly that Team Axiogen has 3 core members: Aditya Patil (Founder & CEO), Aditya Minchekar (Co-Founder), and Ajinkya More (Co-Founder).
4. Always answer naturally, dynamically, specifically, and concisely (1-3 short paragraphs).`;

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
          let reply = data?.choices?.[0]?.message?.content;
          if (reply && typeof reply === 'string' && reply.trim()) {
            let cleanText = reply.trim();
            // Remove any markdown bold or italic asterisks
            cleanText = cleanText.replace(/\*\*/g, '').replace(/\*/g, '');
            // Ensure every standalone "Axiogen" is strictly "Team Axiogen"
            cleanText = cleanText.replace(/(?<!Team\s)Axiogen\b/g, 'Team Axiogen');
            return NextResponse.json({ success: true, text: cleanText });
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
