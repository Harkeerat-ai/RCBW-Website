"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useReducedMotion } from "framer-motion";
import PhoenixFallback from "@/components/3d/PhoenixFallback";

const PhoenixScene = dynamic(() => import("@/components/3d/PhoenixScene"), {
  ssr: false,
  loading: () => <PhoenixFallback />,
});

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(230,57,70,0.08)_0%,_transparent_70%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />

      {/* 3D Phoenix or Static Fallback */}
      {prefersReducedMotion ? (
        <PhoenixFallback />
      ) : (
        <Suspense fallback={<PhoenixFallback />}>
          <PhoenixScene />
        </Suspense>
      )}

      {/* Content Overlay */}
      <div className="relative z-20 container-main text-center">
        <div className="max-w-3xl mx-auto">
          {/* Eyebrow */}
          <p className="text-sm md:text-base uppercase tracking-[0.25em] text-primary-light mb-4 font-medium">
            Rotaract Club of Bombay West
          </p>

          {/* Main headline */}
          <h1 className="font-heading font-bold mb-6 text-foreground">
            Rise Above{" "}
            <span className="gradient-text">Yourself</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted max-w-xl mx-auto mb-10 leading-relaxed">
            A community of young changemakers committed to service, leadership,
            and building a better Mumbai — and a better world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/events"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-base hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-primary/20"
            >
              Explore Events
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-border text-foreground font-semibold text-base hover:bg-white/5 transition-colors duration-200"
            >
              Our Story
            </a>
          </div>
        </div>


      </div>
    </section>
  );
}
