"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HeroSpotlight } from "@/components/home/hero-spotlight";
import { MalaysiaHeroAmbience } from "@/components/home/malaysia-hero-ambience";
import {
  staggerContainer,
  springSnappy,
} from "@/components/motion/transitions";
import { site } from "@/config/site";
import { useRef } from "react";

const heroTopPad = "pt-[calc(2rem+4rem+env(safe-area-inset-top,0px))]";

const MARQUEE =
  "Applied machine intelligence · MMU · Malaysia · Systems that ship · ICAMI · Neural + real world · Deployed models · ";

/** Chamfered polygon — industrial CTA, not pills */
const chamfer =
  "[clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,14px_100%,0_calc(100%-14px))]";

function HudFrame() {
  const arm = "absolute h-5 w-5 border-white/25 sm:h-6 sm:w-6";
  return (
    <div
      className="pointer-events-none absolute inset-2 z-[2] sm:inset-4 md:inset-6"
      aria-hidden
    >
      <span className={`${arm} left-0 top-0 border-l-2 border-t-2`} />
      <span className={`${arm} right-0 top-0 border-r-2 border-t-2`} />
      <span className={`${arm} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${arm} bottom-0 right-0 border-b-2 border-r-2`} />
    </div>
  );
}

function HeroMarquee() {
  return (
    <div className="icami-hero-marquee relative z-[5] -mx-4 mt-10 overflow-hidden border-y border-white/[0.06] bg-black/20 py-3 sm:-mx-6 md:-mx-10">
      <div className="icami-hero-marquee-track font-mono text-[0.65rem] uppercase tracking-[0.35em] text-sky-200/35">
        <span className="shrink-0 whitespace-nowrap" aria-hidden>
          {MARQUEE}
        </span>
        <span className="shrink-0 whitespace-nowrap" aria-hidden>
          {MARQUEE}
        </span>
      </div>
    </div>
  );
}

export function HeroSection() {
  const reduce = useReducedMotion();
  const shellRef = useRef(null);

  const item = reduce
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 22 },
        visible: { opacity: 1, y: 0, transition: springSnappy },
      };

  return (
    <section
      ref={shellRef}
      className={`icami-hero-atmosphere relative isolate min-h-[min(100svh,56rem)] overflow-hidden ${heroTopPad} pb-10 sm:pb-14 md:min-h-[min(100svh,58rem)] md:pb-16`}
    >
      <div className="icami-hero-songket" aria-hidden />
      <MalaysiaHeroAmbience />
      <div className="icami-hero-grid" aria-hidden />
      <div className="icami-hero-vignette" aria-hidden />
      <HeroSpotlight enabled={!reduce} targetRef={shellRef} />

      {/* Film grain — ultra subtle */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      {/* Giant hollow type — editorial wrecking ball */}
      <div
        className="pointer-events-none absolute -right-[18%] top-[8%] z-[2] select-none sm:-right-[10%] md:top-[12%] lg:right-0"
        aria-hidden
      >
        <p
          className="font-heading text-[clamp(5.5rem,36vw,20rem)] leading-[0.78] tracking-[0.02em] text-transparent"
          style={{
            WebkitTextStroke: "max(1px, 0.06vw) rgba(255,255,255,0.11)",
          }}
        >
          ICAMI
        </p>
      </div>

      <p
        className="pointer-events-none absolute bottom-[22%] left-[-4%] z-[2] select-none font-heading text-[clamp(3.2rem,18vw,11rem)] leading-none text-white/[0.035] sm:left-0 md:bottom-[18%]"
        aria-hidden
      >
        2026
      </p>

      <p
        className="pointer-events-none absolute bottom-[36%] right-1 z-[2] hidden select-none font-mono text-[0.55rem] uppercase tracking-[0.45em] text-sky-200/20 md:block"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        aria-hidden
      >
        {site.location.split(",")[0]}
      </p>

      <HudFrame />

      <motion.div
        className="relative z-20 mx-auto flex min-h-[min(100svh-5rem,52rem)] max-w-7xl flex-col px-4 sm:px-6 md:px-10 lg:px-12"
        initial="hidden"
        animate="visible"
        variants={staggerContainer(reduce ? 0 : 0.06)}
      >
        {/* Top bar — asymmetric */}
        <motion.div variants={item} className="flex items-start pt-1">
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-3 rounded-sm border border-dashed border-white/10 sm:-inset-4"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -left-1 top-1/2 h-3 w-px -translate-y-1/2 bg-amber-400/60"
              aria-hidden
            />
            <Image
              src="/icami.png"
              alt={`${site.shortTitle} logo`}
              width={300}
              height={150}
              className="relative h-auto w-[clamp(7.5rem,28vw,11rem)] object-contain opacity-95 drop-shadow-[0_4px_32px_rgba(30,92,255,0.35)] sm:w-[clamp(8.5rem,22vw,12.5rem)]"
              priority
            />
          </div>
        </motion.div>

        {/* Main stack — left-rail magazine */}
        <div className="flex flex-1 flex-col justify-end pb-6 md:justify-center md:pb-10 lg:max-w-[min(100%,36rem)] lg:justify-end lg:pb-16 xl:max-w-[38rem]">
          <motion.div variants={item} className="relative">
            <div className="mb-4 flex items-stretch gap-3 sm:mb-5">
              <div
                className="w-1 shrink-0 bg-gradient-to-b from-amber-400 via-sky-400 to-transparent opacity-90"
                aria-hidden
              />
              <div className="min-w-0 pt-0.5">
                <p className="font-mono text-[0.65rem] text-amber-200/55">
                  index 01
                </p>
                <p className="mt-1 max-w-sm text-[0.68rem] font-semibold uppercase leading-snug tracking-[0.22em] text-zinc-400 sm:text-[0.7rem] sm:tracking-[0.26em]">
                  {site.fullTitle}
                </p>
              </div>
            </div>

            <h1 className="font-heading text-[clamp(3.75rem,16vw,9rem)] leading-[0.82] tracking-[0.03em] text-white drop-shadow-[0_0_60px_rgba(30,92,255,0.15)]">
              <span className="block">ICAMI</span>
              <span className="mt-1 block pl-[0.08em] font-heading text-[clamp(1.35rem,5.5vw,3.25rem)] tracking-[0.28em] text-sky-200/85">
                2026
              </span>
            </h1>

            <p className="mt-6 max-w-md border-l border-white/10 pl-4 text-base leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg">
              {site.tagline}
            </p>
          </motion.div>
        </div>

        {/* Bottom deck */}
        <motion.div variants={item} className="flex flex-col gap-6 lg:gap-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/venue"
              className={`group inline-flex max-w-md flex-col border border-white/12 bg-white/[0.04] px-4 py-3 backdrop-blur-sm transition-colors hover:border-sky-400/30 hover:bg-white/[0.07] sm:px-5 sm:py-3.5 ${chamfer}`}
            >
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-sky-300/75">
                venue / host
              </span>
              <span className="mt-1.5 text-sm font-medium leading-snug text-zinc-100">
                {site.location}
              </span>
            </Link>
            <span
              className={`inline-flex items-center justify-center border border-dashed border-white/15 bg-black/25 px-4 py-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 backdrop-blur-sm sm:py-3.5 ${chamfer}`}
            >
              [ December 2026 ]
            </span>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/call-for-papers"
                className={`icami-btn-primary inline-flex min-h-[50px] min-w-[12rem] items-center justify-center rounded-none px-8 text-sm font-semibold tracking-wide ${chamfer}`}
              >
                Call for Papers
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/submission"
                className={`inline-flex min-h-[50px] min-w-[12rem] items-center justify-center rounded-none border border-white/20 bg-transparent px-8 text-sm font-semibold tracking-wide text-zinc-200 transition-colors hover:border-sky-400/40 hover:bg-white/[0.05] hover:text-white ${chamfer}`}
              >
                Submit Paper
              </Link>
            </motion.div>
          </div>

          <HeroMarquee />
        </motion.div>

        {!reduce ? (
          <motion.div
            className="pointer-events-none absolute bottom-4 left-1/2 z-20 h-8 w-5 -translate-x-1/2 rounded-sm border border-white/15 sm:bottom-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.75, 0.3], y: [0, 4, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
        ) : null}
      </motion.div>
    </section>
  );
}
