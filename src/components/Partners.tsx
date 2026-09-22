'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface Partner {
  name: string;
  ariaLabel: string;
}

const PARTNERS: readonly Partner[] = [
  { name: 'HÄFELE', ariaLabel: 'Häfele Fittings and Hardware' },
  { name: 'EGGER', ariaLabel: 'Egger Wood-based Materials' },
  { name: 'BLUM', ariaLabel: 'Blum Furniture Fittings' },
  { name: 'FESTOOL', ariaLabel: 'Festool Precision Power Tools' },
  { name: 'KRONOSPAN', ariaLabel: 'Kronospan Architectural Panels' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Partners() {
  return (
    <section
      aria-labelledby="brand-partners-heading"
      className="w-full bg-[#FAF9F5] border-y border-neutral-200 py-10 sm:py-12 md:py-14 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* Section Eyebrow / Label */}
          <motion.p
            id="brand-partners-heading"
            variants={itemVariants}
            className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 mb-8 sm:mb-10 text-center select-none"
          >
            TRUSTED BRAND PARTNERS
          </motion.p>

          {/* Brand Names Row */}
          <div className="w-full flex flex-wrap items-center justify-center gap-y-6 gap-x-8 sm:gap-x-12 md:gap-0 md:flex-nowrap md:justify-between">
            {PARTNERS.map((partner, index) => (
              <React.Fragment key={partner.name}>
                <motion.div
                  variants={itemVariants}
                  className="flex items-center justify-center py-2 px-3 md:flex-1 text-center group"
                >
                  <span
                    aria-label={partner.ariaLabel}
                    className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest text-neutral-600 transition-colors duration-300 group-hover:text-neutral-950 select-none whitespace-nowrap"
                  >
                    {partner.name}
                  </span>
                </motion.div>

                {/* Subtle vertical divider between items on desktop */}
                {index < PARTNERS.length - 1 && (
                  <div
                    className="hidden md:block h-4 w-px bg-neutral-300 shrink-0"
                    aria-hidden="true"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { Partners };
