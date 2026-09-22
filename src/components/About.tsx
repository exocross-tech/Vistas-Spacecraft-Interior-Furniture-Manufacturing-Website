"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView, animate, type Variants } from "framer-motion";

import ShowcaseImg from "@/app/images/Woodworking-Machinery-Showcase.png";

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  sublabel?: string;
  delay?: number;
}

function StatBox({ value, suffix = "", label, sublabel, delay = 0 }: StatItemProps) {
  const statRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statRef, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const controls = animate(0, value, {
        duration: 1.6,
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

  const displayValue = count < 10 && !suffix ? `0${count}` : `${count}${suffix}`;

  return (
    <motion.div
      ref={statRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-start justify-between p-5 sm:p-6 md:p-7 rounded-2xl border border-neutral-200/90 bg-white hover:border-[#8B7355]/40 hover:shadow-md transition-all duration-300 group text-left"
    >
      <div className="flex items-baseline mb-2">
        <span className="text-3.5xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 font-serif">
          {displayValue}
        </span>
      </div>
      <div>
        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-800 group-hover:text-[#8B7355] transition-colors duration-300">
          {label}
        </h4>
        {sublabel && (
          <p className="text-[11px] sm:text-xs text-neutral-500 mt-0.5 font-light">
            {sublabel}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export function About() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-50px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="about" className="relative w-full bg-[#FAF8F5] py-16 sm:py-24 lg:py-28 overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold uppercase tracking-tight text-neutral-900 leading-none">
            ABOUT US
          </h2>
        </motion.div>

        {/* 2-Column Responsive Layout: Left (Story & Copy) & Right (Facility Visual) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-14 lg:mb-16"
        >
          {/* Left Column: Editorial Description & Philosophy (7 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-5 text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-neutral-900 tracking-tight leading-snug">
              Engineered Precision for Architectural & Spacecraft Interiors
            </h3>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
              VISTA specializes in high-precision interior furniture manufacturing and industrial woodworking. Combining automated 5-axis CNC routing, seamless PUR edge banding, and heavy hydraulic thermo-bonding, we deliver bespoke commercial fitouts and luxury residential woodwork built to exacting micro-millimeter tolerances.
            </p>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-light">
              From initial CAD engineering and structural panel preparation to flawless surface finishing, our production facility ensures seamless execution for turnkey corporate interiors, hospitality projects, and bespoke residential cabinetry.
            </p>
          </motion.div>

          {/* Right Column: Facility Visual Card with Watch Video Present CTA (6 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-6">
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[380px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-neutral-200/90 group bg-neutral-950">
              {/* Facility Showcase Image */}
              <Image
                src={ShowcaseImg}
                alt="VISTA Woodworking Machinery & Precision Manufacturing Facility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark warm gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Subtle industrial drafting grid overlay */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Architectural badge at top right */}
              <div className="absolute top-4 right-4 z-10">
                <span className="font-mono text-[10px] sm:text-xs text-white/80 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md tracking-widest uppercase border border-white/10">
                  FACILITY // PHASE II
                </span>
              </div>

              {/* Overlay button in center: 'WATCH VIDEO PRESENT' */}
              <div className="absolute inset-0 flex items-center justify-center p-6 z-20">
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  aria-label="Play manufacturing video"
                  className="group/btn inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/95 hover:bg-white text-neutral-900 shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-neutral-100"
                >
                  <span className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-sm">
                    <svg className="w-2.5 h-2.5 fill-current translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-neutral-900">
                    WATCH VIDEO PRESENT
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Statistics Metric Cards Row: Responsive 3 Columns on Tablet/Desktop, Clean Cards on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          <StatBox
            value={4}
            suffix=""
            label="Advanced Machines"
            sublabel="CNC, Edge Bander, Laser Saw & Press"
            delay={0.1}
          />
          <StatBox
            value={6}
            suffix="+"
            label="Months R&D / Operation"
            sublabel="Continuous precision engineering"
            delay={0.2}
          />
          <StatBox
            value={40}
            suffix="+"
            label="Completed Projects"
            sublabel="Commercial & residential deliverables"
            delay={0.3}
          />
        </div>
      </div>

      {/* Video Modal with Embedded Manufacturing Video */}
      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-700/80 rounded-2xl p-4 sm:p-6 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-3 right-3 text-neutral-400 hover:text-white p-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 transition-colors z-20 cursor-pointer"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-neutral-800 relative shadow-inner">
              <video
                src="/Umaboy_Machinery.mp4"
                controls
                autoPlay
                playsInline
                poster="/images/Woodworking-Machinery-Showcase.png"
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            
            <div className="mt-4 px-2 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2">
              <div>
                <h4 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                  Manufacturing Facility Tour
                </h4>
                <p className="text-xs text-neutral-400">
                  Experience automated CNC routing, edge banding, and precision woodwork assembly in action.
                </p>
              </div>
              <span className="font-mono text-[11px] text-[#8B7355] uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#8B7355]/10 border border-[#8B7355]/30">
                HD 1080P
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
