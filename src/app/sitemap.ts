import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/content";

const base = "https://userise.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/pricing", "/work", "/contact", "/terms"];
  const staticPages = routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const studyPages = caseStudies.map((c) => ({
    url: `${base}/work/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...studyPages];
}
