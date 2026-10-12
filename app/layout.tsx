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
    default: "Team Axiogen | AI Development & Software Company in Kolhapur",
    template: "%s | Team Axiogen",
  },
  description:
    "Team Axiogen is an AI development and software engineering studio serving Kolhapur, Sangli and businesses across India. We build AI agents, custom software, SaaS platforms, websites and business automation systems.",
  keywords: [
    "Team Axiogen",
    "AI development company Kolhapur",
    "software development company Kolhapur",
    "website development company Kolhapur",
    "AI automation company Maharashtra",
    "custom software development India",
    "SaaS development company India",
    "AI agent development",
    "business process automation",
    "web and mobile app development",
  ],
  authors: [{ name: "Team Axiogen", url: "https://team.axiogen.in" }],
  creator: "Team Axiogen",
  publisher: "Team Axiogen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  applicationName: "team.axiogen.in",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/icon.png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Team Axiogen | AI Development & Software Company in Kolhapur",
    description:
      "AI agents, custom software, SaaS platforms, websites and automation systems from Team Axiogen, serving Kolhapur, Sangli and businesses across India.",
    url: "https://team.axiogen.in",
    siteName: "Team Axiogen",
    images: [
      {
        url: "/axiogen-logo.png",
        width: 1200,
        height: 630,
        alt: "Team Axiogen — AI Development, Custom Software & SaaS Studio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Axiogen | AI Development & Software Company in Kolhapur",
    description:
      "AI development, custom software, SaaS platforms and business automation by Team Axiogen in Kolhapur, Maharashtra, India.",
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
  category: "technology",
  verification: {
    other: {
      "msvalidate.01": "a23d4b89789449e0854989d10df30bde",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://team.axiogen.in/#organization",
      name: "Team Axiogen",
      alternateName: ["Axiogen", "Axiogen AI"],
      founder: [
        {
          "@type": "Person",
          name: "Aditya Patil",
          jobTitle: "Founder & CEO"
        },
        {
          "@type": "Person",
          name: "Aditya Minchekar",
          jobTitle: "Co-Founder"
        },
        {
          "@type": "Person",
          name: "Ajinkya More",
          jobTitle: "Co-Founder"
        }
      ],
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
      url: "https://team.axiogen.in/",
      name: "team.axiogen.in",
      alternateName: [
        "Team Axiogen",
        "team.axiogen.in",
        "axiogen.in",
        "Team Axiogen Studio"
      ],
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
      "@type": "ItemList",
      "@id": "https://team.axiogen.in/#navigation",
      name: "Main Navigation",
      itemListElement: [
        {
          "@type": "SiteNavigationElement",
          position: 1,
          name: "About Us",
          description: "Meet Team Axiogen founders and digital engineering studio",
          url: "https://team.axiogen.in/about-us",
        },
        {
          "@type": "SiteNavigationElement",
          position: 2,
          name: "Services",
          description: "AI systems, web development, mobile apps, and cloud solutions",
          url: "https://team.axiogen.in/what-we-do",
        },
        {
          "@type": "SiteNavigationElement",
          position: 3,
          name: "Our Work",
          description: "Production case studies, featured software, and client projects",
          url: "https://team.axiogen.in/our-work",
        },
        {
          "@type": "SiteNavigationElement",
          position: 4,
          name: "Contact",
          description: "Start a project or consult with Team Axiogen",
          url: "https://team.axiogen.in/contact",
        },
        {
          "@type": "SiteNavigationElement",
          position: 5,
          name: "Careers",
          description: "Engineering roles and culture at Team Axiogen",
          url: "https://team.axiogen.in/careers",
        },
        {
          "@type": "SiteNavigationElement",
          position: 6,
          name: "Insights",
          description: "Engineering deep dives, architecture patterns, and technical articles",
          url: "https://team.axiogen.in/insights",
        },
      ],
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
        "Digital Engineering",
        "Mobile App Development",
        "Cybersecurity",
        "Cloud Architecture",
        "Brand Identity",
      ],
      knowsLanguage: ["English", "Hindi", "Marathi"],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "21:00",
        },
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msvalidate.01" content="a23d4b89789449e0854989d10df30bde" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Kolhapur, Sangli, Maharashtra, India" />
        <meta name="geo.position" content="16.7050;74.2433" />
        <meta name="ICBM" content="16.7050, 74.2433" />
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
