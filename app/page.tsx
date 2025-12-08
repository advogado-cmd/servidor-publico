import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Narrative } from "@/components/narrative"
import { Protocol } from "@/components/protocol"
import { Scenarios } from "@/components/scenarios"
import { PadSection } from "@/components/pad-section"
import { LicencasMedicas } from "@/components/licencas-medicas"
import { About } from "@/components/about"
import { VideoSection } from "@/components/video-section"
import { SocialProof } from "@/components/social-proof"
import { FAQ } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Narrative />
      <Protocol />
      <Scenarios />
      <PadSection />
      <LicencasMedicas />
      <About />
      <VideoSection />
      <SocialProof />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
