"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "CNC Wood Router",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending / prepare mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      const subject = encodeURIComponent(
        `Manufacturing Inquiry - ${formData.service} (${formData.name})`
      );
      const body = encodeURIComponent(
        `Full Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Interested: ${formData.service}\n\nProject Scope / Message:\n${formData.message}`
      );

      // Open email client with prefilled details
      window.location.href = `mailto:production@vistas.com?subject=${subject}&body=${body}`;
    }, 600);
  };

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
      className="relative w-full bg-[#FAF8F5] text-neutral-900 py-16 sm:py-24 lg:py-28 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-8 h-px bg-[#8B7355]" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#8B7355]">
              Get In Touch
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-neutral-900 text-left"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            CONTACT US
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-base sm:text-lg text-neutral-600 max-w-2xl font-light"
          >
            Have a project in mind or need custom architectural woodwork &
            precision machining? Send us your requirements and our engineering
            team will get in touch.
          </motion.p>
        </div>

        {/* 2-Column Layout: Direct Details + Visitor Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info Cards (5 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Info Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/90 p-6 sm:p-8 shadow-sm"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight uppercase mb-2">
                Factory Headquarters
              </h3>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-[#8B7355] font-semibold mb-6">
                VISTAS Furniture Manufacturing
              </p>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-neutral-200 flex items-center justify-center shrink-0 text-[#8B7355]">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                      Facility Location
                    </h4>
                    <p className="text-sm sm:text-base text-neutral-800 leading-snug font-medium">
                      Plot 42, Industrial Area, Phase II
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-500">
                      East Field Boulevard, Gate 04, Manufacturing District
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-neutral-200 flex items-center justify-center shrink-0 text-[#8B7355]">
                    <svg
                      className="w-5 h-5"
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
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                      Direct Email
                    </h4>
                    <a
                      href="mailto:production@vistas.com"
                      className="text-sm sm:text-base text-neutral-800 hover:text-[#8B7355] font-medium transition-colors"
                    >
                      production@vistas.com
                    </a>
                    <p className="text-xs text-neutral-500">
                      For RFP, quotation, and CAD files
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-neutral-200 flex items-center justify-center shrink-0 text-[#8B7355]">
                    <svg
                      className="w-5 h-5"
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
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                      Call Us Directly
                    </h4>
                    <a
                      href="tel:+919876543210"
                      className="text-sm sm:text-base text-neutral-800 hover:text-[#8B7355] font-medium transition-colors"
                    >
                      +91 98765 43210
                    </a>
                    <p className="text-xs text-neutral-500">
                      Mon - Sat: 09:00 AM - 06:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Turnaround Badge */}
            <motion.div
              variants={itemVariants}
              className="bg-[#241a15] rounded-2xl p-6 text-white flex items-center gap-4 shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-[#8B7355]/30 border border-[#8B7355]/50 flex items-center justify-center shrink-0 text-[#deb887]">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-white">
                  Fast Quotation Turnaround
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300">
                  Submit your custom furniture specs or architectural blueprints
                  for a 24-hour cost estimate.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visitor Mail Inquiry Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/90 p-6 sm:p-10 shadow-sm"
          >
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-neutral-900">
                Send Us An Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Fill in the details below to email our technical production desk
                directly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-[#FAF8F5] border border-[#8B7355]/40 rounded-2xl p-8 text-center py-12">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#8B7355] text-white flex items-center justify-center shadow-lg">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-2">
                  Thank You, {formData.name || "Valued Client"}!
                </h4>
                <p className="text-sm text-neutral-600 max-w-md mx-auto mb-6">
                  Your inquiry has been compiled. If your email application did
                  not open automatically, you can send your message directly to{" "}
                  <a
                    href="mailto:production@vistas.com"
                    className="font-semibold text-[#8B7355] underline"
                  >
                    production@vistas.com
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs sm:text-sm font-semibold hover:bg-neutral-800 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Visitor Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2"
                    >
                      Full Name <span className="text-amber-700">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alexander Vance"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Visitor Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2"
                    >
                      Email Address <span className="text-amber-700">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="alexander@domain.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Service / Capability Category */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:bg-white transition-all"
                    >
                      <option value="CNC Wood Router">CNC Wood Router Machining</option>
                      <option value="Heavy Duty Edge Banding">
                        Heavy Duty Edge Banding
                      </option>
                      <option value="Multi-Axis Laser Joinery">
                        Multi-Axis Laser Joinery
                      </option>
                      <option value="Hydraulic Hot Press Laminating">
                        Hydraulic Hot Press Laminating
                      </option>
                      <option value="Custom Architectural Woodwork">
                        Custom Architectural Woodwork
                      </option>
                      <option value="Bulk Commercial Furniture">
                        Bulk Commercial Furniture
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message / Specifications */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2"
                  >
                    Message / Project Specifications <span className="text-amber-700">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Tell us about your furniture manufacturing requirements, dimensions, quantity, or material specifications..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:bg-white transition-all resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#241a15] hover:bg-[#34261f] text-white font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>Preparing Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Inquiry Message</span>
                        <svg
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-neutral-400 text-center mt-2.5">
                    We respect your privacy. All technical drawings & IP remain
                    strictly confidential.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
