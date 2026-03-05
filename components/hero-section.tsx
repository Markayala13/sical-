"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Star, Shield, Clock, Award } from "lucide-react"
import { useCountUp, useParallax } from "@/hooks/use-scroll-reveal"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const { ref: videoRef, offset: videoOffset } = useParallax(0.4)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const yearsCount = useCountUp(27, 2000, loaded)
  const satisfactionCount = useCountUp(99, 2000, loaded)

  return (
    <section className="relative min-h-screen overflow-hidden bg-primary">

      {/* Video + overlays */}
      <div ref={videoRef} className="absolute inset-0" style={{ transform: `translateY(${videoOffset}px)` }}>
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          src="/hero/2288155_Elegant_Clean_1920x1080.mp4"
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full bg-accent/[0.06] blur-[120px]" />
        <div className="absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-accent/[0.04] blur-[100px]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
        <div className="hero-grain" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 pb-32 text-center">

        {/* Badge — drops from top */}
        <div className={`${loaded ? "animate-drop-from-top" : "opacity-0"}`} style={{ animationDelay: "80ms" }}>
          <div className="inline-flex items-center gap-3 rounded-full border border-primary-foreground/10 bg-primary-foreground/[0.04] px-5 py-2.5 backdrop-blur-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-accent text-accent" />
              ))}
            </div>
            <div className="h-3.5 w-px bg-primary-foreground/15" />
            <span className="text-xs font-medium tracking-wide text-primary-foreground/60">
              Est. 1999 · Residential &amp; Commercial
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div className={`mt-6 ${loaded ? "animate-cinematic-fade-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
          <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-accent">
            Sical Cleaning · Since 1999 · Los Angeles
          </span>
        </div>

        {/* Headline — clip-path reveal per word */}
        <h1 className="mt-6 max-w-5xl">
          <div className="overflow-hidden">
            <span
              className={`block font-serif text-5xl font-bold leading-[1.05] tracking-tight text-primary-foreground sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] text-balance ${loaded ? "animate-reveal-clip" : "opacity-0"}`}
              style={{ animationDelay: "320ms" }}>
              Complete
            </span>
          </div>
          <div className="overflow-hidden">
            <span
              className={`block font-serif text-5xl font-bold leading-[1.05] tracking-tight text-primary-foreground sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] ${loaded ? "animate-reveal-clip" : "opacity-0"}`}
              style={{ animationDelay: "470ms" }}>
              Maintenance
            </span>
          </div>
          <div className="overflow-hidden mt-2">
            <span
              className={`block font-serif text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] ${loaded ? "animate-reveal-clip" : "opacity-0"}`}
              style={{ animationDelay: "620ms" }}>
              <span className="text-accent">Services</span>
            </span>
          </div>
        </h1>

        <p className={`mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/35 ${loaded ? "animate-cinematic-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "700ms" }}>
          Lilis Complete Cleaning LLC
        </p>

        {/* Horizontal ticker */}
        <div className={`relative mt-10 w-full max-w-3xl overflow-hidden ${loaded ? "animate-cinematic-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "750ms" }}>
          {/* Frame lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent z-10" />
          <div className="flex animate-ticker-ltr items-center gap-10 whitespace-nowrap py-3">
            {[
              "General Cleaning","Carpet Care","Construction Cleanup",
              "Floor Waxing","Janitorial Service","Upholstery",
              "General Cleaning","Carpet Care","Construction Cleanup",
              "Floor Waxing","Janitorial Service","Upholstery",
            ].map((item, i) => (
              <span key={i} className="flex shrink-0 items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-primary-foreground/45">
                <span className="text-accent/50">◆</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className={`mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/55 md:text-lg ${loaded ? "animate-cinematic-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "800ms" }}>
          General cleaning, carpet &amp; upholstery, construction cleanup, floor stripping &amp; waxing, and temporary janitorial service.
        </p>

        {/* CTA Buttons */}
        <div className={`mt-12 flex flex-col items-center gap-4 sm:flex-row ${loaded ? "animate-cinematic-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "950ms" }}>
          <Button size="lg"
            className="group h-14 bg-accent px-10 text-base font-semibold text-accent-foreground hover:bg-accent/90 cursor-pointer shadow-2xl shadow-accent/20 transition-all duration-500 hover:shadow-accent/35 hover:scale-[1.02]"
            asChild>
            <a href="#contact">
              Get a Free Estimate
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button variant="outline" size="lg"
            className="group h-14 border-primary-foreground/10 bg-primary-foreground/[0.03] px-8 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/[0.06] hover:text-primary-foreground cursor-pointer backdrop-blur-sm transition-all duration-500"
            asChild>
            <a href="tel:+12132976853">
              <Phone className="mr-2 h-5 w-5" />
              (213) 297-6853
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className={`mt-16 w-full max-w-2xl ${loaded ? "animate-cinematic-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "900ms" }}>
          <div className="grid grid-cols-3 rounded-2xl border border-primary-foreground/[0.08] bg-primary-foreground/[0.04] backdrop-blur-sm">
            {[
              { value: `${yearsCount}+`, label: "Years · Est. 1999" },
              { value: `${satisfactionCount}%`, label: "Client Satisfaction" },
              { value: "24h", label: "Response Time" },
            ].map((stat, i) => (
              <div key={stat.label} className="relative flex flex-col items-center px-4 py-7">
                {i > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px bg-primary-foreground/[0.08]" />
                )}
                <p
                  className={`font-serif text-4xl font-bold tabular-nums text-primary-foreground md:text-5xl ${loaded ? "animate-counter-pop" : "opacity-0"}`}
                  style={{ animationDelay: `${1000 + i * 100}ms` }}>
                  {stat.value}
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/35 text-center">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 ${loaded ? "animate-cinematic-fade-in" : "opacity-0"}`}
        style={{ animationDelay: "1200ms" }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-primary-foreground/20">Scroll</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-accent/50 to-transparent" />
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-[70px] text-background" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="currentColor" opacity="0.3" />
          <path d="M0,60 C360,20 1080,80 1440,60 L1440,80 L0,80 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  )
}
