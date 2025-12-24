import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import TravelDestinations from '@/components/TravelDestinations'
import Menu from '@/components/Menu'
import About from '@/components/About'
import ExperienceSection from '@/components/ExperienceSection'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Features />
      <TravelDestinations />
      <Menu />
      <About />
      <ExperienceSection />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
