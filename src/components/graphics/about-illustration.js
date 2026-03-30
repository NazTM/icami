/**
 * Abstract “network / intelligence” graphic — SVG, no external assets.
 */
export function AboutIllustration({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="ab-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0033a0" stopOpacity="0.35" />
          <stop offset="55%" stopColor="#1e5cff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#c9a227" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="ab-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0033a0" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#64748b" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect
        width="400"
        height="280"
        rx="24"
        fill="url(#ab-grad)"
        opacity="0.5"
      />
      <circle cx="80" cy="70" r="8" fill="#0033a0" opacity="0.85" />
      <circle cx="200" cy="50" r="10" fill="#1e5cff" opacity="0.7" />
      <circle cx="320" cy="90" r="7" fill="#c9a227" opacity="0.8" />
      <circle cx="120" cy="160" r="9" fill="#0033a0" opacity="0.55" />
      <circle cx="280" cy="180" r="11" fill="#0f172a" opacity="0.35" />
      <circle cx="200" cy="220" r="8" fill="#1e5cff" opacity="0.5" />
      <path
        d="M80 70 L200 50 L320 90 M200 50 L120 160 M320 90 L280 180 M120 160 L200 220 M280 180 L200 220"
        stroke="url(#ab-line)"
        strokeWidth="1.5"
      />
      <path
        d="M200 50 L120 160 M320 90 L200 220"
        stroke="url(#ab-line)"
        strokeWidth="1"
        opacity="0.6"
      />
      <rect
        x="40"
        y="200"
        width="320"
        height="48"
        rx="8"
        fill="white"
        fillOpacity="0.45"
      />
      <path
        d="M56 224h88M56 232h120M200 224h160"
        stroke="#94a3b8"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}
