import { SectionHeading } from "@/components/ui/section-heading";
import { HighlightBrush } from "@/components/ui/highlight-brush";

export function SponsorsSection() {
  return (
    <section className="scroll-mt-8">
      <SectionHeading index="06" title="Sponsors & partners" />
      <p className="mt-12 max-w-3xl text-[1.05rem] leading-relaxed text-icami-text-muted">
        We are grateful to organizations that support ICAMI.{" "}
        <HighlightBrush variant="gold">Sponsor packages</HighlightBrush> and
        visibility opportunities will be listed here as agreements are finalized.
      </p>
      <div className="icami-chamfer mt-10 flex min-h-[8rem] items-center justify-center border border-dashed border-slate-300/80 bg-gradient-to-br from-white via-slate-50/80 to-blue-50/20 px-6 py-12 text-center text-sm text-icami-text-muted">
        Sponsor logos and tiers will appear here when confirmed.
      </div>
    </section>
  );
}
