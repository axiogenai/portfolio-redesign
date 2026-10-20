import type { Metadata } from "next";
import Link from "next/link";
import { 
  Code2, 
  Cpu, 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Stethoscope, 
  Factory, 
  Layers, 
  ShoppingBag, 
  GraduationCap, 
  Coins, 
  Zap,
  MapPin,
  Phone,
  Mail,
  Award
} from "lucide-react";

const canonical = "https://team.axiogen.in/software-development-company-kolhapur";

export const metadata: Metadata = {
  title: "Best Software Development Company in Kolhapur | Web, Mobile & AI Apps",
  description:
    "Team Axiogen is the #1 software development company in Kolhapur, Maharashtra. Top-rated IT company offering custom web applications, mobile apps (Android/iOS), enterprise ERP & CRM, AI agent automation, and SaaS platforms for businesses in Kolhapur, Sangli, Ichalkaranji, and Maharashtra.",
  alternates: { canonical },
  keywords: [
    // Top Kolhapur Core Keywords
    "software company in Kolhapur",
    "software development company Kolhapur",
    "best software company in Kolhapur",
    "top IT company in Kolhapur",
    "IT companies in Kolhapur",
    "software developers in Kolhapur",
    "software development services Kolhapur",
    "hire software developers Kolhapur",
    "best software development agency Kolhapur",
    // Web Development & Design
    "web development company Kolhapur",
    "website design company in Kolhapur",
    "web application development Kolhapur",
    "custom web portal development Kolhapur",
    "ecommerce website development Kolhapur",
    "full-stack web development Kolhapur",
    "React Nextjs developers Kolhapur",
    // Mobile App Development
    "mobile app development company in Kolhapur",
    "Android app development Kolhapur",
    "iOS app development company Kolhapur",
    "Flutter app development Kolhapur",
    "cross-platform mobile apps Kolhapur",
    // Custom Enterprise & Industry Software
    "custom software development Kolhapur",
    "ERP software development company Kolhapur",
    "CRM software development Kolhapur",
    "billing and invoicing software Kolhapur",
    "accounting inventory software Kolhapur",
    "hospital management software Kolhapur",
    "clinic management software Kolhapur",
    "foundry management software Kolhapur",
    "manufacturing ERP software Kolhapur",
    "textile industry software Ichalkaranji Kolhapur",
    "sugar mill ERP software Kolhapur",
    "hotel restaurant management software Kolhapur",
    "school college management software Kolhapur",
    "real estate property software Kolhapur",
    // AI & Advanced Tech
    "AI company in Kolhapur",
    "AI development company Kolhapur",
    "AI automation company Maharashtra",
    "AI agent development Kolhapur",
    "machine learning solutions Kolhapur",
    "WhatsApp AI chatbot development Kolhapur",
    "business automation company Kolhapur",
    // SaaS & Cloud
    "SaaS development company India",
    "cloud consulting DevOps company Kolhapur",
    "cybersecurity services Kolhapur",
    // Regional Keywords
    "software company in Sangli",
    "software company in Ichalkaranji",
    "software company in Shiroli MIDC Kolhapur",
    "software company in Gokul Shirgaon MIDC Kolhapur",
    "IT company in Western Maharashtra",
    "software development company Maharashtra",
  ],
  openGraph: {
    title: "Best Software Development Company in Kolhapur | Team Axiogen",
    description:
      "Team Axiogen is the #1 software company in Kolhapur, Maharashtra. We engineer bespoke web apps, mobile apps, enterprise ERP/CRM, and AI solutions for businesses across Kolhapur and Sangli.",
    url: canonical,
    siteName: "Team Axiogen",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/axiogen-logo.png",
        width: 1200,
        height: 630,
        alt: "#1 Software Development Company in Kolhapur - Team Axiogen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Software Development Company in Kolhapur | Team Axiogen",
    description:
      "Top-rated software and AI company in Kolhapur, Maharashtra. Enterprise software, web applications, mobile apps, and AI automation.",
    images: ["/axiogen-logo.png"],
  },
};

const serviceSectors = [
  {
    icon: Globe,
    title: "Web Application & Portal Development",
    description:
      "Modern, ultra-fast web applications, high-converting corporate portals, and custom SaaS dashboards built with Next.js, React, Node.js, and cloud infrastructure.",
    keywords: "Web development Kolhapur, responsive websites, web portals, admin dashboards",
    href: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development (Android & iOS)",
    description:
      "High-performance native and cross-platform mobile apps designed for seamless customer experience, push notifications, offline syncing, and payment gateway integration.",
    keywords: "Android app development Kolhapur, iOS apps, Flutter, mobile app developers",
    href: "/services/mobile-app-development",
  },
  {
    icon: Cpu,
    title: "AI Development & Workflow Automation",
    description:
      "Autonomous AI agents, customer support WhatsApp bots, optical character recognition (OCR), voice synthesis, and predictive models that automate repetitive manual tasks.",
    keywords: "AI development Kolhapur, AI automation Maharashtra, WhatsApp AI bot",
    href: "/services/ai-agent-development",
  },
  {
    icon: Database,
    title: "Custom ERP & CRM Enterprise Software",
    description:
      "Tailor-made enterprise resource planning (ERP), inventory trackers, lead management CRM, billing systems, and supply-chain platforms architected specifically for your operations.",
    keywords: "ERP software Kolhapur, CRM systems, custom billing software, inventory management",
    href: "/services/custom-software-development",
  },
  {
    icon: Layers,
    title: "SaaS Product Architecture & MVPs",
    description:
      "End-to-end design and engineering for startup founders and growing companies wanting to build, launch, and scale multi-tenant SaaS products from Kolhapur to global markets.",
    keywords: "SaaS development Kolhapur, startup MVP development, cloud multi-tenant software",
    href: "/services/saas-development",
  },
  {
    icon: ShieldCheck,
    title: "Cloud Infrastructure & Cybersecurity",
    description:
      "Scalable AWS/GCP cloud deployments, Docker/Kubernetes container orchestration, continuous DevOps CI/CD pipelines, database security hardening, and vulnerability assessments.",
    keywords: "Cloud consulting Kolhapur, DevOps, cybersecurity audit Maharashtra",
    href: "/services/cloud-engineering-devops",
  },
];

const industrySolutions = [
  {
    icon: Factory,
    name: "Foundry, Forging & Manufacturing",
    sector: "Kolhapur Industrial MIDC (Shiroli, Gokul Shirgaon, Kagal)",
    description:
      "Custom ERPs, production scheduling systems, raw material batch tracking, rejection rate analytics, and supplier dispatch portals for Kolhapur's renowned manufacturing hub.",
  },
  {
    icon: Stethoscope,
    name: "Healthcare, Hospitals & Polyclinics",
    sector: "Medical & Diagnostic Centers",
    description:
      "OPD/IPD queue management, electronic health records (EHR), token display kiosks, lab diagnostic report delivery via WhatsApp/SMS, and doctor appointment booking systems.",
  },
  {
    icon: Layers,
    name: "Textile & Sizing Mills",
    sector: "Ichalkaranji Textile Hub & Kolhapur",
    description:
      "Yarn inventory management, loom production monitoring, roll barcode tracking, wholesale dispatch accounting, and agent commission tracking software for textile units.",
  },
  {
    icon: Building2,
    name: "Sugar Factories & Agro-Processing",
    sector: "Kolhapur & Sangli Sugar Cooperatives",
    description:
      "Cane weighing bridge integration, farmer billing and slip generation, harvesting dispatch logistics, sugar godown inventory, and distillery byproduct tracking.",
  },
  {
    icon: ShoppingBag,
    name: "Retail, E-Commerce & Distribution",
    sector: "Kolhapur Retailers & FMCG Distributors",
    description:
      "Multi-store POS billing, inventory synchronization, regional e-commerce storefronts, B2B wholesale order apps, and automated GST invoice generation.",
  },
  {
    icon: GraduationCap,
    name: "Education, Colleges & Coaching Academies",
    sector: "Universities, Schools & Institutes",
    description:
      "Student admission portals, attendance tracking, fee payment gateway integration, online exam platforms, and automated parent communication systems.",
  },
];

const localFaqs = [
  {
    question: "Why is Team Axiogen considered the best software development company in Kolhapur?",
    answer:
      "Team Axiogen stands out because we provide direct founder-led engineering with deep expertise in modern tech stacks (React, Next.js, Node.js, Python, Flutter, Cloud, AI). Unlike traditional agencies that sell bloated outdated templates, we build custom, sub-second, enterprise-grade software engineered to solve exact business bottlenecks and scale effortlessly.",
  },
  {
    question: "What types of software services do you provide in Kolhapur, Sangli, and Maharashtra?",
    answer:
      "We build custom business software, enterprise ERPs, CRM systems, responsive websites, web applications, Android & iOS mobile applications, SaaS products, AI automation bots, WhatsApp AI agents, billing and inventory systems, and cloud infrastructure.",
  },
  {
    question: "Do you build software for manufacturing and foundry units in Shiroli and Gokul Shirgaon MIDC?",
    answer:
      "Yes. We specialize in custom manufacturing ERPs, production tracking systems, heat-wise quality inspection databases, foundry rejection analysis dashboards, and supplier logistics software built specifically for Kolhapur's industrial ecosystem.",
  },
  {
    question: "How much does custom software development cost in Kolhapur?",
    answer:
      "Software development costs depend on project scope, user roles, integrations, and performance requirements. We provide transparent, scope-led milestone pricing with zero hidden fees. Contact us for a free technical consultation and customized project proposal.",
  },
  {
    question: "Can you upgrade or re-engineer our existing legacy software or website?",
    answer:
      "Absolutely. We frequently help Kolhapur and Maharashtra businesses modernize legacy PHP/desktop software into lightning-fast, mobile-responsive cloud web applications with secure cloud databases and modern intuitive user interfaces.",
  },
  {
    question: "Do you serve clients outside Kolhapur as well?",
    answer:
      "Yes. While proudly headquartered in Kolhapur, Team Axiogen serves businesses across Sangli, Ichalkaranji, Satara, Pune, Mumbai, across India, and international clients worldwide.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": canonical + "#webpage",
      url: canonical,
      name: "Best Software Development Company in Kolhapur | Team Axiogen",
      description:
        "Top-rated software company in Kolhapur, Maharashtra. Web applications, mobile apps, enterprise ERP/CRM, and AI solutions.",
      isPartOf: { "@id": "https://team.axiogen.in/#website" },
      about: { "@id": canonical + "#localbusiness" },
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": canonical + "#localbusiness",
      name: "Team Axiogen - Software Development Company in Kolhapur",
      alternateName: [
        "Team Axiogen",
        "Axiogen Software Company",
        "Best Software Company in Kolhapur",
        "Top IT Company in Kolhapur",
      ],
      description:
        "Team Axiogen is the leading software development and AI engineering company in Kolhapur, Maharashtra. We deliver custom software, web applications, mobile apps, ERP/CRM, and AI automation for enterprise and growth-stage businesses.",
      url: canonical,
      logo: "https://team.axiogen.in/axiogen-logo.png",
      image: "https://team.axiogen.in/axiogen-logo.png",
      telephone: "+91-7030807704",
      email: "axiogen01@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kolhapur",
        addressRegion: "Maharashtra",
        postalCode: "416001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 16.7050,
        longitude: 74.2433,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "21:00",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Kolhapur" },
        { "@type": "City", name: "Sangli" },
        { "@type": "City", name: "Ichalkaranji" },
        { "@type": "City", name: "Satara" },
        { "@type": "City", name: "Pune" },
        { "@type": "AdministrativeArea", name: "Maharashtra" },
        { "@type": "Country", name: "India" },
      ],
      priceRange: "$$",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software & Web Development Services in Kolhapur",
        itemListElement: serviceSectors.map((s, idx) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.description,
          },
          position: idx + 1,
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": canonical + "#faq",
      mainEntity: localFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function KolhapurSoftwareDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-['Schibsted_Grotesk',sans-serif]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background via-secondary/10 to-background pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/what-we-do" className="hover:text-foreground transition-colors">Services</Link>
            <span>/</span>
            <span aria-current="page" className="text-foreground font-medium">Software Development Company in Kolhapur</span>
          </nav>

          {/* Kolhapur Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#FF6B42]" />
            <span>Kolhapur &middot; Sangli &middot; Ichalkaranji &middot; Maharashtra</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] max-w-4xl">
            #1 Software, Web &amp; Mobile App Development Company in <span className="text-[#FF6B42]">Kolhapur</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Team Axiogen is Kolhapur&apos;s premier software engineering company. We build high-velocity web applications, custom enterprise ERP/CRM systems, mobile apps (iOS &amp; Android), SaaS products, and autonomous AI automation suites for progressive businesses across Kolhapur, Sangli, and Maharashtra.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-bold text-background transition-opacity hover:opacity-85 shadow-lg"
            >
              <span>Get Free Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/40"
            >
              <span>Explore Our Live Work</span>
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border pt-8 text-center sm:text-left">
            <div>
              <p className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">100%</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Founder-Led Engineering</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">&lt; 300ms</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Sub-Second Load Latency</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">Full-Stack</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Web, Mobile, ERP &amp; Cloud</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">Kolhapur HQ</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Serving Maharashtra &amp; Global</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-16 md:py-24 border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF6B42] mb-2">Our Core Capabilities</p>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
              Software Services Tailored for Kolhapur Businesses
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground">
              From fast websites to complex enterprise inventory workflows, we engineer every solution from the ground up for stability, security, and scalability.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceSectors.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group relative flex flex-col justify-between rounded-2xl border border-border bg-secondary/15 p-6 sm:p-7 transition-all duration-300 hover:border-foreground/30 hover:bg-secondary/25"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-foreground mb-5 group-hover:border-[#FF6B42] transition-colors">
                      <Icon className="w-6 h-6 text-[#FF6B42]" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-zinc-500 mb-4 border-t border-border/50 pt-3">
                      {service.keywords}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B42] hover:underline"
                    >
                      <span>Explore details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Solutions for Kolhapur Region */}
      <section className="py-16 md:py-24 border-b border-border bg-secondary/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF6B42] mb-2">Regional Industry Expertise</p>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
              Software Engineered for Kolhapur&apos;s Key Sectors
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground">
              Kolhapur has unique industrial strengths. We build specialized, tailored digital systems designed for local operations across MIDCs, healthcare, textiles, agriculture, and commerce.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industrySolutions.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.name}
                  className="rounded-2xl border border-border bg-background p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-[11px] font-medium text-muted-foreground mb-4">
                      <Icon className="w-3.5 h-3.5 text-[#FF6B42]" />
                      <span>{ind.sector}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                      {ind.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {ind.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Team Axiogen in Kolhapur */}
      <section className="py-16 md:py-24 border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF6B42] mb-2">Why Partner With Us</p>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight leading-tight">
                Why Team Axiogen is Kolhapur&apos;s #1 Choice for Software Development
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Most agencies in tier-2 cities outsource their work, repackage generic WordPress templates, or lock you into proprietary platforms that become obsolete in months. Team Axiogen is built differently.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  {
                    title: "Direct Founder-Led Engineering",
                    desc: "No middlemen or non-technical account managers. You collaborate directly with founders who architect and write the code.",
                  },
                  {
                    title: "Modern, World-Class Technology",
                    desc: "We write clean TypeScript, Next.js, Node.js, Python, PostgreSQL, and deploy on scalable cloud backends.",
                  },
                  {
                    title: "100% Intellectual Property Ownership",
                    desc: "You own complete source code, repository rights, database architecture, and digital assets upon delivery.",
                  },
                  {
                    title: "Transparent Milestones & No Hidden Costs",
                    desc: "Clear deliverable phases, transparent weekly progress demos, and fixed scope agreements.",
                  },
                  {
                    title: "Local Presence with Global Standards",
                    desc: "Based in Kolhapur for face-to-face discussions and ongoing regional support, delivering Silicon Valley caliber craftsmanship.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6B42] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Box with Local Guarantee */}
            <div className="rounded-3xl border border-border bg-secondary/20 p-8 sm:p-10 relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 mb-6">
                <Award className="w-3.5 h-3.5 text-[#FF6B42]" />
                <span>Kolhapur Engineering Benchmark</span>
              </div>

              <h3 className="text-2xl font-black text-foreground tracking-tight mb-4">
                Ready to digitize your operations or build a new software product?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Whether you need a custom manufacturing ERP in Shiroli MIDC, a clinic operating suite in Rajarampuri, or an e-commerce platform for your Kolhapuri brand, we have the engineering discipline to ship it right.
              </p>

              <div className="space-y-3 border-t border-border/60 pt-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#FF6B42] shrink-0" />
                  <span>Headquartered in Kolhapur, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#FF6B42] shrink-0" />
                  <a href="tel:+917030807704" className="hover:text-foreground font-semibold text-foreground">+91 70308 07704</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#FF6B42] shrink-0" />
                  <a href="mailto:axiogen01@gmail.com" className="hover:text-foreground font-semibold text-foreground">axiogen01@gmail.com</a>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="w-full text-center inline-block rounded-xl bg-foreground py-3.5 px-6 font-bold text-sm text-background hover:opacity-85 transition-opacity"
                >
                  Schedule a Consultation in Kolhapur
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 md:py-24 border-b border-border bg-secondary/15">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF6B42] mb-2">Clear Answers</p>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
              Frequently Asked Questions About Software Development in Kolhapur
            </h2>
          </div>

          <div className="space-y-6">
            {localFaqs.map((faq, i) => (
              <article key={i} className="rounded-2xl border border-border bg-background p-6">
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  {faq.question}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Have a specific requirement or architecture query?
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs sm:text-sm font-bold text-background transition-opacity hover:opacity-85"
            >
              <span>Speak with Team Axiogen Founders</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
