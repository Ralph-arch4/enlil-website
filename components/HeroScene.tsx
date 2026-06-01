'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

// ── Golden wireframe globe ─────────────────────────────────────────────────
function GoldenGlobe() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.14
    groupRef.current.rotation.x = state.clock.elapsedTime * 0.04
  })

  return (
    <Float speed={0.8} floatIntensity={0.4}>
      <group ref={groupRef}>
        <mesh>
          <sphereGeometry args={[2, 16, 10]} />
          <meshBasicMaterial color="#D4AF37" wireframe transparent opacity={0.35} />
        </mesh>
        <mesh>
          <sphereGeometry args={[1.82, 12, 8]} />
          <meshBasicMaterial color="#3a1800" transparent opacity={0.55} />
        </mesh>
        <mesh>
          <sphereGeometry args={[1.1, 10, 6]} />
          <meshBasicMaterial color="#FFD700" wireframe transparent opacity={0.15} />
        </mesh>
      </group>
    </Float>
  )
}

// ── Orbiting ring ──────────────────────────────────────────────────────────
function OrbitRing({
  radius,
  rotation,
  speed,
  opacity = 0.7,
}: {
  radius: number
  rotation: [number, number, number]
  speed: number
  opacity?: number
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.z = state.clock.elapsedTime * speed
  })

  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, 0.04, 4, 64]} />
      <meshBasicMaterial color="#D4AF37" transparent opacity={opacity} />
    </mesh>
  )
}

// ── Wings (5 piume per lato, meshBasicMaterial) ────────────────────────────
function Wings() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
  })

  const feathers: Array<[number, number, number, number, number]> = [
    [-2.3,  1.1,  -1.1,  1.8,  0.44],
    [-3.0,  0.5,  -1.4,  2.2,  0.36],
    [-3.55, -0.05,-1.57, 2.45, 0.30],
    [-3.3,  -0.8, -1.75, 2.05, 0.22],
    [-2.05,  0.65,-1.2,  1.38, 0.34],
  ]

  return (
    <group ref={groupRef}>
      {feathers.map(([cx, cy, rz, len, op], i) => (
        <mesh key={`l${i}`} position={[cx, cy, -0.2]} rotation={[0, 0, rz]}>
          <cylinderGeometry args={[0.014, 0.003, len, 3]} />
          <meshBasicMaterial color="#D4AF37" transparent opacity={op} />
        </mesh>
      ))}
      {feathers.map(([cx, cy, rz, len, op], i) => (
        <mesh key={`r${i}`} position={[-cx, cy, -0.2]} rotation={[0, 0, -rz]}>
          <cylinderGeometry args={[0.014, 0.003, len, 3]} />
          <meshBasicMaterial color="#D4AF37" transparent opacity={op} />
        </mesh>
      ))}
    </group>
  )
}

// ── Gold particle field ────────────────────────────────────────────────────
function GoldParticles({ count = 60 }: { count?: number }) {
  const COUNT = count
  const pointsRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      const r = 3.5 + Math.random() * 4.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.035
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#FFD700" size={0.06} transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

// ── Cyber grid ground ──────────────────────────────────────────────────────
function CyberGrid() {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.6, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshBasicMaterial color="#020610" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.58, 0]}>
        <planeGeometry args={[50, 50, 12, 12]} />
        <meshBasicMaterial color="#D4AF37" wireframe transparent opacity={0.06} />
      </mesh>
    </>
  )
}

export default function HeroScene() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  return (
    <>
      {/* Nessun EffectComposer/Bloom — glow via CSS filter sul wrapper */}
      <GoldenGlobe />
      <OrbitRing radius={2.65} rotation={[0.3, 0, 0.1]}    speed={0.28} opacity={0.65} />
      <OrbitRing radius={3.05} rotation={[-0.5, 0.2, 0.7]} speed={-0.17} opacity={0.38} />
      <Wings />
      <GoldParticles count={isMobile ? 30 : 60} />
      <CyberGrid />
    </>
  )
}
