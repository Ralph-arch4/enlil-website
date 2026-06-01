'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        const body = await res.json().catch(() => ({}))
        setErrorMsg(body.error || 'Errore nell\'invio. Riprova.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Errore di connessione. Riprova.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col justify-center py-8">
        <div className="w-10 h-10 border border-gold-primary/40 flex items-center justify-center mb-6 text-gold-primary text-xl">✓</div>
        <p className="text-[10px] tracking-[0.3em] uppercase text-gold-primary/60 mb-3 font-mono">Messaggio Inviato</p>
        <p className="text-2xl font-black uppercase font-orbitron text-white leading-tight">
          Grazie.<br />Ti risponderemo<br />entro 24 ore.
        </p>
        <p className="mt-4 text-sm text-white/40">
          Nel frattempo puoi scriverci su{' '}
          <a href="https://wa.me/393927036753" className="text-gold-primary hover:text-gold-bright transition-colors">WhatsApp</a>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-[0.25em] uppercase text-white/35 font-mono" htmlFor="name">
          Nome *
        </label>
        <input
          id="name" name="name" type="text" required autoComplete="name"
          placeholder="Il tuo nome"
          className="bg-transparent border-b border-white/20 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold-primary/60 transition-colors duration-200"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-[0.25em] uppercase text-white/35 font-mono" htmlFor="email">
          Email *
        </label>
        <input
          id="email" name="email" type="email" required autoComplete="email"
          placeholder="tua@email.com"
          className="bg-transparent border-b border-white/20 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold-primary/60 transition-colors duration-200"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-[0.25em] uppercase text-white/35 font-mono" htmlFor="service">
          Servizio di interesse
        </label>
        <select
          id="service" name="service"
          className="bg-[#080c12] border-b border-white/20 py-3 text-sm text-white/70 focus:outline-none focus:border-gold-primary/60 transition-colors duration-200 appearance-none cursor-pointer"
        >
          <option value="">Seleziona...</option>
          <option value="Web Brokerage">Web Brokerage</option>
          <option value="Utility Brokerage">Utility Brokerage</option>
          <option value="Piattaforme SaaS">Piattaforme SaaS</option>
          <option value="Strategia & Consulenza">Strategia &amp; Consulenza</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-[0.25em] uppercase text-white/35 font-mono" htmlFor="message">
          Messaggio *
        </label>
        <textarea
          id="message" name="message" required rows={4}
          placeholder="Raccontaci il tuo progetto o la tua situazione attuale..."
          className="bg-transparent border-b border-white/20 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold-primary/60 transition-colors duration-200 resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-xs text-red-400/80 font-mono tracking-wide">⚠ {errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-1 self-start btn-cyber px-10 py-3.5 border border-gold-primary/80 text-gold-primary text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-gold-primary hover:text-navy-deep transition-all duration-300 min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Invio in corso...' : 'Invia Messaggio →'}
      </button>
    </form>
  )
}
