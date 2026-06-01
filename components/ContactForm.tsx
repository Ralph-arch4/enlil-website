'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col justify-center py-8">
        <p className="text-xs tracking-[0.3em] uppercase text-gold-primary mb-3">Inviato</p>
        <p className="text-2xl font-black uppercase font-orbitron text-white">
          Grazie.<br />Ti risponderemo presto.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-[0.25em] uppercase text-white/35" htmlFor="name">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Il tuo nome"
          className="bg-transparent border-b border-white/20 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold-primary/60 transition-colors duration-200"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-[0.25em] uppercase text-white/35" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="tua@email.com"
          className="bg-transparent border-b border-white/20 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold-primary/60 transition-colors duration-200"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-[0.25em] uppercase text-white/35" htmlFor="service">
          Servizio di interesse
        </label>
        <select
          id="service"
          name="service"
          className="bg-[#080c12] border-b border-white/20 py-3 text-sm text-white/70 focus:outline-none focus:border-gold-primary/60 transition-colors duration-200 appearance-none cursor-pointer"
        >
          <option value="">Seleziona...</option>
          <option value="web-brokerage">Web Brokerage</option>
          <option value="utility-brokerage">Utility Brokerage</option>
          <option value="saas">Piattaforme SaaS</option>
          <option value="consulenza">Strategia &amp; Consulenza</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-[0.25em] uppercase text-white/35" htmlFor="message">
          Messaggio
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Raccontaci il tuo progetto..."
          className="bg-transparent border-b border-white/20 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold-primary/60 transition-colors duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        className="mt-1 self-start btn-cyber px-10 py-3.5 border border-gold-primary/80 text-gold-primary text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-gold-primary hover:text-navy-deep transition-all duration-300 min-h-[44px]"
      >
        Invia
      </button>
    </form>
  )
}
