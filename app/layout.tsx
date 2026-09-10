import type { Metadata } from "next";
import { Schibsted_Grotesk, Space_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageTransitionProvider from "@/components/PageTransitionProvider";
import VisitorTracker from "@/components/VisitorTracker";
import AxiogenSupportWidget from "@/components/AxiogenSupportWidget";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://team.axiogen.in"),
  title: {
    default: "Team Axiogen | AI Architectures, Digital Engineering & High-Velocity Systems",
    template: "%s | Team Axiogen",
  },
  description:
    "Team Axiogen is an AI & digital engineering studio from India. We build intelligent software systems, bespoke AI models, full-stack web & mobile platforms, cybersecurity architectures, and high-performance cloud solutions for startups, enterprises, and academic projects.",
  keywords: [
    "Team Axiogen",
    "Axiogen",
    "AI Development India",
    "Machine Learning Studio",
    "Full-Stack Web Development",
    "Cybersecurity AI",
    "Digital Engineering Studio",
    "Next.js Development",
    "Deep Tech Studio India",
    "Cloud Solutions",
    "Mobile App Development",
    "Neural Network Solutions",
    "Software Engineering India",
    "AI Architecture",
    "Kolhapur Tech Studio",
    "Student Project Development",
    "Bespoke AI Solutions",
    "High-Velocity Systems",
    "DevOps & Cloud Infrastructure",
    "Brand Identity Design",
  ],
  authors: [{ name: "Team Axiogen", url: "https://team.axiogen.in" }],
  creator: "Team Axiogen",
  publisher: "Team Axiogen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Team Axiogen | AI Architectures & Digital Engineering",
    description:
      "Team Axiogen engineers intelligent software systems, bespoke AI models, full-stack digital platforms, and high-performance cybersecurity architectures from India.",
    url: "https://team.axiogen.in",
    siteName: "Team Axiogen",
    images: [
      {
        url: "/axiogen-logo.png",
        width: 1200,
        height: 630,
        alt: "Team Axiogen — AI & Digital Engineering Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Axiogen | AI Architectures & Digital Engineering",
    description:
      "Team Axiogen builds intelligent software systems, AI models, full-stack platforms, and cybersecurity architectures from India.",
    images: ["/axiogen-logo.png"],
    creator: "@teamaxiogen",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://team.axiogen.in",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://team.axiogen.in/#organization",
      name: "Team Axiogen",
      url: "https://team.axiogen.in",
      logo: {
        "@type": "ImageObject",
        url: "https://team.axiogen.in/axiogen-logo.png",
        width: 512,
        height: 512,
      },
      description:
        "Team Axiogen is an AI & digital engineering studio from India building intelligent software systems, AI models, full-stack platforms, and cybersecurity architectures.",
      email: "axiogen01@gmail.com",
      foundingLocation: {
        "@type": "Place",
        name: "Kolhapur, Maharashtra, India",
      },
      areaServed: "Worldwide",
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Full-Stack Development",
        "Cybersecurity",
        "Cloud Architecture",
        "Mobile App Development",
        "Digital Engineering",
      ],
      sameAs: [
        "https://github.com/axiogenai",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://team.axiogen.in/#website",
      url: "https://team.axiogen.in",
      name: "Team Axiogen",
      description:
        "AI & Digital Engineering Studio — Building intelligent systems from India",
      publisher: {
        "@id": "https://team.axiogen.in/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://team.axiogen.in/our-work?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://team.axiogen.in/#service",
      name: "Team Axiogen",
      image: "https://team.axiogen.in/axiogen-logo.png",
      url: "https://team.axiogen.in",
      email: "axiogen01@gmail.com",
      description:
        "AI architectures, digital engineering, full-stack development, cybersecurity, and cloud solutions.",
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 16.705,
          longitude: 74.2433,
        },
        geoRadius: "50000",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kolhapur",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      priceRange: "$$",
      serviceType: [
        "AI Development",
        "Web Development",
        "Mobile App Development",
        "Cybersecurity",
        "Cloud Architecture",
        "Brand Identity",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${schibstedGrotesk.variable} ${spaceMono.variable} ${plusJakarta.variable} dark`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('ui-theme') || 'dark';
                  if (theme === 'system') {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(theme);
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-[#FF6B42] selection:text-white transition-colors duration-300">
        <ThemeProvider defaultTheme="dark">
          <VisitorTracker />
          <PageTransitionProvider>
            {children}
          </PageTransitionProvider>
          <AxiogenSupportWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
