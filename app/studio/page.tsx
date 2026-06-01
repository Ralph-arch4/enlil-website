import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'

const values = [
  {
    title: 'Competenza',
    body: 'Anni di esperienza nel brokeraggio e nello sviluppo di prodotti SaaS. Conosciamo il settore dall\'interno.',
  },
  {
    title: 'Chiarezza',
    body: 'Niente gergo, niente promesse vuote. Ti diciamo esattamente cosa possiamo fare per te e come lo faremo.',
  },
  {
    title: 'Risultati',
    body: 'Misuriamo il nostro successo sui tuoi numeri. Ogni progetto ha obiettivi chiari e milestone verificabili.',
  },
]

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-navy-deep text-white">
      <Navbar />
      <PageHero
        label="Chi Siamo"
        heading="ENLIL"
        sub="Un broker specializzato in Web & Utility — il ponte tra la tua azienda e i mercati da cui dipende."
      />

      <section className="px-6 md:px-16 pb-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-24">
          {/* Web side */}
          <div>
            <div className="w-14 h-14 border border-gold-primary/30 mb-8 flex items-center justify-center relative">
              <div className="absolute inset-0 border border-gold-primary/10 rotate-12" />
              <span className="font-orbitron text-lg font-black text-gold-primary">W</span>
            </div>
            <h2 className="font-orbitron text-lg font-bold uppercase tracking-tight mb-1 text-white">
              Web Brokerage
            </h2>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold-primary/60 mb-4 font-mono">
              Infrastruttura Digitale · SaaS
            </p>
            <p className="text-sm text-white/45 leading-relaxed">
              Colleghiamo le aziende con la migliore infrastruttura digitale disponibile. Da domini
              e hosting all&apos;accesso completo a piattaforme SaaS — a tariffe negoziate, così puoi
              concentrarti sul tuo business.
            </p>
          </div>

          {/* Utility side */}
          <div>
            <div className="w-14 h-14 border border-gold-primary/30 mb-8 flex items-center justify-center relative">
              <div className="absolute inset-0 border border-gold-primary/10 rotate-12" />
              <span className="font-orbitron text-lg font-black text-gold-primary">U</span>
            </div>
            <h2 className="font-orbitron text-lg font-bold uppercase tracking-tight mb-1 text-white">
              Utility Brokerage
            </h2>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold-primary/60 mb-4 font-mono">
              Mercati Energetici · Ottimizzazione Costi
            </p>
            <p className="text-sm text-white/45 leading-relaxed">
              I costi energetici sono una delle leve più importanti per qualsiasi azienda. Analizziamo
              i tuoi consumi, accediamo ai mercati all&apos;ingrosso e negoziamo contratti che generano
              risparmi reali — con gestione continuativa al variare dei mercati.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="border-t border-gold-primary/15 pt-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold-primary/35 mb-12 font-mono">
            {'// I NOSTRI VALORI'}
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {values.map((v) => (
              <div key={v.title}>
                <h3 className="font-orbitron text-sm font-bold uppercase tracking-tight mb-3 text-gold-primary/90">
                  {v.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
