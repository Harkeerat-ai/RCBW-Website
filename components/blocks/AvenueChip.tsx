"use client";

import type { Avenue } from "@/lib/sanity/types";

interface AvenueChipProps {
  avenue: Avenue;
  isActive?: boolean;
  onClick?: () => void;
}

export default function AvenueChip({ avenue, isActive = false, onClick }: AvenueChipProps) {
  const baseClasses =
    "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer border";

  if (isActive) {
    return (
      <button
        onClick={onClick}
        className={baseClasses}
        style={{
          backgroundColor: `${avenue.color}30`,
          borderColor: avenue.color,
          color: avenue.color,
        }}
        aria-pressed="true"
      >
        {avenue.name}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} bg-surface-elevated border-border-subtle text-muted hover:text-foreground hover:border-border`}
      aria-pressed="false"
    >
      {avenue.name}
    </button>
  );
}
