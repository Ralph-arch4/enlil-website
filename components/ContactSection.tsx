'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { content } from '@/lib/content'

// ── CSS Orrery — zero Three.js ────────────────────────────────
function CssOrrery({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* Outer ring */}
      <div className="orrery-ring" style={{
        width: 300, height: 300,
        animationDuration: '14s',
        borderColor: 'rgba(212,175,55,0.55)',
        boxShadow: '0 0 12px rgba(212,175,55,0.25)',
      }} />
      {/* Mid ring */}
      <div className="orrery-ring" style={{
        width: 220, height: 220,
        animationDuration: '9s',
        animationDirection: 'reverse',
        borderColor: 'rgba(212,175,55,0.45)',
        boxShadow: '0 0 8px rgba(212,175,55,0.2)',
        transform: 'translate(-50%,-50%) rotateX(70deg)',
      }} />
      {/* Inner ring */}
      <div className="orrery-ring" style={{
        width: 150, height: 150,
        animationDuration: '6s',
        borderColor: 'rgba(255,215,0,0.5)',
        boxShadow: '0 0 6px rgba(255,215,0,0.2)',
        transform: 'translate(-50%,-50%) rotateY(60deg)',
      }} />
      {/* Central orb */}
      <div className="orrery-orb" />
    </div>
  )
}

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReduced = useReducedMotion()

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: prefersReduced ? 0 : 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  })

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 15% 80%, #1a0e00 0%, #050a18 55%)' }}
    >
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid-overlay opacity-40 pointer-events-none" />

      {/* ── MOBILE: decorative orrery strip at top ────────────── */}
      <div className="relative md:hidden flex items-center justify-center h-48 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(212,175,55,0.07) 0%, transparent 70%)' }} />
        {/* Scaled-down orrery for mobile */}
        <div
          className="relative"
          style={{ width: 200, height: 200 }}
          aria-hidden="true"
        >
          <div className="orrery-ring" style={{ width: 180, height: 180, animationDuration: '14s', borderColor: 'rgba(212,175,55,0.5)', boxShadow: '0 0 10px rgba(212,175,55,0.2)' }} />
          <div className="orrery-ring" style={{ width: 120, height: 120, animationDuration: '9s', animationDirection: 'reverse', borderColor: 'rgba(212,175,55,0.4)', transform: 'translate(-50%,-50%) rotateX(70deg)' }} />
          <div className="orrery-ring" style={{ width: 80, height: 80, animationDuration: '6s', borderColor: 'rgba(255,215,0,0.45)', transform: 'translate(-50%,-50%) rotateY(60deg)' }} />
          <div className="orrery-orb" />
        </div>
      </div>

      {/* ── DESKTOP: full-size orrery in left half ────────────── */}
      <div
        className="hidden md:block absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute"
          style={{ top: '50%', left: '52%', transform: 'translate(-50%, -50%)' }}
        >
          <div className="relative" style={{ width: 360, height: 360 }}>
            <div className="orrery-ring" style={{ width: 340, height: 340, animationDuration: '14s', borderColor: 'rgba(212,175,55,0.55)', boxShadow: '0 0 12px rgba(212,175,55,0.25)' }} />
            <div className="orrery-ring" style={{ width: 250, height: 250, animationDuration: '9s', animationDirection: 'reverse', borderColor: 'rgba(212,175,55,0.45)', boxShadow: '0 0 8px rgba(212,175,55,0.2)', transform: 'translate(-50%,-50%) rotateX(70deg)' }} />
            <div className="orrery-ring" style={{ width: 170, height: 170, animationDuration: '6s', borderColor: 'rgba(255,215,0,0.5)', boxShadow: '0 0 6px rgba(255,215,0,0.2)', transform: 'translate(-50%,-50%) rotateY(60deg)' }} />
            <div className="orrery-orb" />
          </div>
        </div>
      </div>

      {/* ── Contact content ───────────────────────────────────── */}
      <div className="relative z-10 w-full md:ml-auto md:w-[52%] flex flex-col justify-center px-6 sm:px-10 md:px-14 py-16 md:py-24"
        style={{ background: 'linear-gradient(to right, transparent 0%, rgba(5,10,24,0.75) 25%, rgba(5,10,24,0.97) 55%)' }}
      >
        <motion.p {...fadeUp(0)} className="text-[10px] tracking-[0.35em] uppercase text-gold-primary/50 mb-4 font-mono">
          {'// CONTATTI'}
        </motion.p>

        <motion.h2
          {...fadeUp(0.08)}
          className="font-orbitron text-[clamp(2rem,7vw,3.2rem)] md:text-[clamp(1.8rem,4.5vw,3.2rem)] font-black uppercase leading-[1.0] tracking-tight text-gold-primary"
        >
          {content.contact.heading}
        </motion.h2>

        <motion.p {...fadeUp(0.18)} className="mt-2 text-xs tracking-[0.22em] uppercase text-white/40">
          {content.contact.subheading}
        </motion.p>

        <motion.div {...fadeUp(0.26)} className="mt-8 w-16 h-px bg-gold-primary/40" />

        <motion.div {...fadeUp(0.32)} className="mt-8 space-y-3">
          <a href={`mailto:${content.contact.email}`}
            className="group flex items-center gap-4 p-4 border border-gold-primary/10 hover:border-gold-primary/35 transition-all duration-300 hover:bg-[rgba(212,175,55,0.03)]">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-gold-primary/20 group-hover:border-gold-primary/50 transition-colors duration-300">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.26em] uppercase text-gold-primary/35 font-mono mb-0.5">Email</p>
              <p className="text-sm font-semibold text-white group-hover:text-gold-primary transition-colors duration-200 break-all">
                {content.contact.email}
              </p>
            </div>
          </a>
          <a href={`tel:${content.contact.phone?.replace(/\s/g, '')}`}
            className="group flex items-center gap-4 p-4 border border-gold-primary/10 hover:border-gold-primary/35 transition-all duration-300 hover:bg-[rgba(212,175,55,0.03)]">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-gold-primary/20 group-hover:border-gold-primary/50 transition-colors duration-300">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-5-5 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.26em] uppercase text-gold-primary/35 font-mono mb-0.5">Telefono</p>
              <p className="text-sm font-semibold text-white group-hover:text-gold-primary transition-colors duration-200">
                {content.contact.phone}
              </p>
            </div>
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.44)} className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${content.contact.email}`}
            className="btn-cyber inline-block px-7 py-3 border border-gold-primary/80 text-gold-primary text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-gold-primary hover:text-navy-deep transition-all duration-300 min-h-[44px] flex items-center">
            Email
          </a>
          <a href={content.contact.whatsapp} target="_blank" rel="noopener noreferrer"
            className="btn-cyber inline-flex items-center gap-2 px-7 py-3 border border-cyber-accent/60 text-cyber-accent text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-cyber-accent hover:text-navy-deep transition-all duration-300 min-h-[44px]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </motion.div>

        <motion.p {...fadeUp(0.68)} className="mt-12 md:mt-16 text-[10px] tracking-[0.2em] uppercase text-white/20 font-mono">
          ENLIL — WEB &amp; UTILITY BROKERAGE
        </motion.p>
      </div>
    </section>
  )
}
