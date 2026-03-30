"use client";

import { useEffect, useState } from "react";

/**
 * Soft radial glow that follows pointer — reveals depth on the dark hero.
 */
export function HeroSpotlight({ enabled, targetRef }) {
  const [pos, setPos] = useState({ x: 42, y: 38 });

  useEffect(() => {
    if (!enabled) return;
    const el = targetRef?.current;
    if (!el) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return;
      setPos({
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
      });
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    return () => el.removeEventListener("pointermove", onMove);
  }, [enabled, targetRef]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] opacity-100 mix-blend-soft-light"
      style={{
        background: `radial-gradient(
          min(85vw, 720px) circle at ${pos.x}% ${pos.y}%,
          rgba(56, 189, 248, 0.14) 0%,
          rgba(251, 191, 36, 0.06) 28%,
          transparent 58%
        )`,
      }}
      aria-hidden
    />
  );
}
