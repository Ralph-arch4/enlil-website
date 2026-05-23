const services = [
  {
    icon: "⚡",
    title: "Energia Elettrica",
    subtitle: "Luce Business",
    desc: "Analizziamo i tuoi consumi e negoziamo con oltre 50 fornitori il contratto luce più conveniente per la tua partita IVA. Risparmio medio 25%, cambio fornitore completato in 24h, IVA agevolata al 10%.",
    tags: ["Cambio fornitore in 24h", "IVA 10% business", "Tariffa fissa o indicizzata"],
  },
  {
    icon: "🔥",
    title: "Gas Naturale",
    subtitle: "Gas per Imprese",
    desc: "Confrontiamo tutte le offerte gas per aziende, PMI ed esercizi commerciali. Gestiamo la migrazione al nuovo fornitore senza interruzioni di servizio.",
    tags: ["Offerte dual fuel", "Gestione cambio fornitore", "Garanzia continuità"],
  },
  {
    icon: "🌐",
    title: "Connettività Internet",
    subtitle: "Fibra & Business",
    desc: "Fibra ottica dedicata, FTTB e connessioni ridondanti per uffici e sedi aziendali. Banda garantita, SLA commerciale e assistenza prioritaria 24/7.",
    tags: ["Fibra FTTH/FTTB", "IP fisso incluso", "SLA garantito"],
  },
  {
    icon: "📱",
    title: "SIM & Mobile",
    subtitle: "Flotte Aziendali",
    desc: "Gestione completa delle flotte SIM aziendali: negoziamo piani voce e dati per team da 2 a 500 dipendenti, con portabilità inclusa e MDM opzionale.",
    tags: ["Piani flat voce+dati", "Portabilità gratuita", "Dashboard fleet"],
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
