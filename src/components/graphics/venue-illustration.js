/** Stylized campus / city block — SVG placeholder until real photography ships. */
export function VenueIllustration({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="vn-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0e7ff" />
          <stop offset="100%" stopColor="#f8fafc" />
        </linearGradient>
        <linearGradient id="vn-bld" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0033a0" />
          <stop offset="100%" stopColor="#0a1744" />
        </linearGradient>
      </defs>
      <rect width="420" height="220" rx="16" fill="url(#vn-sky)" />
      <ellipse cx="210" cy="200" rx="180" ry="28" fill="#cbd5e1" opacity="0.35" />
      <rect x="48" y="72" width="72" height="108" rx="4" fill="url(#vn-bld)" />
      <rect x="60" y="88" width="16" height="20" fill="#93c5fd" opacity="0.5" />
      <rect x="92" y="88" width="16" height="20" fill="#93c5fd" opacity="0.5" />
      <rect x="60" y="120" width="16" height="20" fill="#93c5fd" opacity="0.35" />
      <rect x="92" y="120" width="16" height="20" fill="#93c5fd" opacity="0.35" />
      <rect x="140" y="48" width="96" height="132" rx="4" fill="#1e3a5f" />
      <rect x="156" y="64" width="20" height="28" fill="#bfdbfe" opacity="0.45" />
      <rect x="188" y="64" width="20" height="28" fill="#bfdbfe" opacity="0.45" />
      <rect x="220" y="64" width="20" height="28" fill="#bfdbfe" opacity="0.45" />
      <rect x="156" y="104" width="20" height="28" fill="#bfdbfe" opacity="0.3" />
      <rect x="188" y="104" width="20" height="28" fill="#bfdbfe" opacity="0.3" />
      <rect x="220" y="104" width="20" height="28" fill="#bfdbfe" opacity="0.3" />
      <polygon points="188,36 244,48 244,52 132,52 132,48" fill="#0f172a" opacity="0.85" />
      <rect x="260" y="92" width="112" height="88" rx="4" fill="#2563eb" opacity="0.85" />
      <rect x="276" y="108" width="24" height="18" rx="2" fill="#e0e7ff" opacity="0.7" />
      <rect x="312" y="108" width="24" height="18" rx="2" fill="#e0e7ff" opacity="0.7" />
      <circle cx="360" cy="52" r="22" fill="#fbbf24" opacity="0.9" />
    </svg>
  );
}
