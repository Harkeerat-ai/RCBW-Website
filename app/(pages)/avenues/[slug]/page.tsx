import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getAvenueBySlug,
  getAvenueSlugs,
  getAllBoardMembers,
  getAllEvents,
} from "@/lib/sanity";
import { urlFor } from "@/lib/sanity/client";
import EventCard from "@/components/blocks/EventCard";
import { MoveRight } from "lucide-react";

export async function generateStaticParams() {
  const slugs = await getAvenueSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const avenue = await getAvenueBySlug(params.slug);
  if (!avenue) return {};

  return {
    title: avenue.name,
    description: avenue.description,
  };
}

export default async function AvenuePage({
  params,
}: {
  params: { slug: string };
}) {
  const avenue = await getAvenueBySlug(params.slug);

  if (!avenue) {
    notFound();
  }

  // Fetch related data
  const allMembers = await getAllBoardMembers();
  const avenueHeads = allMembers.filter(
    (m) => m.avenue?._id === avenue._id || m.role.toLowerCase().includes(avenue.name.toLowerCase())
  );

  const allEvents = await getAllEvents();
  const avenueEvents = allEvents.filter((e) => e.avenue?._id === avenue._id);

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(217,164,65,0.15)_0%,_transparent_60%)]" />
        <div className="container-main relative z-10 text-center">
          <p className="text-sm md:text-base uppercase tracking-widest text-accent mb-4 font-semibold">
            RCBW Avenue
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            {avenue.name}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {avenue.description}
          </p>
        </div>
      </section>

      {/* Avenue Heads Section */}
      {avenueHeads.length > 0 && (
        <section className="py-20 bg-surface">
          <div className="container-main">
            <div className="mb-12 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Avenue <span className="text-accent">Leadership</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {avenueHeads.map((member) => (
                <div key={member._id} className="group">
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-surface-elevated">
                    {member.photo ? (
                      <Image
                        src={urlFor(member.photo).width(400).height(400).url()}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xl">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Events Section */}
      <section className="py-20">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Recent <span className="text-accent">Events</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl text-lg">
                Discover the impact we've created through our {avenue.name} initiatives.
              </p>
            </div>
          </div>

          {avenueEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {avenueEvents.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-surface-elevated rounded-2xl border border-border">
              <p className="text-muted-foreground text-lg">
                No events found for this avenue yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
