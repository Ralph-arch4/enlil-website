import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'

const projects = [
  {
    number: '01',
    title: 'Piattaforma SaaS B2B',
    category: 'SaaS · Brokeraggio',
    description:
      'Progettazione e lancio di una piattaforma SaaS per la gestione di portafogli assicurativi. Workflow di brokeraggio automatizzati con dashboard analytics in tempo reale.',
    year: '2024',
  },
  {
    number: '02',
    title: 'Dashboard Finanziaria',
    category: 'SaaS · Finance',
    description:
      'Interfaccia di monitoraggio per broker indipendenti con integrazioni API verso provider di dati di mercato. Gestione multi-cliente e reportistica automatizzata.',
    year: '2024',
  },
  {
    number: '03',
    title: 'CRM Brokeraggio',
    category: 'SaaS · CRM',
    description:
      'CRM dedicato al settore del brokeraggio. Pipeline personalizzata, tracking delle commissioni e automazione delle comunicazioni con i clienti.',
    year: '2023',
  },
  {
    number: '04',
    title: 'Portale Clienti White-Label',
    category: 'SaaS · White-Label',
    description:
      'Soluzione white-label per reti di agenti. Ogni agente dispone del proprio portale branded con gestione autonoma del portafoglio clienti.',
    year: '2023',
  },
]

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-navy-deep text-white">
      <Navbar />
      <PageHero
        label="Progetti"
        heading="I Nostri Progetti"
        sub="Soluzioni concrete per il settore del brokeraggio e del SaaS."
      />

      <section className="px-6 md:px-16 pb-32">
        <div className="max-w-5xl mx-auto divide-y divide-gold-primary/10">
          {projects.map((p) => (
            <article
              key={p.number}
              className="group grid md:grid-cols-[80px_1fr_120px] gap-4 md:gap-8 py-10 md:py-12 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <span className="text-xs text-gold-primary/30 font-mono mt-1">{p.number}</span>
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-gold-primary/60 mb-2 font-mono">
                  {p.category}
                </p>
                <h2 className="font-orbitron text-xl md:text-2xl font-bold uppercase tracking-tight mb-3 group-hover:text-gold-primary transition-colors duration-200">
                  {p.title}
                </h2>
                <p className="text-sm text-white/40 leading-relaxed max-w-xl">{p.description}</p>
              </div>
              <span className="text-xs text-gold-primary/25 font-mono md:text-right mt-1">{p.year}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
