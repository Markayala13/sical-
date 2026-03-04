"use client"

import { Waves, MapPin } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const beachCities = [
  "Santa Monica",
  "Venice",
  "Long Beach",
  "Malibu",
  "Manhattan Beach",
  "Hermosa Beach",
  "Redondo Beach",
  "Marina del Rey",
  "Playa del Rey",
  "Palos Verdes",
  "El Segundo",
  "Seal Beach",
]

const moreCities = [
  "Culver City",
  "Torrance",
  "Inglewood",
  "Hawthorne",
  "Gardena",
  "Carson",
  "Compton",
  "Lawndale",
  "Lakewood",
  "Signal Hill",
  "Lynwood",
  "Downey",
  "Paramount",
  "Bellflower",
  "Norwalk",
  "Cerritos",
]

export function ServiceAreas() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()
  const { ref: beachRef, isVisible: beachVisible } = useScrollReveal()
  const { ref: moreRef, isVisible: moreVisible } = useScrollReveal()

  return (
    <section id="service-areas" className="relative overflow-hidden bg-primary py-28 md:py-40">
      {/* Ocean gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0a3a5c]" />
      {/* Subtle wave texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 120%, rgba(255,255,255,0.6) 0%, transparent 70%)",
      }} />
      {/* Glow blobs */}
      <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-accent/[0.06] blur-[100px]" />

      {/* LA County map outline — decorative */}
      <svg
        viewBox="0 0 900 750"
        className="absolute inset-0 h-full w-full opacity-[0.07] pointer-events-none select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* County fill + outline */}
        <path
          d="M 150,100 C 300,90 550,75 750,80 L 855,85 L 860,200 L 865,380 L 855,500 L 820,540 L 750,560 L 670,575 L 580,585 L 495,600 L 420,595 L 380,615 L 345,645 L 305,670 L 268,655 L 252,618 L 265,578 L 280,548 L 260,512 L 220,472 L 188,432 L 158,385 L 140,320 L 135,245 L 140,170 L 148,130 Z"
          fill="white"
          fillOpacity="0.025"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* City dots */}
        <circle cx="590" cy="320" r="5" fill="white" opacity="0.5" />
        <circle cx="205" cy="420" r="3.5" fill="white" opacity="0.35" />
        <circle cx="560" cy="560" r="3.5" fill="white" opacity="0.35" />
        <circle cx="295" cy="640" r="3" fill="white" opacity="0.3" />
        <circle cx="155" cy="375" r="2.5" fill="white" opacity="0.25" />
        {/* Latitude reference lines */}
        <line x1="0" y1="280" x2="900" y2="280" stroke="white" strokeWidth="0.5" strokeDasharray="6 12" opacity="0.12" />
        <line x1="0" y1="480" x2="900" y2="480" stroke="white" strokeWidth="0.5" strokeDasharray="6 12" opacity="0.08" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col items-center text-center ${headerVisible ? "animate-cinematic-fade-up" : "opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Coverage</span>
          </div>

          <h2 className="mt-8 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            Serving Greater
          </h2>
          {/* LOS ANGELES — hero word */}
          <p className="mt-2 font-serif text-6xl font-bold leading-none tracking-tight text-accent md:text-8xl lg:text-9xl">
            Los Angeles
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/50">
            From the coastline to the city. We cover the entire LA area with the same premium standard of service.
          </p>
        </div>

        {/* Beach Cities */}
        <div
          ref={beachRef}
          className={`mt-20 ${beachVisible ? "animate-cinematic-fade-up" : "opacity-0"}`}
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <div className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
              <Waves className="h-4 w-4 text-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Coastal Cities</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {beachCities.map((city, i) => (
              <div
                key={city}
                className={`group flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-accent/60 hover:bg-accent/20 hover:scale-105 ${beachVisible ? "animate-slide-subtle" : "opacity-0"}`}
                style={{ animationDelay: `${i * 55}ms` }}
              >
                <Waves className="h-3.5 w-3.5 text-accent/70 group-hover:text-accent transition-colors" />
                <span className="text-sm font-semibold text-primary-foreground/90 group-hover:text-primary-foreground transition-colors">
                  {city}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-14 h-px w-full bg-primary-foreground/[0.06]" />

        {/* More Cities */}
        <div
          ref={moreRef}
          className={`${moreVisible ? "animate-cinematic-fade-up" : "opacity-0"}`}
        >
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.25em] text-primary-foreground/30">
            And all surrounding areas
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {moreCities.map((city, i) => (
              <span
                key={city}
                className={`rounded-full border border-primary-foreground/10 bg-primary-foreground/[0.03] px-4 py-1.5 text-sm text-primary-foreground/50 transition-colors hover:text-primary-foreground/80 hover:border-primary-foreground/20 ${moreVisible ? "animate-slide-subtle" : "opacity-0"}`}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center ${moreVisible ? "animate-cinematic-fade-in" : "opacity-0"}`}>
          <p className="text-primary-foreground/40 text-sm">
            Don't see your city?{" "}
            <a href="tel:+12132976853" className="text-accent font-semibold hover:underline transition-colors">
              Give us a call — we'll come to you.
            </a>
          </p>
        </div>

      </div>

      {/* Wave to FinalCTA (light) */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-[70px] text-background" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="currentColor" opacity="0.3" />
          <path d="M0,60 C360,20 1080,80 1440,60 L1440,80 L0,80 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  )
}
