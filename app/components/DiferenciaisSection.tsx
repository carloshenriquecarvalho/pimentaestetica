const diferenciais = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    titulo: "Produtos Originais",
    descricao:
      "Todos os equipamentos são originais, com certificação ANVISA e garantia de fábrica. Sua segurança e a dos seus clientes em primeiro lugar.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    titulo: "Entrega Rápida",
    descricao:
      "Logística eficiente com entrega para todo o Brasil. Seu equipamento chega no prazo e com embalagem segura.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    titulo: "Suporte Especializado",
    descricao:
      "Equipe técnica treinada para tirar suas dúvidas, auxiliar na instalação e oferecer treinamento completo do equipamento.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    titulo: "Melhores Condições",
    descricao:
      "Condições especiais de pagamento, parcelamento facilitado e descontos exclusivos para profissionais e clínicas.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    titulo: "Alta Tecnologia",
    descricao:
      "Portfólio atualizado com as tecnologias mais modernas do mercado estético nacional e internacional.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    titulo: "Atendimento Personalizado",
    descricao:
      "Cada cliente recebe atendimento exclusivo. Entendemos suas necessidades e indicamos a melhor solução para o seu negócio.",
  },
];

export default function DiferenciaisSection() {
  return (
    <section id="diferenciais" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(212,175,55,0.03) 50%, rgba(0,0,0,0) 100%)",
        }}
      />
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.4) 50%, transparent)",
        }}
      />
      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.4) 50%, transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold-400" />
            <span
              className="text-gold-400 text-xs uppercase tracking-[0.2em] font-medium"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Por que nos escolher
            </span>
            <div className="h-px w-10 bg-gold-400" />
          </div>

          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nossos{" "}
            <span className="text-gold-gradient">Diferenciais</span>
          </h2>

          <p
            className="text-white/50 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Muito além de vender equipamentos. Somos parceiros estratégicos
            para o crescimento do seu negócio estético.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((item, index) => (
            <div
              key={item.titulo}
              id={`diferencial-${index + 1}`}
              className="group relative rounded-2xl p-7 border border-white/8 hover:border-gold-400/30 transition-all duration-500"
              style={{
                background:
                  "linear-gradient(135deg, rgba(20,20,20,0.9) 0%, rgba(10,10,10,0.9) 100%)",
              }}
            >
              {/* Number badge */}
              <div
                className="absolute top-4 right-4 text-5xl font-bold opacity-5 select-none"
                style={{ fontFamily: "var(--font-playfair)", color: "#d4af37" }}
              >
                0{index + 1}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-gold-400 mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: "rgba(212,175,55,0.08)" }}
              >
                {item.icon}
              </div>

              <h3
                className="text-white font-semibold text-lg mb-3 group-hover:text-gold-400 transition-colors duration-300"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {item.titulo}
              </h3>

              <p
                className="text-white/50 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {item.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
