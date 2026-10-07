export interface ServicePageCapability {
  title: string;
  metric: string;
  description: string;
  deliverables: string[];
}

export interface ServicePageProcessStep {
  step: string;
  phase: string;
  duration: string;
  title: string;
  description: string;
  output: string;
}

export interface ServicePageFaq {
  question: string;
  answer: string;
}

export interface ServicePageData {
  slug: string;
  aliases?: string[];
  number: string;
  badge: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  targetQueries: string[];
  themeColor: string;
  tagline: string;
  heroSnippet: string;
  overviewHeading: string;
  overviewParagraphs: string[];
  targetAudiences: {
    title: string;
    role: string;
    challenge: string;
    solution: string;
  }[];
  capabilities: ServicePageCapability[];
  architecture: {
    heading: string;
    subheading: string;
    layers: {
      layer: string;
      name: string;
      description: string;
    }[];
  };
  techStack: {
    category: string;
    tools: string[];
  }[];
  process: ServicePageProcessStep[];
  caseStudy: {
    badge: string;
    title: string;
    client: string;
    outcome: string;
    slug: string;
  };
  faqs: ServicePageFaq[];
}

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  "ai-agent-development": {
    slug: "ai-agent-development",
    aliases: ["ai-ml"],
    number: "01",
    badge: "AUTONOMOUS AGENTS & AUTOMATION",
    title: "AI Agent Development & Workflow Automation",
    h1: "Enterprise AI Agents, Custom Workflows & Intelligent Automation",
    metaTitle: "AI Agent Development Company | Custom AI Automation Agency",
    metaDescription:
      "Team Axiogen builds autonomous AI agents, multi-agent frameworks, custom RAG pipelines, and enterprise automation systems. Scale operations with zero manual bottlenecks.",
    targetQueries: [
      "AI agent development company",
      "AI automation agency India",
      "custom AI chatbot development",
      "autonomous AI agents enterprise",
      "LangGraph multi-agent engineering",
      "LLM workflow automation services",
    ],
    themeColor: "#FF6B42",
    tagline: "Replace brittle manual scripts with deterministic, multi-modal autonomous agentic swarms.",
    heroSnippet:
      "We design, build, and deploy production-grade AI agents that understand context, call external APIs, query relational databases, and execute multi-step workflows without human babysitting.",
    overviewHeading: "Engineering Intelligence into Every Business Interaction",
    overviewParagraphs: [
      "Traditional software relies on rigid if-else logic that fails the moment unstructured real-world inputs vary. Simple rule-based bots cannot parse messy invoices, reconcile mismatched vendor ledger entries, or interpret nuanced customer inquiries.",
      "Team Axiogen engineers autonomous, multi-agent ecosystems combining cutting-edge LLMs (open-weights and proprietary), custom vector knowledge graphs (RAG), and deterministic API execution sandboxes. Our agents operate as reliable digital workers that research, verify, and complete tasks with strict auditability.",
      "Whether you are looking to automate 80% of customer support tickets, automate clinical record extraction, or build a self-operating back-office data pipeline, we build fault-tolerant architectures engineered for sub-second latency and zero hallucination risk.",
    ],
    targetAudiences: [
      {
        title: "B2B SaaS & Tech Startups",
        role: "Founders & CTOs",
        challenge: "Need an AI-first product feature without burning months debugging stochastic LLM hallucinations.",
        solution: "Plug-and-play multi-agent workflows with deterministic evaluation harnesses and real-time streaming interfaces.",
      },
      {
        title: "Modern Healthcare & Clinics",
        role: "Medical Directors & Ops Managers",
        challenge: "Doctors and staff waste 35% of daily hours entering prescription data and answering repetitive appointment calls.",
        solution: "Voice-driven patient intake agents and WhatsApp triage bots compliant with zero-exposure medical privacy guidelines.",
      },
      {
        title: "High-Volume E-Commerce & Retail",
        role: "Operations Heads",
        challenge: "Manual order tracking, return processing, and supplier dispute management choke scaling margins.",
        solution: "Automated logistics agents that query ERPs, verify receipts, and generate shipping labels instantly.",
      },
    ],
    capabilities: [
      {
        title: "Multi-Agent Swarm Orchestration",
        metric: "85% reduction in manual cycle time",
        description:
          "Hierarchical agent architectures where supervisor agents delegate specialized sub-tasks to researcher, coder, and validation agents with state persistence.",
        deliverables: [
          "LangGraph & CrewAI production graph pipelines",
          "Human-in-the-loop (HITL) approval gateways",
          "Persistent session memory and state management",
          "Automated fallback recovery on API failures",
        ],
      },
      {
        title: "Enterprise RAG & Hybrid Vector Retrieval",
        metric: "99.4% factual retrieval precision",
        description:
          "Multi-stage retrieval augmented generation combining sparse BM25 keyword matching with dense semantic embeddings and cross-encoder re-ranking.",
        deliverables: [
          "Chunking strategies tailored for complex PDFs & tables",
          "Milvus, Pinecone & pgvector deployment",
          "Cross-encoder reranking layers (Cohere / BGE)",
          "Real-time knowledge synchronization webhooks",
        ],
      },
      {
        title: "Tool-Calling & Deterministic Execution",
        metric: "100% verified schema compliance",
        description:
          "Strict Pydantic and JSON-schema enforced function calling that allows AI models to safely execute database queries, Stripe charges, and CRM updates.",
        deliverables: [
          "Type-safe API integration wrappers",
          "Sandboxed code execution environments",
          "Full cryptographic audit logging per decision",
          "Rate-limit management and token cost optimization",
        ],
      },
      {
        title: "Edge & On-Premise LLM Deployment",
        metric: "0 data sent to external public clouds",
        description:
          "Quantized model inference (Llama 3, DeepSeek, Mistral) running on local private GPU nodes for organizations with strict data residency mandates.",
        deliverables: [
          "vLLM and Ollama cluster configuration",
          "4-bit and 8-bit quantization benchmarking",
          "Private VPC deployment without internet exposure",
          "Custom domain fine-tuning (LoRA / QLoRA)",
        ],
      },
    ],
    architecture: {
      heading: "Production Agent Architecture",
      subheading: "How Team Axiogen builds deterministic, zero-hallucination agent networks",
      layers: [
        {
          layer: "01. Intake & Multi-Modal Parser",
          name: "Omnichannel Gateway",
          description: "Ingests raw audio, scanned PDFs, WhatsApp webhooks, and REST payloads with sub-50ms normalization.",
        },
        {
          layer: "02. Cognitive Reasoning & Routing",
          name: "Supervisor Graph Router",
          description: "Evaluates intent, assigns task priority, and initializes stateful conversation checkpoints.",
        },
        {
          layer: "03. Knowledge & Tool Sandbox",
          name: "Hybrid RAG + Tool Execution",
          description: "Retrieves private vector knowledge and queries relational schemas through strictly validated function contracts.",
        },
        {
          layer: "04. Guardrail & Verification",
          name: "Safety & Output Auditor",
          description: "Runs regex, schema validation, and confidence scoring before returning responses to human operators or client apps.",
        },
      ],
    },
    techStack: [
      { category: "Frameworks & Orchestration", tools: ["LangGraph", "LlamaIndex", "CrewAI", "FastAPI", "Next.js App Router"] },
      { category: "Vector & Relational DBs", tools: ["pgvector", "PostgreSQL", "Milvus", "Pinecone", "Supabase"] },
      { category: "Foundational Models", tools: ["Llama 3.3", "DeepSeek-R1", "Claude 3.5 Sonnet", "OpenAI GPT-4o", "Mistral"] },
      { category: "Inference & Optimization", tools: ["vLLM", "TensorRT-LLM", "Ollama", "Groq LPU", "Cloudflare Workers AI"] },
    ],
    process: [
      {
        step: "01",
        phase: "Workflow Audit & Data Mapping",
        duration: "Week 1",
        title: "Identifying High-ROI Automation Touchpoints",
        description: "We map your current manual workflows, document data schemas, and identify repetitive tasks with measurable ROI.",
        output: "Technical Architecture Blueprint & Feasibility Matrix",
      },
      {
        step: "02",
        phase: "Graph & Tool Engineering",
        duration: "Weeks 2-3",
        title: "Building Deterministic Agent Graphs",
        description: "We implement the agent state machine, connect private APIs, build custom RAG pipelines, and establish evaluation benchmarks.",
        output: "Working Prototype with Test Suite & Evaluation Scores",
      },
      {
        step: "03",
        phase: "Guardrails & Red-Teaming",
        duration: "Week 4",
        title: "Stress Testing & Hallucination Elimination",
        description: "Rigorous adversarial prompting, boundary testing, edge-case validation, and latency optimization on target workloads.",
        output: "Audit Compliance Report & Production Docker Mesh",
      },
      {
        step: "04",
        phase: "Deployment & Telemetry",
        duration: "Week 5+",
        title: "Live Production Rollout & Cost Monitoring",
        description: "We deploy to your private cloud or managed infrastructure with real-time tracing (Langfuse), error alerts, and cost dashboards.",
        output: "24/7 Monitoring Dashboard & Full Codebase Transfer",
      },
    ],
    caseStudy: {
      badge: "PRODUCTION CASE STUDY",
      title: "Optimizing LLM Inference Latency at the Edge",
      client: "Team Axiogen Research & Client Implementations",
      outcome: "Cut token latency by 68% and reduced inference cloud costs by $4,200/mo.",
      slug: "optimizing-llm-inference-latency-edge",
    },
    faqs: [
      {
        question: "How do you prevent AI agents from hallucinating wrong data?",
        answer:
          "We enforce deterministic guardrails: the LLM never generates raw database mutations directly. It only produces typed JSON arguments that pass through strict Pydantic and schema validations. Furthermore, our RAG pipelines enforce strict citation constraints where the agent refuses to answer if corroborating source documents are missing.",
      },
      {
        question: "Can AI agents run on our private cloud or on-premise servers?",
        answer:
          "Yes. For clients with strict HIPAA, GDPR, or intellectual property mandates, we deploy quantized open-weights models (such as Llama 3 or DeepSeek) inside your private VPC (AWS, GCP, or on-premise GPU servers). Zero customer data ever touches third-party public APIs.",
      },
      {
        question: "How long does it typically take to deploy an enterprise AI agent?",
        answer:
          "A targeted single-workflow automation or custom RAG agent typically takes 2 to 4 weeks from scoping to live deployment. Complex multi-agent swarms with deep ERP or legacy system integrations take 4 to 8 weeks.",
      },
      {
        question: "Who owns the code, models, and intellectual property?",
        answer:
          "You own 100% of the intellectual property, proprietary datasets, system prompts, and source code. Team Axiogen delivers complete repository access with full technical documentation upon project sign-off.",
      },
    ],
  },

  "custom-software-development": {
    slug: "custom-software-development",
    aliases: ["database-design"],
    number: "02",
    badge: "ENTERPRISE SYSTEMS & BESPOKE SOFTWARE",
    title: "Custom Software Development & Enterprise Engineering",
    h1: "Bespoke Enterprise Software, Internal Portals & Scalable Architectures",
    metaTitle: "Custom Software Development Company | Bespoke Enterprise Systems",
    metaDescription:
      "Team Axiogen engineers bespoke enterprise software, internal tools, ERPs, and database-backed platforms with TypeScript, Next.js, and resilient cloud architectures.",
    targetQueries: [
      "custom software development company",
      "bespoke enterprise software India",
      "custom ERP development company",
      "internal tools developers",
      "enterprise web application development",
      "legacy software modernization",
    ],
    themeColor: "#FFB43D",
    tagline: "Custom software tailored to your exact business logic — zero vendor lock-in, zero bloated licenses.",
    heroSnippet:
      "Off-the-shelf software forces you to change your business to fit their rigid constraints. We build bespoke software systems that adapt perfectly to your operations, scale without per-seat licensing penalties, and integrate seamlessly with your existing stack.",
    overviewHeading: "Software Built to Solve Your Exact Operational Bottlenecks",
    overviewParagraphs: [
      "Off-the-shelf SaaS products often solve 70% of what your business needs, while charging exorbitant monthly fees per user. The remaining 30% — your proprietary competitive advantage — is left stranded in fragile spreadsheets, manual WhatsApp messages, and broken disconnected tools.",
      "Team Axiogen designs and engineers custom software platforms from scratch. We build high-concurrency internal dashboards, automated ERP and supply-chain platforms, client management systems, and specialized industry software with clean TypeScript, robust PostgreSQL relational schemas, and sub-second web interfaces.",
      "Every architecture we deliver is built to last: full source code ownership, clean modular patterns, comprehensive unit and integration testing, and automated deployment pipelines that give your team total operational sovereignty.",
    ],
    targetAudiences: [
      {
        title: "Growing Enterprises & Manufacturers",
        role: "Managing Directors & COOs",
        challenge: "Drowning in fragmented legacy software, paper registers, and multiple subscription tools that don't speak to each other.",
        solution: "A unified custom operational ERP that centralizes inventory, billing, dispatch, and staff performance in real time.",
      },
      {
        title: "Healthcare Networks & Clinics",
        role: "Hospital Administrators",
        challenge: "Generic hospital software is slow, cluttered, and impossible for doctors and desk staff to use quickly.",
        solution: "Specialized clinical workflows with rapid token calling, electronic medical records, and automated patient messaging.",
      },
      {
        title: "Logistics & Supply Chain",
        role: "Fleet & Supply Managers",
        challenge: "Real-time dispatch bottlenecks and lack of visibility into delivery milestones across distributed teams.",
        solution: "High-concurrency dispatch portals with automated WhatsApp tracking alerts and cryptographic proof-of-delivery.",
      },
    ],
    capabilities: [
      {
        title: "Enterprise ERP & Workflow Engines",
        metric: "100% elimination of double-entry data errors",
        description:
          "End-to-end operational software connecting inventory, procurement, invoicing, staff permissions, and executive reporting in one reactive dashboard.",
        deliverables: [
          "Role-based access control (RBAC) with audit logs",
          "Automated GST invoicing & tax calculation",
          "Live inventory stock tracking with low-stock alerts",
          "Custom executive KPI dashboards and PDF exports",
        ],
      },
      {
        title: "High-Concurrency Database Architecture",
        metric: "< 15ms average query latency",
        description:
          "Relational PostgreSQL, Supabase, and Redis architectures designed for zero race conditions, sub-second search, and rock-solid relational integrity.",
        deliverables: [
          "Normalized relational database schemas",
          "Automated migration pipelines (Prisma / Drizzle)",
          "Connection pooling (PgBouncer) for high traffic",
          "Point-in-time recovery and automated off-site backups",
        ],
      },
      {
        title: "Internal Portals & Admin Tooling",
        metric: "3x faster internal team velocity",
        description:
          "Beautiful, ergonomic internal tools tailored for customer support, operations, billing, and back-office management teams.",
        deliverables: [
          "Custom bulk-action tables with advanced filtering",
          "Real-time WebSocket notifications & live state",
          "Single Sign-On (SSO) & multi-factor auth (MFA)",
          "CSV/Excel bulk import and export engines",
        ],
      },
      {
        title: "Legacy Infrastructure Modernization",
        metric: "0 downtime during system migration",
        description:
          "Migrating brittle Excel systems, desktop Visual Basic/Access tools, or slow PHP monoliths into modern Next.js and cloud-native microservices.",
        deliverables: [
          "Legacy data migration & integrity reconciliation",
          "Parallel-run transition strategy to prevent downtime",
          "Comprehensive API documentation and developer handoff",
          "Post-launch staff training and support",
        ],
      },
    ],
    architecture: {
      heading: "Enterprise Software Architecture",
      subheading: "Designed for 99.99% uptime, strict row-level security, and seamless maintainability",
      layers: [
        {
          layer: "01. Presentation Layer",
          name: "Next.js App Router & Tailwind",
          description: "Sub-second server-rendered views with instant optimistic updates and zero layout shift.",
        },
        {
          layer: "02. API & Business Logic",
          name: "Typed REST & GraphQL Services",
          description: "Strict schema contracts, domain-driven service architecture, and centralized authentication middleware.",
        },
        {
          layer: "03. Data & Storage Layer",
          name: "PostgreSQL with Row-Level Security",
          description: "Isolated multi-tenant schemas, Redis distributed caching, and encrypted S3-compatible asset vaults.",
        },
        {
          layer: "04. Observability & Backups",
          name: "Telemetry & Automated Failover",
          description: "Structured JSON logging, automated Sentry exception tracking, and redundant database replicas.",
        },
      ],
    },
    techStack: [
      { category: "Frontend & UI", tools: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui"] },
      { category: "Backend & Services", tools: ["Node.js", "Python FastAPI", "tRPC", "Go microservices"] },
      { category: "Databases & Caching", tools: ["PostgreSQL", "Supabase", "Redis", "Prisma ORM", "Drizzle"] },
      { category: "DevOps & Cloud", tools: ["AWS", "Vercel", "Docker", "GitHub Actions CI/CD", "Cloudflare"] },
    ],
    process: [
      {
        step: "01",
        phase: "Business Logic Blueprinting",
        duration: "Weeks 1-2",
        title: "Deep Operational Discovery",
        description: "We interview your team, map every edge case, and design the complete database ER diagram and user journey wireframes.",
        output: "Interactive Figma Wireframes & Database ER Architecture",
      },
      {
        step: "02",
        phase: "Sprint Engineering",
        duration: "Weeks 3-6",
        title: "Full-Stack Development in Agile Cycles",
        description: "We ship bi-weekly testable staging builds. You test real workflows with real test data while we write clean, typed code.",
        output: "Fully functional staging platform on private URL",
      },
      {
        step: "03",
        phase: "Data Migration & Security Audit",
        duration: "Weeks 7-8",
        title: "Reconciliation & Performance Hardening",
        description: "We migrate your historical data, test queries under 10x anticipated load, and conduct comprehensive vulnerability testing.",
        output: "Verified Clean Data Migration & Security Audit Sign-off",
      },
      {
        step: "04",
        phase: "Go-Live & Ongoing Evolution",
        duration: "Week 9+",
        title: "Seamless Production Switchover",
        description: "Zero-downtime deployment, staff onboarding sessions, and continuous feature enhancements based on real usage metrics.",
        output: "Live Production Deployment & Full Documentation",
      },
    ],
    caseStudy: {
      badge: "ENTERPRISE CASE STUDY",
      title: "Building ClinicOS: Architecting Real-Time Healthcare Telemetry",
      client: "Outpatient Clinics & Multi-Doctor Poly-Clinics",
      outcome: "Eliminated waiting room congestion, reduced patient wait times by 40%, and powered 50,000+ appointments.",
      slug: "building-clinicos-healthcare-operating-system",
    },
    faqs: [
      {
        question: "Why should we build custom software instead of buying an existing SaaS?",
        answer:
          "SaaS subscriptions become exponentially expensive as your team grows, often charging \$50–\$200/user every single month forever while still lacking the specific features unique to your business. Custom software gives you full ownership of your data, zero per-user licensing fees, and features tailored 100% to your exact competitive workflows.",
      },
      {
        question: "Can custom software integrate with our existing legacy systems?",
        answer:
          "Yes. We specialize in building API bridges, database synchronization jobs, and automated webhook pipelines that connect modern web software with legacy on-premise accounting tools, biometric attendance devices, and third-party vendor platforms.",
      },
      {
        question: "What happens if we want to change or add features after launch?",
        answer:
          "Because we build with modular, standard TypeScript and Next.js, any capable engineering team can extend the codebase. Furthermore, we offer ongoing engineering retainer agreements to continually build new features as your business scales.",
      },
      {
        question: "How do you ensure data security and compliance?",
        answer:
          "We enforce industry best practices: end-to-end TLS encryption, row-level security (RLS) ensuring strict tenant isolation, encrypted database backups, and secure credential handling via environment secrets vaults.",
      },
    ],
  },

  "saas-development": {
    slug: "saas-development",
    number: "03",
    badge: "0-TO-1 MVP & PRODUCT ENGINEERING",
    title: "SaaS Product Engineering & Startup MVP Development",
    h1: "High-Velocity SaaS Product Engineering & 0-to-1 MVP Launches",
    metaTitle: "SaaS Development Company | Startup MVP Product Engineering Studio",
    metaDescription:
      "Team Axiogen builds scalable full-stack SaaS platforms and startup MVPs. Multi-tenant architecture, Stripe billing, auth, and sub-second APIs shipped fast.",
    targetQueries: [
      "SaaS development company India",
      "startup MVP development studio",
      "SaaS product engineering",
      "build B2B SaaS platform",
      "multi-tenant SaaS developers",
      "hire SaaS developers",
    ],
    themeColor: "#9B8AFF",
    tagline: "From concept to market in weeks, not quarters — built on infrastructure that scales to millions of users.",
    heroSnippet:
      "Building a software product is more than writing code: it's about product-market velocity, razor-sharp user onboarding, flawless recurring billing, and an architecture that doesn't collapse when you experience hockey-stick growth.",
    overviewHeading: "Architected for Founder Velocity & Scalable Recurring Revenue",
    overviewParagraphs: [
      "The biggest killer of early-stage startups is slow engineering cycles. Spending nine months building an over-engineered monolith before getting your first paying customer drains runway and kills momentum.",
      "Team Axiogen operates as a dedicated technical co-founder team for founders and startups. We specialize in rapid 0-to-1 MVP builds that ship to real users in 4 to 8 weeks — without sacrificing code quality, security, or future scalability.",
      "From multi-tenant organization workspaces, granular role-based permissions, and automated Stripe/Razorpay subscription billing, to high-converting interactive onboarding funnels, we deliver complete turn-key SaaS platforms ready to generate recurring revenue from day one.",
    ],
    targetAudiences: [
      {
        title: "Early-Stage Tech Founders",
        role: "Startup Founders & Solo Entrepreneurs",
        challenge: "Have a validated product idea and funding, but lack an in-house engineering team to build the MVP fast.",
        solution: "Full product engineering sprint from UI/UX design to production launch within 6 weeks.",
      },
      {
        title: "Bootstrapped B2B SaaS",
        role: "Product Leads",
        challenge: "Need an enterprise tier with team workspaces, audit logs, and self-serve billing to close larger deals.",
        solution: "Multi-tenant architecture upgrade with SSO, webhook ecosystems, and customizable billing tiers.",
      },
      {
        title: "Domain Experts Entering Tech",
        role: "Industry Executives",
        challenge: "Deep industry knowledge in logistics, finance, or real estate, but zero software development background.",
        solution: "End-to-end technical partnership handling architecture, design, infrastructure, and App Store releases.",
      },
    ],
    capabilities: [
      {
        title: "0-to-1 Rapid MVP Launch Engine",
        metric: "Production release in 30 to 45 days",
        description:
          "Fast-paced sprint execution that delivers an investor-ready, high-polish web product with full user auth, database persistence, and payment collection.",
        deliverables: [
          "Interactive Figma UI/UX prototype & design system",
          "Next.js App Router responsive application",
          "Supabase / PostgreSQL database schema",
          "Transactional email & SMS onboarding flows",
        ],
      },
      {
        title: "Multi-Tenant Architecture & Workspaces",
        metric: "100% data isolation between customer orgs",
        description:
          "Enterprise-ready tenancy models with team invitations, custom roles (Owner, Admin, Member, Billing), and granular permission checks.",
        deliverables: [
          "Tenant workspace switcher & vanity subdomains",
          "Row-level security (RLS) guaranteeing data privacy",
          "Team member invite links with expiring tokens",
          "Comprehensive organization activity audit logs",
        ],
      },
      {
        title: "Subscription Billing & Monetization",
        metric: "Zero churn from billing edge cases",
        description:
          "Seamless payment integration supporting monthly/yearly tiers, per-seat billing, usage-based metered pricing, and tax compliance.",
        deliverables: [
          "Stripe & Razorpay webhook integration",
          "Customer self-serve billing & invoice portal",
          "Automated dunning & card expiry handling",
          "Prorated plan upgrades and downgrades",
        ],
      },
      {
        title: "Public APIs, Webhooks & Ecosystem",
        metric: "Developer-first developer experience (DX)",
        description:
          "Allow your B2B customers to automate and integrate your SaaS with their own internal systems via secure API keys and event webhooks.",
        deliverables: [
          "Hashed API key generation & rotation UI",
          "Rate limiting (Upstash Redis) per API key",
          "Outgoing webhook delivery engine with auto-retries",
          "Interactive OpenAPI / Swagger documentation",
        ],
      },
    ],
    architecture: {
      heading: "Scalable Multi-Tenant SaaS Stack",
      subheading: "Designed to handle high concurrent sessions with minimal operational overhead",
      layers: [
        {
          layer: "01. Edge Client & Onboarding",
          name: "Next.js + Vercel Edge Network",
          description: "Sub-50ms worldwide page loads with server-rendered dynamic dashboards.",
        },
        {
          layer: "02. Auth & Permissions",
          name: "JWT / Session Auth with RBAC",
          description: "OAuth (Google, GitHub), magic links, and database-level permission enforcement.",
        },
        {
          layer: "03. Monetization Engine",
          name: "Stripe / Razorpay Webhook Bus",
          description: "Cryptographically verified webhook endpoints for subscription lifecycle sync.",
        },
        {
          layer: "04. Isolated Multi-Tenancy",
          name: "PostgreSQL Row-Level Security",
          description: "Strict tenant ID scoping across every query with zero risk of cross-customer data leakage.",
        },
      ],
    },
    techStack: [
      { category: "Web Framework", tools: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"] },
      { category: "Database & Backend", tools: ["PostgreSQL", "Supabase", "Prisma", "Redis"] },
      { category: "Payments & Auth", tools: ["Stripe Billing", "Razorpay", "Supabase Auth", "Clerk", "NextAuth"] },
      { category: "Infrastructure", tools: ["Vercel", "AWS ECS", "Resend", "Upstash", "Cloudflare"] },
    ],
    process: [
      {
        step: "01",
        phase: "Product Scoping & Wireframes",
        duration: "Week 1",
        title: "Core Value Proposition Definition",
        description: "We eliminate feature bloat and lock down the minimum viable product scope that will delight early users.",
        output: "Clickable Figma Prototype & Technical Data Schema",
      },
      {
        step: "02",
        phase: "Core Engine & Auth Build",
        duration: "Weeks 2-3",
        title: "Database, Auth & Workspace Foundations",
        description: "We build the user authentication, workspace tenancy, and primary core software engine.",
        output: "Interactive Alpha Build with Real Authentication",
      },
      {
        step: "03",
        phase: "Billing & Integrations",
        duration: "Weeks 4-5",
        title: "Payments, Emails & Production Polish",
        description: "We wire up Stripe subscription billing, transactional email receipts, error monitoring, and responsive polish.",
        output: "Feature-Complete Beta Build Ready for Internal QA",
      },
      {
        step: "04",
        phase: "Public Launch & Analytics",
        duration: "Week 6+",
        title: "Product Launch & Performance Monitoring",
        description: "Production DNS setup, SEO indexation, user session analytics, and celebratory public release.",
        output: "Live SaaS Product on Custom Domain with Active Billing",
      },
    ],
    caseStudy: {
      badge: "SAAS CASE STUDY",
      title: "Zero-Exposure Cryptographic Storage Vault",
      client: "Axiogen Cloud Infrastructure",
      outcome: "Engineered zero-knowledge cryptographic file delivery with microsecond auth validation.",
      slug: "zero-exposure-cryptographic-storage-vault",
    },
    faqs: [
      {
        question: "How fast can you build a working SaaS MVP?",
        answer:
          "Our standard timeline for an investor-ready, payment-enabled SaaS MVP is 4 to 8 weeks. We use proven, battle-tested modern boilerplates and architectures so we spend 100% of our time on your unique product features rather than reinventing authentication and billing.",
      },
      {
        question: "Can your architecture support both B2C and B2B SaaS models?",
        answer:
          "Yes. For B2C, we optimize for frictionless single-click onboarding, low-cost micro-transactions, and mobile responsiveness. For B2B, we configure multi-seat workspaces, company domain auto-joining, invoice downloads, and enterprise role permissions.",
      },
      {
        question: "What happens after the MVP is launched?",
        answer:
          "We offer flexible post-launch models: you can transition the codebase to your in-house engineers with our full architectural documentation, or retain Team Axiogen on a monthly sprint basis to continuously iterate based on customer feedback.",
      },
      {
        question: "Do you help with landing pages and SEO for the SaaS?",
        answer:
          "Yes! Every SaaS platform we build includes a high-converting marketing landing page, dynamic OpenGraph social cards, clean semantic HTML, and Google-friendly metadata to kickstart organic user acquisition.",
      },
    ],
  },

  "web-development": {
    slug: "web-development",
    number: "04",
    badge: "HIGH-PERFORMANCE FULL-STACK WEB",
    title: "Modern Full-Stack Web Development (Next.js & React)",
    h1: "High-Performance Full-Stack Web Applications & Next.js Systems",
    metaTitle: "Web Development Company | Next.js & React 19 Engineering Studio",
    metaDescription:
      "Team Axiogen builds high-performance web applications using Next.js App Router, TypeScript, and edge networks. 100 Core Web Vitals and sub-second load times.",
    targetQueries: [
      "web development company India",
      "Next.js development agency",
      "full stack web application development",
      "hire React developers India",
      "high performance web development",
      "custom web portal development",
    ],
    themeColor: "#38BDF8",
    tagline: "Sub-second speed, 100 Core Web Vitals, and pixel-perfect interactive design that converts visitors into customers.",
    heroSnippet:
      "Your website or web portal is the single most critical touchpoint for your business. A slow, unresponsive site destroys user trust and crushes conversion rates. We engineer web experiences that load instantaneously, look phenomenal on every device, and rank at the top of Google.",
    overviewHeading: "Engineering Web Experiences That Set You Apart",
    overviewParagraphs: [
      "In modern digital markets, a 1-second delay in page load time reduces conversions by up to 20%. Cluttered templates, bloated WordPress plugins, and poorly architected code cost businesses millions in lost pipeline every single year.",
      "Team Axiogen builds bespoke, production-grade web applications using the modern Next.js App Router, React 19, and strongly typed TypeScript. We leverage Static Site Generation (SSG) and Server-Side Rendering (SSR) to deliver pre-baked HTML to users in milliseconds, backed by edge caching networks.",
      "Beyond raw speed, our interfaces are engineered with world-class visual hierarchy, smooth micro-interactions, dark and light mode adaptation, and comprehensive search engine optimization (SEO) that Googlebot can parse effortlessly.",
    ],
    targetAudiences: [
      {
        title: "High-Growth Brands & Businesses",
        role: "Chief Marketing Officers & Founders",
        challenge: "Existing website looks outdated, loads slowly, and fails to convert enterprise prospects.",
        solution: "A bespoke, lightning-fast digital flagship site with immersive storytelling and measurable lead conversion.",
      },
      {
        title: "B2B Companies & Consultancies",
        role: "Managing Partners",
        challenge: "Need an authoritative digital presence that reflects institutional trust and technical mastery.",
        solution: "Clean typography, structured case studies, fast interactive calculators, and automated booking funnels.",
      },
      {
        title: "E-Commerce & Digital Marketplaces",
        role: "E-Commerce Directors",
        challenge: "Monolithic platforms crashing during traffic spikes and suffering from high bounce rates on mobile.",
        solution: "Headless e-commerce storefront with sub-second checkout speeds and edge-cached product catalogs.",
      },
    ],
    capabilities: [
      {
        title: "Next.js App Router & Server Components",
        metric: "100/100 Google Lighthouse Score",
        description:
          "Leveraging React Server Components (RSC) to stream HTML directly from the server, eliminating heavy client-side JavaScript bundles.",
        deliverables: [
          "Zero-bundle-size server components",
          "Sub-50ms Time to First Byte (TTFB) globally",
          "Dynamic OpenGraph image generation",
          "Automated XML sitemaps and robots.txt generation",
        ],
      },
      {
        title: "Responsive & Accessible UI Systems",
        metric: "WCAG 2.1 AA Compliant",
        description:
          "Flawless user experience across iPhone, Android, tablets, 4K monitors, and ultrawide displays with accessible keyboard navigation.",
        deliverables: [
          "Tailwind CSS custom tokenized design systems",
          "Seamless Light & Dark mode support",
          "Accessible semantic HTML & ARIA attributes",
          "Smooth 60fps micro-animations (Framer Motion)",
        ],
      },
      {
        title: "Full-Stack API & Database Integration",
        metric: "< 25ms serverless execution time",
        description:
          "Secure, type-safe API endpoints connecting your web interface to PostgreSQL, Redis, external CRM webhooks, and payment processors.",
        deliverables: [
          "TypeScript type safety from database to browser",
          "Server Actions for mutation with optimistic UI",
          "Rate-limited contact and lead generation endpoints",
          "Real-time form validation and error recovery",
        ],
      },
      {
        title: "Technical SEO & Schema Optimization",
        metric: "#1 Search result discoverability",
        description:
          "Pre-rendered HTML, structured JSON-LD schemas, breadcrumb trails, and metadata tags that tell search engines exactly what your site does.",
        deliverables: [
          "Schema.org Organization, Service & FAQ markup",
          "Canonical URL enforcement to prevent duplicate content",
          "Automated image compression (WebP / AVIF)",
          "Instant Google Search Console indexation hooks",
        ],
      },
    ],
    architecture: {
      heading: "Modern Web Platform Architecture",
      subheading: "How we deliver 100/100 Core Web Vitals and instant global delivery",
      layers: [
        {
          layer: "01. Global Edge CDN",
          name: "Vercel / Cloudflare Edge Network",
          description: "Distributes static HTML, CSS, and optimized media assets to 300+ edge locations worldwide.",
        },
        {
          layer: "02. React Server Components",
          name: "Next.js 15 Rendering Engine",
          description: "Pre-renders dynamic content on the server with zero client JavaScript overhead.",
        },
        {
          layer: "03. Type-Safe Data Layer",
          name: "Prisma / Drizzle ORM",
          description: "Queries relational data with compiled SQL queries, connection pooling, and strict type checking.",
        },
        {
          layer: "04. Telemetry & Analytics",
          name: "Real-Time Web Vitals Monitoring",
          description: "Captures Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) on real devices.",
        },
      ],
    },
    techStack: [
      { category: "Core Framework", tools: ["Next.js 15", "React 19", "TypeScript", "HTML5 Semantic Markup"] },
      { category: "Styling & Motion", tools: ["Tailwind CSS", "Framer Motion", "Lucide Icons", "shadcn/ui"] },
      { category: "Hosting & CDN", tools: ["Vercel Edge Network", "Cloudflare", "AWS S3 / CloudFront"] },
      { category: "Analytics & Monitoring", tools: ["Google Search Console", "Sentry", "Vercel Speed Insights"] },
    ],
    process: [
      {
        step: "01",
        phase: "Design & UX Architecture",
        duration: "Week 1",
        title: "Pixel-Accurate Wireframing",
        description: "We map your content hierarchy, design high-fidelity responsive mockups in Figma, and align on visual branding.",
        output: "Approved Figma Mockups & Component Design System",
      },
      {
        step: "02",
        phase: "Next.js Development",
        duration: "Weeks 2-3",
        title: "Type-Safe Full-Stack Implementation",
        description: "We translate designs into responsive, server-rendered components with accessible HTML, fast forms, and smooth animations.",
        output: "Interactive Staging URL for Client Review",
      },
      {
        step: "03",
        phase: "SEO & Performance Hardening",
        duration: "Week 4",
        title: "Lighthouse Optimization & Schema Markup",
        description: "We run automated audits to ensure 100 Core Web Vitals, implement all JSON-LD schemas, and optimize image assets.",
        output: "100/100 Lighthouse Performance & SEO Report",
      },
      {
        step: "04",
        phase: "Domain Launch & Indexation",
        duration: "Week 5",
        title: "Production DNS & Search Console Submission",
        description: "Zero-downtime SSL switchover, submission to Google Search Console and Bing, and 24/7 uptime monitoring setup.",
        output: "Live Web Platform on Custom Domain",
      },
    ],
    caseStudy: {
      badge: "BRAND & WEB CASE STUDY",
      title: "Why Brand Redesigns Fail (And How to Engineer Them)",
      client: "Axiogen Design & Engineering Insights",
      outcome: "Dissecting how high-velocity web engineering turns passive website visitors into high-paying enterprise contracts.",
      slug: "why-brand-redesigns-fail",
    },
    faqs: [
      {
        question: "How is a Next.js web application better than WordPress?",
        answer:
          "WordPress relies on dozens of third-party plugins that bloat page size, slow down load times, and introduce frequent security vulnerabilities. Next.js produces pure, pre-rendered static HTML that loads in under 50ms, requires zero server maintenance, cannot be hacked via WordPress plugin exploits, and scores 100/100 on Google Core Web Vitals.",
      },
      {
        question: "Can our team easily edit text, images, and blog posts without coding?",
        answer:
          "Yes. We can configure headless CMS integrations (such as Sanity, Strapi, or markdown-based content collections) that allow your marketing team to edit copy, publish blog posts, and update case studies through a clean, intuitive editor.",
      },
      {
        question: "Will our website look and work great on mobile phones?",
        answer:
          "Every single web project we build is mobile-first. We rigorously test layouts, typography, navigation menus, and touch targets across iOS Safari, Android Chrome, tablets, and desktops to ensure a completely seamless experience.",
      },
      {
        question: "Do you handle domain configuration, SSL certificates, and hosting?",
        answer:
          "Yes. We configure your DNS records, provision automated free SSL certificates with strict HTTPS enforcement, set up Vercel or Cloudflare hosting, and submit your XML sitemap directly to Google Search Console.",
      },
    ],
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    aliases: ["mobile-apps"],
    number: "05",
    badge: "CROSS-PLATFORM NATIVE MOBILE",
    title: "Cross-Platform Mobile App Development (iOS & Android)",
    h1: "High-Performance iOS & Android Mobile Apps from a Single Codebase",
    metaTitle: "Mobile App Development Company | Flutter & React Native Studio",
    metaDescription:
      "Team Axiogen builds native-feel iOS and Android mobile apps with Flutter and React Native. 60fps animations, offline-first sync, and App Store approval.",
    targetQueries: [
      "mobile app development company India",
      "Flutter app development agency",
      "React Native mobile app developers",
      "iOS and Android app development",
      "cross platform mobile developers",
      "build mobile app for startup",
    ],
    themeColor: "#4FD16B",
    tagline: "Fluid 60fps gestures, offline-first synchronization, and native device speed on both iPhone and Android.",
    heroSnippet:
      "Building separate iOS and Android native apps doubles your development costs and slows feature updates to a crawl. We engineer cross-platform mobile apps using Flutter and React Native that feel completely indistinguishable from high-end platform-native software.",
    overviewHeading: "One Codebase. Two App Stores. Zero Compromises.",
    overviewParagraphs: [
      "Mobile users expect instant responsiveness, smooth animations, and the ability to work even when internet connectivity drops. If an app stutters or shows a blank loading spinner, it gets deleted.",
      "Team Axiogen engineers production mobile applications that combine native device APIs (biometrics, camera, GPS, Bluetooth, push notifications) with unified cross-platform runtimes. We maintain a single, clean TypeScript or Dart codebase that compiles to native ARM binaries for iOS and Android.",
      "From architectural design and offline SQLite/WatermelonDB state synchronization to Google Play and Apple App Store review approvals, we manage the complete lifecycle so your product reaches millions of smartphone users flawlessly.",
    ],
    targetAudiences: [
      {
        title: "Consumer Startups & On-Demand Services",
        role: "Founders",
        challenge: "Need an engaging mobile app for consumers with live order tracking, payments, and push notifications.",
        solution: "A lightning-fast Flutter app with real-time WebSocket location updates and seamless payment gateways.",
      },
      {
        title: "Healthcare & Field Operations",
        role: "Operations Directors",
        challenge: "Field agents and doctors frequently operate in areas with weak or intermittent internet connectivity.",
        solution: "Offline-first mobile software that saves data locally and auto-synchronizes when connectivity is restored.",
      },
      {
        title: "B2B SaaS Mobile Extensions",
        role: "Product Managers",
        challenge: "Web platform users need a mobile companion app for alerts, quick approvals, and chat.",
        solution: "A lightweight, secure React Native app sharing the same authentication and API contracts as your web platform.",
      },
    ],
    capabilities: [
      {
        title: "Native Performance & 60fps UI",
        metric: "Rock-solid 60-120fps frame rates",
        description:
          "GPU-accelerated rendering and gesture-driven animations that feel snappy, fluid, and natural on both iOS and Android.",
        deliverables: [
          "Platform-specific tactile feedback (Haptics)",
          "Adaptive design following iOS Human Interface & Material 3",
          "Optimized asset pipelines for minimal app download size",
          "Smooth transition animations and hero screen choreography",
        ],
      },
      {
        title: "Offline-First State & Local Sync",
        metric: "100% functionality without internet",
        description:
          "Local embedded databases that allow users to view, create, and edit data offline, automatically reconciling changes with the cloud when online.",
        deliverables: [
          "Local SQLite / WatermelonDB / Hive embedded database",
          "Bidirectional sync conflict resolution algorithms",
          "Background data fetching and caching",
          "Network status listener with graceful UI alerts",
        ],
      },
      {
        title: "Native Hardware & Sensor Integration",
        metric: "Full device API access",
        description:
          "Deep integration with camera capture, QR code scanning, GPS geofencing, FaceID/fingerprint biometrics, and Bluetooth peripherals.",
        deliverables: [
          "Biometric authentication (TouchID, FaceID, BiometricPrompt)",
          "High-accuracy background GPS and geolocation tracking",
          "Push notifications via Firebase Cloud Messaging (FCM) & APNs",
          "Camera image capture, cropping, and on-device compression",
        ],
      },
      {
        title: "App Store & Google Play Release Management",
        metric: "100% first-pass store compliance",
        description:
          "We handle the strict review processes, privacy manifest declarations, test track distributions (TestFlight / Internal Testing), and compliance checks.",
        deliverables: [
          "Apple App Store & Google Play Console account setup",
          "Privacy manifest & data safety compliance filings",
          "Automated Fastlane build and deployment pipelines",
          "Over-the-Air (OTA) critical bug fix deployments",
        ],
      },
    ],
    architecture: {
      heading: "Mobile Application Architecture",
      subheading: "Designed for rapid feature velocity and resilient offline persistence",
      layers: [
        {
          layer: "01. Presentation & State",
          name: "React Native / Flutter UI Layer",
          description: "Reactive state management (Zustand / Bloc) with declarative UI and hardware haptic hooks.",
        },
        {
          layer: "02. Offline Persistence",
          name: "Embedded SQLite / Hive Cache",
          description: "Persists records locally with cryptographic encryption before syncing to the cloud.",
        },
        {
          layer: "03. Native Device Bridge",
          name: "Native Platform Modules",
          description: "Direct bridge to iOS Swift and Android Kotlin APIs for biometrics, push notifications, and sensors.",
        },
        {
          layer: "04. Cloud Synchronization",
          name: "REST / WebSocket Sync Gateway",
          description: "Batched delta syncs to reduce cellular battery and data consumption.",
        },
      ],
    },
    techStack: [
      { category: "Mobile Frameworks", tools: ["Flutter", "React Native", "Expo", "Dart", "TypeScript"] },
      { category: "Local Storage & Sync", tools: ["SQLite", "WatermelonDB", "Hive", "MMKV"] },
      { category: "Backend & Push", tools: ["Firebase Cloud Messaging (FCM)", "Apple Push (APNs)", "Supabase", "Node.js"] },
      { category: "CI/CD & Testing", tools: ["Fastlane", "TestFlight", "Google Play Internal Testing", "Sentry Mobile"] },
    ],
    process: [
      {
        step: "01",
        phase: "Mobile UX & Prototype",
        duration: "Weeks 1-2",
        title: "Mobile User Flow & Screen Architecture",
        description: "We map out navigation tabs, bottom sheets, gesture interactions, and onboarding screens in Figma.",
        output: "Clickable Mobile Figma Prototype & API Contracts",
      },
      {
        step: "02",
        phase: "App Development Sprints",
        duration: "Weeks 3-6",
        title: "Core Functionality & Offline Database",
        description: "We build the core application, implement local persistence, and integrate device sensors and push notifications.",
        output: "TestFlight (iOS) and APK (Android) builds for client testing",
      },
      {
        step: "03",
        phase: "Device Testing & Polish",
        duration: "Week 7",
        title: "Real Device QA & Battery Profiling",
        description: "We test on real iPhones, budget Android phones, and tablets to ensure 60fps performance and zero memory leaks.",
        output: "Performance Benchmarking & QA Approval Sign-Off",
      },
      {
        step: "04",
        phase: "Store Submission & Launch",
        duration: "Week 8+",
        title: "App Store & Play Store Approval",
        description: "We prepare app screenshots, write metadata descriptions, submit to Apple and Google, and manage the review process.",
        output: "Live Published Apps on Apple App Store & Google Play",
      },
    ],
    caseStudy: {
      badge: "MOBILE CASE STUDY",
      title: "ClinicOS: Native Patient Token Calling & TV Queue Sync",
      client: "Axiogen Healthcare Systems",
      outcome: "Built real-time synchronized mobile interfaces for consulting doctors with sub-50ms token broadcast.",
      slug: "building-clinicos-healthcare-operating-system",
    },
    faqs: [
      {
        question: "Should we build native apps or cross-platform (Flutter/React Native)?",
        answer:
          "For 95% of modern consumer and business applications, cross-platform with Flutter or React Native is the superior choice. You write code once, cut development and maintenance costs in half, release features simultaneously to iOS and Android, and still achieve native 60fps performance and access to all device sensors.",
      },
      {
        question: "Do you assist with Apple App Store and Google Play approval?",
        answer:
          "Yes! App review guidelines can be notoriously strict around privacy, user data, and payments. We handle the entire submission, configure privacy nutrition labels, set up internal testing tracks, and guide the app through to public approval.",
      },
      {
        question: "Can the mobile app work offline without cellular data?",
        answer:
          "Yes. We specialize in offline-first architectures. The app stores data locally in an encrypted SQLite database on the user's phone, allowing them to browse and create data offline. When internet connection returns, the app automatically syncs the differences in the background.",
      },
      {
        question: "How do push notifications work?",
        answer:
          "We set up automated push notifications through Firebase Cloud Messaging (FCM) and Apple Push Notification service (APNs). You can send automated alerts for order updates, appointment reminders, new chat messages, and marketing announcements.",
      },
    ],
  },

  "cloud-engineering-devops": {
    slug: "cloud-engineering-devops",
    aliases: ["cloud-solutions"],
    number: "06",
    badge: "INFRASTRUCTURE & DEVOPS AUTOMATION",
    title: "Cloud Architecture, AWS/GCP & DevOps Automation",
    h1: "Resilient Cloud Infrastructure, Docker Clusters & DevOps CI/CD",
    metaTitle: "Cloud Architecture & DevOps Consulting | AWS GCP Docker CI/CD Studio",
    metaDescription:
      "Team Axiogen engineers resilient cloud infrastructure on AWS and GCP. Automated CI/CD pipelines, Docker container meshes, and 99.99% uptime architectures.",
    targetQueries: [
      "cloud engineering services India",
      "DevOps consulting company",
      "AWS cloud architecture services",
      "GCP cloud migration developers",
      "Docker Kubernetes deployment",
      "CI CD pipeline automation",
    ],
    themeColor: "#EC4899",
    tagline: "Stop worrying about server crashes. We build self-healing cloud architectures that scale automatically.",
    heroSnippet:
      "Manual server setups and undocumented deployments are ticking time bombs for growing companies. We engineer Infrastructure as Code (IaC), zero-downtime rolling deploys, and containerized cloud meshes that guarantee high availability, strict security, and lower monthly cloud bills.",
    overviewHeading: "Architectures Engineered for Zero-Downtime Resilience",
    overviewParagraphs: [
      "When your production software goes down, you lose revenue, customer trust, and engineering momentum. Many organizations suffer from fragile server environments where a single bad deployment or traffic spike takes down the entire database.",
      "Team Axiogen architects modern, containerized cloud infrastructure on AWS, Google Cloud Platform (GCP), and modern edge platforms. We automate every deployment through rigorous CI/CD pipelines, containerize microservices using Docker, and configure automated horizontal auto-scaling that accommodates 10x traffic surges effortlessly.",
      "By implementing Infrastructure as Code (IaC) and comprehensive 24/7 telemetry monitoring, we ensure your infrastructure is completely reproducible, auditable, and resilient against hardware failures.",
    ],
    targetAudiences: [
      {
        title: "Scaling SaaS & E-Commerce",
        role: "CTOs & Engineering Leads",
        challenge: "Servers struggle or crash during marketing campaigns, flash sales, and product launch traffic spikes.",
        solution: "Auto-scaling container clusters behind multi-region load balancers with edge caching layers.",
      },
      {
        title: "Traditional Businesses Migrating to Cloud",
        role: "IT Directors",
        challenge: "Stuck managing aging physical servers in office server rooms with high maintenance overhead and power failure risks.",
        solution: "Seamless lift-and-shift or containerized cloud migration to AWS/GCP with zero business interruption.",
      },
      {
        title: "Founders with High Cloud Bills",
        role: "CEOs & Finance Heads",
        challenge: "Monthly AWS bills have ballooned out of control due to unreserved instances, idle resources, and unindexed databases.",
        solution: "Complete cloud cost optimization audit reducing monthly spend by 30% to 50% without sacrificing performance.",
      },
    ],
    capabilities: [
      {
        title: "Automated CI/CD Deployment Pipelines",
        metric: "Zero-downtime rolling deployments",
        description:
          "Automated pipelines (GitHub Actions, GitLab CI) that run automated linting, unit tests, security scans, and build Docker containers on every pull request.",
        deliverables: [
          "Automated test & build pipelines on Git push",
          "Blue-green / canary release configurations",
          "Automated rollbacks if health checks fail",
          "Encrypted secret management and access keys",
        ],
      },
      {
        title: "Container Orchestration & Docker Meshes",
        metric: "100% environment parity dev-to-prod",
        description:
          "Standardized Docker multi-stage container builds running on Amazon ECS, Kubernetes, or lightweight Google Cloud Run clusters.",
        deliverables: [
          "Optimized minimal Docker image builds (< 50MB)",
          "Amazon ECS Fargate / Google Cloud Run setup",
          "Automatic horizontal pod/container auto-scaling",
          "Service mesh networking and internal DNS",
        ],
      },
      {
        title: "Database Resilience & Disaster Recovery",
        metric: "RPO < 5 minutes, RTO < 15 minutes",
        description:
          "High-availability PostgreSQL and Redis configurations with automated cross-region replication, failovers, and point-in-time recovery.",
        deliverables: [
          "Amazon RDS / Google Cloud SQL multi-AZ clustering",
          "Automated hourly snapshots and offsite S3 backups",
          "PgBouncer connection pooling to prevent pool exhaustion",
          "Disaster recovery runbooks and automated failover tests",
        ],
      },
      {
        title: "24/7 Telemetry, Logging & Cost Optimization",
        metric: "Instant Slack/email alert on errors",
        description:
          "Centralized Prometheus, Grafana, Datadog, or CloudWatch dashboards monitoring CPU, memory, request latency, and application exceptions.",
        deliverables: [
          "Structured JSON log aggregation and search",
          "Automated alerts on 5xx errors or latency spikes",
          "AWS Cost Explorer / FinOps reservation analysis",
          "Security vulnerability scanning & firewall rules",
        ],
      },
    ],
    architecture: {
      heading: "High-Availability Cloud Topology",
      subheading: "Designed for 99.99% service availability across multi-zone regions",
      layers: [
        {
          layer: "01. Edge & WAF",
          name: "Cloudflare / AWS CloudFront",
          description: "DDoS protection, Web Application Firewall (WAF), and edge SSL termination.",
        },
        {
          layer: "02. Traffic Routing",
          name: "Application Load Balancer (ALB)",
          description: "Distributes incoming traffic across redundant container clusters with continuous health checking.",
        },
        {
          layer: "03. Stateless Compute",
          name: "Auto-Scaling Docker Containers",
          description: "Spins up new container instances in seconds when CPU utilization crosses 70%.",
        },
        {
          layer: "04. Managed Data Layer",
          name: "Multi-AZ Database & Encrypted S3",
          description: "Automated synchronous replication to standby instances with encrypted storage at rest.",
        },
      ],
    },
    techStack: [
      { category: "Cloud Providers", tools: ["Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Vercel", "DigitalOcean"] },
      { category: "Containers & CI/CD", tools: ["Docker", "GitHub Actions", "Kubernetes", "AWS ECS", "Google Cloud Run"] },
      { category: "Databases & Storage", tools: ["Amazon RDS PostgreSQL", "Redis Elasticache", "AWS S3", "MinIO"] },
      { category: "Monitoring & Security", tools: ["Datadog", "Prometheus", "Grafana", "Sentry", "AWS CloudWatch"] },
    ],
    process: [
      {
        step: "01",
        phase: "Infrastructure & Security Audit",
        duration: "Week 1",
        title: "Architecture Analysis & Vulnerability Scan",
        description: "We review your current servers, network topologies, database configurations, and monthly cloud billing statements.",
        output: "Cloud Infrastructure Audit Report & Cost Reduction Plan",
      },
      {
        step: "02",
        phase: "Containerization & IaC",
        duration: "Weeks 2-3",
        title: "Dockerization & Infrastructure as Code",
        description: "We package your applications into minimal Docker containers and write reproducible Terraform/CloudFormation scripts.",
        output: "Tested Docker Images & Automated Deployment Scripts",
      },
      {
        step: "03",
        phase: "Pipeline & High-Availability Setup",
        duration: "Week 4",
        title: "CI/CD & Multi-Zone Configuration",
        description: "We configure GitHub Actions automated testing and deployment pipelines with health-checked rolling updates.",
        output: "Automated CI/CD Pipeline & Auto-Scaling Staging Cluster",
      },
      {
        step: "04",
        phase: "Migration & Telemetry Handover",
        duration: "Week 5+",
        title: "Zero-Downtime Cutover & 24/7 Monitoring",
        description: "We execute the live database cutover, configure alert routing to your team's Slack/email, and deliver complete documentation.",
        output: "Live Production Cloud Infrastructure & Monitoring Dashboard",
      },
    ],
    caseStudy: {
      badge: "SECURITY CASE STUDY",
      title: "Zero-Exposure Cryptographic Storage Vault",
      client: "Axiogen High-Security Cloud Storage",
      outcome: "Architected microsecond cryptographic validation and zero-knowledge storage delivery.",
      slug: "zero-exposure-cryptographic-storage-vault",
    },
    faqs: [
      {
        question: "Can you help reduce our monthly AWS or GCP cloud bill?",
        answer:
          "Yes! We frequently save clients 30% to 50% on their cloud bills by eliminating idle resources, right-sizing over-provisioned compute instances, purchasing Savings Plans/Reserved Instances, and moving static media behind edge caching layers.",
      },
      {
        question: "What is zero-downtime deployment and how does it work?",
        answer:
          "With zero-downtime deployments (such as rolling or blue-green releases), new versions of your code are launched on fresh container instances. The load balancer verifies that the new containers pass health checks before routing user traffic to them, completely eliminating maintenance screens and downtime.",
      },
      {
        question: "Do you configure automated database backups?",
        answer:
          "Yes. We configure automated daily and hourly database snapshots, point-in-time recovery (PITR) allowing you to restore data to any specific minute, and encrypted offsite backups in isolated object storage buckets.",
      },
      {
        question: "Can you migrate our on-premise servers to AWS or GCP?",
        answer:
          "Yes. We manage the entire cloud migration process: planning network topologies, setting up VPCs and firewalls, containerizing applications, migrating databases with minimal cutover time, and testing all endpoints.",
      },
    ],
  },

  "academic-project-development": {
    slug: "academic-project-development",
    aliases: ["deep-research"],
    number: "07",
    badge: "ACADEMIC, RESEARCH & CS CAPSTONES",
    title: "Academic, Research & Final Year Engineering Projects",
    h1: "Final Year CS Engineering Projects, IEEE Implementations & Research",
    metaTitle: "Final Year Project Development India | IEEE Research Implementation",
    metaDescription:
      "Team Axiogen provides complete guidance for final year engineering students, capstones, and IEEE research paper implementations with full code & documentation.",
    targetQueries: [
      "final year project development India",
      "engineering student project help",
      "IEEE research paper implementation",
      "computer science capstone projects",
      "final year project Kolhapur Sangli Pune",
      "AI ML student project development",
    ],
    themeColor: "#10B981",
    tagline: "Turn complex research concepts into running, high-scoring final year projects with complete documentation.",
    heroSnippet:
      "Don't settle for buggy, copy-pasted online templates that get rejected during project evaluations. We build original, publication-grade academic software implementations with complete source code, research documentation, architecture diagrams, and one-on-one viva preparation.",
    overviewHeading: "Original Engineering Projects That Stand Out to Evaluators",
    overviewParagraphs: [
      "Every year, thousands of computer science, IT, and engineering students struggle with final year projects because generic training institutes sell old, broken projects that professors have seen a hundred times. When examiners ask deep questions about algorithms or database schemas, students get stuck.",
      "Team Axiogen builds original, high-scoring academic software systems, research paper implementations (IEEE, Springer, ACM), and advanced AI/ML models. We treat student projects with the exact same engineering rigor as our commercial client software.",
      "Along with clean, well-commented source code, we deliver complete project synopsis, Black Book documentation, UML sequence diagrams, ER schemas, and step-by-step presentation walkthroughs so you enter your project viva with absolute confidence.",
    ],
    targetAudiences: [
      {
        title: "B.Tech / B.E. Final Year Students",
        role: "Computer Science, IT & AI-DS Candidates",
        challenge: "Need an innovative, working Major Project that satisfies university guidelines and stands out during campus placements.",
        solution: "Original end-to-end software built with modern tech stacks (React, Python, Deep Learning) and full documentation.",
      },
      {
        title: "M.Tech & Postgraduate Scholars",
        role: "Master's & Research Scholars",
        challenge: "Must implement complex mathematical models from a recent IEEE research paper and produce benchmark graphs.",
        solution: "Precise algorithmic implementation with experimental comparison charts, dataset curation, and thesis chapters.",
      },
      {
        title: "College Student Teams & Hackathons",
        role: "Student Innovators",
        challenge: "Have an ambitious startup or hackathon idea but lack technical guidance to connect hardware, APIs, and cloud databases.",
        solution: "Hands-on architecture coaching, code reviews, and cloud deployment on live URLs.",
      },
    ],
    capabilities: [
      {
        title: "Original Source Code & Architecture",
        metric: "100% original, plagiarism-free code",
        description:
          "Custom-engineered software built with modern industry stacks (Next.js, Python FastAPI, PyTorch, Flutter, PostgreSQL) with clear code comments.",
        deliverables: [
          "Complete clean source code repository",
          "Setup instructions and automated run scripts",
          "Modular folder structure following industry standards",
          "Full local environment installation walkthrough",
        ],
      },
      {
        title: "IEEE & Springer Paper Implementation",
        metric: "Faithful reproduction of research benchmarks",
        description:
          "Translating complex mathematical formulations, neural network architectures, and algorithmic steps from published papers into working code.",
        deliverables: [
          "Dataset preprocessing & feature engineering pipelines",
          "Training and validation loss/accuracy curves",
          "Confusion matrices, F1-scores, and performance tables",
          "Direct baseline comparison against existing techniques",
        ],
      },
      {
        title: "Complete Black Book Documentation",
        metric: "Ready-to-print university standard format",
        description:
          "Comprehensive academic documentation including Literature Survey, Problem Statement, Software Requirement Specifications (SRS), and Results.",
        deliverables: [
          "Detailed Project Synopsis & SRS Document",
          "Complete UML diagrams (Class, Sequence, Activity, Use Case)",
          "Database Entity-Relationship (ER) diagrams",
          "IEEE formatted project report in Word and PDF format",
        ],
      },
      {
        title: "Viva & Presentation Preparation",
        metric: "100% confidence facing external examiners",
        description:
          "We walk you through every line of code, explain the algorithmic trade-offs, and conduct mock viva Q&A sessions before your final evaluation.",
        deliverables: [
          "High-impact PowerPoint presentation deck (.pptx)",
          "Curated list of 50+ likely examiner viva questions & answers",
          "One-on-one virtual explanation and code review sessions",
          "Demo video recording showcasing all application features",
        ],
      },
    ],
    architecture: {
      heading: "Academic Implementation Rigor",
      subheading: "Built like real production software — not fragile classroom demos",
      layers: [
        {
          layer: "01. Literature Survey",
          name: "Domain Research & Gap Analysis",
          description: "Identifies limitations in existing research papers to justify the novel contribution of the project.",
        },
        {
          layer: "02. Mathematical / Algorithm Core",
          name: "Model Training & Feature Pipelines",
          description: "Implemented in clean Python / PyTorch / Scikit-learn with rigorous cross-validation and metrics.",
        },
        {
          layer: "03. Interactive User Interface",
          name: "Modern Web / Mobile Interface",
          description: "Live web dashboard or mobile app that allows examiners to test real inputs and see instant predictions.",
        },
        {
          layer: "04. Benchmark & Documentation",
          name: "Result Visualization & Thesis",
          description: "High-resolution charts, confusion matrices, and university-compliant documentation chapters.",
        },
      ],
    },
    techStack: [
      { category: "AI & Machine Learning", tools: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "Hugging Face"] },
      { category: "Full-Stack Web & Mobile", tools: ["Next.js", "React", "FastAPI", "Flask", "Flutter", "Node.js"] },
      { category: "Databases & Data", tools: ["PostgreSQL", "MongoDB", "SQLite", "Pandas", "NumPy"] },
      { category: "Documentation & Tools", tools: ["LaTeX", "MS Word", "Draw.io (UML)", "Git / GitHub", "Google Colab"] },
    ],
    process: [
      {
        step: "01",
        phase: "Topic Selection & Synopsis",
        duration: "Days 1-5",
        title: "Approving a Unique, Plagiarism-Free Topic",
        description: "We help you select an impressive, innovative project topic that easily gets approved by your project guide and HOD.",
        output: "Approved Project Synopsis & Base Research Paper",
      },
      {
        step: "02",
        phase: "Core Model & Backend Build",
        duration: "Weeks 2-3",
        title: "Implementing the Algorithm & Backend",
        description: "We develop the core computational logic, train the ML model, and build the database and REST API.",
        output: "Working Backend Engine with Benchmark Results",
      },
      {
        step: "03",
        phase: "Frontend & Full Integration",
        duration: "Weeks 4-5",
        title: "Building the Interactive User Interface",
        description: "We build an intuitive web or mobile interface so anyone can interact with the model and see results visually.",
        output: "Fully Functional End-to-End Application",
      },
      {
        step: "04",
        phase: "Documentation & Viva Walkthrough",
        duration: "Week 6",
        title: "Final Report, PPT & Viva Mock Sessions",
        description: "We deliver the complete Black Book documentation, PPT slides, and conduct a detailed code walkthrough to prepare you for viva.",
        output: "Final University Report, PPT & Viva Confidence",
      },
    ],
    caseStudy: {
      badge: "ENGINEERING CASE STUDY",
      title: "Beyond Templates: The Architecture of Bespoke Engineering",
      client: "Axiogen Academic & Research Engineering",
      outcome: "Why generic boilerplate code fails examiners and how disciplined architectural design scores top marks.",
      slug: "beyond-templates-bespoke-engineering",
    },
    faqs: [
      {
        question: "How do you ensure the project is original and not plagiarized?",
        answer:
          "Every single academic project we undertake is written from scratch. We do not recycle old codebases. We formulate an original architectural design or implement a recent published research paper with distinct modifications, ensuring your project passes all college plagiarism checks.",
      },
      {
        question: "Will you teach us how the code works before our project viva?",
        answer:
          "Absolutely! Building the code is only half the battle — being able to explain it to external examiners is what determines your grade. We conduct dedicated one-on-one sessions walking through every file, explaining the algorithms, and doing mock viva questions with you.",
      },
      {
        question: "Do you provide the complete Black Book project documentation?",
        answer:
          "Yes. We deliver the complete documentation adhering to your university's guidelines, including Abstract, Literature Survey, System Architecture, UML diagrams, ER diagrams, Test Cases, Results, and References.",
      },
      {
        question: "Can you help deploy the project live on the internet so examiners can test it?",
        answer:
          "Yes! Having a live web URL (e.g., hosted on Vercel or cloud GPUs) that the examiner can open on their own phone or laptop creates an instant 'wow' factor and virtually guarantees top marks.",
      },
    ],
  },

  "voice-ai-synthesis": {
    slug: "voice-ai-synthesis",
    aliases: ["voice-synthesis"],
    number: "08",
    badge: "NEURAL VOICE AI & AUDIO SYNTHESIS",
    title: "Neural Voice Synthesis & Conversational Audio AI",
    h1: "Sub-150ms Neural Voice Synthesis, Voice Cloning & Conversational Agents",
    metaTitle: "Voice AI Development Company | Custom Neural TTS & Speech Studio",
    metaDescription:
      "Team Axiogen builds sub-150ms real-time conversational voice agents, custom neural voice clones, and multilingual Whisper speech-to-text pipelines.",
    targetQueries: [
      "voice AI development company",
      "neural text to speech API India",
      "custom voice cloning developers",
      "real time conversational voice AI",
      "Whisper speech to text integration",
      "AI phone calling agents",
    ],
    themeColor: "#EC4899",
    tagline: "Ultra-low latency streaming audio that sounds completely indistinguishable from human speech.",
    heroSnippet:
      "Robotic, lifeless text-to-speech engines destroy customer trust. We engineer state-of-the-art neural speech synthesis models, sub-150ms interactive voice streaming pipelines, and custom acoustic voice clones that sound deeply natural, empathetic, and engaging.",
    overviewHeading: "Engineering Real-Time Conversational Voice Interfaces",
    overviewParagraphs: [
      "Voice is the most natural human communication interface, but delivering convincing real-time audio over the web or telephony networks requires overcoming severe latency, packet jitter, and unnatural monotone prosody.",
      "Team Axiogen builds custom neural voice engines that stream high-fidelity audio chunks with sub-150ms latency. We leverage custom FastSpeech and VITS architectures, multilingual Whisper transcription models, and bidirectional WebRTC/WebSocket streaming to create interactive voice agents that listen, think, and speak with realistic pauses and intonations.",
      "From automated healthcare clinic announcements and multilingual customer phone support agents to lifelike audiobook generation and brand voice cloning, our audio pipelines scale reliably under heavy concurrent traffic.",
    ],
    targetAudiences: [
      {
        title: "Call Centers & Customer Support",
        role: "Head of Customer Experience",
        challenge: "Long hold times and expensive human staffing for routine tier-1 inquiries and status lookups.",
        solution: "Conversational voice agents capable of understanding accents, querying databases, and answering in real time.",
      },
      {
        title: "Clinics & Public Announcements",
        role: "Facility Directors",
        challenge: "Chaotic waiting rooms where patients miss visual display screens or struggle with noisy environments.",
        solution: "Automated multilingual voice token calling in English, Hindi, and regional languages.",
      },
      {
        title: "Media & Audio Content Creators",
        role: "Content Producers",
        challenge: "High studio recording costs and scheduling bottlenecks when recording voiceovers for video or podcasts.",
        solution: "Custom acoustic voice cloning with emotional prosody control and batch synthesis APIs.",
      },
    ],
    capabilities: [
      {
        title: "Sub-150ms Streaming Text-to-Speech",
        metric: "< 150ms first-chunk audio playback",
        description:
          "Chunked neural streaming that plays synthesized audio packets through WebSockets or WebRTC before the entire sentence finishes generating.",
        deliverables: [
          "Streaming WebSocket audio playback client",
          "Low-latency chunked Opus/MP3 audio generation",
          "Custom SSML tag parsing for pauses and emphasis",
          "Multi-lingual phonetic pronunciation dictionaries",
        ],
      },
      {
        title: "High-Fidelity Custom Voice Cloning",
        metric: "Instant zero-shot cloning from 60s sample",
        description:
          "Replicating distinct timbre, resonance, cadence, and vocal fry from short reference audio clips with strict consent watermarking.",
        deliverables: [
          "Few-shot acoustic embedding extraction",
          "Acoustic feature fine-tuning and pitch normalization",
          "Cryptographic watermarking on synthesized files",
          "Studio-grade 48kHz audio export",
        ],
      },
      {
        title: "Multilingual Speech-to-Text (STT)",
        metric: "< 4% Word Error Rate (WER)",
        description:
          "Fine-tuned Whisper models capable of transcribing heavy regional accents, technical jargon, and noisy background environments.",
        deliverables: [
          "Real-time streaming speech recognition",
          "Custom domain vocabulary biasing (medical, legal)",
          "Speaker diarization (identifying who spoke when)",
          "Automated punctuation and capitalization formatting",
        ],
      },
      {
        title: "Telephony & VoIP PBX Integration",
        metric: "Full SIP/Twilio bidirectional audio",
        description:
          "Connecting conversational AI models directly to inbound and outbound phone numbers via SIP trunking and Twilio Media Streams.",
        deliverables: [
          "Twilio Media Streams bi-directional audio bridge",
          "Acoustic echo cancellation and voice activity detection (VAD)",
          "Automated call recording and transcript logging",
          "Smooth transfer to human support agents",
        ],
      },
    ],
    architecture: {
      heading: "Low-Latency Audio Pipeline",
      subheading: "Designed for sub-150ms roundtrip conversational voice latency",
      layers: [
        {
          layer: "01. Audio Ingestion & VAD",
          name: "Voice Activity Detection",
          description: "Detects human speech boundaries in under 20ms and streams raw PCM audio over WebSockets.",
        },
        {
          layer: "02. Fast Speech-to-Text",
          name: "Whisper Streaming Engine",
          description: "Converts audio to text chunks and passes tokens directly to the reasoning LLM.",
        },
        {
          layer: "03. Conversational Reasoning",
          name: "LLM Streaming Token Generator",
          description: "Generates conversational replies sentence by sentence, triggering TTS synthesis on first clause.",
        },
        {
          layer: "04. Neural TTS Synthesis",
          name: "Axiogen Neural Voice Engine",
          description: "Synthesizes Opus audio frames and streams them to the caller's speaker with zero perceptible pause.",
        },
      ],
    },
    techStack: [
      { category: "Audio Models", tools: ["Whisper v3", "FastSpeech2", "VITS", "XTTS-v2", "ChatTTS"] },
      { category: "Streaming Protocols", tools: ["WebRTC", "WebSockets", "Twilio Media Streams", "SIP Trunking"] },
      { category: "Inference Compute", tools: ["TensorRT", "ONNX Runtime", "CUDA GPU acceleration", "FastAPI"] },
      { category: "Audio Processing", tools: ["FFmpeg", "PyAudio", "Librosa", "Silero VAD"] },
    ],
    process: [
      {
        step: "01",
        phase: "Acoustic Scoping & Sample Collection",
        duration: "Week 1",
        title: "Voice Design & Target Language Definition",
        description: "We determine required accents, languages, emotional tone, and collect reference audio datasets.",
        output: "Voice Specification Matrix & Acoustic Benchmarks",
      },
      {
        step: "02",
        phase: "Model Training & Acoustic Tuning",
        duration: "Weeks 2-3",
        title: "Neural Engine Tuning & Pronunciation Rules",
        description: "We fine-tune the acoustic model, curate custom phonetic exceptions, and optimize inference latency on GPUs.",
        output: "Trained Voice Model with Sub-150ms Latency Verification",
      },
      {
        step: "03",
        phase: "Pipeline & Client Integration",
        duration: "Week 4",
        title: "WebRTC / Telephony API Connection",
        description: "We connect the voice engine to your website, mobile app, or Twilio phone PBX system with VAD turn-taking.",
        output: "Interactive Staging Voice Interface for Testing",
      },
      {
        step: "04",
        phase: "Production Deployment",
        duration: "Week 5+",
        title: "Cloud Rollout & Concurrency Scaling",
        description: "We deploy the GPU container clusters behind auto-scaling load balancers with real-time audio quality telemetry.",
        output: "Production Voice API & Complete Documentation",
      },
    ],
    caseStudy: {
      badge: "VOICE AI CASE STUDY",
      title: "ClinicOS: Multilingual Queue Audio Announcements",
      client: "Axiogen ClinicOS Healthcare Deployments",
      outcome: "Zero-lag voice token calling across 50,000+ patient consultations in English, Hindi, and Marathi.",
      slug: "building-clinicos-healthcare-operating-system",
    },
    faqs: [
      {
        question: "How fast is the voice response in a conversational setting?",
        answer:
          "Our optimized streaming voice pipeline achieves a total roundtrip latency of under 400 milliseconds — from the moment the user stops speaking, through speech recognition and LLM token generation, to the first audible synthesized speech packet. This matches natural human conversational pacing.",
      },
      {
        question: "Can the voice engine speak multiple Indian languages?",
        answer:
          "Yes! We support English with clear Indian accents, Hindi, Marathi, and major regional languages with accurate phonetic pronunciation of local names and medical terms.",
      },
      {
        question: "Can we integrate this voice agent with telephone calls (outbound & inbound)?",
        answer:
          "Yes. We configure bi-directional audio bridges connecting directly to phone numbers via Twilio, Exotel, or SIP PBX systems, allowing the AI to answer phone calls or make automated appointment confirmation calls.",
      },
      {
        question: "Is custom voice cloning safe and compliant?",
        answer:
          "Yes. We require explicit vocal consent verification before cloning any voice and embed cryptographic inaudible watermarks into generated audio to prevent unauthorized impersonation.",
      },
    ],
  },

  "meta-google-ads": {
    slug: "meta-google-ads",
    number: "09",
    badge: "PERFORMANCE MARKETING & PAID ACQUISITION",
    title: "Performance Marketing, Meta & Google Ads Engineering",
    h1: "Data-Driven Performance Marketing, Server-Side CAPI & ROAS Scaling",
    metaTitle: "Performance Marketing Agency | Meta & Google Ads for Tech Companies",
    metaDescription:
      "Team Axiogen engineers high-converting Meta and Google Ads acquisition campaigns with server-side Conversion API (CAPI) tracking and ROAS modeling.",
    targetQueries: [
      "performance marketing agency India",
      "Meta ads for tech startups",
      "Google ads B2B SaaS",
      "server side conversion API tracking",
      "ROAS scaling agency",
      "paid acquisition engineering",
    ],
    themeColor: "#F97316",
    tagline: "Performance marketing engineered with code: zero signal loss, precision tracking, and profitable ROAS.",
    heroSnippet:
      "Running digital ads without server-side tracking is like flying blind. iOS privacy changes block up to 40% of browser pixel data. We engineer server-side conversion tracking, high-converting landing pages, and algorithmic ad bidding to scale customer acquisition profitably.",
    overviewHeading: "Engineering Scientific Customer Acquisition",
    overviewParagraphs: [
      "Most digital marketing agencies burn client budgets on vanity metrics like impressions and clicks that never translate into actual bank deposits. Worse, because they rely on fragile browser pixels, Apple's iOS privacy updates and browser ad-blockers blind them to where profitable conversions are coming from.",
      "Team Axiogen approaches paid advertising from an engineering and data perspective. We implement server-side Meta Conversion API (CAPI) and Google Enhanced Conversions that send cryptographically hashed purchase and lead events directly from your server to ad networks with 100% data fidelity.",
      "Combined with rapid-fire creative hook testing, intent-based Google Search campaigns, and lightning-fast sub-second landing pages, we build scalable customer acquisition engines that drive measurable Return on Ad Spend (ROAS).",
    ],
    targetAudiences: [
      {
        title: "B2B SaaS & Tech Startups",
        role: "Founders & Growth Leads",
        challenge: "Sky-high cost per demo booked and low conversion rates on generic marketing landing pages.",
        solution: "Intent-driven Google Search campaigns targeting high-intent commercial keywords paired with sub-second landing pages.",
      },
      {
        title: "High-Ticket Service Companies",
        role: "Managing Directors",
        challenge: "Meta lead forms delivering unqualified, spam submissions that waste sales team time.",
        solution: "Multi-step qualifying funnels with phone verification and automated CRM lead scoring.",
      },
      {
        title: "E-Commerce Brands Scaling Revenue",
        role: "Brand Owners",
        challenge: "Ad performance plateauing and inconsistent ROAS due to pixel tracking signal loss on mobile.",
        solution: "Server-side CAPI deployment, dynamic catalog retargeting, and systematic creative testing matrices.",
      },
    ],
    capabilities: [
      {
        title: "Server-Side Conversion API (CAPI) Engineering",
        metric: "35% more attributable conversion events",
        description:
          "Direct server-to-server event transmission to Meta and Google bypassing browser ad-blockers, cookie restrictions, and iOS privacy shields.",
        deliverables: [
          "Meta Conversions API (CAPI) server webhook setup",
          "Google Enhanced Conversions & offline event import",
          "100% Event Quality Match score optimization",
          "Deduplication between browser pixel and server events",
        ],
      },
      {
        title: "High-Intent Google Search & Performance Max",
        metric: "Targeting in-market commercial intent",
        description:
          "Granular keyword targeting that captures prospects actively searching to buy your service, eliminating wasted budget on irrelevant informational queries.",
        deliverables: [
          "Single-keyword ad group (SKAG) architecture",
          "Extensive negative keyword lists preventing budget waste",
          "Google Performance Max asset groups with targeted audiences",
          "High-converting sitelink, callout, and structured snippet extensions",
        ],
      },
    ],
    architecture: {
      heading: "Full-Funnel Acquisition Architecture",
      subheading: "From search intent to server-side attribution and conversion",
      layers: [
        {
          layer: "01. Search Intent & Creative Hook",
          name: "High-Intent Ads (Meta / Google)",
          description: "Reaches users with targeted pain-point messaging and direct value propositions.",
        },
        {
          layer: "02. Sub-Second Landing Page",
          name: "Next.js High-Conversion Page",
          description: "Loads in under 500ms with zero distractions and clear interactive conversion points.",
        },
        {
          layer: "03. Server-Side Telemetry",
          name: "Server Event Bus (CAPI)",
          description: "Sends purchase and lead payloads securely from your server to Meta and Google ad algorithms.",
        },
        {
          layer: "04. Algorithmic Optimization",
          name: "ROAS Smart Bidding",
          description: "Machine learning algorithms optimize bidding to find more high-value paying customers.",
        },
      ],
    },
    techStack: [
      { category: "Ad Platforms", tools: ["Meta Ads Manager (Facebook & Instagram)", "Google Ads (Search & PMax)", "LinkedIn Ads"] },
      { category: "Tracking & CAPI", tools: ["Meta Conversions API (CAPI)", "Google Tag Manager Server-Side", "Google Analytics 4"] },
      { category: "Landing Pages", tools: ["Next.js", "Tailwind CSS", "Vercel Edge Network", "React Hook Form"] },
      { category: "CRM & Funnels", tools: ["WhatsApp Business API", "HubSpot", "Zapier", "PostgreSQL Webhooks"] },
    ],
    process: [
      {
        step: "01",
        phase: "Tracking Audit & CAPI Setup",
        duration: "Days 1-5",
        title: "Establishing 100% Tracking Data Fidelity",
        description: "We configure server-side CAPI tracking, verify domain DNS records, and test event deduplication.",
        output: "Verified 10/10 Meta Event Match Quality Score",
      },
      {
        step: "02",
        phase: "Landing Page & Creative Build",
        duration: "Week 2",
        title: "High-Converting Page & Ad Creative Design",
        description: "We design and code lightning-fast Next.js landing pages and create compelling visual ad hooks.",
        output: "Live Tested Landing Page & Approved Ad Creative Suite",
      },
      {
        step: "03",
        phase: "Campaign Launch & Calibration",
        duration: "Weeks 3-4",
        title: "Testing Angles & Search Intent Calibration",
        description: "We launch controlled budget campaigns testing ad angles and negative keywords to isolate profitable segments.",
        output: "Initial Conversion Data & Cost-per-Acquisition (CPA) Benchmark",
      },
      {
        step: "04",
        phase: "Scaling & ROAS Expansion",
        duration: "Week 5+",
        title: "Scaling Profitable Campaigns",
        description: "We scale daily ad budgets on winning ads while systematically refreshing creatives to prevent ad fatigue.",
        output: "Weekly Executive ROAS Performance Reports",
      },
    ],
    caseStudy: {
      badge: "MARKETING CASE STUDY",
      title: "Why Brand Redesigns Fail: The Science of High-Conversion Pages",
      client: "Axiogen Performance Engineering",
      outcome: "How sub-second load times and clear value hooks convert up to 3x more paid visitors into qualified inquiries.",
      slug: "why-brand-redesigns-fail",
    },
    faqs: [
      {
        question: "What is Meta Conversions API (CAPI) and why is it essential?",
        answer:
          "Traditional browser pixels run in the user's browser, where ad blockers and Apple iOS privacy protections block up to 40% of tracking data. Meta CAPI sends conversion events directly from your backend web server to Meta's servers, restoring 100% data accuracy and lowering your ad acquisition costs by feeding accurate conversion signals back into the algorithm.",
      },
      {
        question: "How much ad budget should we start with?",
        answer:
          "We recommend starting with a minimum test budget of \$500 to \$1,500/month (or ₹25,000–₹75,000/month in India) during the initial 30-day testing phase to collect enough data to identify winning ads and search keywords.",
      },
      {
        question: "Do you build the landing pages as well?",
        answer:
          "Yes! Sending ad traffic to a generic homepage is the fastest way to waste ad spend. We engineer dedicated, high-speed Next.js landing pages tailored specifically to match the exact copy and promise of the ad.",
      },
      {
        question: "How do you prevent junk or spam leads?",
        answer:
          "We implement multi-step qualifying forms, honeypot spam protection, OTP/phone number verification, and clear qualification questions so your sales team only spends time with serious prospects.",
      },
    ],
  },
};

export function getServicePage(slug: string): ServicePageData | undefined {
  if (SERVICE_PAGES[slug]) return SERVICE_PAGES[slug];
  return Object.values(SERVICE_PAGES).find((p) => p.aliases?.includes(slug));
}

export function getAllServiceSlugs(): string[] {
  const slugs: string[] = [];
  for (const page of Object.values(SERVICE_PAGES)) {
    slugs.push(page.slug);
    if (page.aliases) {
      slugs.push(...page.aliases);
    }
  }
  return slugs;
}
