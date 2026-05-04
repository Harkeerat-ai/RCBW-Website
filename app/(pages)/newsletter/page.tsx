import type { Metadata } from "next";
import SectionHeading from "@/components/blocks/SectionHeading";
import NewsletterCard from "@/components/blocks/NewsletterCard";
import { getAllNewsletters } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "The Phoenix Post — RCBW's monthly newsletter covering event highlights, member stories, and upcoming projects.",
};

export default async function NewsletterPage() {
  const newsletters = await getAllNewsletters();

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-main">
        <SectionHeading
          title="The Phoenix Post"
          subtitle="Our monthly newsletter — event highlights, member stories, upcoming projects, and behind-the-scenes moments."
          gradient
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsletters.map((newsletter) => (
            <NewsletterCard key={newsletter._id} newsletter={newsletter} />
          ))}
        </div>

        {newsletters.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted text-lg">No newsletters published yet. Stay tuned!</p>
          </div>
        )}
      </div>
    </section>
  );
}
