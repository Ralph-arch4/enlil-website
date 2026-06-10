const stats = [
  { value: "670+", label: "PMI e aziende clienti", sub: "manifattura · HoReCa · studi · retail · e-commerce" },
  { value: "€6,1M+", label: "Risparmio totale certificato", sub: "dati verificabili 2019–2026 · ARERA compliant" },
  { value: "€9.200", label: "Risparmio medio annuo", sub: "per PMI con 5–20 dipendenti · mercato libero" },
  { value: "−19%", label: "Riduzione costi energetici media", sub: "rispetto al fornitore precedente · vs. +19,2% mercato" },
];

const sectors = [
  { name: "Manifattura & capannoni industriali", saving: "−28%", detail: "Audit gratuito consumi energivori 24/7 · tariffe BTA dedicate" },
  { name: "Ristorazione & HoReCa", saving: "−25%", detail: "Multi-locale, referente unico, IVA agevolata al 10%" },
  { name: "Studi professionali & uffici", saving: "−22%", detail: "Luce, gas, internet e SIM aziendali in un solo contratto" },
  { name: "Retail & e-commerce", saving: "−24%", detail: "Punti vendita multipli, fatturazione centralizzata" },
  { name: "Agricoltura & agroindustria", saving: "−27%", detail: "Tariffe BTA dedicate · gas per serre, stalle ed essiccatoi" },
  { name: "Logistica & trasporti", saving: "−23%", detail: "Magazzini, depositi e SIM M2M per flotte aziendali" },
];

const testimonials = [
  {
    quote:
      "Con Enlil abbiamo ridotto luce e gas del nostro capannone di oltre €14.000 all'anno — 22% in meno rispetto al contratto precedente. Hanno analizzato i consumi, confrontato 50+ fornitori e gestito tutta la burocrazia: noi abbiamo solo firmato. IVA al 10% e prezzo fisso 24 mesi già nel primo contratto. Con le bollette schizzate nel 2025, avere un broker energetico certificato ha fatto la differenza.",
    author: "Marco T.",
    role: "Titolare, azienda manifatturiera (85 kW) — Milano",
    saving: "−€14.000/anno",
  },
  {
    quote:
      "Tre locali, tre contratti separati nel mercato tutelato. Enlil li ha analizzati in una settimana e ci ha portati nel mercato libero con un unico referente: €8.400 risparmiati ogni anno. Con il Decreto Bollette 2026 abbiamo ottenuto l'IVA agevolata al 10% su tutte e tre le utenze. Nessuna sorpresa in bolletta, nessun pensiero.",
    author: "Luca B.",
    role: "Titolare, catena ristorazione HoReCa — Napoli",
    saving: "−€8.400/anno",
  },
  {
    quote:
      "Eravamo bloccati con un fornitore fibra che ci costava il doppio del mercato. Enlil ha migrato la connessione in 24h senza un minuto di downtime, ottimizzato luce e SIM aziendali: €4.100 risparmiati all'anno, tutto documentato in fattura. Broker indipendente: nessun fornitore preferito, solo il risparmio reale.",
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
            300.000 PMI italiane a rischio chiusura per bollette fuori controllo · Mercato tutelato chiuso dal 2024: stai pagando abbastanza?
          </span>
        </div>

        {/* rating badge */}
        <div className="flex items-center justify-center gap-2 text-sm font-bold mb-6">
          <span className="text-orange-400 tracking-tight" aria-hidden>★★★★★</span>
          <span className="text-white">4,9/5</span>
          <span className="text-slate-400 font-normal">— oltre 230 recensioni verificate Google e Trustpilot</span>
        </div>

        {/* stats */}
        <div className="text-center mb-16">
          <p className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-3">
            Risultati reali · Clienti verificati · Broker indipendente certificato ARERA
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            €9.200 risparmiati ogni anno.<br className="hidden sm:block" /> 670 PMI italiane già lo sanno.
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Dati verificati a giugno 2026. Dal 2024 il mercato tutelato è chiuso per le imprese:
            ogni PMI è già nel mercato libero, ma il contratto sbagliato costa fino al 30% in più.
            Per il 2026 lo Stato stanzia 431 milioni di euro di sconto in bolletta per le imprese
            (3,4 €/MWh): da soli non bastano, serve il contratto giusto. Enlil confronta 50+ fornitori,
            negozia tariffe business esclusive e garantisce il risparmio —
            analisi gratuita, zero vincoli, Decreto Bollette 2026 già applicato.
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

        {/* sector results */}
        <div className="mb-20">
          <h3 className="text-center text-white font-black text-2xl sm:text-3xl mb-2 tracking-tight">
            Risparmio bollette per settore: i dati reali delle nostre 670+ PMI clienti
          </h3>
          <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
            Ogni settore ha consumi e tariffe diversi: ecco la riduzione media ottenuta
            dai nostri clienti su luce, gas, internet e SIM aziendali.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectors.map((s) => (
              <div
                key={s.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="text-2xl font-black text-orange-400 leading-none flex-shrink-0">
                  {s.saving}
                </div>
                <div>
                  <div className="text-white font-bold text-sm leading-snug mb-1">{s.name}</div>
                  <div className="text-slate-500 text-xs">{s.detail}</div>
                </div>
              </div>
            ))}
          </div>
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
            <div className="text-slate-500 text-xs">7 anni · oltre 670 PMI italiane servite · Decreto Bollette 2026 attivo</div>
          </div>
          <div>
            <div className="text-white font-black text-sm mb-1">Risparmio garantito fino al -30%</div>
            <div className="text-slate-500 text-xs">Analisi gratuita · risultati verificabili in fattura · 50+ fornitori confrontati</div>
          </div>
          <div>
            <div className="text-white font-black text-sm mb-1">Switch luce 24h · gas 30gg</div>
            <div className="text-slate-500 text-xs">Luce, gas, internet, SIM — zero downtime · gestione burocrazia inclusa</div>
          </div>
        </div>
      </div>
    </section>
  );
}
