import { Navbar } from "@/components/navbar"
import { CustomCursor } from "@/components/custom-cursor"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { FeaturesSection } from "@/components/features-section"
import { SocialProof } from "@/components/social-proof"
import { HowItWorks } from "@/components/how-it-works"
import { GallerySection } from "@/components/gallery-section"
import { ServiceAreas } from "@/components/service-areas"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <FeaturesSection />
      <SocialProof />
      <HowItWorks />
      <GallerySection />
      <ServiceAreas />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
      <CustomCursor />
    </main>
  )
}
