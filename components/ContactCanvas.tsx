'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import ContactScene from './ContactScene'

export default function ContactCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 9], fov: 52 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
    >
      <Suspense fallback={null}>
        <ContactScene />
      </Suspense>
    </Canvas>
  )
}
