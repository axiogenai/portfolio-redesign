export interface ShowcaseProject {
  id: string;
  name: string;
  category: string;
  year: string;
  desc: string;
  image: string;
  link: string;
}

export const DEFAULT_SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "clinicos",
    name: "ClinicOS",
    category: "Healthcare OS",
    year: "2026",
    desc: "Healthcare operating system orchestrating multi-tenant clinic workflows, real-time queue displays, digital prescriptions, and automated WhatsApp patient communication.",
    image: "/portfolio/axiogen-clinicos.jpg",
    link: "/insights/building-clinicos-healthcare-operating-system",
  },
  {
    id: "inexus-ide",
    name: "iNexus IDE",
    category: "Cloud Studio",
    year: "2026",
    desc: "High-performance cloud-based code studio with sandboxed execution runtime, Monaco editor, and autonomous AI code assistant.",
    image: "/portfolio/axiogen-inexus.jpg",
    link: "https://github.com/axiogenai/online-ide",
  },
  {
    id: "whatsapp-ai",
    name: "Axiogen WhatsApp AI",
    category: "Autonomous AI",
    year: "2026",
    desc: "Autonomous personal AI assistant for WhatsApp with voice note transcription, conversational image reasoning, and 24/7 client engagement.",
    image: "/portfolio/axiogen-whatsapp.jpg",
    link: "https://github.com/axiogenai/whatsapp-saas",
  },
  {
    id: "seohub-pro",
    name: "SEOHub Pro",
    category: "Enterprise SEO",
    year: "2026",
    desc: "All-in-one enterprise SEO platform auditing search performance with Gemini AI keyword engine, PageSpeed diagnostics, and live crawler.",
    image: "/axiogen-seo.jpg",
    link: "https://seohubpro.vercel.app",
  },
  {
    id: "cyberstrike",
    name: "CyberStrike Suite",
    category: "Cybersecurity",
    year: "2026",
    desc: "Real-time threat monitoring and simulation suite visualizing live request metrics, attack vector interception, and firewall telemetry.",
    image: "/axiogen-cyber.jpg",
    link: "/our-work#full-archive",
  },
  {
    id: "invenscope",
    name: "Invenscope",
    category: "Patent AI",
    year: "2026",
    desc: "AI-powered patent analyzer scanning global registries, evaluating novelty using vector embeddings, and discovering unmined patent spaces.",
    image: "/portfolio/axiogen-invenscope.jpg",
    link: "https://invenscope.vercel.app/",
  },
  {
    id: "truthlens",
    name: "TruthLens",
    category: "Media Forensics",
    year: "2026",
    desc: "Forensic media manipulation detector and fake news verifier analyzing linguistic anomalies, metadata tampering, and multimodal consistency.",
    image: "/portfolio/axiogen-truthlens.jpg",
    link: "https://truth-lenspro.vercel.app/",
  },
  {
    id: "blockchain-forge",
    name: "Blockchain Forge",
    category: "Web3 Security",
    year: "2025",
    desc: "High-performance cryptographic sandbox tool for generating, mining, and auditing distributed chains and smart contracts.",
    image: "/portfolio/axiogen-blockchain.jpg",
    link: "https://blockchainforge.vercel.app",
  },
  {
    id: "axiogen-neural",
    name: "Axiogen Neural Core",
    category: "Deep Learning",
    year: "2026",
    desc: "Core neural network training and telemetry workspace powering predictive analytics, model fine-tuning, and cognitive assistant agents.",
    image: "/axiogen-neural.jpg",
    link: "/our-work#full-archive",
  },
];
