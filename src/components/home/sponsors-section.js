import { SectionHeading } from "@/components/ui/section-heading";
import { HighlightBrush } from "@/components/ui/highlight-brush";
import Image from "next/image";
import { sponsorGroups } from "@/config/site";

export function SponsorsSection() {
  const sponsorEntries = sponsorGroups.flatMap((group) =>
    group.items.map((org) => ({ ...org, group: group.title })),
  );

  return (
    <section className="scroll-mt-8">
      <SectionHeading index="06" title="Sponsors & partners" />
      <p className="mt-12 max-w-3xl text-[1.05rem] leading-relaxed text-icami-text-muted">
        We are grateful to organizations that support ICAMI.{" "}
        <HighlightBrush variant="gold">Sponsor packages</HighlightBrush> and
        visibility opportunities will be listed here as agreements are finalized.
      </p>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {sponsorEntries.map((org) => {
          const card = (
            <article className="icami-card flex aspect-square flex-col items-center justify-center gap-3 p-4 text-center">
              <Image
                src={org.logo}
                alt={`${org.name} logo`}
                width={320}
                height={320}
                className="h-auto max-h-[62%] w-auto max-w-[72%] object-contain"
              />
              <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                {org.group}
              </p>
            </article>
          );
          return org.href ? (
            <a
              key={`${org.group}-${org.name}`}
              href={org.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:-translate-y-0.5"
              aria-label={org.name}
            >
              {card}
            </a>
          ) : (
            <div key={`${org.group}-${org.name}`}>{card}</div>
          );
        })}
      </div>
    </section>
  );
}
