import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#080c12] text-white">
      <Navbar />
      <PageHero
        label="Contact"
        heading="Parliamo."
        sub="Raccontaci il tuo progetto. Ti risponderemo entro 24 ore."
      />

      <section className="px-6 md:px-16 pb-32 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left — contact info */}
          <div>
            <div className="mb-10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-2">Email</p>
              <a
                href="mailto:lorenzo@enlil.live"
                className="text-lg font-bold text-gold-primary hover:text-gold-bright transition-colors duration-200"
              >
                lorenzo@enlil.live
              </a>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-2">
                Disponibilità
              </p>
              <p className="text-sm text-white/50 leading-relaxed">
                Lunedì – Venerdì<br />
                09:00 – 18:00 CET
              </p>
            </div>
          </div>

          {/* Right — form */}
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
