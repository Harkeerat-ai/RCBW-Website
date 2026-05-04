"use client";

import type { Event } from "@/lib/sanity/types";
import EventCard from "@/components/blocks/EventCard";
import SectionHeading from "@/components/blocks/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/MotionWrapper";

interface FlagshipStripProps {
  events: Event[];
}

export default function FlagshipStrip({ events }: FlagshipStripProps) {
  if (!events.length) return null;

  return (
    <section className="py-24 md:py-32">
      <div className="container-main">
        <SectionHeading
          title="Flagship Events"
          subtitle="Our signature events that define the RCBW experience — service, leadership, and fellowship in action."
          gradient
        />

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.slice(0, 6).map((event) => (
            <StaggerItem key={event._id}>
              <EventCard event={event} />
            </StaggerItem>
          ))}
        </Stagger>

        {/* View all link */}
        <div className="text-center mt-12">
          <a
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-light hover:text-accent transition-colors duration-200 group"
          >
            View All Events
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
