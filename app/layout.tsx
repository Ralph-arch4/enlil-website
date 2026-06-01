import type { Metadata } from 'next'
import { Space_Grotesk, Orbitron } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['400', '500', '600', '700'],
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'ENLIL — Web & Utility Brokerage',
  description:
    'ENLIL è un broker specializzato in infrastruttura digitale e mercati energetici. Ottimizziamo costi e risorse per imprenditori e aziende.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${spaceGrotesk.variable} ${orbitron.variable}`}>
      <body>{children}</body>
    </html>
  )
}
