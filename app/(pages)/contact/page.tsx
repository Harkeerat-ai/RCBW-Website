"use client";

import { useState, type FormEvent } from "react";
import { Rise } from "@/components/motion/MotionWrapper";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "placeholder";
    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-main max-w-2xl">
        <Rise>
          <p className="text-sm uppercase tracking-[0.2em] text-primary-light mb-4 font-medium text-center">Get in Touch</p>
          <h1 className="font-heading font-bold text-foreground text-center mb-4">Contact Us</h1>
          <p className="text-muted text-lg text-center mb-12">Have a question, want to collaborate, or ready to join? We would love to hear from you.</p>
        </Rise>

        <Rise delay={0.1}>
          {status === "success" ? (
            <div className="rounded-2xl bg-surface border border-green-500/30 p-8 md:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-heading font-bold text-foreground text-xl mb-2">Message Sent!</h2>
              <p className="text-muted">We will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl bg-surface border border-border-subtle p-6 md:p-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input id="name" name="name" type="text" required className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border-subtle text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border-subtle text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input id="subject" name="subject" type="text" required className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border-subtle text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="What is this about?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border-subtle text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" placeholder="Tell us more..." />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </Rise>
      </div>
    </section>
  );
}
