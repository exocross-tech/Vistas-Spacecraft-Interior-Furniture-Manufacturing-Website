'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import Image from 'next/image';
import ShowcaseImg from '@/app/images/Banner.png';

interface Slide {
  id: string;
  type: 'video' | 'image';
  src: any;
  alt?: string;
  duration: number; // in milliseconds
  label: string;
}

const CAROUSEL_SLIDES: Slide[] = [
  {
    id: 'video-machinery',
    type: 'video',
    src: '/hero-section-vid-1.mp4',
    duration: 10000,
    label: 'Machinery Video',
  },
  {
    id: 'fleet-image',
    type: 'image',
    src: '/images/umaboy-fleet.jpg',
    alt: 'Umaboy Industrial Woodworking Machinery Fleet',
    duration: 6000,
    label: 'Machinery Fleet',
  },
  {
    id: 'showcase-banner',
    type: 'image',
    src: ShowcaseImg,
    alt: 'VISTA Precision Woodworking Facility and Workshop',
    duration: 6000,
    label: 'Facility Showcase',
  },
];

const SERVICE_OPTIONS = [
  'Automatic Edge Bander',
  'Cold Press',
  'Cut Saw',
  'Multi Boaring',
];

export function Hero() {
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Quick Inquiry Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Automatic Edge Bander',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Mobile-only timed pop-up modal state
  const [isMobileModalOpen, setIsMobileModalOpen] = useState<boolean>(false);
  const [hasDismissedMobileModal, setHasDismissedMobileModal] = useState<boolean>(false);

  // Auto-advance Carousel Loop
  useEffect(() => {
    const slideDuration = CAROUSEL_SLIDES[currentSlide].duration;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, slideDuration);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Restart video whenever returning to video slide
  useEffect(() => {
    if (currentSlide === 0 && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Handle browser autoplay policy silently if needed
      });
    }
  }, [currentSlide]);

  // Mobile Timed Popup (Trigger between 3-5 seconds, e.g. 4 seconds)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if on mobile view
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    const timer = setTimeout(() => {
      if (!hasDismissedMobileModal) {
        setIsMobileModalOpen(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [hasDismissedMobileModal]);

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

  // Reusable Form Content Renderer
  const renderInquiryFormContent = (isModal: boolean = false) => {
    if (isSubmitted) {
      return (
        <div className="py-4 text-center space-y-3">
          <div className="w-10 h-10 mx-auto rounded-full bg-[#8B7355] text-white flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white">Inquiry Prepared!</h4>
            <p className="text-xs text-neutral-300 mt-1">
              Thank you, <span className="text-[#deb887] font-semibold">{formData.name || 'Valued Client'}</span>. Your email draft has been generated.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', phone: '', service: 'Automatic Edge Bander', message: '' });
              if (isModal) {
                setIsMobileModalOpen(false);
                setHasDismissedMobileModal(true);
              }
            }}
            className="text-xs text-[#deb887] hover:text-white underline font-medium cursor-pointer transition-colors"
          >
            {isModal ? 'Close this window' : 'Send another inquiry'}
          </button>
        </div>
      );
    }

    return (
      <form onSubmit={handleInquirySubmit} className="space-y-3 text-left">
        {/* Name Field */}
        <div>
          <label htmlFor={isModal ? 'modal-name' : 'hero-name'} className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
            YOUR NAME <span className="text-[#deb887]">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <input
              id={isModal ? 'modal-name' : 'hero-name'}
              type="text"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full h-9 sm:h-10 pl-9 pr-3 text-xs sm:text-sm rounded-lg bg-neutral-900/90 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Email */}
          <div>
            <label htmlFor={isModal ? 'modal-email' : 'hero-email'} className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
              EMAIL <span className="text-[#deb887]">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                id={isModal ? 'modal-email' : 'hero-email'}
                type="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-9 sm:h-10 pl-9 pr-3 text-xs sm:text-sm rounded-lg bg-neutral-900/90 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor={isModal ? 'modal-phone' : 'hero-phone'} className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
              PHONE <span className="text-[#deb887]">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <input
                id={isModal ? 'modal-phone' : 'hero-phone'}
                type="tel"
                required
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full h-9 sm:h-10 pl-9 pr-3 text-xs sm:text-sm rounded-lg bg-neutral-900/90 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all"
              />
            </div>
          </div>
        </div>

        {/* Service of Interest Dropdown */}
        <div>
          <label htmlFor={isModal ? 'modal-service' : 'hero-service'} className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
            SERVICE OF INTEREST <span className="text-[#deb887]">*</span>
          </label>
          <select
            id={isModal ? 'modal-service' : 'hero-service'}
            required
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full h-9 sm:h-10 px-3 text-xs sm:text-sm rounded-lg bg-neutral-900/95 border border-white/20 text-white focus:outline-none focus:ring-1 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all cursor-pointer"
          >
            {SERVICE_OPTIONS.map((svc) => (
              <option key={svc} value={svc} className="bg-neutral-900 text-white">
                {svc}
              </option>
            ))}
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor={isModal ? 'modal-message' : 'hero-message'} className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
            MESSAGE
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-neutral-400 pointer-events-none">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </span>
            <textarea
              id={isModal ? 'modal-message' : 'hero-message'}
              rows={2}
              placeholder="Tell us about your project specifications..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full h-14 sm:h-16 pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg bg-neutral-900/90 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-10 px-4 rounded-lg bg-[#8B7355] hover:bg-[#9e8362] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 hover:scale-[1.01]"
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
    );
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-72px)] min-h-[calc(100dvh-72px)] flex flex-col justify-center overflow-hidden bg-[#140f0c]"
    >
      {/* ============================================================ */}
      {/* Background Carousel Layer (Video + Images) */}
      {/* ============================================================ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Slide 0: Video */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === 0 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <video
            ref={videoRef}
            src="/hero-section-vid-1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center scale-105"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Slide 1: Umaboy Machinery Fleet Image */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src="/images/umaboy-fleet.jpg"
            alt="Umaboy Automated Machinery Fleet"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-100"
          />
        </div>

        {/* Slide 2: Facility Showcase Banner */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === 2 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={ShowcaseImg}
            alt="VISTA Precision Woodworking Facility and Workshop"
            fill
            sizes="100vw"
            className="object-cover object-center scale-100"
            placeholder="blur"
          />
        </div>
      </div>

      {/* Backdrop Scrim Overlays for legibility */}
      <div className="absolute inset-0 pointer-events-none bg-black/35" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/70 via-black/30 to-black/60"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#140f0c] via-transparent to-black/40"
        aria-hidden="true"
      />

      {/* ============================================================ */}
      {/* Content Container */}
      {/* ============================================================ */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 flex flex-col justify-center"
      >
        {/* Responsive Grid: Hero Heading (Left) and Desktop-Only Quick Inquiry Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Eyebrow, Subtitle & Action */}
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

            {/* Hero Actions & Interactive Carousel Indicators */}
            <motion.div
              variants={ctaVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary Action Button: OUR SERVICES → */}
              <a
                href="#services"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#8B7355] hover:bg-[#9e8362] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span>OUR SERVICES</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              {/* Interactive Carousel Slide Indicators */}
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/15">
                {CAROUSEL_SLIDES.map((slide, index) => {
                  const isActive = currentSlide === index;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Switch to slide ${index + 1}: ${slide.label}`}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${
                        isActive
                          ? 'w-7 h-1.5 bg-[#deb887]'
                          : 'w-2 h-1.5 bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  );
                })}
                <span className="text-[10px] tracking-wider font-mono text-neutral-300 uppercase ml-1.5">
                  0{currentSlide + 1} / 0{CAROUSEL_SLIDES.length}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Desktop-Only In-Page Quick Inquiry Card (Hidden on Mobile) */}
          <motion.div
            variants={ctaVariants}
            className="hidden lg:block lg:col-span-5 xl:col-span-4 w-full max-w-[400px] ml-auto"
          >
            <div className="bg-black/75 backdrop-blur-md rounded-2xl border border-white/15 p-5 shadow-2xl text-white relative overflow-hidden">
              {/* Subtle top accent highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8B7355] to-transparent opacity-80" />

              {/* Form Header */}
              <div className="mb-3.5 text-left">
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

              {/* Render Desktop Form */}
              {renderInquiryFormContent(false)}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* Mobile-Only Timed Quick Inquiry Modal (3-5s trigger) */}
      {/* ============================================================ */}
      <AnimatePresence>
        {isMobileModalOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-modal-title"
            className="lg:hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => {
              setIsMobileModalOpen(false);
              setHasDismissedMobileModal(true);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-sm bg-neutral-950/95 border border-white/20 rounded-2xl p-5 text-white shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8B7355] to-transparent opacity-90" />

              {/* Close Button ('X') */}
              <button
                type="button"
                onClick={() => {
                  setIsMobileModalOpen(false);
                  setHasDismissedMobileModal(true);
                }}
                className="absolute top-3 right-3 text-neutral-400 hover:text-white p-2 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 transition-colors z-20 cursor-pointer"
                aria-label="Close inquiry modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="mb-3 text-left pr-8">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#8B7355] animate-pulse" />
                  <h3 id="mobile-modal-title" className="text-sm font-bold uppercase tracking-wider text-white font-serif">
                    QUICK INQUIRY
                  </h3>
                </div>
                <p className="text-[11px] text-neutral-300 leading-snug font-light">
                  Tell us about your project and our team will get back to you.
                </p>
              </div>

              {/* Render Mobile Modal Form */}
              {renderInquiryFormContent(true)}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Hero;
