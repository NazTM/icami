/** URL-safe slug for heading anchors. */
export function slugify(text) {
  const s = String(text || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 72);
  return s || "section";
}
