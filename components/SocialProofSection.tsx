const stats = [
  { value: "600+", label: "PMI e aziende clienti", sub: "manifattura · HoReCa · studi · e-commerce" },
  { value: "€5,2M+", label: "Risparmio totale certificato", sub: "dati verificabili 2019–2026" },
  { value: "€8.500", label: "Risparmio medio annuo", sub: "per PMI con 5–20 dipendenti" },
  { value: "24h", label: "Cambio fornitore luce", sub: "senza interruzioni — dal 1° gen 2026" },
];

const testimonials = [
  {
    quote:
      "Con Enlil abbiamo ridotto luce e gas del nostro capannone di oltre €12.000 all'anno. Hanno analizzato i consumi, trattato con i fornitori e gestito le pratiche — noi abbiamo solo firmato. Nel 2026, con i prezzi ancora alti, è stato fondamentale.",
    author: "Marco T.",
    role: "Titolare, azienda manifatturiera — Milano",
    saving: "−€12.000/anno",
  },
  {
    quote:
      "Tre locali, tre contratti separati per luce e gas. Enlil li ha analizzati tutti in una settimana, siamo passati al mercato libero con un unico referente e risparmiamo €7.800 ogni anno senza pensieri.",
    author: "Luca B.",
    role: "Titolare, ristorazione — Napoli",
    saving: "−€7.800/anno",
  },
  {
    quote:
      "Il cambio fornitore internet sembrava un'odissea burocratica. Enlil ha migrato la nostra fibra in 24h senza un minuto di downtime e ci garantisce €3.200 risparmiati ogni anno rispetto al contratto precedente.",
    author: "Stefano M.",
    role: "CEO, e-commerce — Bologna",
    saving: "−€3.200/anno",
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
            Attenzione PMI · Elettricità +8,1% nel Q2 2026 · Ogni mese che aspetti è denaro perso
          </span>
        </div>

        {/* stats */}
        <div className="text-center mb-16">
          <p className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-3">
            Risultati reali · Clienti verificati · Mercato libero 2026
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            Risparmio bollette certificato<br className="hidden sm:block" /> per PMI e imprese italiane.
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Dati aggiornati a maggio 2026. Ogni risparmio è verificabile e
            documentato prima che tu firmi qualsiasi cosa. Consulenza sempre gratuita.
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
            <div className="text-white font-black text-sm mb-1">Operatore autorizzato</div>
            <div className="text-slate-500 text-xs">Mercato libero luce e gas — ARERA</div>
          </div>
          <div>
            <div className="text-white font-black text-sm mb-1">Attivi dal 2019</div>
            <div className="text-slate-500 text-xs">7 anni al servizio delle PMI italiane</div>
          </div>
          <div>
            <div className="text-white font-black text-sm mb-1">Consulenza gratuita</div>
            <div className="text-slate-500 text-xs">Nessun costo, nessun vincolo</div>
          </div>
          <div>
            <div className="text-white font-black text-sm mb-1">Cambio in 24h</div>
            <div className="text-slate-500 text-xs">Luce, gas, internet, SIM — zero downtime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
