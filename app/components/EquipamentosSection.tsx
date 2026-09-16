const equipamentos = [
  {
    id: "laser-co2",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    categoria: "Fototerapia",
    nome: "Laser e IPL",
    descricao:
      "Equipamentos de fototerapia avançada para fotorejuvenescimento, remoção de manchas, pelos e tratamento de lesões vasculares.",
    tags: ["Fotorejuvenescimento", "Depilação a Laser", "Manchas"],
  },
  {
    id: "radiofrequencia",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    categoria: "Radiofrequência",
    nome: "Radiofrequência",
    descricao:
      "Tecnologia de radiofrequência para flacidez, remodelamento corporal e facial com resultados clínicos comprovados.",
    tags: ["Antienvelhecimento", "Firmeza", "Corporal"],
  },
  {
    id: "ultrassom",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4" />
        <path d="M6 12H2" />
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <circle cx="12" cy="12" r="4" />
        <path d="M19.07 4.93l-2.83 2.83" />
        <path d="M7.76 16.24l-2.83 2.83" />
        <path d="M19.07 19.07l-2.83-2.83" />
        <path d="M7.76 7.76L4.93 4.93" />
      </svg>
    ),
    categoria: "Ultrassom",
    nome: "Ultrassom Focalizado",
    descricao:
      "Soluções de ultrassom para modelagem corporal, redução de gordura localizada e tratamento de celulite.",
    tags: ["Gordura Localizada", "Celulite", "Modelagem"],
  },
  {
    id: "microagulhamento",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22V12" />
        <path d="M12 12C12 6.5 17 2 17 2" />
        <path d="M12 12C12 6.5 7 2 7 2" />
        <path d="M7 22h10" />
      </svg>
    ),
    categoria: "Skin Care",
    nome: "Microagulhamento",
    descricao:
      "Dispositivos profissionais de microagulhamento para estimulação de colágeno, cicatrizes e rejuvenescimento da pele.",
    tags: ["Colágeno", "Cicatrizes", "Rejuvenescimento"],
  },
  {
    id: "cryolipolysis",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    categoria: "Crioterapia",
    nome: "Criolipólise",
    descricao:
      "Equipamentos de criolipólise para eliminação definitiva de gordura localizada sem procedimentos invasivos.",
    tags: ["Gordura", "Não Invasivo", "Resultados Rápidos"],
  },
  {
    id: "estetica-facial",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M12 12v10" />
        <path d="M8 16l4-4 4 4" />
      </svg>
    ),
    categoria: "Facial",
    nome: "Estética Facial",
    descricao:
      "Linha completa de equipamentos faciais: limpeza de pele, hidratação profunda, drenagem linfática e muito mais.",
    tags: ["Limpeza de Pele", "Hidratação", "Drenagem"],
  },
];

export default function EquipamentosSection() {
  return (
    <section id="equipamentos" className="py-28 relative">
      {/* Top divider */}
      <div
        className="absolute top-0 left-1/4 right-1/4 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
        }}
      />

      {/* Background accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: "#d4af37" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold-400" />
            <span
              className="text-gold-400 text-xs uppercase tracking-[0.2em] font-medium"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Nosso Portfólio
            </span>
            <div className="h-px w-10 bg-gold-400" />
          </div>

          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Linhas de{" "}
            <span className="text-gold-gradient">Equipamentos</span>
          </h2>

          <p
            className="text-white/50 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Trabalhamos com as tecnologias mais avançadas do mercado estético.
            Encontre o equipamento ideal para elevar seu atendimento.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipamentos.map((equip) => (
            <div
              key={equip.id}
              id={`equip-${equip.id}`}
              className="group relative rounded-2xl p-6 border border-white/8 hover:border-gold-400/40 transition-all duration-500 cursor-default"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,26,26,0.8) 0%, rgba(10,10,10,0.8) 100%)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(ellipse at top left, rgba(212,175,55,0.06), transparent 60%)",
                }}
              />

              {/* Header */}
              <div className="relative flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "rgba(212,175,55,0.1)" }}
                >
                  {equip.icon}
                </div>
                <span
                  className="text-xs text-gold-400/60 uppercase tracking-widest px-2 py-1 rounded-full border border-gold-400/20"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {equip.categoria}
                </span>
              </div>

              {/* Content */}
              <h3
                className="text-white font-semibold text-xl mb-2 group-hover:text-gold-400 transition-colors duration-300"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {equip.nome}
              </h3>
              <p
                className="text-white/50 text-sm leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {equip.descricao}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {equip.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/40 border border-white/8"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom CTA */}
              <a
                href="#contato"
                className="mt-6 flex items-center gap-2 text-gold-400/70 text-xs font-medium group-hover:text-gold-400 transition-colors group/link"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Consultar disponibilidade
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="group-hover/link:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#contato"
            id="equip-cta-all"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gold-400/40 text-gold-400 text-sm font-semibold hover:bg-gold-400/10 hover:border-gold-400 transition-all duration-300"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Ver Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
}
