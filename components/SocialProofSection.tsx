const stats = [
  { value: "500+", label: "Aziende e PMI clienti", sub: "in tutta Italia" },
  { value: "€4M+", label: "Risparmio totale generato", sub: "negli ultimi 3 anni" },
  { value: "€8.500", label: "Risparmio medio annuo", sub: "per PMI fino a 20 dipendenti" },
  { value: "98%", label: "Clienti soddisfatti", sub: "che ci raccomandano" },
];

const testimonials = [
  {
    quote:
      "Con Enlil abbiamo ridotto le bollette luce e gas del nostro capannone di oltre €12.000 l'anno. Hanno fatto tutto loro, noi abbiamo solo firmato.",
    author: "Marco T.",
    role: "Titolare, azienda manifatturiera — Milano",
  },
  {
    quote:
      "Gestivamo 8 SIM aziendali con 3 operatori diversi. Enlil le ha centralizzate in un unico piano, risparmiando il 40% e semplificando la fatturazione.",
    author: "Giulia R.",
    role: "CFO, studio professionale — Roma",
  },
  {
    quote:
      "Il cambio fornitore internet era un incubo. Il team di Enlil ha migrato la nostra fibra senza downtime e ci ha fatto risparmiare €3.200 annui.",
    author: "Stefano M.",
    role: "CEO, e-commerce — Bologna",
  },
];

export default function SocialProofSection() {
  return (
    <section id="risparmi" className="py-20 lg:py-28 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* stats */}
        <div className="text-center mb-16">
          <p className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-3">
            Risultati reali · Clienti reali
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            I numeri parlano chiaro.
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Dati aggiornati a maggio 2026. Ogni risparmio è verificabile e
            documentato prima che tu firmi qualsiasi cosa.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((s) => (
            <div
              key={s.value}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl lg:text-4xl font-black text-orange-400 mb-1">
                {s.value}
              </div>
              <div className="text-white font-semibold text-sm leading-snug mb-1">
                {s.label}
              </div>
              <div className="text-slate-500 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white/5 border border-white/10 rounded-2xl p-7"
            >
              <div className="text-orange-400 text-3xl font-black leading-none mb-4">
                "
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                {t.quote}
              </p>
              <div>
                <div className="text-white font-bold text-sm">{t.author}</div>
                <div className="text-slate-500 text-xs mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
