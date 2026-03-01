"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-white/95 backdrop-blur-2xl border-b border-slate-100 shadow-sm" : "bg-white/80 backdrop-blur-xl"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <div className="relative w-36 h-10">
            <Image src="/logo.png" alt="Protexi" fill className="object-contain" priority />
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-[#1657ad] rounded-xl hover:bg-blue-50 transition-all duration-200">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-sm font-semibold text-slate-500 hover:text-[#1657ad] transition-colors">Sign In</a>
          <a href="#contact" className="btn-primary text-sm py-2.5 px-5">
            Book a Demo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-lg px-6 pb-6">
          <nav className="flex flex-col gap-1 mt-2">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-semibold text-slate-600 hover:text-[#1657ad] rounded-xl hover:bg-blue-50 transition-all">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary text-sm mt-4 justify-center">Book a Demo</a>
          </nav>
        </div>
      )}
    </header>
  );
}
