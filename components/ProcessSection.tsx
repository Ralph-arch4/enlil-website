'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { content } from '@/lib/content'

const EASE: [number,number,number,number] = [0.16, 1, 0.3, 1]

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = useReducedMotion()

  return (
    <section
      ref={ref}
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 30% 60%, #1a0e00 0%, #050a18 60%)',
        borderBottom: '1px solid rgba(212,175,55,0.06)',
      }}
    >
      <div className="absolute inset-0 cyber-grid-overlay opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-14 md:mb-20"
        >
          <p className="text-[10px] tracking-[0.35em] uppercase text-gold-primary/50 mb-4 font-mono">
            {'// COME LAVORIAMO'}
          </p>
          <h2 className="font-orbitron text-[clamp(2rem,6vw,3.5rem)] font-black uppercase leading-[0.92] tracking-tight text-white">
            Il <span className="text-gold-glow">Processo</span>
          </h2>
          <div className="mt-4 w-20 h-px bg-gold-primary/40" />
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-px bg-gold-primary/10">
          {content.process.map((step, i) => (
            <motion.div
              key={step.index}
              initial={{ opacity: 0, y: reduced ? 0 : 32, rotateX: reduced ? 0 : 12 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.75, delay: i * 0.12, ease: EASE }}
              style={{ transformPerspective: 900, transformOrigin: 'center bottom' }}
              className="group relative bg-[#060c1a] hover:bg-navy-card transition-colors duration-300 p-8 md:p-10 card-shimmer overflow-hidden"
            >
              {/* Connector line (desktop) */}
              {i < 2 && (
                <div className="hidden md:block absolute top-12 -right-px w-px h-8 bg-gold-primary/20" />
              )}

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold-primary/20 group-hover:border-gold-primary/50 transition-colors duration-300" />

              {/* Index number — large watermark */}
              <div
                className="absolute -bottom-2 -right-1 font-orbitron font-black leading-none select-none pointer-events-none"
                style={{
                  fontSize: 'clamp(5rem, 10vw, 8rem)',
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(212,175,55,0.06)',
                  letterSpacing: '-0.04em',
                }}
                aria-hidden
              >
                {step.index}
              </div>

              {/* Index badge */}
              <span className="inline-flex items-center justify-center w-8 h-8 rounded border border-gold-primary/30 text-[10px] font-mono text-gold-primary/70 mb-6 group-hover:border-gold-primary/60 group-hover:text-gold-primary transition-all duration-300">
                {step.index}
              </span>

              <h3 className="font-orbitron text-lg font-bold uppercase tracking-tight text-white mb-3 group-hover:text-gold-primary transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>

              {/* Bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-primary/0 group-hover:bg-gold-primary/25 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
          className="mt-10 md:mt-12 flex justify-center"
        >
          <a
            href="/contact"
            className="btn-cyber inline-block px-10 py-3.5 border border-gold-primary/70 text-gold-primary text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-gold-primary hover:text-navy-deep transition-all duration-300 min-h-[44px] flex items-center"
          >
            Inizia Ora →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
