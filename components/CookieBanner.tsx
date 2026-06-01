'use client'

import { useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-navy-deep/95 backdrop-blur border-t border-gold-primary/15 px-5 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <p className="text-[11px] text-white/40 font-mono leading-relaxed">
        Questo sito utilizza i cookie. Consulta la nostra{' '}
        <a
          href="#"
          className="text-gold-primary/60 underline underline-offset-2 hover:text-gold-primary transition-colors"
        >
          Privacy Policy
        </a>
      </p>
      <button
        onClick={() => setVisible(false)}
        aria-label="Chiudi avviso cookie"
        className="text-gold-primary/40 hover:text-gold-primary transition-colors leading-none text-sm min-h-[44px] min-w-[44px] flex items-center justify-center"
      >
        ✕
      </button>
    </div>
  )
}
