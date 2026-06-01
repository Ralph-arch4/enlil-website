import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import { content } from '@/lib/content'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-navy-deep text-white">
      <Navbar />
      <PageHero
        label="Servizi"
        heading="Cosa Facciamo"
        sub="Due mercati, un unico partner. Gestiamo il digitale e l'energia al posto tuo."
      />

      <section className="px-6 md:px-16 pb-32 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-px bg-gold-primary/10">
          {content.services.map((s) => (
            <div
              key={s.index}
              className="group bg-navy-deep hover:bg-navy-card transition-colors duration-300 p-8 md:p-10 relative"
            >
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold-primary/20 group-hover:border-gold-primary/50 transition-colors duration-300" />
              <span className="text-[10px] font-mono text-gold-primary/30 tracking-[0.2em]">
                {s.index}
              </span>
              <h2 className="font-orbitron text-lg font-bold uppercase tracking-tight mt-4 mb-3 text-white group-hover:text-gold-primary transition-colors duration-300">
                {s.title}
              </h2>
              <p className="text-sm text-white/40 leading-relaxed mb-6">{s.description}</p>
              <ul className="space-y-1.5">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-xs text-white/35">
                    <span className="w-1 h-1 rounded-full bg-gold-primary/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
