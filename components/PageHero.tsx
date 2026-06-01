interface Props {
  label: string
  heading: string
  sub: string
}

export default function PageHero({ label, heading, sub }: Props) {
  return (
    <section className="pt-40 pb-16 px-6 md:px-16 max-w-5xl mx-auto">
      <p className="text-[10px] tracking-[0.35em] uppercase text-gold-primary/60 mb-6 font-mono">
        {'// '}{label}
      </p>
      <h1 className="font-orbitron text-[clamp(2.2rem,5.5vw,4.5rem)] font-black uppercase leading-[0.92] tracking-tight max-w-2xl mb-6 text-white">
        {heading}
      </h1>
      <p className="text-sm md:text-base text-white/40 max-w-md leading-relaxed">{sub}</p>
      <div className="mt-12 h-px bg-gold-primary/20" />
    </section>
  )
}
