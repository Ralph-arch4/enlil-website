const services = [
  {
    icon: "⚡",
    title: "Energia Elettrica",
    subtitle: "Luce Business",
    desc: "Confrontiamo in tempo reale oltre 50 fornitori del mercato libero e negoziamo il contratto luce più conveniente per la tua partita IVA: offerta a prezzo fisso 12–24 mesi, indicizzata PUN o PLACET business ARERA. Risparmio medio 25%, switch completato in 24h lavorative, IVA agevolata al 10% applicata automaticamente.",
    tags: ["Switch 24h lavorative", "IVA 10% business", "Fisso · PUN · PLACET"],
  },
  {
    icon: "🔥",
    title: "Gas Naturale",
    subtitle: "Gas per Imprese",
    desc: "Tariffe gas business confrontate su tutti i fornitori del mercato libero: prezzi fissi PSV, indicizzati o dual fuel con luce. Con il gas naturale +35% nel 2026 per la crisi LNG, bloccare il prezzo ora può valere migliaia di euro all'anno. Gestiamo la migrazione al nuovo fornitore senza interruzioni di servizio.",
    tags: ["Prezzo fisso PSV", "Offerte dual fuel", "Garanzia continuità"],
  },
  {
    icon: "🌐",
    title: "Connettività Internet",
    subtitle: "Fibra & Business",
    desc: "Fibra FTTH/FTTB dedicata per uffici e sedi aziendali: banda garantita, IP fisso incluso, SLA commerciale e assistenza prioritaria 24/7. Confrontiamo tutti gli operatori business e gestiamo la migrazione senza downtime.",
    tags: ["Fibra FTTH/FTTB", "IP fisso incluso", "SLA garantito"],
  },
  {
    icon: "📱",
    title: "SIM & Mobile",
    subtitle: "Flotte Aziendali",
    desc: "Gestione completa delle flotte SIM aziendali: negoziamo piani voce e dati flat per team da 2 a 500 dipendenti, portabilità inclusa e MDM opzionale. Risparmio medio 40% rispetto ai piani consumer — con un unico contratto aziendale.",
    tags: ["Piani flat voce+dati", "Portabilità gratuita", "Risparmio fino a −40%"],
  },
];

export default function ServicesSection() {
  return (
    <section id="servizi" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">
            Un broker · Tutte le utenze
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-5 tracking-tight">
            Tutto ciò che consuma la tua azienda,{" "}
            <span className="text-orange-500">ottimizzato.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Niente più fornitori diversi, niente più rinnovi dimenticati.
            Enlil centralizza luce, gas, internet e SIM e ti garantisce sempre
            il miglior prezzo sul mercato italiano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-orange-100 rounded-2xl p-8 transition-all hover:shadow-xl hover:shadow-orange-50 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-1">
                {s.subtitle}
              </p>
              <h3 className="text-xl font-black text-slate-900 mb-3">
                {s.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold bg-slate-900/5 text-slate-600 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
