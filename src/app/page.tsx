import HeroSection from "@/components/home/HeroSection";
import EmotionalBanner from "@/components/home/EmotionalBanner";
import ImpactSection from "@/components/home/ImpactSection";
import PillarsSection from "@/components/home/PillarsSection";
import QuoteSection from "@/components/home/QuoteSection";
import StoriesMarquee from "@/components/home/StoriesMarquee";
import WhoWeAreSection from "@/components/home/WhoWeAreSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StoriesMarquee />
      <WhoWeAreSection />
      <EmotionalBanner />
      <ImpactSection />
      <PillarsSection />
      <QuoteSection />
    </>
  );
}
