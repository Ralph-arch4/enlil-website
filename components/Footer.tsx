export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="text-white font-black text-xl mb-2">ENLIL</div>
            <p className="text-sm leading-relaxed text-slate-500">
              Broker indipendente di infrastruttura digitale e mercati energetici
              per imprenditori e PMI italiane.
            </p>
          </div>
          <div>
            <div className="text-white font-semibold text-sm mb-3 uppercase tracking-widest">
              Servizi
            </div>
            <ul className="space-y-2 text-sm">
              <li>Broker Energia Elettrica Business</li>
              <li>Broker Gas per Aziende</li>
              <li>Connettività Internet Aziendale</li>
              <li>Gestione Flotte SIM</li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold text-sm mb-3 uppercase tracking-widest">
              Contatti
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@enlil.app"
                  className="hover:text-orange-400 transition-colors"
                >
                  info@enlil.app
                </a>
              </li>
              <li>Italia · P.IVA gestita</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <span>© {new Date().getFullYear()} Enlil — Broker Utenze Aziendali. Tutti i diritti riservati.</span>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="/cookie" className="hover:text-slate-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
