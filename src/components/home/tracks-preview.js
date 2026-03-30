import { SectionHeading } from "@/components/ui/section-heading";
import { tracks, tracksHomePreviewCount } from "@/config/site";

export function TracksPreview() {
  const preview = tracks.slice(0, tracksHomePreviewCount);
  return (
    <section className="scroll-mt-8">
      <SectionHeading
        index="04"
        title="Featured tracks"
        actionHref="/tracks"
        actionLabel="All tracks"
      />
      <ul className="mt-14 grid gap-8 md:grid-cols-2">
        {preview.map((t) => (
          <li key={t.slug} className="icami-card p-8">
            <h3 className="text-lg leading-snug tracking-[0.05em] text-icami-text md:text-xl">
              {t.title}
            </h3>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-icami-text-muted">
              {t.summary}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
