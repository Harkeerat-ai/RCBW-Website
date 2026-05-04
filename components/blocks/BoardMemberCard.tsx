"use client";

import type { BoardMember } from "@/lib/sanity/types";

interface BoardMemberCardProps {
  member: BoardMember;
}

export default function BoardMemberCard({ member }: BoardMemberCardProps) {
  const avenueColor = member.avenue?.color || "#E63946";

  return (
    <article className="group relative rounded-2xl overflow-hidden bg-surface border border-border-subtle hover:border-border transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1">
      {/* Photo Area */}
      <div className="relative aspect-square bg-surface-elevated overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b opacity-30"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${avenueColor}22, ${avenueColor}44)`,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-heading font-bold text-white"
            style={{ backgroundColor: `${avenueColor}60` }}
          >
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </div>
        </div>
        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent" />
      </div>

      {/* Info */}
      <div className="p-5 -mt-6 relative">
        <h3 className="font-heading font-semibold text-foreground text-lg mb-1">
          {member.name}
        </h3>
        <p
          className="text-sm font-medium mb-2"
          style={{ color: avenueColor }}
        >
          {member.role}
        </p>
        {member.avenue && (
          <span className="text-xs text-muted">{member.avenue.name}</span>
        )}
        {member.linkedIn && (
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-surface-elevated flex items-center justify-center text-muted hover:text-foreground hover:bg-white/10 transition-colors duration-200"
            aria-label={`${member.name}'s LinkedIn profile`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}
