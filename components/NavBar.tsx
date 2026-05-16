export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-slate-900">
              ENLIL
            </span>
            <span className="hidden sm:block text-xs font-medium text-orange-500 uppercase tracking-widest mt-1">
              Broker Utenze
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#servizi" className="hover:text-orange-500 transition-colors">Servizi</a>
            <a href="#risparmi" className="hover:text-orange-500 transition-colors">Risparmi</a>
            <a href="#faq" className="hover:text-orange-500 transition-colors">FAQ</a>
          </div>
          <a
            href="#contatti"
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors shadow-md shadow-orange-200"
          >
            Analisi Gratuita →
          </a>
        </div>
      </div>
    </nav>
  );
}
