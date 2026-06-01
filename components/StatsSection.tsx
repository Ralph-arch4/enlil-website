'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView, useReducedMotion, motion } from 'framer-motion'
import { content } from '@/lib/content'

const EASE: [number,number,number,number] = [0.16, 1, 0.3, 1]

function Counter({ target, prefix, suffix, active, reduced }: {
  target: number; prefix: string; suffix: string; active: boolean; reduced: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active || reduced) { setCount(target); return }
    let frame = 0
    const duration = 1800
    const fps = 60
    const totalFrames = Math.round((duration / 1000) * fps)
    const timer = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.min(Math.round(eased * target), target))
      if (frame >= totalFrames) clearInterval(timer)
    }, 1000 / fps)
    return () => clearInterval(timer)
  }, [active, target, reduced])

  return <>{prefix}{count}{suffix}</>
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduced = useReducedMotion() ?? false

  return (
    <section
      ref={ref}
      className="relative w-full py-20 md:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #050a18, #080f22, #050a18)',
        borderTop: '1px solid rgba(212,175,55,0.08)',
        borderBottom: '1px solid rgba(212,175,55,0.08)',
      }}
    >
      <div className="absolute inset-0 cyber-grid-overlay opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 md:px-16">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.35em] uppercase text-gold-primary/50 mb-10 font-mono text-center"
        >
          {'// I NUMERI'}
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold-primary/10">
          {content.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: reduced ? 0 : 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              className="group flex flex-col items-center justify-center py-10 px-6 text-center bg-[#060c1a] hover:bg-navy-card transition-colors duration-300 relative overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.06) 0%, transparent 70%)' }} />

              <span
                className="font-orbitron font-black leading-none text-gold-primary group-hover:text-gold-bright transition-colors duration-300"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
              >
                <Counter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  active={inView}
                  reduced={reduced}
                />
              </span>
              <span className="mt-2 text-[10px] tracking-[0.25em] uppercase text-white/35 font-mono">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
