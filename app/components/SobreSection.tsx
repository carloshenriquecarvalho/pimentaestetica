export default function SobreSection() {
  return (
    <section id="sobre" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
        }}
      />
      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-5 blur-3xl"
        style={{ background: "#d4af37" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="relative order-2 lg:order-1">
            {/* Card stack */}
            <div className="relative">
              {/* Back card */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-gold-400/20"
                style={{ background: "rgba(212,175,55,0.04)" }}
              />
              {/* Main card */}
              <div
                className="relative rounded-3xl p-8 border border-gold-400/20"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(26,26,26,0.9) 0%, rgba(10,10,10,0.9) 100%)",
                }}
              >
                {/* Quote mark */}
                <div
                  className="text-7xl leading-none mb-4 opacity-20"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: "#d4af37",
                  }}
                >
                  "
                </div>
                <p
                  className="text-white/80 text-lg leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Acreditamos que todo profissional de estética merece acesso a
                  equipamentos de ponta, com suporte técnico especializado e condições
                  diferenciadas. Essa é a nossa missão.
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(212,175,55,0.2)" }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="2"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-gold-400 font-semibold text-sm"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Equipe Pimenta Estética
                    </p>
                    <p
                      className="text-white/40 text-xs"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Distribuidora Multimarcas
                    </p>
                  </div>
                </div>

                {/* Features list */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
                  {[
                    "Autorizada pelas principais marcas do segmento",
                    "Assistência técnica especializada",
                    "Entrega para todo o Brasil",
                    "Suporte pós-venda dedicado",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(212,175,55,0.2)" }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <p className="text-white/70 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold-400" />
              <span
                className="text-gold-400 text-xs uppercase tracking-[0.2em] font-medium"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Quem Somos
              </span>
            </div>

            <h2
              className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Referência em{" "}
              <span className="text-gold-gradient">Equipamentos</span>
              <br />
              Estéticos
            </h2>

            <p
              className="text-white/60 leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              A Pimenta Estética Multimarcas é uma distribuidora especializada em
              equipamentos para estética profissional. Trabalhamos com as marcas mais
              renomadas do mercado, oferecendo uma linha completa de tecnologias para
              clínicas, spas e profissionais autônomos.
            </p>

            <p
              className="text-white/60 leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Nossa equipe de especialistas está pronta para ajudar você a encontrar
              o equipamento ideal para sua necessidade, com demonstrações, treinamentos
              e suporte completo.
            </p>

            <a
              href="#contato"
              id="sobre-cta"
              className="inline-flex items-center gap-2 text-gold-400 text-sm font-semibold hover:gap-4 transition-all duration-300 group"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Fale com nossos especialistas
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
