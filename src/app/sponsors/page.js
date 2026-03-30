import { DocumentPage } from "@/components/page/document-page";
import Image from "next/image";
import { sponsorGroups } from "@/config/site";

export const metadata = {
  title: "Sponsors",
};

export default function SponsorsPage() {
  const sponsorEntries = sponsorGroups.flatMap((group) =>
    group.items.map((org) => ({ ...org, group: group.title })),
  );

  return (
    <DocumentPage title="Sponsors & partners" eyebrow="Support">
      <p>
        Industry and institutional partners help ICAMI deliver a strong program
        and accessible attendance. Sponsorship tiers, branding opportunities,
        and exhibition space will be described in the sponsorship prospectus.
      </p>
      <p>
        For inquiries, please email the organizing committee using the address
        in the site footer.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {sponsorEntries.map((org) => {
          const card = (
            <article className="icami-card flex aspect-square flex-col items-center justify-center gap-3 p-5 text-center">
              <Image
                src={org.logo}
                alt={`${org.name} logo`}
                width={360}
                height={360}
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
    </DocumentPage>
  );
}
