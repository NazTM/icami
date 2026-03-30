import Link from "next/link";
import { VenueIllustration } from "@/components/graphics/venue-illustration";
import { SectionHeading } from "@/components/ui/section-heading";
import { HighlightBrush } from "@/components/ui/highlight-brush";
import { site } from "@/config/site";

export function VenuePreview() {
  return (
    <section className="scroll-mt-8 pb-4">
      <SectionHeading index="07" title="Venue" />
      <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <VenueIllustration className="icami-chamfer w-full shadow-[0_24px_60px_-28px_rgba(15,23,42,0.35)]" />
        <div>
          <p className="text-[1.05rem] leading-relaxed text-icami-text-muted">
            ICAMI 2026 will be held at{" "}
            <HighlightBrush variant="sky" className="font-medium">
              {site.location}
            </HighlightBrush>
            . Travel, local access, and suggested accommodation will be published on
            the venue page.
          </p>
          <Link
            href="/venue"
            className="icami-inline-link mt-10 inline-flex min-h-11 items-center font-medium"
          >
            Venue & travel information
            <span aria-hidden className="icami-inline-link-arrow">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
