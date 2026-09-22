'use client';

import React, { useRef, useState } from 'react';
import { motion, type Variants } from 'framer-motion';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

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

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

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
      {/* Background Video Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/Woodworking-Machinery-Showcase.png"
          className="w-full h-full object-cover object-center scale-[1.03] transition-transform duration-1000"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/Umaboy_Machinery.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Base Background Fallback & Industrial Tint Layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(61, 43, 31, 0.65) 0%, rgba(44, 24, 16, 0.75) 40%, rgba(20, 16, 14, 0.85) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Workshop Interior Pattern Overlay: Drafting grid & subtle timber rafter structure */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay"
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
            'radial-gradient(ellipse 65% 55% at 75% 20%, rgba(217, 119, 6, 0.25), transparent 70%), radial-gradient(ellipse 50% 45% at 20% 80%, rgba(180, 83, 9, 0.20), transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Dark gradient overlay for optimal headline readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(12, 10, 9, 0.92) 0%, rgba(20, 16, 14, 0.55) 50%, rgba(26, 20, 17, 0.35) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle perimeter vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, transparent 35%, rgba(10, 8, 7, 0.65) 100%)',
        }}
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
          {/* Left Area: Main Heading & Media Controls */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center space-y-5 sm:space-y-6 text-left">
            {/* Category / Eyebrow Pill */}
            <motion.div variants={headingVariants} className="inline-flex items-center gap-2.5">
              <span className="w-6 sm:w-8 h-px bg-[#8B7355]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#deb887]">
                Manufacturing & Joinery
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

            {/* Subtle Floating Media Control & Carousel Indicators */}
            <motion.div
              variants={ctaVariants}
              className="flex items-center gap-3 pt-1 sm:pt-2"
            >
              {/* Subtle Video Play/Pause Toggle */}
              <button
                type="button"
                onClick={toggleVideoPlayback}
                aria-label={isPlaying ? 'Pause background manufacturing video' : 'Play background manufacturing video'}
                className="flex items-center gap-1.5 text-[11px] text-white/85 bg-black/40 hover:bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-white/90">Pause</span>
                  </>
                ) : (
                  <>
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-white/90">Play</span>
                  </>
                )}
              </button>

              {/* Carousel indicators matching the design: — • • */}
              <div className="flex items-center gap-2 text-white/70 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                <span className="w-6 sm:w-7 h-1 bg-white rounded-full" />
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
              </div>
            </motion.div>
          </div>

          {/* Right Area: Compact, Non-Dominating Quick Inquiry Form */}
          <motion.div
            variants={ctaVariants}
            className="lg:col-span-5 xl:col-span-4 w-[calc(100%-8px)] sm:w-[calc(100%-28px)] max-w-[420px] lg:max-w-[380px] mx-auto lg:ml-auto lg:mr-0 pt-2 lg:pt-0"
          >
            <div className="bg-black/70 sm:bg-black/55 backdrop-blur-md rounded-2xl border border-white/15 p-4 sm:p-5 shadow-2xl text-white relative overflow-hidden">
              {/* Subtle top accent highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8B7355] to-transparent opacity-80" />

              {/* Form Header */}
              <div className="mb-3 text-left">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#8B7355] animate-pulse" />
                  <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white font-serif">
                    Quick Inquiry
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
                  {/* Name Field */}
                  <div>
                    <label htmlFor="hero-name" className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-0.5">
                      Your Name <span className="text-[#deb887]">*</span>
                    </label>
                    <input
                      id="hero-name"
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-9 sm:h-10 px-3 text-xs sm:text-sm rounded-lg bg-neutral-900/80 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all"
                    />
                  </div>

                  {/* Email & Phone (Two compact columns on desktop, single on narrow screens) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="hero-email" className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-0.5">
                        Email <span className="text-[#deb887]">*</span>
                      </label>
                      <input
                        id="hero-email"
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-9 sm:h-10 px-3 text-xs sm:text-sm rounded-lg bg-neutral-900/80 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="hero-phone" className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-0.5">
                        Phone <span className="text-[#deb887]">*</span>
                      </label>
                      <input
                        id="hero-phone"
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-9 sm:h-10 px-3 text-xs sm:text-sm rounded-lg bg-neutral-900/80 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label htmlFor="hero-service" className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-0.5">
                      Service <span className="text-[#deb887]">*</span>
                    </label>
                    <select
                      id="hero-service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-9 sm:h-10 px-3 text-xs sm:text-sm rounded-lg bg-neutral-900/90 border border-white/20 text-white focus:outline-none focus:ring-1 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all"
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

                  {/* Message Field */}
                  <div>
                    <label htmlFor="hero-message" className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-0.5">
                      Message
                    </label>
                    <textarea
                      id="hero-message"
                      rows={2}
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full h-15 sm:h-16 px-3 py-1.5 text-xs sm:text-sm rounded-lg bg-neutral-900/80 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-0.5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-9 sm:h-10 px-4 rounded-lg bg-[#8B7355] hover:bg-[#9d8362] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 hover:scale-[1.01]"
                    >
                      {isSubmitting ? (
                        <span>Preparing Inquiry...</span>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
    </section>
  );
}

export default Hero;
