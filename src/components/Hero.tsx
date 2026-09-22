'use client';

import React, { useRef, useState } from 'react';
import { motion, type Variants } from 'framer-motion';

import Image from 'next/image';
import ShowcaseImg from '@/app/images/Banner.png';

export function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);

  // Quick Inquiry Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      const subject = encodeURIComponent(
        `Hero Quick Inquiry - ${formData.service || 'General'} (${formData.name})`
      );
      const body = encodeURIComponent(
        `Full Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nProject Scope:\n${formData.message}`
      );

      window.location.href = `mailto:production@vista.com?subject=${subject}&body=${body}`;
    }, 500);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.08,
      },
    },
  };

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
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
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-72px)] min-h-[calc(100dvh-72px)] flex flex-col justify-center overflow-hidden bg-[#140f0c]"
    >
      {/* Background Image Layer: CNC & Industrial Woodworking Machinery Showcase */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src={ShowcaseImg}
          alt="VISTA Industrial Precision Woodworking Facility and Machinery"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-100"
          placeholder="blur"
        />
      </div>

      {/* Subtle backdrop scrim only behind the left text & right form for clean readability */}
      <div
        className="absolute inset-0 pointer-events-none bg-black/25"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/60 via-black/20 to-black/50"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#140f0c] via-transparent to-black/30"
        aria-hidden="true"
      />

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-16 flex flex-col justify-center"
      >
        {/* Responsive Grid: Hero Heading & Controls (Left) and Quick Inquiry Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Area: Main Heading, Eyebrow, Subtitle & Action Buttons */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center space-y-5 sm:space-y-6 text-left">
            {/* Technical Eyebrow */}
            <motion.div variants={headingVariants} className="inline-flex items-center gap-2.5">
              <span className="w-6 sm:w-8 h-px bg-[#deb887]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#deb887]">
                PRECISION / CRAFTSMANSHIP / INNOVATION
              </span>
            </motion.div>

            {/* Main Editorial Heading */}
            <motion.div variants={headingVariants} className="max-w-2xl lg:max-w-3xl">
              <h1 className="text-3.5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7.5xl font-serif font-bold text-white tracking-tight leading-[1.08] sm:leading-[1.04] drop-shadow-md">
                Precision Industrial Furniture Craft
              </h1>
            </motion.div>

            {/* Supporting Hero Subtitle */}
            <motion.p
              variants={headingVariants}
              className="text-xs sm:text-sm md:text-base text-neutral-300 max-w-xl font-light leading-relaxed drop-shadow-sm"
            >
              High-tolerance CNC milling, zero-joint PUR edge banding, and bespoke timber craftsmanship engineered for luxury interiors.
            </motion.p>

            {/* Hero CTA Action Buttons */}
            <motion.div
              variants={ctaVariants}
              className="flex flex-wrap items-center gap-3.5 pt-1 sm:pt-2"
            >
              {/* Primary Button: OUR SERVICES → */}
              <a
                href="#services"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#8B7355] hover:bg-[#9e8362] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span>OUR SERVICES</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              {/* Secondary Button: WATCH VIDEO */}
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-black/40 hover:bg-black/60 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase border border-white/20 backdrop-blur-md shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-2 h-2 fill-current translate-x-0.5 text-[#deb887]" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span>WATCH VIDEO</span>
              </button>

              {/* Showcase indicators matching the design: — • • */}
              <div className="hidden sm:flex items-center gap-2 text-white/70 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 ml-auto sm:ml-0 pl-1">
                <span className="w-6 h-1 bg-[#deb887] rounded-full" />
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
              </div>
            </motion.div>
          </div>

          {/* Right Area: Compact Quick Inquiry Card with Form Icons */}
          <motion.div
            variants={ctaVariants}
            className="lg:col-span-5 xl:col-span-4 w-[calc(100%-8px)] sm:w-[calc(100%-28px)] max-w-[420px] lg:max-w-[390px] mx-auto lg:ml-auto lg:mr-0 pt-2 lg:pt-0"
          >
            <div className="bg-black/70 sm:bg-black/55 backdrop-blur-md rounded-2xl border border-white/15 p-4 sm:p-5 shadow-2xl text-white relative overflow-hidden">
              {/* Subtle top accent highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8B7355] to-transparent opacity-80" />

              {/* Form Header */}
              <div className="mb-3 text-left">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#8B7355] animate-pulse" />
                  <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white font-serif">
                    QUICK INQUIRY
                  </h3>
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-300 leading-snug font-light">
                  Tell us about your project and our team will get back to you.
                </p>
              </div>

              {/* Form Content / Success Screen */}
              {isSubmitted ? (
                <div className="py-3 text-center space-y-2.5">
                  <div className="w-9 h-9 mx-auto rounded-full bg-[#8B7355] text-white flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Inquiry Prepared!</h4>
                    <p className="text-[11px] text-neutral-300 mt-0.5">
                      Thank you, <span className="text-[#deb887] font-semibold">{formData.name || 'Valued Client'}</span>. Your email draft has been generated.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                    }}
                    className="text-[11px] text-[#deb887] hover:text-white underline font-medium cursor-pointer transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-2.5 text-left">
                  {/* Name Field with User Icon */}
                  <div>
                    <label htmlFor="hero-name" className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-0.5">
                      YOUR NAME <span className="text-[#deb887]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </span>
                      <input
                        id="hero-name"
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-9 sm:h-10 pl-9 pr-3 text-xs sm:text-sm rounded-lg bg-neutral-900/80 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Phone with Icons (Side by side on desktop, stacked on mobile) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {/* Email */}
                    <div>
                      <label htmlFor="hero-email" className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-0.5">
                        EMAIL <span className="text-[#deb887]">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </span>
                        <input
                          id="hero-email"
                          type="email"
                          required
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full h-9 sm:h-10 pl-9 pr-3 text-xs sm:text-sm rounded-lg bg-neutral-900/80 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="hero-phone" className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-0.5">
                        PHONE <span className="text-[#deb887]">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </span>
                        <input
                          id="hero-phone"
                          type="tel"
                          required
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full h-9 sm:h-10 pl-9 pr-3 text-xs sm:text-sm rounded-lg bg-neutral-900/80 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label htmlFor="hero-service" className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-0.5">
                      SERVICE <span className="text-[#deb887]">*</span>
                    </label>
                    <select
                      id="hero-service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-9 sm:h-10 px-3 text-xs sm:text-sm rounded-lg bg-neutral-900/90 border border-white/20 text-white focus:outline-none focus:ring-1 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all cursor-pointer"
                    >
                      <option value="" disabled className="bg-neutral-900 text-neutral-400">Select Service</option>
                      <option value="CNC / Precision Milling" className="bg-neutral-900 text-white">CNC / Precision Milling</option>
                      <option value="Edge Banding" className="bg-neutral-900 text-white">Edge Banding</option>
                      <option value="Cutting" className="bg-neutral-900 text-white">Cutting</option>
                      <option value="Hydraulic Press" className="bg-neutral-900 text-white">Hydraulic Press</option>
                      <option value="Custom Furniture Manufacturing" className="bg-neutral-900 text-white">Custom Furniture Manufacturing</option>
                      <option value="Other" className="bg-neutral-900 text-white">Other</option>
                    </select>
                  </div>

                  {/* Message Field with Note/Message Icon */}
                  <div>
                    <label htmlFor="hero-message" className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-0.5">
                      MESSAGE
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-neutral-400 pointer-events-none">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </span>
                      <textarea
                        id="hero-message"
                        rows={2}
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full h-15 sm:h-16 pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-lg bg-neutral-900/80 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button: SEND INQUIRY → */}
                  <div className="pt-0.5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-9.5 sm:h-10.5 px-4 rounded-lg bg-[#8B7355] hover:bg-[#9e8362] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 hover:scale-[1.01]"
                    >
                      {isSubmitting ? (
                        <span>PREPARING INQUIRY...</span>
                      ) : (
                        <>
                          <span>SEND INQUIRY</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

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

export default Hero;
