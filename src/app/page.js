import { HomePageClient } from "@/components/home/home-page-client";
import { HeroSection } from "@/components/home/hero-section";
import { getAnnouncements } from "@/lib/announcements";
import { site } from "@/config/site";

/** Negative margin only — padding lives on `<HeroSection>` so gradients/ambience paint under the transparent nav. */
const heroPullUnderNav = "-mt-[calc(4rem+env(safe-area-inset-top,0px))]";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: site.fullTitle,
  description: site.tagline,
  startDate: "2026-12-01",
  endDate: "2026-12-03",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Multimedia University (MMU)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cyberjaya",
      addressRegion: "Selangor",
      addressCountry: "MY",
    },
  },
  image: `${site.url}/og.png`,
  url: site.url,
  organizer: {
    "@type": "Organization",
    name: "AMIR Lab",
    url: "https://amirl.org",
  },
};

export default async function HomePage() {
  const announcements = (await getAnnouncements()).slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={`relative z-0 bg-slate-50 ${heroPullUnderNav}`}>
        <HeroSection />
      </div>
      <div className="bg-slate-100">
        <HomePageClient announcements={announcements} />
      </div>
    </>
  );
}
