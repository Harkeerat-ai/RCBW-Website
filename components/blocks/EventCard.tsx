"use client";

import Link from "next/link";
import type { Event } from "@/lib/sanity/types";
import { formatDate } from "@/lib/utils";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link
      href={`/events/${event.slug.current}`}
      className="group block rounded-2xl overflow-hidden bg-surface border border-border-subtle hover:border-border transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1"
    >
      {/* Cover Image Area */}
      <div className="relative aspect-[3/2] bg-surface-elevated overflow-hidden">
        {/* Placeholder image layer */}
        <div className="absolute inset-0 bg-primary-dark/5 transition-transform duration-300 group-hover:scale-105" />
        
        {/* Date Badge */}
        <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-surface text-xs font-medium text-foreground shadow-sm">
          {formatDate(event.date)}
        </div>

        {/* Category Tag (Top Left) */}
        {event.avenue && (
          <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-xs uppercase font-medium shadow-sm">
            {event.avenue.name}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-1">
          {event.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-1">{event.description}</p>
      </div>
    </Link>
  );
}
