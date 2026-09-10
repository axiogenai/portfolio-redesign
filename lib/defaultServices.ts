import { ServiceItem } from "@/components/ServicesDeck";

export const DEFAULT_SERVICES: ServiceItem[] = [
  {
    slug: "ai-ml",
    display: "AI & NEURAL",
    num: "01",
    title: "AI / ML Solutions",
    subtitle:
      "Custom models, pipelines, and intelligent automation built to solve complex computational problems.",
    description:
      "From fine-tuning open-weights models to building end-to-end RAG pipelines and deploying edge computer vision models, we engineer intelligent systems that scale reliably.",
    outcomes: [
      "Automated decision making at scale",
      "Higher operational accuracy and speed",
      "Zero manual intervention on repetitive tasks",
    ],
    deliverables: [
      "Custom model training & neural architectures",
      "TensorFlow & PyTorch production inference",
      "Automated machine learning pipelines",
      "Predictive analytics & intelligent workflows",
    ],
    cardColor: "#FF6B42",
  },
  {
    slug: "web-development",
    display: "FULL-STACK WEB",
    num: "02",
    title: "Web Development",
    subtitle:
      "Modern full-stack applications with premium UX/UI and robust database routing configurations.",
    description:
      "We design and build production-grade web platforms with Next.js App Router, typed TypeScript architectures, sub-second latency, and pixel-accurate interactive layouts.",
    outcomes: [
      "Sub-second page load times and 100 Core Web Vitals",
      "Scalable and maintainable modular architecture",
      "Production-ready codebase from day one",
    ],
    deliverables: [
      "Next.js App Router & React 19 architecture",
      "TypeScript full-stack codebase",
      "Responsive UI systems & design tokens",
      "REST, GraphQL & serverless API routes",
    ],
    cardColor: "#9B8AFF",
  },
  {
    slug: "mobile-apps",
    display: "NATIVE MOBILE",
    num: "03",
    title: "Mobile Apps",
    subtitle:
      "Cross-platform native iOS & Android applications engineered for speed and fluid animations.",
    description:
      "Fluid, gesture-driven mobile applications built with Flutter and React Native. Engineered to feel indistinguishable from high-end platform-native software with offline state sync.",
    outcomes: [
      "Unified codebase across iOS and Android",
      "Native device speed and responsiveness",
      "High user retention and store ratings",
    ],
    deliverables: [
      "Cross-platform Flutter & React Native applications",
      "Native device hardware integration (GPS, camera, biometrics)",
      "60fps gesture micro-animations & smooth transitions",
      "App Store & Google Play Store release management",
    ],
    cardColor: "#38BDF8",
  },
  {
    slug: "cloud-solutions",
    display: "DEVOPS & CLOUD",
    num: "04",
    title: "Cloud Solutions",
    subtitle:
      "Scalable cloud infrastructure, container orchestration, and continuous DevOps deployment pipelines.",
    description:
      "Resilient cloud architectures built on AWS and GCP. Automated CI/CD pipelines, Docker container meshes, zero-downtime rolling releases, and 24/7 telemetry monitoring.",
    outcomes: [
      "99.99% uptime and auto-scaling resilience",
      "Automated testing and painless deploys",
      "Optimized cloud compute and storage bills",
    ],
    deliverables: [
      "AWS & GCP multi-region cloud architecture",
      "Docker containerization & Kubernetes clusters",
      "Automated CI/CD deployment pipelines",
      "Zero-downtime releases & edge caching",
    ],
    cardColor: "#4FD16B",
  },
  {
    slug: "database-design",
    display: "DATA ARCHITECTURE",
    num: "05",
    title: "Database Design",
    subtitle:
      "High-performance database architectures, query optimization, and secure data relation schemas.",
    description:
      "Relational and document database architectures engineered for high concurrency. Index profiling, query latency reduction, automated migration scripts, and strict row-level security.",
    outcomes: [
      "Sub-millisecond query responses under high load",
      "Strict data integrity and compliance",
      "Seamless scaling without schema lock-ins",
    ],
    deliverables: [
      "PostgreSQL, Supabase & relational schema design",
      "Query index profiling & latency reduction",
      "Automated migrations & zero-downtime rollouts",
      "Row-level security, replication & backup strategies",
    ],
    cardColor: "#FFB43D",
  },
  {
    slug: "voice-synthesis",
    display: "VOICE AI",
    num: "06",
    title: "Voice Synthesis",
    subtitle:
      "Real-time AI voice generation, speech-to-text integration, and interactive voice interfaces.",
    description:
      "Neural voice synthesis engines and conversational audio systems. Ultra-low latency streaming, custom voice cloning, emotional prosody tuning, and multilingual Whisper transcription.",
    outcomes: [
      "Lifelike conversational audio experiences",
      "Ultra-low latency real-time voice responses",
      "Seamless multi-language speech capabilities",
    ],
    deliverables: [
      "Neural text-to-speech (TTS) synthesis engines",
      "Whisper-based speech-to-text transcription",
      "Low-latency interactive voice conversational agents",
      "Custom voice cloning & emotional prosody tuning",
    ],
    cardColor: "#EC4899",
  },
  {
    slug: "document-intelligence",
    display: "NLP & EXTRACTION",
    num: "07",
    title: "Document Intelligence",
    subtitle:
      "AI-driven document parsing, automated text extraction, and contextual knowledge insights.",
    description:
      "High-precision document processing pipelines. OCR layout analysis, tabular extraction from scanned PDFs, schema validation, and dense vector embeddings for instantaneous search.",
    outcomes: [
      "Instant extraction from unstructured documents",
      "99%+ accuracy on complex tabular formats",
      "Direct question answering over private knowledge bases",
    ],
    deliverables: [
      "Layout-aware OCR & PDF table parsing",
      "Structured entity extraction & validation",
      "Contextual vector embeddings & RAG search",
      "Dense retrieval pipelines for massive doc sets",
    ],
    cardColor: "#8B5CF6",
  },
  {
    slug: "deep-research",
    display: "RESEARCH & PAPERS",
    num: "08",
    title: "Deep Research",
    subtitle:
      "Automated academic research, intelligent documentation, and domain knowledge synthesis.",
    description:
      "Automated scholarly literature exploration, IEEE-standard documentation, and domain knowledge mapping. Bridging complex academic papers into working software implementations.",
    outcomes: [
      "Weeks of literature review condensed into hours",
      "Publication-grade technical documentation",
      "Clear competitive and academic positioning",
    ],
    deliverables: [
      "Automated ArXiv & academic paper literature reviews",
      "Comprehensive IEEE formatted documentation & reports",
      "Deep domain insight extraction & synthesis",
      "Citation validation & experimental benchmark analysis",
    ],
    cardColor: "#10B981",
  },
  {
    slug: "meta-google-ads",
    display: "PERFORMANCE MARKETING",
    num: "09",
    title: "Meta & Google Ads",
    subtitle:
      "Data-driven paid customer acquisition across Meta and Google Ads with conversion tracking and ROAS scaling.",
    description:
      "Full-funnel digital advertising engineered around measurable business returns. Server-side Conversion API (CAPI), Google Performance Max, creative hook testing, and attribution analytics.",
    outcomes: [
      "High-converting traffic with measurable ROAS",
      "Precise conversion tracking with zero signal loss",
      "Systematic creative iteration and lower CAC",
    ],
    deliverables: [
      "Meta CAPI & server-side event tracking",
      "Google Performance Max & Search optimization",
      "Dynamic creative hook testing & rapid iteration",
      "Attribution analytics & ROAS financial modeling",
    ],
    cardColor: "#F97316",
  },
];
