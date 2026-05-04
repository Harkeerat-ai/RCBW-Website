import type { Metadata } from "next";
import SectionHeading from "@/components/blocks/SectionHeading";
import BoardMemberCard from "@/components/blocks/BoardMemberCard";
import { getAllBoardMembers, getAllAvenues } from "@/lib/sanity";
import { Rise } from "@/components/motion/MotionWrapper";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Rotaract Club of Bombay West — our story, board members, and avenues of service.",
};

export default async function AboutPage() {
  const [boardMembers, avenues] = await Promise.all([
    getAllBoardMembers(),
    getAllAvenues(),
  ]);

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-main max-w-4xl">
          <Rise>
            <p className="text-sm uppercase tracking-[0.2em] text-primary-light mb-4 font-medium text-center">Our Story</p>
            <h1 className="font-heading font-bold text-foreground text-center mb-8">
              Building Leaders, <span className="gradient-text">Serving Communities</span>
            </h1>
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              <p>Rotaract Club of Bombay West was founded with a simple yet powerful mission: to bring together young people who believe that service can transform — not just communities, but ourselves. Under the guidance of Rotary International District 3141, we have grown into one of Mumbai&apos;s most active and awarded Rotaract clubs.</p>
              <p>Our name carries weight. &quot;Rise Above Yourself&quot; is not just a tagline — it is a promise. Like the phoenix that adorns our identity, we believe in constant renewal, in rising from challenges stronger and more purposeful.</p>
              <p>From beach cleanups on Mumbai&apos;s shores to international collaborations spanning continents, from hackathons that solve real problems to cultural celebrations that unite diverse communities — RCBW is where passion meets purpose.</p>
            </div>
          </Rise>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-main">
          <SectionHeading title="Avenues of Service" subtitle="Five pillars that guide everything we do." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {avenues.map((avenue) => (
              <Rise key={avenue._id}>
                <div className="rounded-2xl bg-surface border border-border-subtle p-6 md:p-8 hover:border-border transition-colors duration-200">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-xl" style={{ backgroundColor: `${avenue.color}20`, color: avenue.color }}>
                    {avenue.icon === "heart" && "❤️"}
                    {avenue.icon === "globe" && "🌍"}
                    {avenue.icon === "briefcase" && "💼"}
                    {avenue.icon === "trophy" && "🏆"}
                    {avenue.icon === "users" && "👥"}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2" style={{ color: avenue.color }}>{avenue.name}</h3>
                  <p className="text-sm text-muted leading-relaxed">{avenue.description}</p>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-main">
          <SectionHeading title="The Board" subtitle="Meet the leaders steering RCBW forward." gradient />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member) => (
              <BoardMemberCard key={member._id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
