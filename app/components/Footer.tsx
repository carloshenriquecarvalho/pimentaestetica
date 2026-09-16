import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gold-400/20 pt-16 pb-8 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)" }}
      />
      {/* Glow accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 blur-3xl opacity-10"
        style={{ background: "#d4af37" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold-400/30">
                <Image
                  src="/image.png"
                  alt="Pimenta Estética Multimarcas"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Pimenta Estética
                </p>
                <p
                  className="text-gold-400 text-xs uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Multimarcas
                </p>
              </div>
            </div>
            <p
              className="text-white/40 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Distribuidora especializada em equipamentos estéticos de alta
              performance. Qualidade, tecnologia e suporte para o seu negócio crescer.
            </p>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {[
                {
                  id: "footer-instagram",
                  label: "Instagram",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  id: "footer-whatsapp",
                  label: "WhatsApp",
                  href: "https://wa.me/5500000000000",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  ),
                },
                {
                  id: "footer-facebook",
                  label: "Facebook",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.id}
                  id={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white/40 hover:text-gold-400 border border-white/10 hover:border-gold-400/40 transition-all duration-300 hover:bg-gold-400/8"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-white font-semibold text-sm mb-5 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Navegação
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Início", href: "#hero" },
                { label: "Sobre Nós", href: "#sobre" },
                { label: "Equipamentos", href: "#equipamentos" },
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/40 text-sm hover:text-gold-400 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact in footer */}
          <div>
            <h4
              className="text-white font-semibold text-sm mb-5 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Contato
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="2"
                  className="flex-shrink-0 mt-0.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 12 18.85a19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <p className="text-white/40 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                  (00) 00000-0000
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="2"
                  className="flex-shrink-0 mt-0.5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <p className="text-white/40 text-sm break-all" style={{ fontFamily: "var(--font-inter)" }}>
                  contato@pimentaestetica.com.br
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            {/* Copyright */}
            <p
              className="text-white/25 text-xs text-center"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              © {currentYear} Pimenta Estética Multimarcas. Todos os direitos reservados.
            </p>

            {/* Legal info — required by user */}
            <div
              className="text-center lg:text-right"
            >
              <p
                className="text-white/40 text-xs font-semibold tracking-wide"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Lemes Pimentel Distribuidora LTDA
              </p>
              <p
                className="text-white/25 text-xs"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                CNPJ: 15.788.841/0001-82
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
