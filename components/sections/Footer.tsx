import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Flagships" },
  {
    href: "https://docs.google.com/forms/d/1lpc4zqX9qqP887wGD7E_piusMYOgoWNM-kiuWAvwLoA/viewform?sharingaction=ownershiptransfer&ts=682163c7&edit_requested=true",
    label: "Join Us",
  },
];

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
                  RC Bombay West
                </h3>
              </div>
            </div>
            <p className="text-sm text-muted max-w-md mb-6">
              Join a community of changemakers! At RCBW, we believe in rising above ourselves to create meaningful impact.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {["Instagram", "LinkedIn", "Twitter"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-surface-elevated flex items-center justify-center text-muted hover:text-foreground hover:bg-black/5 transition-colors duration-200"
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
              Menu
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    {...(link.label === "Join Us" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                <a href="tel:+919820304620" className="hover:text-foreground transition-colors">
                  +91 98203 04620
                </a>
              </li>
              <li>
                <a href="tel:+917977522662" className="hover:text-foreground transition-colors">
                  +91 79775 22662
                </a>
              </li>
              <li>
                <a href="mailto:rtr.saniakadam.rcbw@gmail.com" className="hover:text-foreground transition-colors">
                  rtr.saniakadam.rcbw@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Rotaract Club of Bombay West. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            RID 3141
          </p>
        </div>
      </div>
    </footer>
  );
}
