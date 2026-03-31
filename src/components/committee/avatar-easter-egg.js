"use client";

import Image from "next/image";
import { useState } from "react";

export function AvatarEasterEgg({
  initials,
  frameClassName,
  imageSrc,
  imageAlt,
}) {
  const [flipped, setFlipped] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [wink, setWink] = useState(0);
  const [reduceMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true
    );
  });

  const fireConfetti = () => {
    const colors = [
      "rgba(147, 51, 234, 0.55)", // purple
      "rgba(236, 72, 153, 0.45)", // pink
      "rgba(59, 130, 246, 0.40)", // blue
      "rgba(245, 158, 11, 0.40)", // amber
    ];
    const seed = `${Date.now()}-${Math.round(performance.now())}`;
    setConfetti(
      Array.from({ length: 10 }).map((_, i) => {
        const x = (Math.random() * 26 - 13).toFixed(1);
        const y = (Math.random() * 18 - 6).toFixed(1);
        const r = (Math.random() * 220 - 110).toFixed(0);
        const d = (Math.random() * 140).toFixed(0);
        return {
          key: `${seed}-${i}`,
          x,
          y,
          r,
          d,
          c: colors[i % colors.length],
        };
      }),
    );
  };

  return (
    <button
      type="button"
      onClick={() => {
        if (!reduceMotion) {
          fireConfetti();
          setWink((w) => w + 1);
          setFlipped((v) => !v);
        } else {
          setFlipped((v) => !v);
        }
      }}
      className={`group relative h-11 w-11 shrink-0 cursor-pointer rounded-full border ${frameClassName} [perspective:800px]`}
      aria-label="Rajieb easter egg"
    >
      {/* Wink fly-by */}
      {!reduceMotion ? (
        <span
          key={wink}
          className="pointer-events-none absolute -right-2 -top-2 select-none text-base opacity-0"
          style={{
            animation: wink
              ? "icami-wink-fly 680ms cubic-bezier(.2,.7,.2,1) both"
              : undefined,
            filter: "drop-shadow(0 6px 10px rgba(15,23,42,0.20))",
          }}
          aria-hidden
        >
          😉
        </span>
      ) : null}

      {/* Confetti burst */}
      {confetti.map((p) => (
        <span
          key={p.key}
          className="pointer-events-none absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-[2px] opacity-0"
          style={{
            background: p.c,
            transform: `translate(-50%,-50%)`,
            animation: reduceMotion
              ? undefined
              : `icami-confetti 520ms ease-out ${p.d}ms both`,
            "--tx": `${p.x}px`,
            "--ty": `${p.y}px`,
            "--tr": `${p.r}deg`,
          }}
        />
      ))}

      {/* Flip */}
      <span
        className={`relative block h-full w-full rounded-full transition duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <span className="absolute inset-0 overflow-hidden rounded-full [backface-visibility:hidden]">
          <span
            className={`grid h-full w-full place-items-center text-sm font-semibold ${frameClassName}`}
            aria-hidden
          >
            {initials || "—"}
          </span>
        </span>
        <span className="absolute inset-0 overflow-hidden rounded-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="44px"
            className="object-cover saturate-[1.05] contrast-[1.06]"
            priority
          />
          <span className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/10" />
        </span>
      </span>

      <style jsx>{`
        @keyframes icami-confetti {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(
                calc(-50% + var(--tx)),
                calc(-50% + var(--ty))
              )
              rotate(var(--tr))
              scale(0.8);
          }
        }

        @keyframes icami-wink-fly {
          0% {
            opacity: 0;
            transform: translate(0, 0) rotate(-8deg) scale(0.95);
          }
          12% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(-10px, -26px) rotate(10deg) scale(1.05);
          }
        }
      `}</style>
    </button>
  );
}

