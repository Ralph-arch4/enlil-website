const steps = [
  {
    n: '01',
    title: 'Condividi le tue bollette',
    desc: 'Carica o inviaci le ultime 3 bollette di luce, gas e internet. Bastano i PDF — 5 minuti al massimo.',
  },
  {
    n: '02',
    title: 'Analisi gratuita in 24h',
    desc: 'I nostri specialisti mappano i tuoi consumi, identificano inefficienze contrattuali e calcolano il risparmio potenziale.',
  },
  {
    n: '03',
    title: 'Ti presentiamo le offerte',
    desc: 'Confrontiamo 30+ fornitori e ti portiamo le 3 migliori soluzioni con un calcolo trasparente del ROI.',
  },
  {
    n: '04',
    title: 'Gestiamo tutto noi',
    desc: 'Dalla firma al passaggio fornitore, fino alla gestione dei problemi in bolletta: ENLIL è il tuo ufficio acquisti energetico.',
  },
]

export default function HowItWorks() {
  return (
    <section id="come-funziona" className="py-24 bg-[#0A1628]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#00C2FF] font-semibold uppercase tracking-widest text-sm mb-3">
            Processo semplice
          </p>
          <h2 className="section-title text-center">
            Inizia a risparmiare in{' '}
            <span className="text-[#00C2FF]">meno di una settimana</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.n} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#00C2FF]/50 to-transparent z-10" />
              )}
              <div className="card h-full">
                <div className="text-5xl font-black text-[#00C2FF]/20 leading-none mb-3">{step.n}</div>
                <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
