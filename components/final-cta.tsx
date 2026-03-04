"use client"

import { Phone, Clock, Shield, Star, ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function FinalCTA() {
  const { ref: sectionRef, isVisible } = useScrollReveal()

  return (
    <section id="contact" ref={sectionRef} className="relative overflow-hidden bg-background py-32 md:py-48">

      {/* Background — soft accent glow on light bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-accent/[0.06] blur-[120px]" />
      <div className="absolute -top-40 -right-40 h-[400px] w-[400px] rounded-full bg-accent/[0.04] blur-[100px]" />
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">

        {/* Badge */}
        <div className={`${isVisible ? "animate-drop-from-top" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Get Started Today</span>
          </div>
        </div>

        {/* Headline */}
        <div className={`mt-8 ${isVisible ? "animate-cinematic-fade-up" : "opacity-0"}`} style={{ animationDelay: "150ms" }}>
          <h2 className="font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl leading-tight text-balance">
            Ready for a<br />
            <span className="text-accent">spotless space?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-foreground/40">
            One call. Free estimate. Same-day availability across the entire LA area.
          </p>
        </div>

        {/* Phone CTA — the hero element */}
        <div className={`mt-14 ${isVisible ? "animate-cinematic-fade-up" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
          <a
            href="tel:+12132976853"
            className="group inline-flex flex-col items-center gap-3 rounded-3xl border border-accent/25 bg-accent/[0.06] px-10 py-8 backdrop-blur-sm transition-all duration-500 hover:border-accent/50 hover:bg-accent/10 hover:scale-[1.03] hover:shadow-2xl hover:shadow-accent/20 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 ring-2 ring-accent/25 transition-all duration-500 group-hover:bg-accent/25 group-hover:ring-accent/50 group-hover:scale-110">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <span className="font-serif text-4xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent md:text-5xl">
                (213) 297-6853
              </span>
            </div>
            <span className="text-sm font-medium text-foreground/35 transition-colors duration-300 group-hover:text-foreground/60">
              Tap to call — free estimate, no commitment
            </span>
          </a>
        </div>

        {/* Divider */}
        <div className={`mt-10 flex items-center gap-5 ${isVisible ? "animate-cinematic-fade-in" : "opacity-0"}`} style={{ animationDelay: "450ms" }}>
          <div className="h-px flex-1 bg-primary-foreground/[0.07]" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-foreground/20">or</span>
          <div className="h-px flex-1 bg-primary-foreground/[0.07]" />
        </div>

        {/* Secondary link */}
        <div className={`mt-8 ${isVisible ? "animate-cinematic-fade-in" : "opacity-0"}`} style={{ animationDelay: "500ms" }}>
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/40 transition-colors duration-300 hover:text-foreground/70"
          >
            Browse all services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 hover:translate-x-1" />
          </a>
        </div>

        {/* Trust badges */}
        <div className={`mt-16 flex flex-wrap items-center justify-center gap-8 ${isVisible ? "animate-cinematic-fade-in" : "opacity-0"}`} style={{ animationDelay: "600ms" }}>
          {[
            { icon: Shield, label: "100% Guaranteed" },
            { icon: Clock, label: "Same-Day Available" },
            { icon: Star, label: "5-Star Rated" },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center gap-2 text-foreground/30">
              {i > 0 && <div className="hidden h-3 w-px bg-primary-foreground/10 sm:block mr-6" />}
              <item.icon className="h-3.5 w-3.5 text-accent/50" />
              <span className="text-xs font-semibold tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
