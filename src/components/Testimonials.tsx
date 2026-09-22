'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  direction: 'left' | 'right';
}

const testimonials: Testimonial[] = [
  {
    name: 'Furniture Co.',
    role: 'PREMIUM FURNITURE BRAND',
    quote:
      'The precision and quality of their CNC routing work is unmatched. Every piece meets our exacting standards for premium furniture production.',
    direction: 'left',
  },
  {
    name: 'Interior Pro',
    role: 'INTERIOR DESIGN STUDIO',
    quote:
      'Their automated edge banding and finishing capabilities have streamlined our manufacturing process, delivering consistent quality across all projects.',
    direction: 'right',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF8F5] py-16 sm:py-24 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-left mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-neutral-900">
            TESTIMONY
          </h2>
        </motion.div>

        {/* Testimonials Grid: 2 columns on desktop/tablet, stacked vertically on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item, index) => {
            const isLeft = item.direction === 'left';
            const initialX = isLeft ? -60 : 60;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: initialX }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: initialX }
                }
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xs hover:border-neutral-300 hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Name and Role at top */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      {item.role}
                    </p>
                  </div>

                  {/* Quote text below with opening quote mark */}
                  <blockquote className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
                    <span
                      className="text-2xl sm:text-3xl font-serif font-bold text-neutral-400 select-none mr-1.5 align-baseline"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>
                    {item.quote}
                  </blockquote>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
