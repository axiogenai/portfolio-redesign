import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";
import { SERVICE_PAGES } from "@/lib/servicePages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://team.axiogen.in";
  const now = new Date();

  const publicRoutes = [
    "",
    "/about-us",
    "/branding-faqs",
    "/careers",
    "/contact",
    "/culture",
    "/faqs",
    "/insights",
    "/our-work",
    "/portfolio-gallery",
    "/processes",
    "/sectors",
    "/what-we-do",
    "/privacy-policy",
  ];

  const staticEntries: MetadataRoute.Sitemap = publicRoutes.map((route) => ({
    url: route === "" ? `${baseUrl}/` : `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency:
      route === "" || route === "/our-work" || route === "/insights"
        ? "weekly"
        : "monthly",
    priority:
      route === ""
        ? 1.0
        : route === "/what-we-do" || route === "/our-work" || route === "/about-us"
        ? 0.9
        : 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = Object.values(SERVICE_PAGES).map(
    (service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    })
  );

  const articleEntries: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: new Date(article.published_at),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...serviceEntries, ...articleEntries];
}

