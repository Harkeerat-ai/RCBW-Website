"use client";

import { Rise } from "@/components/motion/MotionWrapper";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  gradient = false,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Rise>
      <hgroup className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
        <h2
          className={`font-heading font-bold mb-4 ${
            gradient ? "gradient-text" : "text-foreground"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>
        )}
      </hgroup>
    </Rise>
  );
}
