import { HomePageClient } from "@/components/home/home-page-client";
import { HeroSection } from "@/components/home/hero-section";
import { getAnnouncements } from "@/lib/announcements";

/** Negative margin only — padding lives on `<HeroSection>` so gradients/ambience paint under the transparent nav. */
const heroPullUnderNav = "-mt-[calc(4rem+env(safe-area-inset-top,0px))]";

export default async function HomePage() {
  const announcements = (await getAnnouncements()).slice(0, 4);

  return (
    <>
      <div className={`relative z-0 bg-slate-50 ${heroPullUnderNav}`}>
        <HeroSection />
      </div>
      <div className="bg-slate-100">
        <HomePageClient announcements={announcements} />
      </div>
    </>
  );
}
