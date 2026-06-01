'use client'

import { useScroll, useSpring, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: 'left',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        zIndex: 100,
        pointerEvents: 'none',
        background: 'linear-gradient(90deg, #D4AF37, #FFD700, #D4AF37)',
        boxShadow: '0 0 8px rgba(212,175,55,0.6)',
      }}
      aria-hidden
    />
  )
}
