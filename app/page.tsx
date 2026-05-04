import HeroSection from "@/components/sections/HeroSection";
import AboutTeaser from "@/components/sections/AboutTeaser";
import NewsletterCTA from "@/components/sections/NewsletterCTA";
import { getLatestNewsletter } from "@/lib/sanity";

export default async function HomePage() {
  const latestNewsletter = await getLatestNewsletter();

  return (
    <>
      <HeroSection />
      <AboutTeaser />
      <NewsletterCTA newsletter={latestNewsletter} />
    </>
  );
}
