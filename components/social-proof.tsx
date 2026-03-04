"use client"

import { Star } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const testimonials = [
  {
    name: "James O.",
    role: "Property Manager",
    location: "Long Beach, CA",
    rating: 5,
    text: "Show up on time, do the job right, no follow-up needed. First cleaning company that actually delivers.",
    initial: "JO",
  },
  {
    name: "Linda P.",
    role: "Office Manager",
    location: "Santa Monica, CA",
    rating: 5,
    text: "Called them after a renovation. Office was spotless the same day. Already booked them for monthly.",
    initial: "LP",
  },
  {
    name: "Carlos M.",
    role: "General Contractor",
    location: "Los Angeles, CA",
    rating: 5,
    text: "I send them to every client after a build. They handle the mess so I can focus on the next job.",
    initial: "CM",
  },
]

const serviceHighlights = [
  "General Cleaning",
  "Carpet Cleaning",
  "Construction Cleanup",
  "Floor Waxing",
  "Power Washing",
  "Janitorial Service",
  "Maid Service",
  "Upholstery Cleaning",
]

export function SocialProof() {
  const { ref: marqueRef, isVisible: marqueVisible } = useScrollReveal()
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal()

  return (
    <section id="testimonials" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Marquee */}
        <div ref={marqueRef} className={`${marqueVisible ? "animate-cinematic-fade-in" : "opacity-0"}`}>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground/40">
            Complete range of professional services
          </p>
          <div className="relative mt-8 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
            <div className="flex animate-marquee items-center gap-12 py-4">
              {[...serviceHighlights, ...serviceHighlights, ...serviceHighlights].map((name, i) => (
                <div key={`${name}-${i}`} className="flex shrink-0 items-center gap-3 text-muted-foreground/40">
                  <div className="h-2 w-2 rounded-full bg-accent/30" />
                  <span className="whitespace-nowrap text-sm font-semibold tracking-wide">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Header */}
        <div ref={headerRef} className={`mt-24 text-center ${headerVisible ? "animate-cinematic-fade-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Testimonials</span>
          </div>
          <h2 className="mt-6 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            What our clients say.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
            Real people. Real jobs. Real results.
          </p>
        </div>

        {/* Cards — editorial layout */}
        <div ref={cardsRef} className="mt-16 grid gap-5 md:grid-cols-[1fr_1.9fr_1fr] items-center">

          {/* Side card — James O. */}
          <div className={`flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 ${cardsVisible ? "animate-cinematic-slide-right" : "opacity-0"}`}
            style={{ animationDelay: "150ms" }}>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />)}
            </div>
            <p className="text-sm leading-relaxed text-foreground/70">&ldquo;{testimonials[0].text}&rdquo;</p>
            <div className="flex items-center gap-3 border-t border-border pt-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                {testimonials[0].initial}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{testimonials[0].name}</p>
                <p className="text-xs text-muted-foreground">{testimonials[0].role}</p>
              </div>
            </div>
          </div>

          {/* Center featured — Linda P. */}
          <div className={`relative rounded-3xl border border-accent/25 bg-card p-10 text-center shadow-2xl shadow-accent/10 ${cardsVisible ? "animate-cinematic-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "300ms" }}>
            {/* Decorative quote mark */}
            <span className="pointer-events-none absolute -top-5 left-7 select-none font-serif text-[9rem] leading-none text-accent/10">&ldquo;</span>
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

            <div className="flex justify-center gap-1 mb-7">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
            </div>
            <p className="relative font-serif text-xl md:text-2xl leading-relaxed text-foreground">
              &ldquo;{testimonials[1].text}&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground ring-2 ring-background shadow-md">
                  {testimonials[1].initial}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-foreground">{testimonials[1].name}</p>
                  <p className="text-xs text-muted-foreground">{testimonials[1].role} &middot; {testimonials[1].location}</p>
                </div>
              </div>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>

          {/* Side card — Carlos M. */}
          <div className={`flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 ${cardsVisible ? "animate-cinematic-slide-left" : "opacity-0"}`}
            style={{ animationDelay: "150ms" }}>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />)}
            </div>
            <p className="text-sm leading-relaxed text-foreground/70">&ldquo;{testimonials[2].text}&rdquo;</p>
            <div className="flex items-center gap-3 border-t border-border pt-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                {testimonials[2].initial}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{testimonials[2].name}</p>
                <p className="text-xs text-muted-foreground">{testimonials[2].role}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Google CTA */}
        <div className={`mt-10 text-center ${cardsVisible ? "animate-cinematic-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "700ms" }}>
          <a
            href="https://www.google.com/search?q=Sical+Cleaning+Los+Angeles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-accent"
          >
            <span className="font-black text-[#4285F4]">G</span>
            See all reviews on Google
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
