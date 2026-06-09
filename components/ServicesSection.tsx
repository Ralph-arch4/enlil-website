'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { content } from '@/lib/content'
import Link from 'next/link'

const EASE: [number,number,number,number] = [0.16, 1, 0.3, 1]

/* ── Icons (size controlled via className so they scale losslessly) ── */
function GlobeIcon({ className = '' })   { return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg> }
function BoltIcon({ className = '' })    { return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> }
function CircuitIcon({ className = '' }) { return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><rect x="2" y="6" width="4" height="4" rx="1"/><rect x="18" y="6" width="4" height="4" rx="1"/><rect x="10" y="14" width="4" height="4" rx="1"/><line x1="6" y1="8" x2="10" y2="8"/><line x1="14" y1="8" x2="18" y2="8"/><line x1="12" y1="8" x2="12" y2="14"/></svg> }
function ScalesIcon({ className = '' })  { return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M3 6l3 6a3 3 0 006 0l3-6"/><path d="M9 6l3 6a3 3 0 006 0l3-6"/><line x1="8" y1="21" x2="16" y2="21"/></svg> }

const iconMap = { globe: GlobeIcon, bolt: BoltIcon, circuit: CircuitIcon, scales: ScalesIcon }

/* ── Brokerage tree: root splits into Web + Utility branches ── */
function BrokerageTree({ inView, reduced }: { inView: boolean; reduced: boolean | null }) {
  const { brokerage } = content
  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: EASE }}
      className="mb-16 md:mb-20"
    >
      <p className="text-[10px] tracking-[0.3em] uppercase text-gold-primary/40 mb-6 font-mono text-center">{brokerage.label}</p>

      {/* root node */}
      <div className="flex justify-center">
        <div className="text-center px-7 py-4 border border-gold-primary/40 bg-[#0a1224] shadow-[0_0_24px_rgba(212,175,55,0.08)]">
          <p className="font-orbitron text-sm md:text-base font-bold uppercase tracking-[0.18em] text-gold-primary">{brokerage.root}</p>
          <p className="mt-1 text-[11px] text-white/40 max-w-xs mx-auto leading-snug">{brokerage.rootSub}</p>
        </div>
      </div>

      {/* connectors — desktop */}
      <div className="hidden md:block relative h-10" aria-hidden>
        <span className="absolute left-1/2 top-0 h-5 w-px bg-gold-primary/40 -translate-x-1/2" />
        <span className="absolute left-1/4 right-1/4 top-5 h-px bg-gold-primary/40" />
        <span className="absolute left-1/4 top-5 h-5 w-px bg-gold-primary/40" />
        <span className="absolute right-1/4 top-5 h-5 w-px bg-gold-primary/40" />
      </div>
      {/* connector — mobile */}
      <div className="md:hidden flex justify-center"><span className="h-8 w-px bg-gold-primary/40" aria-hidden /></div>

      {/* branches */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {brokerage.branches.map((b, i) => {
          const Icon = iconMap[b.icon as keyof typeof iconMap]
          return (
            <motion.div
              key={b.key}
              initial={{ opacity: 0, y: reduced ? 0 : 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: EASE }}
              className="group relative bg-[#070d1c] border border-gold-primary/15 hover:border-gold-primary/40 transition-colors duration-300 p-7 md:p-9 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 30% 0%, rgba(212,175,55,0.07) 0%, transparent 60%)' }} />
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-primary/30" />

              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-gold-primary/25 text-gold-primary group-hover:text-gold-bright group-hover:border-gold-primary/55 transition-colors duration-300">
                  <Icon className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="font-orbitron text-base md:text-lg font-bold uppercase tracking-tight text-white">{b.title}</h3>
                  <p className="text-xs text-gold-primary/70 mt-0.5">{b.tagline}</p>
                </div>
              </div>

              <p className="text-sm text-white/45 leading-relaxed mb-6">{b.intro}</p>

              <ul className="space-y-3.5">
                {b.points.map((p) => (
                  <li key={p.title} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-primary/60 flex-shrink-0 group-hover:bg-gold-primary transition-colors duration-300" />
                    <span className="text-sm leading-relaxed text-white/55">
                      <span className="text-white font-semibold">{p.title}</span>
                      <span className="text-white/40"> — {p.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = useReducedMotion()

  return (
    <section
      ref={ref}
      className="relative w-full flex flex-col justify-center py-20 md:py-28 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 75% 15%, #2a1800 0%, #030710 50%, #050a18 100%)' }}
    >
      <div className="absolute inset-0 cyber-grid-overlay opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[350px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 100% 0%, rgba(58,32,0,0.27) 0%, transparent 70%)' }} />

      <div className="relative z-10 px-5 sm:px-8 md:px-16 max-w-6xl mx-auto w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-12 md:mb-16"
        >
          <p className="text-[10px] tracking-[0.35em] uppercase text-gold-primary/60 mb-4 font-mono">{'// COSA FACCIAMO'}</p>
          <h2 className="font-orbitron text-[clamp(2rem,6vw,3.5rem)] font-black uppercase leading-[0.92] tracking-tight text-white">
            I Nostri <span className="text-gold-glow">Servizi</span>
          </h2>
          <div className="mt-4 w-20 h-px bg-gold-primary/50" />
        </motion.div>

        {/* Tree diagram */}
        <BrokerageTree inView={inView} reduced={reduced} />

        {/* Bento grid — the four primary services, with oversized icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold-primary/12">
          {content.services.map((svc, i) => {
            const Icon = iconMap[svc.icon as keyof typeof iconMap]
            const isWide = svc.span === 'col-span-2'
            return (
              <motion.div
                key={svc.index}
                initial={{ opacity: 0, y: reduced ? 0 : 32, scale: reduced ? 1 : 0.97 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.75, delay: i * 0.1, ease: EASE }}
                style={{ transformPerspective: 900, transformOrigin: 'center bottom' }}
                className={`group card-shimmer bg-[#060c1a] hover:bg-navy-card transition-all duration-300 p-8 md:p-10 relative overflow-hidden border border-gold-primary/10 hover:border-gold-primary/35 ${isWide ? 'md:col-span-2' : 'md:col-span-1'}`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at 30% 70%, rgba(212,175,55,0.06) 0%, transparent 60%)' }} />
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold-primary/25 group-hover:border-gold-primary/60 transition-colors duration-300" />
                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-primary/0 group-hover:bg-gold-primary/25 transition-colors duration-500" />

                <span className="text-[10px] font-mono text-gold-primary/30 tracking-[0.2em]">{svc.index}</span>
                {/* Oversized icon */}
                <div className="mt-5 mb-6 text-gold-primary/85 group-hover:text-gold-bright transition-colors duration-300 group-hover:drop-shadow-[0_0_14px_rgba(212,175,55,0.55)]">
                  <Icon className="w-[72px] h-[72px] md:w-[92px] md:h-[92px]" />
                </div>
                <h3 className="font-orbitron text-base sm:text-lg font-bold uppercase tracking-tight text-white mb-3 group-hover:text-gold-primary transition-colors duration-300">{svc.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed mb-5">{svc.description}</p>
                <ul className="space-y-2">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-xs text-white/35">
                      <span className="w-1 h-1 rounded-full bg-gold-primary/60 flex-shrink-0 group-hover:bg-gold-primary transition-colors duration-300" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/services" className="text-[10px] tracking-[0.25em] uppercase text-gold-primary/40 group-hover:text-gold-primary transition-colors duration-200 font-mono flex items-center gap-2">
                    Scopri di più <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
                  </Link>
                </div>
              </motion.div>
            )
          })}

          {/* Perché ENLIL — full width statement card */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.42, ease: EASE }}
            className="md:col-span-3 group relative bg-[#080f20] border border-gold-primary/15 hover:border-gold-primary/40 p-8 md:p-12 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.05) 0%, transparent 60%)' }} />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gold-primary/40 mb-2">{'// PERCHÉ ENLIL'}</p>
                <h3 className="font-orbitron text-xl md:text-2xl font-bold uppercase tracking-tight text-white">
                  Non siamo un fornitore. <span className="text-gold-primary">Siamo dalla tua parte.</span>
                </h3>
              </div>
              <Link
                href="/contact"
                className="btn-cyber flex-shrink-0 inline-block px-8 py-3.5 border border-gold-primary/70 text-gold-primary text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-gold-primary hover:text-navy-deep transition-all duration-300 min-h-[44px] flex items-center"
              >
                Parlaci
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Bottom link */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
          className="mt-10 flex justify-end"
        >
          <Link href="/services" className="text-[11px] tracking-[0.3em] uppercase text-gold-primary/50 hover:text-gold-primary transition-colors duration-200 flex items-center gap-3 font-mono group min-h-[44px]">
            Tutti i Servizi
            <span className="text-gold-primary/40 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
