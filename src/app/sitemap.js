import { site, navPrimary, navMore, navGroups } from "@/config/site";
import { getAnnouncements } from "@/lib/announcements";

export default async function sitemap() {
  const base = site.url;

  const staticPaths = new Set(["/"]);
  for (const item of navPrimary) staticPaths.add(item.href);
  for (const item of navMore) staticPaths.add(item.href);
  for (const g of navGroups) {
    for (const link of g.links) staticPaths.add(link.href);
  }
  staticPaths.add("/contact");
  staticPaths.add("/announcements");

  const staticEntries = [...staticPaths].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : 0.7,
  }));

  let announcementEntries = [];
  try {
    const announcements = await getAnnouncements();
    announcementEntries = announcements.map((a) => ({
      url: `${base}/announcements/${a.slug}`,
      lastModified: a.date ? new Date(a.date) : new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    }));
  } catch {
    // no announcements directory yet
  }

  return [...staticEntries, ...announcementEntries];
}
