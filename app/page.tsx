import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProposalsSection } from "@/components/proposals-section"
import { GallerySection } from "@/components/gallery-section"
import { NewsSection } from "@/components/news-section"
import { VideosSection } from "@/components/videos-section"
import { SocialSection } from "@/components/social-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
