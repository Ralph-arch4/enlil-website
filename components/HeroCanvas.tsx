'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import HeroScene from './HeroScene'

export default function HeroCanvas() {
  return (
    // CSS filter sostituisce il Bloom Three.js — zero overhead GPU postprocessing
    <div className="w-full h-full" style={{ filter: 'drop-shadow(0 0 18px #D4AF3788) drop-shadow(0 0 6px #D4AF3744)' }}>
      <Canvas
        camera={{ position: [0, 0, 9], fov: 44 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        dpr={1}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </Canvas>
    </div>
  )
}
