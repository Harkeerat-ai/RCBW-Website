"use client";

import { Rise } from "@/components/motion/MotionWrapper";

export default function AboutTeaser() {
  const stats = [
    { value: "150+", label: "Active Members" },
    { value: "50+", label: "Events/Year" },
    { value: "10K+", label: "Lives Impacted" },
    { value: "5", label: "Avenues of Service" },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />

      <div className="container-main relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <Rise>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary-light mb-4 font-medium">
                Who We Are
              </p>
              <h2 className="font-heading font-bold text-foreground mb-6">
                A Phoenix Spirit,{" "}
                <span className="gradient-text">Rising Together</span>
              </h2>
              <p className="text-muted text-lg mb-6 leading-relaxed">
                Rotaract Club of Bombay West is one of Mumbai&apos;s most dynamic
                youth service organizations. Under the umbrella of Rotary
                International, we bring together young professionals and students
                who believe in the power of service above self.
              </p>
              <p className="text-muted mb-8 leading-relaxed">
                From community service drives to international collaborations,
                professional development workshops to cultural celebrations —
                we&apos;re building leaders who make a difference. Our phoenix
                motif represents resilience, rebirth, and the relentless drive to
                rise above.
              </p>
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-primary-light font-medium hover:bg-primary/10 transition-colors duration-200"
              >
                Learn More About Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </Rise>

          {/* Stats Grid */}
          <Rise delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`rounded-2xl p-6 md:p-8 bg-surface border border-border-subtle text-center ${
                    i === 0 ? "phoenix-border" : ""
                  }`}
                >
                  <span className="block text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted">{stat.label}</span>
                </div>
              ))}
            </div>
          </Rise>
        </div>
      </div>
    </section>
  );
}
