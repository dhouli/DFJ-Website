import type { MetadataRoute } from "next";

const siteUrl = "https://danceforjoynj.com";

const routes = [
  "",
  "/classes",
  "/schedule-enrollment",
  "/dress-code",
  "/company",
  "/about",
  "/events",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
