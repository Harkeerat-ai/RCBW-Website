import Link from "next/link";

const footerLinks = {
  club: [
    { href: "/about", label: "About Us" },
    { href: "/events", label: "Events" },
    { href: "/newsletter", label: "Newsletter" },
    { href: "/contact", label: "Contact" },
  ],
  avenues: [
    { label: "Community Service", href: "/events" },
    { label: "International Service", href: "/events" },
    { label: "Professional Development", href: "/events" },
    { label: "Sports & Culture", href: "/events" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface" role="contentinfo">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-heading font-bold text-white">
                R
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground">
                  Rotaract Club of Bombay West
                </h3>
                <p className="text-xs text-muted">Rise Above Yourself</p>
              </div>
            </div>
            <p className="text-sm text-muted max-w-md mb-6">
              A youth-led community of changemakers under Rotary International,
              dedicated to service, leadership, and fellowship in Mumbai and beyond.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {["Instagram", "LinkedIn", "Twitter"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-surface-elevated flex items-center justify-center text-muted hover:text-foreground hover:bg-white/10 transition-colors duration-200"
                  aria-label={`Follow us on ${platform}`}
                >
                  <span className="text-xs font-medium">
                    {platform[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.club.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Avenues */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
              Avenues
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.avenues.map((avenue) => (
                <li key={avenue.label}>
                  <Link
                    href={avenue.href}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                  >
                    {avenue.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Rotaract Club of Bombay West. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Part of Rotary International District 3141
          </p>
        </div>
      </div>
    </footer>
  );
}
