"use client";

import Link from "next/link";
import type { Event } from "@/lib/sanity/types";
import { formatDate } from "@/lib/utils";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const avenueColor = event.avenue?.color || "#E63946";

  return (
    <Link
      href={`/events/${event.slug.current}`}
      className="group block rounded-2xl overflow-hidden bg-surface border border-border-subtle hover:border-border transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1"
    >
      {/* Cover Image Area */}
      <div className="relative aspect-[16/10] bg-surface-elevated overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br opacity-30 group-hover:opacity-50 transition-opacity duration-300"
          style={{
            backgroundImage: `linear-gradient(135deg, ${avenueColor}44, ${avenueColor}11)`,
          }}
        />
        {/* Phoenix pattern as placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-white/10 group-hover:text-white/20 transition-colors duration-300"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <path d="M50 10 C30 30, 20 50, 30 70 C35 80, 45 85, 50 90 C55 85, 65 80, 70 70 C80 50, 70 30, 50 10Z" />
            <path d="M35 40 C25 35, 15 45, 20 55 L30 50Z" opacity="0.6" />
            <path d="M65 40 C75 35, 85 45, 80 55 L70 50Z" opacity="0.6" />
          </svg>
        </div>

        {/* Date Badge */}
        <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg glass text-xs font-medium text-foreground">
          {formatDate(event.date)}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Avenue Tag */}
        {event.avenue && (
          <span
            className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-3"
            style={{
              backgroundColor: `${avenueColor}20`,
              color: avenueColor,
            }}
          >
            {event.avenue.name}
          </span>
        )}
        <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary-light transition-colors duration-200 line-clamp-2">
          {event.title}
        </h3>
        <p className="text-sm text-muted line-clamp-2">{event.description}</p>
      </div>
    </Link>
  );
}
