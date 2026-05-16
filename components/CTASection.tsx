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
          Posti limitati — analizziamo max 20 aziende al mese
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
          Scopri quanto stai sprecando.
          <br />
          <span className="text-white/80">L&apos;analisi è gratuita e senza impegno.</span>
        </h2>

        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Inviaci le ultime bollette — le analizziamo in 48 ore e ti diciamo
          esattamente quanto puoi risparmiare con Enlil. Se non c&apos;è
          risparmio, te lo diciamo chiaramente. Nessuna pressione.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="mailto:info@enlil.app?subject=Analisi%20gratuita%20bollette"
            className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-black text-lg px-8 py-4 rounded-full transition-all hover:bg-orange-50 shadow-2xl shadow-black/20 hover:-translate-y-0.5"
          >
            Richiedi Analisi Gratuita →
          </a>
          <a
            href="tel:+390000000000"
            className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-lg px-8 py-4 rounded-full border border-white/30 transition-all"
          >
            📞 Chiamaci ora
          </a>
        </div>

        {/* trust signals */}
        <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm font-medium">
          <span className="flex items-center gap-1.5">
            <span className="text-white">✓</span> Consulenza 100% gratuita
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-white">✓</span> Risposta in 48 ore
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-white">✓</span> Zero vincoli contrattuali
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-white">✓</span> Nessun costo nascosto
          </span>
        </div>
      </div>
    </section>
  );
}
