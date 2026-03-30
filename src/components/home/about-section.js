import { AboutIllustration } from "@/components/graphics/about-illustration";
import { HighlightBrush } from "@/components/ui/highlight-brush";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section className="scroll-mt-8">
      <SectionHeading index="02" title="About the conference" />
      <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1fr_minmax(0,1.05fr)] lg:gap-16">
        <div className="icami-prose max-w-xl space-y-6 text-[1.05rem] leading-relaxed">
          <p>
            ICAMI brings together researchers and practitioners advancing machine
            intelligence that works in the field: rigorous methods, careful
            evaluation, and measurable{" "}
            <HighlightBrush variant="sky">impact</HighlightBrush>. We emphasize selective,
            high-quality programs and papers that move ideas into practice.
          </p>
          <p>
            The program spans foundations, systems, perception, language, trust,
            edge deployment, and high-impact applications—with a consistent focus on{" "}
            <HighlightBrush variant="amber">applied research</HighlightBrush> and{" "}
            <HighlightBrush variant="rose">responsible innovation</HighlightBrush>.
          </p>
        </div>
        <AboutIllustration className="icami-chamfer w-full max-w-lg justify-self-end shadow-[0_20px_50px_-20px_rgba(0,51,160,0.2)] lg:max-w-none" />
      </div>
    </section>
  );
}
