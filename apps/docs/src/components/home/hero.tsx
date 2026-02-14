"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { WithTooltip } from "./shared";

export function Hero() {
  return (
    <header className="relative mb-24">
      <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-altus-primary/20 via-transparent to-transparent hidden xl:block" />
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-altus-primary/5 border border-altus-primary/10 text-[10px] font-bold tracking-[0.2em] text-altus-primary uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-altus-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-altus-primary"></span>
          </span>
          Slick Kinetic Motion
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[clamp(2.5rem,8vw,5.5rem)] font-black tracking-tight leading-[0.9] uppercase"
        >
          Constructing <br />
          <span className="text-altus-primary italic">Digital Excellence.</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end"
        >
          <p className="text-altus-fg/50 text-xl font-medium leading-tight tracking-tight">
            A high-precision design system meticulously crafted for
            <span className="text-altus-fg"> creative portfolios </span>
            and performance-critical interfaces.
          </p>
          <div className="flex gap-4">
            <WithTooltip label=".btn-altus">
              <Link href="/docs/installation" className="btn-altus px-8 h-12 flex items-center justify-center">
                View Documentation
              </Link>
            </WithTooltip>
            <WithTooltip label=".btn-altus-outline">
              <a 
                href="https://github.com/Skullmc1/altus-ui" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-altus-outline px-8 h-12 flex items-center justify-center"
              >
                Github
              </a>
            </WithTooltip>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
