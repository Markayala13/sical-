"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { ShieldCheck, Clock, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: ShieldCheck,
    title: "Insured & Bonded Professionals",
    description:
      "Every team member is background-checked, fully insured, and trained to deliver five-star results. Your property is in safe hands.",
    stat: "100%",
    statLabel: "Insured",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Daily, weekly, or monthly plans that fit your needs. Same-day and next-day availability for urgent cleanings.",
    stat: "24/7",
    statLabel: "Available",
  },
  {
    icon: Sparkles,
    title: "Complete Service Range",
    description:
      "From general cleaning to carpet care, construction cleanup, and floor waxing. One call covers everything.",
    stat: "7+",
    statLabel: "Service Types",
  },
]

export function ValueProposition() {
  const { ref: sectionRef, isVisible } = useScrollReveal()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal()

  const FeaturedIcon = benefits[0].icon

  return (
    <section ref={sectionRef} className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className={`text-center ${isVisible ? "animate-cinematic-fade-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why Choose Us</span>
          </div>
          <h2 className="mt-6 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Quality you can trust.
            <br />
            <span className="text-accent">Prices you can afford.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            We deliver excellent quality service at a reasonable price, with the professionalism your property deserves.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div
          ref={cardsRef}
          className="mt-20 grid gap-4 md:grid-cols-[1.7fr_1fr] md:grid-rows-2"
        >
          {/* Featured card — spans 2 rows */}
          <div
            className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:row-span-2 transition-all duration-700 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/[0.07] ${cardsVisible ? "animate-cinematic-slide-right" : "opacity-0"}`}
            style={{ animationDelay: "100ms" }}
          >
            <div className="pointer-events-none absolute -right-2 -top-6 select-none font-serif text-[160px] font-bold leading-none text-accent/[0.05]">
              {benefits[0].stat}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent/0 transition-all duration-500 group-hover:bg-accent" />

            <div className="relative flex h-full flex-col">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 transition-all duration-500 group-hover:bg-accent/15 group-hover:scale-105">
                <FeaturedIcon className="h-8 w-8 text-accent" />
              </div>

              <div className="mt-auto pt-20">
                <div className="mb-5">
                  <p className="font-serif text-6xl font-bold text-foreground">{benefits[0].stat}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{benefits[0].statLabel}</p>
                </div>
                <h3 className="text-2xl font-bold text-foreground">{benefits[0].title}</h3>
                <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">{benefits[0].description}</p>
              </div>
            </div>
          </div>

          {/* Small cards — stacked right */}
          {benefits.slice(1).map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-700 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 ${cardsVisible ? "animate-cinematic-slide-left" : "opacity-0"}`}
                style={{ animationDelay: `${250 + i * 130}ms` }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent/0 transition-all duration-500 group-hover:bg-accent" />

                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-all duration-500 group-hover:bg-accent/15 group-hover:scale-105">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-3xl font-bold text-foreground">{benefit.stat}</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">{benefit.statLabel}</p>
                  </div>
                </div>

                <h3 className="mt-6 text-lg font-bold text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}
