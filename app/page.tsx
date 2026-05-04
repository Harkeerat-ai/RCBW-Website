import HeroSection from "@/components/sections/HeroSection";
import FlagshipStrip from "@/components/sections/FlagshipStrip";
import AboutTeaser from "@/components/sections/AboutTeaser";
import NewsletterCTA from "@/components/sections/NewsletterCTA";
import { getFlagshipEvents, getLatestNewsletter } from "@/lib/sanity";

export default async function HomePage() {
  const [flagshipEvents, latestNewsletter] = await Promise.all([
    getFlagshipEvents(),
    getLatestNewsletter(),
  ]);

  return (
    <>
      <HeroSection />
      <FlagshipStrip events={flagshipEvents} />
      <AboutTeaser />
      <NewsletterCTA newsletter={latestNewsletter} />
    </>
  );
}
