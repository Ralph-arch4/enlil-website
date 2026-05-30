export default function CTASection() {
  return (
    <section
      id="contatti"
      className="py-20 lg:py-28 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white rounded-full opacity-10 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* urgency badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          Gas +35% · PUN 0,25 €/kWh · Energia +38,9% vs 2019 · Analisi gratuita chiude 15/06
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
          Stai pagando il 34% in più del dovuto.
          <br />
          <span className="text-white/80">Le PMI italiane risparmiano in media €8.500/anno con Enlil.</span>
        </h2>

        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
          Bastano 2 bollette — confrontiamo in tempo reale tutti i fornitori del
          mercato libero business e ti diciamo esattamente quanto recuperi
          cambiando fornitore. Risposta in 2 ore lavorative, zero burocrazia,
          zero interruzioni, zero costi nascosti.
        </p>

        {/* guarantee banner */}
        <div className="inline-block bg-white/15 border border-white/25 rounded-xl px-6 py-3 mb-8 text-white/95 text-sm font-semibold">
          Garanzia Zero Rischi — se non troviamo almeno il 10% di risparmio, te lo diciamo subito e non spendi un euro.
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="mailto:info@enlil.app?subject=Analisi%20gratuita%20bollette%20aziendali"
            className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-black text-lg px-8 py-4 rounded-full transition-all hover:bg-orange-50 shadow-2xl shadow-black/20 hover:-translate-y-0.5"
          >
            Calcola il Risparmio Ora — Chiude il 15/06 →
          </a>
          <a
            href="tel:+390000000000"
            className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-lg px-8 py-4 rounded-full border border-white/30 transition-all"
          >
            📞 Chiamata gratuita · Risponde entro 60 sec
          </a>
        </div>

        {/* trust signals */}
        <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm font-medium">
          <span className="flex items-center gap-1.5">
            <span className="text-white">✓</span> Risparmio medio €8.500/anno per PMI
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-white">✓</span> Analisi bollette in 2 ore lavorative
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-white">✓</span> Risparmio certificato 10–20% su tariffe business
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-white">✓</span> Nessun costo, zero vincoli
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-white">✓</span> Broker indipendente — lavoriamo per te
          </span>
        </div>
      </div>
    </section>
  );
}
