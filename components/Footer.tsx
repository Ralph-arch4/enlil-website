export default function Footer() {
  return (
    <footer className="bg-[#060F1E] border-t border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-2xl font-black text-white tracking-tight">
              ENLIL<span className="text-[#00C2FF]">.</span>
            </span>
            <p className="text-slate-500 text-xs mt-1">Broker di infrastruttura digitale ed energetica per imprese italiane</p>
          </div>
          <div className="flex flex-wrap gap-6 text-slate-500 text-sm">
            <a href="#servizi" className="hover:text-white transition-colors">Servizi</a>
            <a href="#risultati" className="hover:text-white transition-colors">Risultati</a>
            <a href="#contatti" className="hover:text-white transition-colors">Contatti</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
        <p className="text-slate-600 text-xs text-center mt-8">
          © {new Date().getFullYear()} ENLIL — P.IVA italiana. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  )
}
