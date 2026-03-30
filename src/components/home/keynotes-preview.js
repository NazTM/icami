import { SectionHeading } from "@/components/ui/section-heading";
import { HighlightBrush } from "@/components/ui/highlight-brush";

export function KeynotesPreview() {
  return (
    <section className="scroll-mt-8">
      <SectionHeading index="05" title="Keynote speakers" />
      <div className="icami-chamfer mt-14 border border-dashed border-icami-border/80 bg-gradient-to-br from-slate-50/95 via-white to-sky-50/30 p-10 shadow-inner md:p-12">
        <p className="max-w-2xl text-lg leading-relaxed text-icami-text-muted">
          Keynote speakers and talk titles will be announced in the coming months.
          Expect <HighlightBrush variant="sky">invited leaders</HighlightBrush> from
          applied ML, systems, and industry.
        </p>
      </div>
    </section>
  );
}
