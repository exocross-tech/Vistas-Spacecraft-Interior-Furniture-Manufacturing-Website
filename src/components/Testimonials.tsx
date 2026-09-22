"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyType: string;
  quote: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Furniture Co.",
    role: "PREMIUM FURNITURE BRAND",
    companyType: "Luxury Residential & Contract",
    quote:
      "The precision and quality of their CNC routing work is unmatched. Every piece meets our exacting standards for premium furniture production.",
    location: "Milan / London",
  },
  {
    id: "t2",
    name: "Interior Pro",
    role: "INTERIOR DESIGN STUDIO",
    companyType: "High-End Commercial Interiors",
    quote:
      "Their automated edge banding and finishing capabilities have streamlined our manufacturing process, delivering consistent quality across all projects.",
    location: "Berlin / Munich",
  },
  {
    id: "t3",
    name: "Nordic Living",
    role: "ARCHITECTURAL INTERIORS",
    companyType: "Bespoke Veneer & Cabinetry",
    quote:
      "The joinery tolerances and finish consistency on our bespoke veneer collections exceeded expectations. A dependable production partner for complex hospitality fits.",
    location: "Stockholm / Copenhagen",
  },
  {
    id: "t4",
    name: "Apex Contract",
    role: "COMMERCIAL WORKSPACE SOLUTIONS",
    companyType: "Turnkey Corporate Fitouts",
    quote:
      "Their high-capacity multi-axis routing and hot press bonding handled our large-scale corporate rollout on schedule without compromising craftsmanship.",
    location: "Zurich / Singapore",
  },
];

// Duplicate array for seamless infinite marquee loop
const infiniteTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="w-full bg-[#FAF8F5] py-16 sm:py-24 lg:py-28 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        {/* Section Eyebrow & Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-left"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#8B7355]" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#8B7355]">
              Client Voices
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-neutral-900"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            TESTIMONY
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-xl font-light">
            Hear from leading furniture brands, interior architects, and commercial
            contractors who rely on our precision engineering facility.
          </p>
        </motion.div>
      </div>

      {/* Marquee Wrapper with soft edge gradients */}
      <div
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Left Gradient Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 lg:w-40 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/90 to-transparent z-10" />

        {/* Right Gradient Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 lg:w-40 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/90 to-transparent z-10" />

        {/* Continuous Looping Horizontal Track */}
        <div
          className="flex gap-6 sm:gap-8 w-max select-none cursor-grab active:cursor-grabbing"
          style={{
            animation: "testimonial-loop 34s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {infiniteTestimonials.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[300px] sm:w-[380px] lg:w-[420px] shrink-0 flex flex-col justify-between rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 lg:p-9 shadow-xs hover:border-[#8B7355]/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                {/* Header: Company & Role */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight uppercase">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#8B7355]">
                      {item.role}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-neutral-200 flex items-center justify-center shrink-0 text-[#8B7355]/70">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              {/* Card Footer: Metadata info */}
              <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
                <span>{item.companyType}</span>
                <span className="font-medium text-neutral-500">{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded CSS Keyframes for ultra-smooth 60fps horizontal marquee */}
      <style jsx global>{`
        @keyframes testimonial-loop {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
