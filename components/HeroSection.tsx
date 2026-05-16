export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* orange glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-400 rounded-full opacity-10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* badge */}
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          Consulenza 100% gratuita · Nessun vincolo
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
          Smetti di pagare{" "}
          <span className="text-orange-400">il 30% in più</span>
          <br />
          sulle bollette della tua azienda.
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
          Enlil è il broker di infrastruttura digitale ed energetica per
          imprenditori e PMI italiane. Gestiamo luce, gas, internet e SIM —
          trattando per te con tutti i fornitori e garantendo il risparmio
          massimo, senza che tu muova un dito.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <a
            href="#contatti"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-black text-lg px-8 py-4 rounded-full transition-all shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
          >
            Analisi Gratuita delle Bollette
            <span aria-hidden>→</span>
          </a>
          <a
            href="#servizi"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-lg px-8 py-4 rounded-full border border-white/20 transition-all"
          >
            Scopri come funziona
          </a>
        </div>

        {/* social proof strip */}
        <div className="flex flex-wrap gap-x-10 gap-y-4 text-slate-400 text-sm font-medium border-t border-white/10 pt-10">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-white">500+</span>
            aziende clienti
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-orange-400">€8.500</span>
            risparmio medio annuo per PMI
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-white">4</span>
            utenze gestite in un unico contratto
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-white">48h</span>
            per il tuo piano di risparmio
          </div>
        </div>
      </div>
    </section>
  );
}
