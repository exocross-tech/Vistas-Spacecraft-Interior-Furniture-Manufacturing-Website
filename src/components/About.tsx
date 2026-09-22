"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

function StatBox({ value, suffix = "", label, delay = 0 }: StatItemProps) {
  const statRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statRef, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const controls = animate(0, value, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          setCount(Math.round(latest));
        },
        onComplete: () => {
          setCount(value);
        },
      });

      return () => controls.stop();
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={statRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl border border-neutral-200 bg-neutral-50/50 hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-300 shadow-sm text-center group"
    >
      <div className="flex items-baseline justify-center">
        <span className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
          {count}
          {suffix}
        </span>
      </div>
      <span className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500 group-hover:text-neutral-700 transition-colors duration-300">
        {label}
      </span>
    </motion.div>
  );
}

export function About() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-50px" });

  const imageRef = useRef<HTMLDivElement>(null);
  const isImageInView = useInView(imageRef, { once: true, margin: "-50px" });

  const rightColRef = useRef<HTMLDivElement>(null);
  const isRightColInView = useInView(rightColRef, { once: true, margin: "-50px" });

  return (
    <section id="about" className="relative w-full bg-[#FAF8F5] py-16 sm:py-24 lg:py-28 overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading: 'ABOUT US' (uppercase, bold, left-aligned) */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 sm:mb-14 md:mb-16 text-left"
        >
          <div className="inline-flex items-center gap-2.5 mb-3 text-[#8B7355]">
            <span className="h-px w-8 bg-[#8B7355]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold">
              Who We Are
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-neutral-900">
            ABOUT US
          </h2>
        </motion.div>

        {/* Layout: Left image card, Right 3 stats */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* Left: Large image area with rounded corners */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full lg:w-[62%] h-[280px] sm:h-[340px] md:h-[380px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-neutral-200"
          >
            {/* Warm industrial gradient background placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a1c15] via-[#483226] to-[#1c130e]" />

            {/* Subtle industrial grid and lighting accents */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
                backgroundSize: "36px 36px",
              }}
            />
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#8B7355]/30 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-amber-600/20 blur-3xl pointer-events-none" />

            {/* Overlay button in center: 'WATCH VIDEO PRESENT' */}
            <div className="absolute inset-0 flex items-center justify-center p-6 z-20">
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                aria-label="Play manufacturing video"
                className="group/btn inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/95 hover:bg-white text-neutral-900 shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 fill-current translate-x-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-neutral-900">
                  WATCH VIDEO PRESENT
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right: 3 Stat Boxes in a row */}
          <motion.div
            ref={rightColRef}
            initial={{ opacity: 0, x: 40 }}
            animate={isRightColInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="w-full lg:w-[38%] grid grid-cols-3 gap-3 sm:gap-4"
          >
            <StatBox value={4} suffix="" label="MACHINES" delay={0.1} />
            <StatBox value={6} suffix="" label="MONTHS" delay={0.2} />
            <StatBox value={40} suffix="+" label="PROJECTS" delay={0.3} />
          </motion.div>
        </div>
      </div>

      {/* Video Modal Placeholder */}
      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-700 rounded-2xl p-6 sm:p-8 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="aspect-video w-full rounded-xl bg-neutral-800 border border-neutral-700 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 fill-current text-[#8B7355]" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-white mb-2">
                Manufacturing Facility Tour
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
                Experience our automated CNC routing, precision edge banding, and interior assembly lines in action.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
