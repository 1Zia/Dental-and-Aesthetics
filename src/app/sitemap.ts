import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/constants";
import { blogPosts } from "@/data/blog";
import { treatments } from "@/data/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/treatments", "/doctor", "/smile-gallery", "/pricing", "/contact", "/book", "/blog"];
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8
    })),
    ...treatments.map((treatment) => ({
      url: `${siteUrl}/treatments/${treatment.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ];
}
