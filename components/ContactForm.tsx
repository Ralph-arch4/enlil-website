'use client'

import { useState } from 'react'
import { content } from '@/lib/content'

type Status = 'idle' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMsg('')

    const form = e.currentTarget
    const name    = (form.elements.namedItem('name')    as HTMLInputElement).value.trim()
    const email   = (form.elements.namedItem('email')   as HTMLInputElement).value.trim()
    const service = (form.elements.namedItem('service') as HTMLSelectElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim()

    if (!name || !email || !message) {
      setErrorMsg('Compila nome, email e messaggio.')
      setStatus('error')
      return
    }

    // Build a ready-to-send email and open the visitor's mail app (Gmail / etc.)
    const subject = `Richiesta dal sito — ${name}${service ? ` · ${service}` : ''}`
    const body =
      `Nome: ${name}\n` +
      `Email: ${email}\n` +
      `Servizio di interesse: ${service || 'Non specificato'}\n\n` +
      `Messaggio:\n${message}\n`
    const mailto =
      `mailto:${content.contact.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`

    window.location.href = mailto
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col justify-center py-8">
        <div className="w-10 h-10 border border-gold-primary/40 flex items-center justify-center mb-6 text-gold-primary text-xl">✉</div>
        <p className="text-[10px] tracking-[0.3em] uppercase text-gold-primary/60 mb-3 font-mono">App Email Aperta</p>
        <p className="text-2xl font-black uppercase font-orbitron text-white leading-tight">
          Ci sei quasi.<br />Premi invia<br />dalla tua email.
        </p>
        <p className="mt-4 text-sm text-white/40">
          Abbiamo aperto la tua app email con il messaggio già pronto, indirizzato a{' '}
          <span className="text-gold-primary">{content.contact.email}</span>. Se non si è aperta, scrivici su{' '}
          <a href={content.contact.whatsapp} className="text-gold-primary hover:text-gold-bright transition-colors">WhatsApp</a>.
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
        className="mt-1 self-start btn-cyber px-10 py-3.5 border border-gold-primary/80 text-gold-primary text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-gold-primary hover:text-navy-deep transition-all duration-300 min-h-[44px]"
      >
        Invia Messaggio →
      </button>
    </form>
  )
}
