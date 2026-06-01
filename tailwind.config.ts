import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['var(--font-space)', 'sans-serif'],
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
      },
      colors: {
        'gold-primary': '#D4AF37',
        'gold-bright': '#FFD700',
        'gold-muted': '#9A7D2E',
        'gold-dark': '#6B5820',
        'navy-deep': '#050a18',
        'navy-mid': '#0a1628',
        'navy-card': '#0d1e35',
        'cyber-accent': '#00F5D4',
        'bg-dark': '#050a18',
      },
    },
  },
  plugins: [],
}

export default config
