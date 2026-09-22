'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-72px)] min-h-[calc(100dvh-72px)] flex flex-col justify-end overflow-hidden"
    >
      {/* Base Background: Warm Rich Brown Industrial Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #3d2b1f 0%, #2c1810 40%, #1a1a1a 100%)',
        }}
      />

      {/* Workshop Interior Pattern Overlay: Drafting grid & subtle timber rafter structure */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            {/* Precision industrial workshop grid */}
            <pattern
              id="workshop-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="#ffffff"
                strokeWidth="0.75"
                strokeOpacity="0.25"
              />
              <circle cx="2" cy="2" r="1" fill="#f59e0b" fillOpacity="0.3" />
            </pattern>

            {/* Subtle vertical woodgrain slat overlay */}
            <pattern
              id="wood-slats"
              width="96"
              height="96"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="0"
                x2="96"
                y2="0"
                stroke="#d97706"
                strokeWidth="0.5"
                strokeOpacity="0.15"
              />
              <line
                x1="24"
                y1="0"
                x2="24"
                y2="96"
                stroke="#ffffff"
                strokeWidth="0.5"
                strokeOpacity="0.1"
              />
              <line
                x1="72"
                y1="0"
                x2="72"
                y2="96"
                stroke="#ffffff"
                strokeWidth="0.5"
                strokeOpacity="0.1"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#workshop-grid)" />
          <rect width="100%" height="100%" fill="url(#wood-slats)" />

          {/* Architectural workshop ceiling truss / rafter silhouettes */}
          <g stroke="#ffffff" strokeWidth="1" strokeOpacity="0.12" fill="none">
            <line x1="0" y1="0" x2="100%" y2="45%" />
            <line x1="100%" y1="0" x2="0" y2="45%" />
            <line x1="0" y1="45%" x2="100%" y2="45%" strokeDasharray="4 8" />
            <line x1="25%" y1="0" x2="25%" y2="45%" />
            <line x1="50%" y1="0" x2="50%" y2="45%" />
            <line x1="75%" y1="0" x2="75%" y2="45%" />
          </g>
        </svg>
      </div>

      {/* Warm industrial lighting glows simulating overhead workshop pendant fixtures */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 75% 20%, rgba(217, 119, 6, 0.22), transparent 70%), radial-gradient(ellipse 50% 45% at 20% 80%, rgba(180, 83, 9, 0.15), transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Dark gradient overlay simulating the dark industrial workshop look */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(12, 10, 9, 0.90) 0%, rgba(20, 16, 14, 0.50) 50%, rgba(26, 20, 17, 0.25) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle perimeter vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, transparent 35%, rgba(10, 8, 7, 0.6) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-20 sm:pt-24 pb-14 sm:pb-20 flex flex-col justify-end"
      >
        {/* Bottom Row: Large hero heading & Carousel pagination indicators */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Main Heading */}
          <motion.div variants={headingVariants} className="max-w-2xl lg:max-w-3xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.05] drop-shadow-md">
              Precision Industrial Furniture Craft
            </h1>
          </motion.div>

          {/* Carousel Pagination Indicators */}
          <motion.div
            variants={ctaVariants}
            className="self-start md:self-end flex flex-col items-start md:items-end gap-4 shrink-0 pb-2"
          >
            {/* Carousel indicators matching the design: — • • */}
            <div className="flex items-center gap-2.5 text-white/70 bg-black/30 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
              <span className="w-8 h-1 bg-white rounded-full" />
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
