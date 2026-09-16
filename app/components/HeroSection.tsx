"use client";

import { useEffect, useRef } from "react";

// Particle data
const PARTICLES = [
  { cx: "50%", cy: "18%", r: 2.5, delay: "0s", dur: "3.2s" },
  { cx: "82%", cy: "35%", r: 1.8, delay: "0.6s", dur: "2.8s" },
  { cx: "78%", cy: "72%", r: 2.2, delay: "1.1s", dur: "3.6s" },
  { cx: "50%", cy: "86%", r: 1.6, delay: "0.3s", dur: "2.5s" },
  { cx: "18%", cy: "68%", r: 2.0, delay: "0.9s", dur: "3.1s" },
  { cx: "22%", cy: "30%", r: 1.4, delay: "1.5s", dur: "2.9s" },
  { cx: "65%", cy: "12%", r: 1.2, delay: "0.7s", dur: "3.4s" },
  { cx: "88%", cy: "55%", r: 1.5, delay: "0.2s", dur: "2.7s" },
  { cx: "38%", cy: "90%", r: 1.3, delay: "1.3s", dur: "3.0s" },
  { cx: "12%", cy: "50%", r: 1.7, delay: "0.4s", dur: "3.3s" },
];

// Icon paths for orbiting symbols (aesthetic / tech inspired)
const ORBIT_ICONS = [
  // Sparkle/star
  "M12 2 L13.5 9 L20 10.5 L13.5 12 L12 19 L10.5 12 L4 10.5 L10.5 9 Z",
  // Diamond
  "M12 3 L20 10.5 L12 21 L4 10.5 Z",
  // Lightning / energy
  "M13 2 L5 14 L11 14 L11 22 L19 10 L13 10 Z",
  // Leaf / organic
  "M12 2 C18 6 20 12 14 20 C10 20 4 16 4 10 C4 6 8 2 12 2Z",
];

export default function HeroSection() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Subtle mouse parallax on the graphic
    const handleMouseMove = (e: MouseEvent) => {
      if (!svgRef.current) return;
      const rect = svgRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = ((e.clientX - cx) / rect.width) * 10;
      const dy = ((e.clientY - cy) / rect.height) * 10;
      svgRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black-900">
        {/* Gold radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(212,175,55,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Corner glow effects */}
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #d4af37, transparent)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #d4af37, transparent)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-24">
        {/* Text content */}
        <div className="text-center lg:text-left">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/30 mb-6"
            style={{ background: "rgba(212,175,55,0.07)" }}
          >
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span
              className="text-gold-400 text-xs uppercase tracking-[0.2em] font-medium"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Distribuidora Multimarcas
            </span>
          </div>

          <h1
            className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="text-white">Equipamentos </span>
            <span className="shimmer-gold">Estéticos</span>
            <br />
            <span className="text-white">de </span>
            <span className="text-gold-400">Alta </span>
            <span className="text-white">Performance</span>
          </h1>

          <p
            className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Somos uma distribuidora especializada em equipamentos estéticos das
            melhores marcas do mercado. Tecnologia, qualidade e suporte especializado
            para transformar o seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              id="hero-cta-primary"
              href="#equipamentos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-black-900 bg-gradient-to-r from-gold-400 to-gold-300 hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-xl shadow-gold-400/25 hover:shadow-gold-400/40 hover:scale-105 text-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Ver Equipamentos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              id="hero-cta-secondary"
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-gold-400 border border-gold-400/50 hover:border-gold-400 hover:bg-gold-400/10 transition-all duration-300 text-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Consultar Disponibilidade
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 pt-10 border-t border-white/10">
            {[
              { value: "50+", label: "Marcas Parceiras" },
              { value: "200+", label: "Equipamentos" },
              { value: "12+", label: "Anos no Mercado" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p
                  className="text-3xl font-bold text-gold-400"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs text-white/50 mt-1 uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Premium SVG Graphic ── */}
        <div className="flex items-center justify-center select-none" aria-hidden="true">
          <svg
            ref={svgRef}
            viewBox="0 0 420 420"
            width="420"
            height="420"
            className="hero-graphic"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transition: "transform 0.15s ease-out", overflow: "visible" }}
          >
            <defs>
              {/* Radial gold glow */}
              <radialGradient id="hg-core-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#d4af37" stopOpacity="0.22" />
                <stop offset="60%" stopColor="#d4af37" stopOpacity="0.07" />
                <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
              </radialGradient>

              {/* Gold linear gradient fills */}
              <linearGradient id="hg-gold-fill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f4d03f" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#b8960c" />
              </linearGradient>

              <linearGradient id="hg-gold-soft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4af37" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#9a7d0a" stopOpacity="0.3" />
              </linearGradient>

              {/* Glass-dark fill for inner shapes */}
              <radialGradient id="hg-hex-fill" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#1a1500" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.98" />
              </radialGradient>

              {/* Blur filter for glow elements */}
              <filter id="hg-blur-sm" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" />
              </filter>
              <filter id="hg-blur-lg" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="18" />
              </filter>

              {/* Clip circle */}
              <clipPath id="hg-clip-circle">
                <circle cx="210" cy="210" r="155" />
              </clipPath>
            </defs>

            {/* ── Layer 0: Large ambient glow ── */}
            <circle cx="210" cy="210" r="200" fill="url(#hg-core-glow)" filter="url(#hg-blur-lg)" />

            {/* ── Layer 1: Outermost dashed orbit ── */}
            <circle
              cx="210" cy="210" r="195"
              fill="none"
              stroke="#d4af37"
              strokeOpacity="0.12"
              strokeWidth="1"
              strokeDasharray="4 10"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 210 210"
                to="360 210 210"
                dur="60s"
                repeatCount="indefinite"
              />
            </circle>

            {/* ── Layer 2: Mid orbit ring ── */}
            <circle
              cx="210" cy="210" r="155"
              fill="none"
              stroke="url(#hg-gold-soft)"
              strokeWidth="0.8"
              strokeDasharray="2 14"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="360 210 210"
                to="0 210 210"
                dur="35s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Mid orbit: 4 small diamonds at cardinal points */}
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="360 210 210"
                to="0 210 210"
                dur="35s"
                repeatCount="indefinite"
              />
              {[0, 90, 180, 270].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const x = 210 + 155 * Math.sin(rad);
                const y = 210 - 155 * Math.cos(rad);
                return (
                  <polygon
                    key={angle}
                    points={`${x},${y - 5} ${x + 4},${y} ${x},${y + 5} ${x - 4},${y}`}
                    fill="url(#hg-gold-fill)"
                    opacity="0.8"
                  />
                );
              })}
            </g>

            {/* ── Layer 3: Inner orbit ring ── */}
            <circle cx="210" cy="210" r="110" fill="none" stroke="#d4af37" strokeOpacity="0.2" strokeWidth="1" />

            {/* Inner orbit: slowly rotating icons */}
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 210 210"
                to="360 210 210"
                dur="22s"
                repeatCount="indefinite"
              />
              {ORBIT_ICONS.map((d, i) => {
                const angle = (i * 360) / ORBIT_ICONS.length;
                const rad = (angle * Math.PI) / 180;
                const x = 210 + 110 * Math.sin(rad) - 12;
                const y = 210 - 110 * Math.cos(rad) - 12;
                return (
                  <g key={i} transform={`translate(${x}, ${y})`}>
                    <path d={d} fill="url(#hg-gold-fill)" opacity="0.55" transform="scale(1)" />
                  </g>
                );
              })}
            </g>

            {/* ── Layer 4: Decorative arc sweeps ── */}
            <path
              d="M 210 55 A 155 155 0 0 1 365 210"
              fill="none"
              stroke="url(#hg-gold-fill)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.35"
            />
            <path
              d="M 210 365 A 155 155 0 0 1 55 210"
              fill="none"
              stroke="url(#hg-gold-fill)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.35"
            />

            {/* ── Layer 5: Central hexagon ── */}
            {/* Hex glow behind */}
            <polygon
              points="210,140 268,175 268,245 210,280 152,245 152,175"
              fill="#d4af37"
              opacity="0.08"
              filter="url(#hg-blur-sm)"
            />
            {/* Hex border */}
            <polygon
              points="210,142 266,176 266,244 210,278 154,244 154,176"
              fill="url(#hg-hex-fill)"
              stroke="url(#hg-gold-fill)"
              strokeWidth="1.5"
              opacity="0.9"
            />
            {/* Inner hex accent */}
            <polygon
              points="210,160 250,183 250,230 210,253 170,230 170,183"
              fill="none"
              stroke="#d4af37"
              strokeOpacity="0.25"
              strokeWidth="1"
            />

            {/* ── Layer 6: Central icon – stylized "P" monogram ── */}
            <text
              x="210"
              y="228"
              textAnchor="middle"
              fontSize="72"
              fontFamily="Georgia, serif"
              fontWeight="bold"
              fill="url(#hg-gold-fill)"
              opacity="0.9"
              letterSpacing="-2"
            >
              P
            </text>
            {/* Sub-label */}
            <text
              x="210"
              y="252"
              textAnchor="middle"
              fontSize="9"
              fontFamily="'Inter', sans-serif"
              fill="#d4af37"
              opacity="0.5"
              letterSpacing="4"
            >
              ESTÉTICA
            </text>

            {/* ── Layer 7: Floating particles ── */}
            {PARTICLES.map((p, i) => (
              <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill="#d4af37" opacity="0">
                <animate
                  attributeName="opacity"
                  values="0;0.7;0"
                  dur={p.dur}
                  begin={p.delay}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values={`${p.r};${p.r * 1.6};${p.r}`}
                  dur={p.dur}
                  begin={p.delay}
                  repeatCount="indefinite"
                />
              </circle>
            ))}

            {/* ── Layer 8: Pulsing center dot ── */}
            <circle cx="210" cy="210" r="5" fill="#f4d03f" opacity="0.9">
              <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="210" cy="210" r="14" fill="none" stroke="#d4af37" strokeOpacity="0.4" strokeWidth="1">
              <animate attributeName="r" values="14;22;14" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <p
          className="text-white/30 text-xs uppercase tracking-widest"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Role para ver mais
        </p>
        <div className="w-px h-12 bg-gradient-to-b from-gold-400/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
