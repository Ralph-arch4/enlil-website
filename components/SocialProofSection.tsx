const stats = [
  { value: "670+", label: "PMI e aziende clienti", sub: "manifattura · HoReCa · studi · retail · e-commerce" },
  { value: "€6,1M+", label: "Risparmio totale certificato", sub: "dati verificabili 2019–2026 · ARERA compliant" },
  { value: "€9.200", label: "Risparmio medio annuo", sub: "per PMI con 5–20 dipendenti · mercato libero" },
  { value: "−19%", label: "Riduzione costi energetici media", sub: "rispetto al fornitore precedente · vs. +19,2% mercato" },
];

const testimonials = [
  {
    quote:
      "Con Enlil abbiamo ridotto luce e gas del nostro capannone di oltre €14.000 all'anno — il 22% in meno rispetto al contratto precedente. Hanno analizzato i consumi, trattato con i fornitori e gestito le pratiche burocratiche: noi abbiamo solo firmato. Con le bollette aziendali schizzate nel 2025, avere un consulente energetico serio ha fatto la differenza.",
    author: "Marco T.",
    role: "Titolare, azienda manifatturiera (85 kW) — Milano",
    saving: "−€14.000/anno",
  },
  {
    quote:
      "Tre locali, tre contratti separati per luce e gas nel mercato tutelato. Enlil li ha analizzati tutti in una settimana, ci ha portati nel mercato libero con un unico referente e ora risparmiamo €8.400 ogni anno. Nessuna sorpresa in bolletta, nessun pensiero.",
    author: "Luca B.",
    role: "Titolare, catena ristorazione HoReCa — Napoli",
    saving: "−€8.400/anno",
  },
  {
    quote:
      "Il cambio fornitore fibra aziendale sembrava un'odissea burocratica. Enlil ha migrato la nostra connessione in 24h senza un minuto di downtime, ci ha ottimizzato anche luce e SIM aziendali: €4.100 risparmiati all'anno rispetto ai contratti precedenti. Risultato verificabile in fattura.",
    author: "Stefano M.",
    role: "CEO, e-commerce (12 dipendenti) — Bologna",
    saving: "−€4.100/anno",
  },
];

export default function SocialProofSection() {
  return (
    <section id="risparmi" className="py-20 lg:py-28 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* urgency banner */}
        <div className="flex items-center justify-center gap-3 bg-orange-500/10 border border-orange-500/25 rounded-full px-5 py-2 mb-10 w-fit mx-auto">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse flex-shrink-0" />
          <span className="text-orange-300 text-xs font-bold uppercase tracking-wide">
            Bollette aziendali +19,2% nel 2025 · €85 mld di extra costi per le imprese italiane · Ogni mese che aspetti è denaro perso
          </span>
        </div>

        {/* stats */}
        <div className="text-center mb-16">
          <p className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-3">
            Risultati reali · Clienti verificati · Broker indipendente certificato ARERA
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            Riduzione costi energetici certificata<br className="hidden sm:block" /> per PMI e imprese italiane.
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Dati aggiornati a maggio 2026. Il mercato libero energia può far risparmiare
            fino al 20% sui costi di luce e gas aziendali — ogni cifra è verificabile
            e documentata prima che tu firmi. Consulenza gratuita, zero vincoli.
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-orange-400 text-3xl font-black leading-none">"</div>
                <span className="bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-black px-3 py-1 rounded-full">
                  {t.saving}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 text-sm flex-1">
                {t.quote}
              </p>
              <div>
                <div className="text-white font-bold text-sm">{t.author}</div>
                <div className="text-slate-500 text-xs mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* trust band */}
        <div className="border-t border-white/10 pt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-white font-black text-sm mb-1">Broker indipendente ARERA</div>
            <div className="text-slate-500 text-xs">Mercato libero luce e gas — nessun fornitore preferito</div>
          </div>
          <div>
            <div className="text-white font-black text-sm mb-1">Attivi dal 2019</div>
            <div className="text-slate-500 text-xs">7 anni · oltre 670 PMI italiane servite</div>
          </div>
          <div>
            <div className="text-white font-black text-sm mb-1">Risparmio garantito</div>
            <div className="text-slate-500 text-xs">Analisi gratuita · risultati verificabili in 30 giorni</div>
          </div>
          <div>
            <div className="text-white font-black text-sm mb-1">Switch in 24h · zero downtime</div>
            <div className="text-slate-500 text-xs">Luce, gas, internet, SIM — gestione pratica inclusa</div>
          </div>
        </div>
      </div>
    </section>
  );
}
