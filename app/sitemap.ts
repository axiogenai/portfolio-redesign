import type { MetadataRoute } from "next";

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
    "/services",
    "/what-we-do",
  ];

  return publicRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
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
}
