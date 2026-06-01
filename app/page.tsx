import Navbar        from '@/components/Navbar'
import HeroSection    from '@/components/HeroSection'
import StatsSection   from '@/components/StatsSection'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import ContactSection from '@/components/ContactSection'
import CookieBanner   from '@/components/CookieBanner'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <CookieBanner />
    </main>
  )
}
