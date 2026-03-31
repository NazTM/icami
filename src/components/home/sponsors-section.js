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
      <div className="mt-10 icami-card flex items-center justify-center py-16 text-center">
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          TBA
        </p>
      </div>
    </section>
  );
}
