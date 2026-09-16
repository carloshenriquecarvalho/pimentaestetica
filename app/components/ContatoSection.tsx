"use client";

import { useState } from "react";

export default function ContatoSection() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    interesse: "",
    mensagem: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp redirect
    const msg = encodeURIComponent(
      `Olá! Me chamo ${form.nome}.\nTelefone: ${form.telefone}\nE-mail: ${form.email}\nInteresse: ${form.interesse}\n\n${form.mensagem}`
    );
    window.open(`https://wa.me/5500000000000?text=${msg}`, "_blank");
    setSent(true);
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-gold-400/60 focus:bg-white/8 transition-all duration-300 text-sm";

  const labelClass = "block text-xs uppercase tracking-widest text-white/50 mb-1.5";

  return (
    <section id="contato" className="py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
        }}
      />
      <div
        className="absolute left-1/2 top-0 w-px h-full opacity-5"
        style={{ background: "#d4af37" }}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left copy */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold-400" />
            <span
              className="text-gold-400 text-xs uppercase tracking-[0.2em] font-medium"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Entre em Contato
            </span>
          </div>

          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Vamos Conversar{" "}
            <span className="text-gold-gradient">sobre você?</span>
          </h2>

          <p
            className="text-white/60 leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Preencha o formulário e nossa equipe entrará em contato para entender
            suas necessidades e apresentar as melhores soluções em equipamentos estéticos.
          </p>

          {/* Contact info cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.21 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.12 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                ),
                label: "WhatsApp",
                value: "(00) 00000-0000",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                label: "E-mail",
                value: "contato@pimentaestetica.com.br",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                label: "Localização",
                value: "Brasil",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/8"
                style={{ background: "rgba(20,20,20,0.6)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-gold-400 flex-shrink-0"
                  style={{ background: "rgba(212,175,55,0.1)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    className="text-xs text-white/30 uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-white text-sm font-medium"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div
          className="rounded-3xl p-8 border border-gold-400/20"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,26,26,0.9) 0%, rgba(10,10,10,0.95) 100%)",
          }}
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(212,175,55,0.15)" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Mensagem enviada!
              </h3>
              <p
                className="text-white/50 text-sm"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Em breve nossa equipe entrará em contato.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 text-gold-400 text-sm underline"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className={labelClass} style={{ fontFamily: "var(--font-inter)" }}>
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={form.nome}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-inter)", color: "white" }}
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className={labelClass} style={{ fontFamily: "var(--font-inter)" }}>
                    Telefone / WhatsApp
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    required
                    placeholder="(00) 00000-0000"
                    value={form.telefone}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-inter)", color: "white" }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClass} style={{ fontFamily: "var(--font-inter)" }}>
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  style={{ fontFamily: "var(--font-inter)", color: "white" }}
                />
              </div>

              <div>
                <label htmlFor="interesse" className={labelClass} style={{ fontFamily: "var(--font-inter)" }}>
                  Interesse
                </label>
                <select
                  id="interesse"
                  name="interesse"
                  value={form.interesse}
                  onChange={handleChange}
                  className={inputClass}
                  style={{ fontFamily: "var(--font-inter)", color: form.interesse ? "white" : "rgba(255,255,255,0.3)" }}
                >
                  <option value="" disabled>
                    Selecione um equipamento
                  </option>
                  <option value="Laser e IPL">Laser e IPL</option>
                  <option value="Radiofrequência">Radiofrequência</option>
                  <option value="Ultrassom Focalizado">Ultrassom Focalizado</option>
                  <option value="Microagulhamento">Microagulhamento</option>
                  <option value="Criolipólise">Criolipólise</option>
                  <option value="Estética Facial">Estética Facial</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className={labelClass} style={{ fontFamily: "var(--font-inter)" }}>
                  Mensagem (opcional)
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  placeholder="Descreva suas necessidades ou dúvidas..."
                  value={form.mensagem}
                  onChange={handleChange}
                  className={inputClass + " resize-none"}
                  style={{ fontFamily: "var(--font-inter)", color: "white" }}
                />
              </div>

              <button
                type="submit"
                id="form-submit"
                className="w-full py-4 rounded-xl font-semibold text-black-900 bg-gradient-to-r from-gold-400 to-gold-300 hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-400/20 hover:shadow-gold-400/40 hover:scale-[1.01] text-sm"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Enviar Mensagem via WhatsApp
              </button>

              <p
                className="text-center text-white/25 text-xs"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Seus dados estão protegidos e não serão compartilhados.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
