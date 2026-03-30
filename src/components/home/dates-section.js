import { SectionHeading } from "@/components/ui/section-heading";
import { importantDates } from "@/config/site";

export function DatesSection() {
  return (
    <section className="scroll-mt-8">
      <SectionHeading
        index="03"
        title="Important dates"
        actionHref="/important-dates"
        actionLabel="Full timeline"
      />
      <ul className="mt-14 grid gap-6 sm:grid-cols-2">
        {importantDates.map((row) => (
          <li
            key={row.label}
            className={`icami-card p-8 ${
              row.highlight ? "icami-card-highlight" : ""
            }`}
          >
            <p className="text-sm font-medium leading-snug text-icami-text">
              {row.label}
            </p>
            <p
              className={`mt-4 font-heading text-3xl tracking-wide ${
                row.highlight ? "text-[#9a7b18]" : "text-icami-text"
              }`}
            >
              {row.date}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
