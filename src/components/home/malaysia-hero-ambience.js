/**
 * Abstract Malaysian visual cues — not literal symbols: batik “parang” wave rhythm,
 * songket shimmer (CSS), strait dusk palette, and a wau bulan–inspired sky arc.
 */
export function MalaysiaHeroAmbience() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Batik-inspired flowing waves — blade / cloud motifs, very low contrast */}
      <svg
        className="icami-hero-batik-waves absolute bottom-[-5%] left-1/2 h-[min(52vh,400px)] w-[220%] max-w-none -translate-x-1/2 opacity-[0.12] sm:bottom-0 sm:opacity-[0.15]"
        viewBox="0 0 1200 320"
        preserveAspectRatio="xMidYMax meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="icami-batik-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
            <stop offset="35%" stopColor="#fbbf24" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#f472b6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <path
          stroke="url(#icami-batik-stroke)"
          strokeWidth="1.1"
          strokeLinecap="round"
          d="M0 95 C180 45 380 145 600 95 S1020 35 1200 85"
        />
        <path
          stroke="url(#icami-batik-stroke)"
          strokeWidth="0.85"
          strokeLinecap="round"
          opacity="0.85"
          d="M0 140 C200 95 400 175 620 130 S1000 90 1200 125"
        />
        <path
          stroke="url(#icami-batik-stroke)"
          strokeWidth="0.7"
          strokeLinecap="round"
          opacity="0.7"
          d="M0 185 C220 155 420 210 640 175 S1040 140 1200 168"
        />
        <path
          stroke="url(#icami-batik-stroke)"
          strokeWidth="0.55"
          strokeLinecap="round"
          opacity="0.55"
          d="M0 228 C240 200 460 248 660 215 S1060 185 1200 208"
        />
      </svg>

      {/* Crescent arc — evokes wau bulan / coastal moon without depicting a kite */}
      <svg
        className="absolute -right-[12%] top-[-6%] h-[min(42vmin,380px)] w-[min(42vmin,380px)] opacity-[0.09] sm:right-0 sm:top-0 sm:opacity-[0.11]"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="icami-wau-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#c9a227" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path
          d="M 165 40 A 88 88 0 1 0 40 155"
          stroke="url(#icami-wau-gold)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M 155 52 A 72 72 0 1 0 48 142"
          stroke="url(#icami-wau-gold)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>

      {/* Soft “firefly” dots — rainforest / evening (Malaysian night garden) */}
      <div className="icami-hero-fireflies absolute inset-0" />
    </div>
  );
}
