const stats = [
  {
    value: '500+',
    label: 'Aziende clienti',
    sub: 'PMI, SRL, professionisti e catene retail',
  },
  {
    value: '€2.800',
    label: 'Risparmio medio annuo',
    sub: 'per azienda, calcolato sui contratti attivi',
  },
  {
    value: '30+',
    label: 'Fornitori in portafoglio',
    sub: 'luce, gas, fibra, SIM — tutti i big player italiani',
  },
  {
    value: '15%',
    label: 'Riduzione media bollette',
    sub: 'ottenuta già al primo rinnovo contrattuale',
  },
]

const testimonials = [
  {
    quote:
      'In tre settimane ENLIL ha rinegoziato luce e gas per i miei tre punti vendita. Risparmio annuo certificato: €6.400. Zero burocrazia da parte mia.',
    name: 'Marco T.',
    role: 'Titolare, catena ristorazione — Milano',
    saving: '€6.400/anno',
  },
  {
    quote:
      'Avevo due contratti internet attivi senza saperlo. ENLIL li ha risolti, trovato un piano fibra dedicato e gestito il passaggio. Non ho perso un giorno di connettività.',
    name: 'Alessandra R.',
    role: 'CEO, studio legale — Roma',
    saving: '€1.900/anno',
  },
  {
    quote:
      'Il loro approccio è da CFO esterno: analizzano tutto, ti spiegano ogni voce in bolletta e negoziano come se fosse una gara d\'appalto. Risultato eccellente.',
    name: 'Giovanni M.',
    role: 'Operations Manager, manifattura — Brescia',
    saving: '€11.200/anno',
  },
]

export default function SocialProof() {
  return (
    <section id="risultati" className="py-24 bg-[#0A1628]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#00C2FF] font-semibold uppercase tracking-widest text-sm mb-3">
            Risultati verificabili
          </p>
          <h2 className="section-title text-center">
            I numeri parlano chiaro.
            <br />
            <span className="text-[#00C2FF]">Il risparmio è reale.</span>
          </h2>
          <p className="section-subtitle mx-auto text-center mt-4">
            Dati aggiornati sui contratti gestiti da ENLIL per aziende italiane nel mercato libero dell&rsquo;energia e delle telecomunicazioni.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="card text-center">
              <div className="text-4xl md:text-5xl font-black text-[#00C2FF] leading-none mb-2">
                {s.value}
              </div>
              <div className="text-white font-bold text-base mb-1">{s.label}</div>
              <div className="text-slate-400 text-xs leading-snug">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-slate-300 text-center mb-10">
            Cosa dicono i nostri clienti
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#F5A623]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-700 pt-4">
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-slate-400 text-xs">{t.role}</div>
                  </div>
                  <div className="bg-[#00C2FF]/10 border border-[#00C2FF]/30 rounded-lg px-3 py-1">
                    <span className="text-[#00C2FF] font-bold text-sm">{t.saving}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
          {[
            '✓ Broker indipendente — nessun conflitto d\'interesse',
            '✓ Attivo in tutte le regioni italiane',
            '✓ Mercato libero energia certificato',
            '✓ NDA e privacy garantiti',
          ].map((badge) => (
            <span key={badge} className="bg-[#0D2040] border border-slate-700 rounded-full px-4 py-2">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
