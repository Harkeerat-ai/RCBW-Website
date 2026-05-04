"use client";

import type { Newsletter } from "@/lib/sanity/types";
import { Rise } from "@/components/motion/MotionWrapper";
import { formatDate } from "@/lib/utils";

interface NewsletterCTAProps {
  newsletter: Newsletter | null;
}

export default function NewsletterCTA({ newsletter }: NewsletterCTAProps) {
  return (
    <section className="py-24 md:py-32">
      <div className="container-main">
        <Rise>
          <div className="relative rounded-3xl overflow-hidden bg-surface border border-border-subtle p-8 md:p-16">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-medium">
                  The Phoenix Post
                </p>
                <h2 className="font-heading font-bold text-foreground mb-4">
                  Stay in the Loop
                </h2>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  Our monthly newsletter covers event highlights, member stories,
                  upcoming projects, and behind-the-scenes moments from the RCBW family.
                </p>
                <a
                  href="/newsletter"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-opacity duration-200"
                >
                  View Newsletter Archive
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Latest Issue Preview */}
              {newsletter && (
                <div className="rounded-2xl bg-surface-elevated border border-border-subtle p-6 md:p-8">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Latest Issue
                  </span>
                  <div className="flex items-baseline gap-3 mt-2 mb-4">
                    <span className="text-4xl font-heading font-bold gradient-text">
                      #{newsletter.issueNumber}
                    </span>
                    <span className="text-sm text-muted">
                      {formatDate(newsletter.date)}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    {newsletter.title}
                  </h3>
                  <p className="text-sm text-muted line-clamp-3 mb-4">
                    {newsletter.summary}
                  </p>
                  <a
                    href={newsletter.pdfFile?.asset?.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-light hover:text-accent transition-colors duration-200"
                    aria-label={`Download ${newsletter.title}`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </a>
                </div>
              )}
            </div>
          </div>
        </Rise>
      </div>
    </section>
  );
}
