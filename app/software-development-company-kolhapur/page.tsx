import type { Metadata } from "next";
import Link from "next/link";

const canonical = "https://team.axiogen.in/software-development-company-kolhapur";

export const metadata: Metadata = {
  title: "Software Development Company in Kolhapur | Team Axiogen",
  description:
    "Team Axiogen builds custom software, business websites, SaaS products and AI automation for businesses in Kolhapur, Sangli and across Maharashtra. Discuss your project with our engineering team.",
  alternates: { canonical },
  openGraph: {
    title: "Software Development Company in Kolhapur | Team Axiogen",
    description:
      "Custom software, websites, SaaS and AI automation for businesses in Kolhapur and Sangli, Maharashtra.",
    url: canonical,
    siteName: "Team Axiogen",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Software Development Company in Kolhapur | Team Axiogen",
    description:
      "Custom software, websites, SaaS and AI automation for businesses in Kolhapur and Sangli.",
  },
};

const services = [
  {
    title: "Business websites and web applications",
    description:
      "Responsive websites, customer portals, dashboards and web applications built around your business goals.",
    href: "/services/web-development",
  },
  {
    title: "Custom business software",
    description:
      "Internal tools, workflow systems, database-backed applications and integrations designed for your operations.",
    href: "/services/custom-software-development",
  },
  {
    title: "AI agents and workflow automation",
    description:
      "Practical AI assistants and automations that help teams handle repetitive tasks, information and customer enquiries.",
    href: "/services/ai-agent-development",
  },
  {
    title: "SaaS products and startup MVPs",
    description:
      "Plan and build a focused first version of your product, with a foundation that can grow as you validate demand.",
    href: "/services/saas-development",
  },
];

const faqs = [
  {
    question: "What software services does Team Axiogen provide in Kolhapur?",
    answer:
      "Team Axiogen works on business websites, web applications, custom software, SaaS products, AI agents and workflow automation. The right scope depends on your requirements, budget and existing systems.",
  },
  {
    question: "Can you work with businesses in Sangli and other parts of Maharashtra?",
    answer:
      "Yes. Team Axiogen serves businesses in Kolhapur, Sangli and across Maharashtra, and can collaborate remotely with clients elsewhere in India.",
  },
  {
    question: "How do I get a quote for a software project?",
    answer:
      "Share your goals, key features, timeline and any existing website or system through the contact page. The team can discuss the scope and suitable next steps before implementation.",
  },
  {
    question: "Can you improve an existing website or application?",
    answer:
      "Yes. Existing websites and applications can be reviewed for usability, performance, accessibility, maintainability and search visibility before deciding what should be improved.",
  },
];

const localServiceJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": canonical + "#webpage",
      url: canonical,
      name: "Software Development Company in Kolhapur | Team Axiogen",
      description:
        "Custom software, websites, SaaS products and AI automation for businesses in Kolhapur, Sangli and Maharashtra.",
      mainEntity: { "@id": canonical + "#service" },
    },
    {
      "@type": "Service",
      "@id": canonical + "#service",
      name: "Software Development Services in Kolhapur",
      serviceType: [
        "Custom software development",
        "Website development",
        "SaaS development",
        "AI and workflow automation",
      ],
      provider: {
        "@type": "Organization",
        "@id": "https://team.axiogen.in/#organization",
        name: "Team Axiogen",
        url: "https://team.axiogen.in/",
      },
      areaServed: [
        { "@type": "City", name: "Kolhapur" },
        { "@type": "City", name: "Sangli" },
        { "@type": "AdministrativeArea", name: "Maharashtra" },
      ],
      url: canonical,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function KolhapurSoftwareDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Software Development in Kolhapur</span>
        </nav>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#FF6B42]">
          Team Axiogen · Kolhapur & Sangli, Maharashtra
        </p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Software development for businesses in Kolhapur
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          Team Axiogen is an AI and software engineering studio helping businesses turn
          operational problems and product ideas into useful digital systems. We build
          websites, custom software, SaaS products and AI-powered automation for teams in
          Kolhapur, Sangli and across Maharashtra.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full bg-foreground px-6 py-3 font-semibold text-background">
            Discuss your project
          </Link>
          <Link href="/our-work" className="rounded-full border border-border px-6 py-3 font-semibold">
            Explore our work
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Software services for growing teams
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
            Choose the work that solves your current problem. We start by understanding
            your users, workflows and constraints, then agree on a practical scope before
            building.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-border bg-background p-6 md:p-8">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{service.description}</p>
                <Link href={service.href} className="mt-5 inline-flex font-semibold text-[#FF6B42] underline-offset-4 hover:underline">
                  Explore service <span aria-hidden="true" className="ml-2">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">A practical, transparent process</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Good software starts with a clear problem, not a long feature list. We align on
            the intended outcome, identify the smallest useful scope, and keep the
            implementation understandable and maintainable.
          </p>
        </div>
        <ol className="space-y-5">
          {[
            ["01", "Discovery", "Discuss the business goal, users, existing tools and constraints."],
            ["02", "Scope and plan", "Agree on features, priorities, deliverables and a realistic timeline."],
            ["03", "Build and review", "Develop in iterations and review the working product as it takes shape."],
            ["04", "Launch and improve", "Prepare deployment, handover and a plan for future improvements."],
          ].map(([number, title, description]) => (
            <li key={number} className="flex gap-4 border-b border-border pb-5">
              <span className="font-mono text-sm text-[#FF6B42]">{number}</span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 leading-6 text-muted-foreground">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-border bg-secondary/20">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="text-3xl font-bold tracking-tight">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <article key={faq.question} className="border-b border-border pb-5">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold">Have a project in mind?</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Tell us what you want to improve or build. We can discuss the requirements
              and identify a sensible next step.
            </p>
            <Link href="/contact" className="mt-5 inline-flex rounded-full bg-foreground px-6 py-3 font-semibold text-background">
              Contact Team Axiogen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
