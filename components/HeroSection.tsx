'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { content } from '@/lib/content'

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false })

const EASE: [number,number,number,number] = [0.16, 1, 0.3, 1]

const trustBadges = [
  { value: '120+', label: 'Aziende' },
  { value: '40',   label: 'Anni Exp.' },
  { value: '€2M+', label: 'Ottimizzati' },
  { value: '98%',  label: 'Rinnovi' },
]

export default function HeroSection() {
  const reduced = useReducedMotion()

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: EASE },
  })

  return (
    <section
      className="relative h-[100svh] min-h-[640px] w-full flex items-center overflow-hidden scan-sweep"
      style={{ background: '#030710' }}
    >
      {/* ── Aurora gold gradient mesh (UI/UX Pro Max: Gradient Mesh pattern) ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden style={{
        background: [
          'radial-gradient(ellipse 80% 60% at 15% 55%, rgba(212,175,55,0.10) 0%, transparent 55%)',
          'radial-gradient(ellipse 60% 80% at 85% 40%, rgba(212,175,55,0.07) 0%, transparent 55%)',
          'radial-gradient(ellipse 50% 40% at 50% 90%, rgba(139,104,32,0.08) 0%, transparent 50%)',
        ].join(','),
        backgroundSize: '200% 200%',
        animation: 'auraMeshHero 12s ease-in-out infinite',
      }} />

      {/* Cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid-overlay opacity-40 pointer-events-none" />

      {/* ── Three.js 3D canvas — full right side on desktop ── */}
      <div className="absolute inset-0 lg:left-[48%]" aria-hidden>
        <HeroCanvas />
        {/* Right-side fade for text readability */}
        <div className="absolute inset-0 lg:hidden"
          style={{ background: 'linear-gradient(to top, #030710 0%, rgba(3,7,16,0.6) 50%, transparent 100%)' }} />
        <div className="absolute inset-0 hidden lg:block"
          style={{ background: 'linear-gradient(to right, #030710 0%, rgba(3,7,16,0.5) 30%, transparent 60%)' }} />
      </div>

      {/* ── Text content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-20">
        <div className="max-w-xl lg:max-w-2xl">

          {/* Pre-label */}
          <motion.p
            {...fade(0.2)}
            className="text-[10px] tracking-[0.35em] uppercase text-gold-primary/55 font-mono mb-6 flex items-center gap-3"
          >
            <span className="w-6 h-px bg-gold-primary/40 inline-block" />
            {content.hero.tagline}
          </motion.p>

          {/* Main headline — clamp per UI/UX Pro Max Hero-Centric pattern */}
          <motion.h1
            initial={reduced ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="font-orbitron font-black uppercase leading-[0.9] tracking-tight mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', letterSpacing: '-0.02em' }}
          >
            {['Potenzia', 'il tuo', 'Business.'].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: reduced ? 0 : 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.13, ease: EASE }}
                className="block"
                style={{ color: i === 1 ? undefined : '#ffffff' }}
              >
                {i === 1
                  ? <span className="text-gold-glow animate-gold-pulse">{word}</span>
                  : word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            {...fade(0.7)}
            className="text-base sm:text-lg leading-relaxed mb-10 max-w-md"
            style={{ color: 'rgba(255,255,255,0.50)' }}
          >
            {content.hero.subheading}
          </motion.p>

          {/* Dual CTA — UI/UX Pro Max: high-contrast primary + ghost secondary */}
          <motion.div
            {...fade(0.85)}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-10"
          >
            <Link
              href="/contact"
              className="btn-cyber inline-flex items-center gap-2 px-8 py-4 bg-gold-primary text-navy-deep text-[11px] font-bold tracking-[0.28em] uppercase hover:bg-gold-bright transition-colors duration-200 min-h-[48px]"
              style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
            >
              Consulenza Gratuita →
            </Link>
            <a
              href={`tel:${content.contact.phone?.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 border border-gold-primary/30 text-[11px] font-semibold tracking-[0.2em] uppercase text-white/65 hover:text-gold-primary hover:border-gold-primary/60 transition-all duration-200 min-h-[48px]"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-5-5 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              {content.contact.phone}
            </a>
          </motion.div>

          {/* Trust badges — inline stats row */}
          <motion.div
            {...fade(1.0)}
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {trustBadges.map(({ value, label }, i) => (
              <div key={label} className="flex items-baseline gap-1.5">
                <span className="font-orbitron text-sm font-black text-gold-primary">{value}</span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-white/28 font-mono">{label}</span>
                {i < trustBadges.length - 1 && (
                  <span className="text-white/12 ml-3 text-xs">·</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-gold-primary/25 font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, var(--gold-primary), transparent)' }}
        />
      </motion.div>

      {/* Decorative corners */}
      <div className="absolute top-20 left-5 sm:left-8 w-5 h-5 border-t border-l border-gold-primary/20" aria-hidden />
      <div className="absolute top-20 right-5 sm:right-8 w-5 h-5 border-t border-r border-gold-primary/20" aria-hidden />
    </section>
  )
}
