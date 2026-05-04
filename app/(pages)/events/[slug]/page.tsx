import type { Metadata } from "next";
import Link from "next/link";
import { getEventBySlug, getEventSlugs } from "@/lib/sanity";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";

interface EventDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getEventSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: event.title,
    description: event.description?.slice(0, 160),
  };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) notFound();

  const avenueColor = event.avenue?.color || "#E63946";

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-main max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/events" className="hover:text-foreground transition-colors">Events</Link>
            </li>
            <li>/</li>
            <li className="text-foreground">{event.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {event.avenue && (
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: `${avenueColor}20`,
                  color: avenueColor,
                }}
              >
                {event.avenue.name}
              </span>
            )}
            {event.isFlagship && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                ★ Flagship Event
              </span>
            )}
            <time className="text-sm text-muted">{formatDate(event.date)}</time>
          </div>

          <h1 className="font-heading font-bold text-foreground mb-6">
            {event.title}
          </h1>

          {/* Cover Image Placeholder */}
          <div className="rounded-2xl overflow-hidden bg-surface-elevated border border-border-subtle aspect-[21/9]">
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${avenueColor}22, ${avenueColor}08)`,
              }}
            >
              <svg
                className="w-20 h-20 text-white/10"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <path d="M50 10 C30 30, 20 50, 30 70 C35 80, 45 85, 50 90 C55 85, 65 80, 70 70 C80 50, 70 30, 50 10Z" />
              </svg>
            </div>
          </div>
        </header>

        {/* Description */}
        <section className="mb-12">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted leading-relaxed whitespace-pre-line">
              {event.description}
            </p>
          </div>
        </section>

        {/* Gallery */}
        {event.gallery && event.gallery.length > 0 && (
          <section className="mb-12">
            <h2 className="font-heading font-bold text-foreground text-xl mb-6">
              Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {event.gallery.map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden bg-surface-elevated border border-border-subtle aspect-square"
                >
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${avenueColor}15, ${avenueColor}05)`,
                    }}
                  >
                    <span className="text-xs text-muted-foreground">Image {i + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Report PDF */}
        {event.reportPDF && (
          <section className="mb-12">
            <div className="rounded-2xl bg-surface border border-border-subtle p-6 flex items-center justify-between">
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  Event Report
                </h3>
                <p className="text-sm text-muted">
                  Download the full report for this event.
                </p>
              </div>
              <a
                href={event.reportPDF.asset?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-medium hover:opacity-90 transition-opacity"
                aria-label="Download event report PDF"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
            </div>
          </section>
        )}

        {/* Back link */}
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Events
        </Link>
      </div>
    </article>
  );
}
