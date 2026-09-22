"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

export default function Contact() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#121214] text-white py-16 sm:py-24 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-8 sm:mb-12 text-left"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          CONTACT US
        </motion.h2>

        {/* Big Dark Rounded Container (Elevated Charcoal Surface) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#18181b] rounded-3xl border border-neutral-800 p-6 sm:p-10 lg:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
        >
          {/* Left Column: Details (5 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div>
              {/* Company / Facility Brand */}
              <motion.div variants={itemVariants} className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
                  VISTAS
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm tracking-wider uppercase text-neutral-400 font-medium">
                  FURNITURE MANUFACTURING FACILITY
                </p>
              </motion.div>

              {/* Address section */}
              <motion.div variants={itemVariants} className="mb-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-2.5">
                  LOCATION DETAILS
                </p>
                <div className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal space-y-0.5">
                  <p>Plot 42, Industrial Area, Phase II</p>
                  <p>East Field Boulevard, Gate 04</p>
                  <p>Manufacturing District</p>
                </div>
              </motion.div>

              {/* Contact Icons and Details */}
              <div className="space-y-4 pt-2">
                {/* Email */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-3.5 text-neutral-300"
                >
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <a
                    href="mailto:production@vistas.com"
                    className="text-xs sm:text-sm hover:text-[#c4a480] transition-colors"
                  >
                    production@vistas.com
                  </a>
                </motion.div>

                {/* Phone */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-3.5 text-neutral-300"
                >
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <a
                    href="tel:+919876543210"
                    className="text-xs sm:text-sm hover:text-[#c4a480] transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </motion.div>

                {/* Hours */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-3.5 text-neutral-300"
                >
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm">
                    Mon - Sat: 09:00 - 18:00
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Real-Time Interactive Map (Normal Styling) (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] rounded-2xl overflow-hidden border border-neutral-700/60 bg-neutral-800 shadow-inner">
            {/* Real-Time Interactive Map with normal colors */}
            <iframe
              title="Factory Location Map"
              src="https://maps.google.com/maps?q=Industrial+Area+Phase+2&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Location Badge (Matching design) */}
            <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 shadow-lg text-white text-xs font-semibold tracking-wide">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8B7355] animate-pulse" />
                <span>Company Location</span>
              </div>
            </div>

            {/* Quick Link to Open in Full Google Maps */}
            <div className="absolute top-4 right-4 z-10">
              <a
                href="https://maps.google.com/?q=Industrial+Area+Phase+2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 hover:bg-white text-neutral-900 text-xs font-medium shadow-md transition-all hover:scale-105"
              >
                <span>Directions</span>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
