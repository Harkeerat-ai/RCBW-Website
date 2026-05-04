import type { Metadata } from "next";
import SectionHeading from "@/components/blocks/SectionHeading";
import EventsGrid from "@/components/sections/EventsGrid";
import { getAllEvents, getAllAvenues } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore RCBW's events across community service, international service, professional development, sports & culture, and club service.",
};

export default async function EventsPage() {
  const [events, avenues] = await Promise.all([
    getAllEvents(),
    getAllAvenues(),
  ]);

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-main">
        <SectionHeading
          title="Our Events"
          subtitle="From flagship galas to community service drives — discover the events that make RCBW a force for good."
          gradient
        />
        <EventsGrid events={events} avenues={avenues} />
      </div>
    </section>
  );
}
