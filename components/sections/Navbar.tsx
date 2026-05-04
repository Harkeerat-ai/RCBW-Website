"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Flagships" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-strong">
      <nav
        className="container-main flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="RCBW Home"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-heading font-bold text-white text-sm md:text-base transition-transform duration-300 group-hover:scale-105">
            R
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm md:text-base leading-none text-foreground">
              RCBW
            </span>
            <span className="text-[10px] md:text-xs text-muted leading-none">
              Rise Above Yourself
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative px-4 py-2 text-sm text-muted hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="https://docs.google.com/forms/d/1lpc4zqX9qqP887wGD7E_piusMYOgoWNM-kiuWAvwLoA/viewform?sharingaction=ownershiptransfer&ts=682163c7&edit_requested=true"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-opacity duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Join Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-5 h-0.5 bg-foreground transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden border-t border-border-subtle overflow-hidden"
          >
            <ul className="container-main py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <motion.div
                    initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-base text-muted hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="https://docs.google.com/forms/d/1lpc4zqX9qqP887wGD7E_piusMYOgoWNM-kiuWAvwLoA/viewform?sharingaction=ownershiptransfer&ts=682163c7&edit_requested=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-4 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium"
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
