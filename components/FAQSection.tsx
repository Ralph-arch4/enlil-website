"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Cos'è un broker di utenze aziendali?",
    a: "Un broker di utenze come Enlil è un consulente indipendente che analizza i tuoi consumi di luce, gas, internet e SIM e negozia per tuo conto con i fornitori del mercato libero. Il risultato: contratti più vantaggiosi, senza il lavoro di confrontare decine di offerte.",
  },
  {
    q: "Il servizio di consulenza è davvero gratuito?",
    a: "Sì. La nostra consulenza è completamente gratuita per l'azienda cliente. Enlil riceve una commissione dai fornitori solo quando un contratto viene attivato — e solo se hai approvato l'offerta. Non ci sono costi nascosti o vincoli.",
  },
  {
    q: "Quanto posso risparmiare sulle bollette aziendali?",
    a: "Il risparmio dipende dai consumi attuali e dai contratti in corso. In media le PMI risparmiano tra il 15% e il 30% su luce e gas, e fino al 40% sui piani SIM aziendali. In 48 ore ti forniamo un'analisi gratuita con i numeri precisi per la tua situazione.",
  },
  {
    q: "Gestite anche imprese con più sedi?",
    a: "Assolutamente sì. Enlil è specializzata nella gestione multi-sede: centralizziamo tutte le utenze in un unico punto di contatto e ottimizziamo ogni POD e PDR separatamente per massimizzare il risparmio totale.",
  },
  {
    q: "Come funziona il passaggio al nuovo fornitore?",
    a: "Gestiamo tutto noi: raccogliamo i dati delle forniture attuali, negoziamo le nuove condizioni, inviamo le pratiche di voltura o subentro e monitoriamo la migrazione. Il servizio non viene mai interrotto durante il passaggio.",
  },
  {
    q: "Quali fornitori di energia trattate?",
    a: "Lavoriamo con oltre 50 fornitori certificati sul mercato italiano: Enel, Edison, Eni Plenitude, A2A, Axpo, Illumia, Sorgenia, Hera e molti altri. La nostra indipendenza ci consente di scegliere sempre il meglio per te.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">
            Domande frequenti
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Tutto quello che vuoi sapere
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-slate-100 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-slate-50 hover:bg-orange-50 transition-colors"
              >
                <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 text-orange-500 font-black text-xl transition-transform ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 py-5 text-slate-600 leading-relaxed text-sm sm:text-base bg-white border-t border-slate-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
