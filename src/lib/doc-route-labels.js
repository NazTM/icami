import { navMore, navPrimary, navGroups } from "@/config/site";

/** Flat href → label for breadcrumbs and chrome. */
export function buildDocHrefLabelMap() {
  const map = new Map([["/", "Home"]]);
  for (const item of navPrimary) {
    map.set(item.href, item.label);
  }
  for (const item of navMore) {
    map.set(item.href, item.label);
  }
  for (const g of navGroups) {
    for (const link of g.links) {
      if (!map.has(link.href)) map.set(link.href, link.label);
    }
  }
  return map;
}

const LABEL_MAP = buildDocHrefLabelMap();

export function docPageLabel(pathname) {
  if (!pathname) return "Page";
  const hit = LABEL_MAP.get(pathname);
  if (hit) return hit;
  const seg = pathname.split("/").filter(Boolean).pop();
  if (!seg) return "Page";
  return seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
