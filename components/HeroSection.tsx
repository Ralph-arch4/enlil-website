'use client'

import dynamic from 'next/dynamic'
import { motion, useReducedMotion } from 'framer-motion'
import { content } from '@/lib/content'

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false })

export default function HeroSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      className="relative h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden scan-sweep"
      style={{
        background: 'radial-gradient(ellipse at 50% 110%, #1a0e00 0%, #050a18 55%)',
      }}
    >
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid-overlay opacity-60 pointer-events-none" />

      {/* 3D scene */}
      <div className="absolute inset-0">
        <HeroCanvas />
      </div>

      {/* Text overlay */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 sm:px-8 select-none w-full max-w-4xl mx-auto">
        {/* ENLIL — large, Orbitron, gold glow */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <h1
            className="font-orbitron font-black uppercase leading-none tracking-[0.08em] text-gold-glow animate-gold-pulse animate-glitch"
            style={{ fontSize: 'clamp(3.5rem, 18vw, 10rem)' }}
          >
            {content.hero.heading}
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-2 text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold-primary/70 font-space"
        >
          — {content.hero.tagline} —
        </motion.p>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-sm sm:text-base text-white/45 w-[90vw] max-w-sm leading-relaxed font-space"
        >
          {content.hero.subheading}
        </motion.p>

        {/* CTA */}
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 btn-cyber px-10 py-3.5 border border-gold-primary/80 text-gold-primary text-[11px] font-bold tracking-[0.35em] uppercase hover:bg-gold-primary hover:text-navy-deep inline-flex items-center min-h-[44px]"
        >
          {content.hero.button}
        </motion.a>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2"
        >
          {[{ value: '120+', label: 'Aziende' }, { value: '3+', label: 'Anni' }, { value: '€2M+', label: 'Ottimizzati' }].map(({ value, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              <span className="font-orbitron text-xs font-bold text-gold-primary">{value}</span>
              <span className="text-[9px] tracking-[0.18em] uppercase text-white/30 font-mono">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom-left label — with safe area bottom padding */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-5 sm:left-8 flex flex-col gap-1"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-gold-primary/30 font-mono">
          EST. 2024
        </span>
        <svg
          width="18" height="18" viewBox="0 0 24 24" fill="none"
          className="text-gold-primary/30 animate-bounce"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Top-right decorative brackets — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute top-20 right-5 sm:right-8 text-gold-primary/20 font-mono text-[10px] tracking-wider leading-loose hidden md:block"
      >
        <div>[ WEB_BROKERAGE ]</div>
        <div>[ ENERGIA_UTILITIES ]</div>
        <div>[ PIATTAFORME_SAAS ]</div>
      </motion.div>
    </section>
  )
}
