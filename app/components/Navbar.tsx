"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#sobre" },
    { label: "Equipamentos", href: "#equipamentos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-2 bg-black-900/95 backdrop-blur-xl shadow-lg shadow-black/50 border-b border-gold-400/20"
          : "py-5 bg-transparent"
      }`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#hero" id="nav-logo" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold-400/40 group-hover:border-gold-400 transition-all duration-300">
            <Image
              src="/image.png"
              alt="Pimenta Estética Multimarcas"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <p
              className="text-xs uppercase tracking-widest text-gold-400/80"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Distribuidora
            </p>
            <p
              className="text-white font-semibold text-sm leading-tight"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Pimenta Estética
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-gold-400 transition-colors duration-300 tracking-wide uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contato"
          id="nav-cta"
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-black-900 bg-gradient-to-r from-gold-400 to-gold-300 hover:from-gold-300 hover:to-gold-400 transition-all duration-300 shadow-lg shadow-gold-400/20 hover:shadow-gold-400/40 hover:scale-105"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Fale Conosco
        </a>

        {/* Mobile toggle */}
        <button
          id="nav-mobile-toggle"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Abrir menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gold-400 transition-all duration-300 ${isMobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gold-400 transition-all duration-300 ${isMobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gold-400 transition-all duration-300 ${isMobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-dark mx-4 mt-2 rounded-2xl p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-white/80 hover:text-gold-400 transition-colors py-1 border-b border-white/5 text-sm uppercase tracking-wide"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setIsMobileOpen(false)}
            className="mt-2 text-center py-3 rounded-full font-semibold text-black-900 bg-gradient-to-r from-gold-400 to-gold-300 text-sm"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
}
