"use client";

import { Rise } from "@/components/motion/MotionWrapper";

export default function AboutTeaser() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="container-main relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Rise>
            <h2 className="font-heading font-bold text-foreground text-4xl mb-12">
              About Us
            </h2>
          </Rise>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <Rise delay={0.1}>
              <div className="bg-surface p-8 rounded-2xl border border-border-subtle h-full">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The official logo of RC Bombay West is a sign of <span className="font-semibold text-foreground">phoenix</span>. Symbolizing strength, rebirth, and rising stronger from every challenge. Just like us, it reminds us that every fall is a chance to rise higher than before.
                </p>
              </div>
            </Rise>
            
            <Rise delay={0.2}>
              <div className="bg-surface p-8 rounded-2xl border border-border-subtle h-full">
                <h3 className="font-heading font-bold text-xl mb-4 text-foreground">Our Message</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The message of the Rotaract Club of Bombay West is <span className="text-primary font-semibold">"Rise Above Yourself"</span>, a journey of self-growth, impact, and inspiring others along the way. Because true change begins when you choose to grow beyond who you were yesterday.
                </p>
              </div>
            </Rise>
          </div>

          <Rise delay={0.3}>
            <div className="mt-12 text-center">
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-semibold hover:bg-surface-elevated transition-colors duration-200"
              >
                See More
              </a>
            </div>
          </Rise>
        </div>
      </div>
    </section>
  );
}
