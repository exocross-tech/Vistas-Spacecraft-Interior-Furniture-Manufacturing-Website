"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ];

  const categories = [
    { name: "CNC Wood Router", href: "#services" },
    { name: "Heavy Duty Edge Banding", href: "#services" },
    { name: "Multi-Axis Laser Joinery", href: "#services" },
    { name: "Hydraulic Hot Press", href: "#services" },
  ];

  return (
    <footer className="w-full bg-[#121214] text-white border-t border-neutral-800">
      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-stretch">
          {/* Left Area (7 columns on Desktop) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-8 lg:gap-8">
            {/* Brand Logo, Address, Contact & Socials (Sm: 6 cols, Lg: 6 cols) */}
            <div className="sm:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                {/* Brand Logo & Subtitle */}
                <div className="mb-5">
                  <Link
                    href="#home"
                    className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase font-sans hover:text-[#c4a480] transition-colors"
                  >
                    VISTAS
                  </Link>
                  <p className="mt-1.5 text-xs tracking-wider uppercase text-neutral-400 font-medium">
                    Spacecraft Interior Furniture Manufacturing
                  </p>
                </div>

                {/* Physical Address */}
                <div className="text-xs sm:text-sm text-neutral-400 space-y-1 mb-6 leading-relaxed">
                  <p>Plot 42, Industrial Area, Phase II</p>
                  <p>East Field Boulevard, Gate 04</p>
                  <p>Manufacturing District</p>
                </div>

                {/* Contact Information */}
                <div className="space-y-2 text-xs sm:text-sm">
                  <p className="text-neutral-400">
                    Email us at{" "}
                    <a
                      href="mailto:production@vistas.com"
                      className="text-white hover:text-[#c4a480] transition-colors underline font-medium"
                    >
                      production@vistas.com
                    </a>
                  </p>
                  <p className="text-neutral-400">
                    Phone:{" "}
                    <a
                      href="tel:+919876543210"
                      className="text-white hover:text-[#c4a480] transition-colors font-medium"
                    >
                      +91 98765 43210
                    </a>
                  </p>
                </div>
              </div>

              {/* Circular Social Media Icon Buttons */}
              <div className="pt-2">
                <div className="flex items-center gap-3">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-neutral-800/90 hover:bg-[#8B7355] text-neutral-300 hover:text-white border border-neutral-700/80 flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (formerly Twitter)"
                    className="w-10 h-10 rounded-full bg-neutral-800/90 hover:bg-[#8B7355] text-neutral-300 hover:text-white border border-neutral-700/80 flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-10 h-10 rounded-full bg-neutral-800/90 hover:bg-[#8B7355] text-neutral-300 hover:text-white border border-neutral-700/80 flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-10 h-10 rounded-full bg-neutral-800/90 hover:bg-[#8B7355] text-neutral-300 hover:text-white border border-neutral-700/80 flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links (Sm: 3 cols, Lg: 3 cols) */}
            <div className="sm:col-span-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-200 mb-4">
                Quick links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors duration-150 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories (Sm: 3 cols, Lg: 3 cols) */}
            <div className="sm:col-span-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-200 mb-4">
                Categories
              </h4>
              <ul className="space-y-3">
                {categories.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors duration-150 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Area: Large Interactive Factory Location Map (5 columns on Desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-200">
                Factory Location Map
              </h4>
              <span className="text-xs text-neutral-400">
                Industrial Area Phase 2
              </span>
            </div>

            <div className="relative w-full h-[300px] sm:h-[330px] lg:h-[350px] rounded-3xl overflow-hidden border border-neutral-700/80 bg-neutral-900 shadow-xl group">
              {/* Google Map iframe */}
              <iframe
                title="Vistas Factory Location Map"
                src="https://maps.google.com/maps?q=Industrial+Area+Phase+2&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Directions Link */}
              <div className="absolute top-4 right-4 z-10">
                <a
                  href="https://maps.google.com/?q=Industrial+Area+Phase+2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900/95 hover:bg-neutral-900 text-white text-xs font-semibold border border-neutral-700/90 shadow-lg transition-all hover:scale-105"
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

              {/* Location Badge */}
              <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-950/90 backdrop-blur-md border border-neutral-700/80 text-xs text-neutral-100 shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8B7355] animate-pulse" />
                  <span className="font-medium">Phase II Manufacturing Facility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal Row */}
      <div className="w-full border-t border-neutral-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {currentYear} VISTAS Spacecraft | All Rights Reserved</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#services" className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </a>
            <a href="#contact" className="hover:text-neutral-300 transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
