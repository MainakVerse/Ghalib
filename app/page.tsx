import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { QuoteSection } from "@/components/quote-section"
import { ParallaxSection } from "@/components/parallax-section"
import { FeaturesSection } from "@/components/features-section"
import { GlimpseSection } from "@/components/glimpse-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B0E15]">
      <Navbar />
      <HeroSection />
      <QuoteSection />
      <ParallaxSection />
      <FeaturesSection />
      <GlimpseSection />
      <FAQSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
