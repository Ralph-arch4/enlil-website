'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

// ── Spinning ring — meshBasicMaterial, 64 segmenti ────────────────────────
function SpinningRing({
  radius,
  axis,
  speed,
  opacity = 0.8,
}: {
  radius: number
  axis: 'x' | 'y' | 'z'
  speed: number
  opacity?: number
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation[axis] = state.clock.elapsedTime * speed
  })

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.055, 6, 64]} />
      <meshBasicMaterial color="#D4AF37" transparent opacity={opacity} />
    </mesh>
  )
}

// ── Central glowing orb ────────────────────────────────────────────────────
function GoldenOrb() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    const scale = 1 + Math.sin(state.clock.elapsedTime * 1.4) * 0.06
    ref.current.scale.setScalar(scale)
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.42, 12, 12]} />
      <meshBasicMaterial color="#FFD700" />
    </mesh>
  )
}

// ── Gold orrery ────────────────────────────────────────────────────────────
function GoldOrrery() {
  return (
    <Float speed={0.55} floatIntensity={0.28}>
      <group position={[-0.4, 0.3, 0]}>
        <SpinningRing radius={2.8} axis="y"  speed={0.28}  opacity={0.78} />
        <SpinningRing radius={2.2} axis="x"  speed={0.20}  opacity={0.60} />
        <SpinningRing radius={1.6} axis="z"  speed={-0.15} opacity={0.45} />
        <GoldenOrb />
        <pointLight color="#D4AF37" intensity={6} distance={9} />
        <pointLight color="#FFD700" intensity={2} distance={5} position={[1, 1, 1]} />
      </group>
    </Float>
  )
}

// ── Gold dust — un unico Points invece di 7 Float+mesh ───────────────────
function GoldDust() {
  const ref = useRef<THREE.Points>(null)
  const positions = new Float32Array([
    -4.5, 1.5, -1.2,
     3.5,-0.5, -0.8,
    -2.5,-2.0,  0.6,
     4.0, 2.0,  0.5,
    -1.0, 3.0, -0.6,
     1.8,-2.8, -1.8,
    -3.8, 0.8,  1.2,
  ])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.06
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={7} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#D4AF37" size={0.18} transparent opacity={0.85} sizeAttenuation />
    </points>
  )
}

// ── Gold floor ────────────────────────────────────────────────────────────
function GoldFloor() {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.4, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshBasicMaterial color="#020610" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.38, 0]}>
        <planeGeometry args={[40, 40, 14, 14]} />
        <meshBasicMaterial color="#D4AF37" wireframe transparent opacity={0.06} />
      </mesh>
    </>
  )
}

export default function ContactScene() {
  return (
    <>
      <ambientLight intensity={0.025} />
      <pointLight color="#C9A227" position={[-4, 4, 2]} intensity={1.5} distance={15} />
      <GoldOrrery />
      <GoldDust />
      <GoldFloor />
      <EffectComposer>
        <Bloom intensity={2.0} luminanceThreshold={0.15} luminanceSmoothing={0.85} mipmapBlur={false} />
      </EffectComposer>
    </>
  )
}
