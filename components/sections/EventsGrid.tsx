"use client";

import { useState } from "react";
import type { Event, Avenue } from "@/lib/sanity/types";
import EventCard from "@/components/blocks/EventCard";
import AvenueChip from "@/components/blocks/AvenueChip";
import SectionHeading from "@/components/blocks/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/MotionWrapper";

interface EventsGridProps {
  events: Event[];
  avenues: Avenue[];
}

export default function EventsGrid({ events, avenues }: EventsGridProps) {
  const [activeAvenue, setActiveAvenue] = useState<string | null>(null);

  const filteredEvents = activeAvenue
    ? events.filter((e) => e.avenue?._id === activeAvenue)
    : events;

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        <button
          onClick={() => setActiveAvenue(null)}
          className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer border ${
            !activeAvenue
              ? "bg-primary/20 border-primary text-primary-light"
              : "bg-surface-elevated border-border-subtle text-muted hover:text-foreground hover:border-border"
          }`}
          aria-pressed={!activeAvenue}
        >
          All Events
        </button>
        {avenues.map((avenue) => (
          <AvenueChip
            key={avenue._id}
            avenue={avenue}
            isActive={activeAvenue === avenue._id}
            onClick={() =>
              setActiveAvenue(activeAvenue === avenue._id ? null : avenue._id)
            }
          />
        ))}
      </div>

      {/* Grid */}
      <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <StaggerItem key={event._id}>
            <EventCard event={event} />
          </StaggerItem>
        ))}
      </Stagger>

      {filteredEvents.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted text-lg">No events found for this avenue.</p>
        </div>
      )}
    </>
  );
}
