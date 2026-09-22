'use client';

import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  code: string;
  gradient: string;
  glowColor: string;
  accentBorder: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    id: 'cnc-routing',
    title: 'Cold Press',
    badge: 'MACHINERY',
    code: 'SPEC // CNC-5AX',
    gradient: 'from-[#3a2416] via-[#24160d] to-[#140c07]',
    glowColor: 'rgba(217, 119, 6, 0.18)',
    accentBorder: 'rgba(217, 119, 6, 0.3)',
    description: 'High-speed 5-axis computerized milling for intricate 3D contoured woodwork, architectural panels, and micro-tolerance joinery.',
    icon: (
      <svg className="w-8 h-8 text-amber-300/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 0021 17.25l-5.83-5.83M11.42 15.17l2.496-3.03c.315-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233l5.2-1.6m-12.8 12.8l2-6" />
        <circle cx="6" cy="18" r="1.5" stroke="currentColor" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    id: 'edge-banding',
    title: 'Automated Edge Bander',
    badge: 'MACHINERY',
    code: 'SPEC // EDG-800',
    gradient: 'from-[#373d45] via-[#242930] to-[#12161a]',
    glowColor: 'rgba(148, 163, 184, 0.18)',
    accentBorder: 'rgba(148, 163, 184, 0.3)',
    description: 'Zero-joint seamless PUR hot-melt edge processing providing waterproof protection, laser beveling, and clean aesthetic lines.',
    icon: (
      <svg className="w-8 h-8 text-slate-300/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16M8 6v12M16 6v12" />
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    id: 'laser-engraving',
    title: 'Cut Saw',
    badge: 'MACHINERY',
    code: 'SPEC // LSR-PRO',
    gradient: 'from-[#3d2b20] via-[#281b13] to-[#150d09]',
    glowColor: 'rgba(245, 158, 11, 0.18)',
    accentBorder: 'rgba(245, 158, 11, 0.3)',
    description: 'Sub-millimeter CO2 laser etching, dovetail interlocking cuts, and decorative custom inlay work on exotic hardwoods and veneers.',
    icon: (
      <svg className="w-8 h-8 text-amber-200/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v3m0 14v3M2 12h3m14 0h3m-3.5-6.5l-2 2m-9 9l-2 2m0-13l2 2m9 9l2 2" />
      </svg>
    ),
  },
  {
    id: 'hydraulic-press',
    title: 'Multi Boaring',
    badge: 'MACHINERY',
    code: 'SPEC // HYD-200T',
    gradient: 'from-[#2e3338] via-[#1c2024] to-[#0e1012]',
    glowColor: 'rgba(161, 161, 170, 0.18)',
    accentBorder: 'rgba(161, 161, 170, 0.3)',
    description: '200-ton multi-daylight hydraulic thermo-bonding for high-pressure laminates, curved veneer molds, and structural composite panels.',
    icon: (
      <svg className="w-8 h-8 text-zinc-300/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h18M3 16h18M7 8v8M17 8v8M12 4v4m0 8v4" />
        <rect x="5" y="8" width="14" height="8" rx="1" stroke="currentColor" strokeWidth={1.5} />
      </svg>
    ),
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-60px' });

  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: '-60px' });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
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
    <section id="services" className="relative w-full bg-[#FAF8F5] py-16 sm:py-24 lg:py-28 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading: 'OUR SERVICES' (uppercase, bold, left-aligned, serif-looking) */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 sm:mb-16 md:mb-20 text-left"
        >
          <div className="inline-flex items-center gap-2.5 mb-3.5 text-stone-500">
            <span className="h-px w-8 bg-stone-400" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium font-mono text-stone-500">
              Manufacturing Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold uppercase tracking-tight text-neutral-900 leading-none">
            OUR SERVICES
          </h2>
        </motion.div>

        {/* 2x2 Grid on Desktop (2 columns), 1 Column on Mobile */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group flex flex-col text-left"
            >
              {/* Card Image Area with rounded-xl and industrial gradients */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500 border border-neutral-200/80 bg-neutral-900">
                {/* Industrial gradient background (warm browns & greys) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-transform duration-700 ease-out group-hover:scale-105`}
                />

                {/* Subtle radial glow accent */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60"
                  style={{
                    background: `radial-gradient(circle at 75% 25%, ${service.glowColor} 0%, transparent 65%)`,
                  }}
                  aria-hidden="true"
                />

                {/* Industrial drafting grid overlay */}
                <div
                  className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '28px 28px',
                  }}
                  aria-hidden="true"
                />

                {/* Architectural crosshair line accents */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none opacity-25 group-hover:opacity-40 transition-opacity duration-500"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <line x1="8%" y1="0" x2="8%" y2="100%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" className="text-white/40" />
                  <line x1="92%" y1="0" x2="92%" y2="100%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" className="text-white/40" />
                  <line x1="0" y1="85%" x2="100%" y2="85%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" className="text-white/40" />
                </svg>

                {/* Top Corner Technical Code Label */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="font-mono text-[10px] sm:text-xs text-white/50 tracking-widest uppercase">
                    {service.code}
                  </span>
                </div>

                {/* Bottom Corner Sequence Index */}
                <div className="absolute bottom-3 left-4 z-10">
                  <span className="font-mono text-[11px] sm:text-xs font-semibold text-white/40 tracking-wider">
                    0{index + 1} 
                  </span>
                </div>

                {/* Center Machinery Graphic Icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-white/25 transition-all duration-500">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Text Area Below Image */}
              <div className="mt-5 flex flex-col items-start gap-2.5">
                {/* Small 'MACHINERY' tag/badge with subtle styling */}
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase bg-stone-100 text-stone-700 border border-stone-200/90 shadow-2xs">
                  {service.badge}
                </span>

                {/* Service Name text below image */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-stone-700 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Brief descriptive text */}
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed line-clamp-2">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
