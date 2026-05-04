"use client";

import type { Newsletter } from "@/lib/sanity/types";
import { formatDate } from "@/lib/utils";

interface NewsletterCardProps {
  newsletter: Newsletter;
}

export default function NewsletterCard({ newsletter }: NewsletterCardProps) {
  return (
    <article className="group rounded-2xl overflow-hidden bg-surface border border-border-subtle hover:border-border transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1">
      {/* Cover */}
      <div className="relative aspect-[4/3] bg-surface-elevated overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <span className="text-5xl font-heading font-bold gradient-text">
            #{newsletter.issueNumber}
          </span>
          <span className="text-xs text-muted uppercase tracking-wider">Issue</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <time className="text-xs text-muted-foreground mb-2 block">
          {formatDate(newsletter.date)}
        </time>
        <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary-light transition-colors duration-200 line-clamp-2">
          {newsletter.title}
        </h3>
        <p className="text-sm text-muted line-clamp-3 mb-4">{newsletter.summary}</p>
        <a
          href={newsletter.pdfFile?.asset?.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-light hover:text-accent transition-colors duration-200"
          aria-label={`Download ${newsletter.title} PDF`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </a>
      </div>
    </article>
  );
}
