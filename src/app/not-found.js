"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/page-shell";
import { springSoft } from "@/components/motion/transitions";

export default function NotFound() {
  return (
    <PageShell>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={springSoft}
      >
        <div className="flex items-stretch gap-4">
          <span className="icami-accent-bar-light shrink-0 self-stretch" aria-hidden />
          <h1 className="font-heading text-4xl tracking-[0.08em] text-icami-text">
            Page not found
          </h1>
        </div>
        <p className="mt-8 max-w-md text-icami-text-muted">
          The page you requested does not exist or has moved.
        </p>
        <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
          <Link href="/" className="icami-inline-link mt-10 inline-flex min-h-11 items-center font-semibold">
            Back to home
            <span aria-hidden className="icami-inline-link-arrow">
              →
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </PageShell>
  );
}
