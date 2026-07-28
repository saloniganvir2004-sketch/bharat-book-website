import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { OpeningMystery } from "@/components/OpeningMystery";
import { AboutTheBook } from "@/components/AboutTheBook";
import { QuestionSection } from "@/components/QuestionSection";
import { GlimpsesSection } from "@/components/GlimpsesSection";
import { HistoricalJourney } from "@/components/HistoricalJourney";
import { EvidenceSection } from "@/components/EvidenceSection";
import { VisualInterlude } from "@/components/VisualInterlude";
import { AboutAuthor } from "@/components/AboutAuthor";
import { BookDetails } from "@/components/BookDetails";
import { ComingSoonBuy } from "@/components/ComingSoonBuy";
import { LaunchNotification } from "@/components/LaunchNotification";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07101F] text-[#F2EBDD] flex flex-col relative selection:bg-[#C9973E] selection:text-[#07101F]">
      {/* 1. Transparent/Opaque Sticky Navigation */}
      <Navbar />

      {/* 2. Cinematic Hero Section */}
      <HeroSection />

      {/* 3. Opening Mystery */}
      <OpeningMystery />

      {/* 4. About The Book */}
      <AboutTheBook />

      {/* 5. Cinematic Question Section */}
      <QuestionSection />

      {/* 6. Glimpses of 15 Chapters */}
      <GlimpsesSection />

      {/* 7. Historical Journey Timeline */}
      <HistoricalJourney />

      {/* 8. Evidence & Source Philosophy */}
      <EvidenceSection />

      {/* 9. Visual Interlude */}
      <VisualInterlude />

      {/* 10. About the Author */}
      <AboutAuthor />

      {/* 11. Book Specifications */}
      <BookDetails />

      {/* 12. Coming Soon / Retailers */}
      <ComingSoonBuy />

      {/* 13. Launch Notification Signup */}
      <LaunchNotification />

      {/* 14. Frequently Asked Questions */}
      <FaqSection />

      {/* 15. Final Cinematic Call to Action */}
      <FinalCta />

      {/* 16. Footer */}
      <Footer />
    </main>
  );
}
