'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Progetti', href: '/work' },
  { label: 'Chi Siamo', href: '/studio' },
  { label: 'Servizi',  href: '/services' },
  { label: 'Contatti', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 md:px-10 py-3 md:py-4 transition-all duration-500 ${
        scrolled ? 'nav-glass' : ''
      }`}
    >
      {/* ENLIL logo + wordmark */}
      <Link href="/" className="flex items-center gap-3 group min-h-[44px]" onClick={() => setOpen(false)}>
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0">
          <Image
            src="/enlil-logo.png"
            alt="ENLIL"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="hidden sm:flex flex-col leading-none">
          <span className="font-orbitron text-[11px] font-bold tracking-[0.3em] text-gold-primary group-hover:text-gold-bright transition-colors duration-200">
            ENLIL
          </span>
          <span className="text-[7px] tracking-[0.18em] uppercase text-gold-primary/45 mt-0.5">
            Web &amp; Utility Brokerage
          </span>
        </div>
      </Link>

      {/* Sticky CTA — appears when scrolled */}
      {scrolled && (
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center btn-cyber px-5 py-2 border border-gold-primary/70 text-gold-primary text-[10px] font-bold tracking-[0.28em] uppercase hover:bg-gold-primary hover:text-navy-deep transition-all duration-300 mr-4"
          style={{ animation: 'fadeInDown 0.3s ease forwards' }}
        >
          Contattaci
        </Link>
      )}

      {/* Hamburger — 44×44 minimum touch target */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Chiudi menu' : 'Apri menu'}
        aria-expanded={open}
        className="relative flex flex-col gap-[5px] p-3 z-50 min-h-[44px] min-w-[44px] items-center justify-center"
      >
        <motion.span
          animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="block w-6 h-[1.5px] bg-gold-primary origin-center"
        />
        <motion.span
          animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.18 }}
          className="block w-6 h-[1.5px] bg-gold-primary"
        />
        <motion.span
          animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="block w-6 h-[1.5px] bg-gold-primary origin-center"
        />
      </button>

      {/* Full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-navy-deep/97 backdrop-blur-lg flex flex-col items-center justify-center gap-8 sm:gap-10 cyber-grid-overlay"
          >
            {/* Decorative corners */}
            <div className="absolute top-5 left-5 w-7 h-7 border-t border-l border-gold-primary/40" />
            <div className="absolute top-5 right-5 w-7 h-7 border-t border-r border-gold-primary/40" />
            <div className="absolute bottom-5 left-5 w-7 h-7 border-b border-l border-gold-primary/40" />
            <div className="absolute bottom-5 right-5 w-7 h-7 border-b border-r border-gold-primary/40" />

            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`font-orbitron text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-widest transition-colors duration-200 block py-2 ${
                    pathname === href
                      ? 'text-gold-glow animate-gold-pulse'
                      : 'text-white/60 hover:text-gold-primary'
                  }`}
                >
                  {label}
                </Link>
              </motion.div>
            ))}

            <p className="absolute bottom-8 text-[10px] tracking-[0.3em] uppercase text-gold-primary/25 font-mono">
              ENLIL — WEB &amp; UTILITY BROKERAGE
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
