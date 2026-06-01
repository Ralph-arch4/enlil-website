export default function CTASection() {
  return (
    <section id="contatti" className="py-24 bg-gradient-to-b from-[#0D2040] to-[#0A1628]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="inline-flex items-center gap-2 bg-[#F5A623]/10 border border-[#F5A623]/30 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-[#F5A623] rounded-full animate-pulse" />
          <p className="text-[#F5A623] font-semibold text-sm">
            Tariffe business in aumento nel 2026 &mdash; ogni mese di ritardo ti costa di più
          </p>
        </div>

        <h2 className="section-title text-center">
          Smetti di pagare prezzi di listino.
          <br />
          <span className="text-[#00C2FF]">Ottieni il tuo risparmio reale adesso.</span>
        </h2>
        <p className="section-subtitle mx-auto text-center mt-4">
          Le aziende che affidano le utenze a ENLIL risparmiano in media{' '}
          <strong className="text-white">€ 3.200 all&rsquo;anno</strong> su luce, gas e connettività.
          L&rsquo;analisi è gratuita, il consulente è dedicato, il risultato è garantito.
        </p>

        <form
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="La tua email aziendale"
            className="flex-1 bg-[#0D2040] border border-slate-600 rounded-lg px-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-[#00C2FF] text-base"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Analizza le mie bollette gratis &rarr;
          </button>
        </form>

        <p className="mt-4 text-slate-500 text-xs">
          Senza spam &middot; Senza vincoli &middot; Consulente dedicato entro 24h &middot;{' '}
          <span className="text-slate-400 font-medium">Se non troviamo risparmi, non ti costerà nulla</span>
        </p>

        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-800 pt-10">
          {[
            { val: '€3.200', label: 'Risparmio medio annuo garantito per cliente' },
            { val: '0€', label: 'Costo analisi — garanzia soddisfatto o rimborso' },
            { val: '100%', label: 'Indipendenza da tutti i fornitori' },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-3xl font-black text-[#00C2FF]">{item.val}</div>
              <div className="text-slate-400 text-xs mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
