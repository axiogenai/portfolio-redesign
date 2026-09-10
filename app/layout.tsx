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
  title: "Team Axiogen | AI Architectures, Digital Engineering & High-Velocity Systems",
  description:
    "Team Axiogen engineers intelligent software systems, bespoke AI models, full-stack digital platforms, and high-performance cybersecurity architectures.",
  keywords: [
    "Team Axiogen",
    "Axiogen",
    "AI Development",
    "Machine Learning",
    "Full-Stack Web Development",
    "Cybersecurity AI",
    "Next.js Portfolio",
    "Deep Tech Studio",
  ],
  authors: [{ name: "Team Axiogen" }],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Team Axiogen | AI Architectures & Digital Engineering",
    description:
      "Engineering bespoke AI solutions, digital platforms, and high-security software systems.",
    url: "https://team.axiogen.in",
    siteName: "Team Axiogen",
    images: [
      {
        url: "/axiogen-logo.png",
        width: 1200,
        height: 630,
        alt: "Axiogen Digital Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
