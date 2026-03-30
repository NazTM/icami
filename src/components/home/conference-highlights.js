import { HighlightBrush } from "@/components/ui/highlight-brush";

/**
 * At-a-glance facts — typography only (icons removed for calmer layout).
 */
export function ConferenceHighlights() {
  return (
    <div>
      <p className="icami-mono-eyebrow mb-10 text-slate-500">01 — conference pulse</p>
      <div className="grid gap-10 border-b border-slate-200/90 pb-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        <div>
        <p className="font-heading text-xl tracking-wide text-icami-text md:text-2xl">
          Peer review
        </p>
        <p className="mt-2 text-sm leading-relaxed text-icami-text-muted">
          <HighlightBrush variant="sky">Double-blind</HighlightBrush>, multi-reviewer
          process.
        </p>
        </div>
        <div>
        <p className="font-heading text-xl tracking-wide text-icami-text md:text-2xl">
          Proceedings
        </p>
        <p className="mt-2 text-sm leading-relaxed text-icami-text-muted">
          <HighlightBrush variant="amber">Indexed</HighlightBrush> publication venue to
          be announced.
        </p>
        </div>
        <div>
        <p className="font-heading text-xl tracking-wide text-icami-text md:text-2xl">
          Applied focus
        </p>
        <p className="mt-2 text-sm leading-relaxed text-icami-text-muted">
          Methods with <HighlightBrush variant="gold">real-world evaluation</HighlightBrush>{" "}
          and impact.
        </p>
        </div>
        <div>
        <p className="font-heading text-xl tracking-wide text-icami-text md:text-2xl">
          Host
        </p>
        <p className="mt-2 text-sm leading-relaxed text-icami-text-muted">
          Conference hub at{" "}
          <HighlightBrush variant="rose">Multimedia University (MMU)</HighlightBrush>,
          Malaysia.
        </p>
        </div>
      </div>
    </div>
  );
}
