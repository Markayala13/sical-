"use client"

import { Phone, Users, Sparkles, ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Call or Request a Quote",
    description:
      "Reach us at (213) 297-6853 or fill out our form. Tell us about your space, and we'll provide a free estimate within hours.",
    detail: "Free estimates",
  },
  {
    number: "02",
    icon: Users,
    title: "We Send Our Best Team",
    description:
      "A fully insured, trained crew arrives on time with professional-grade equipment and all necessary supplies.",
    detail: "Always on time",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Enjoy Spotless Results",
    description:
      "Walk into a perfectly maintained space. If anything isn't right, we come back and fix it. 100% satisfaction guaranteed.",
    detail: "100% guaranteed",
  },
]

export function HowItWorks() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal()
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal()

  return (
    <section id="how-it-works" className="relative bg-primary py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-accent/[0.03] blur-3xl" />
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div ref={headerRef} className={`text-center ${headerVisible ? "animate-cinematic-fade-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              How It Works
            </span>
          </div>
          <h2 className="mt-6 font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl text-balance">
            Three simple steps to a
            <br />
            <span className="text-accent">cleaner space.</span>
          </h2>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="relative mt-20">
          {/* Connector line */}
          <div className="absolute top-[88px] left-[18%] right-[18%] hidden md:block" style={{ height: "2px" }}>
            {/* Track */}
            <div className="absolute inset-0 rounded-full bg-primary-foreground/[0.07]" />
            {/* Fill */}
            <div
              className={`absolute inset-0 rounded-full bg-gradient-to-r from-accent/60 via-accent to-accent/60 ${stepsVisible ? "animate-line-fill" : "scale-x-0 opacity-0"}`}
              style={{ animationDelay: "500ms" }}
            />
            {/* Traveling glow */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 h-8 w-20 -translate-x-1/2 rounded-full bg-accent/40 blur-lg ${stepsVisible ? "animate-dot-travel" : "opacity-0"}`}
              style={{ animationDelay: "500ms" }}
            />
            {/* Node between step 1–2 */}
            <div
              className={`absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-accent shadow-lg shadow-accent/50 ring-4 ring-accent/20 ${stepsVisible ? "animate-counter-pop" : "opacity-0"}`}
              style={{ animationDelay: "1000ms" }}
            />
            {/* Node between step 2–3 */}
            <div
              className={`absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-accent shadow-lg shadow-accent/50 ring-4 ring-accent/20 ${stepsVisible ? "animate-counter-pop" : "opacity-0"}`}
              style={{ animationDelay: "1200ms" }}
            />
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`group relative text-center ${
                  stepsVisible ? "animate-cinematic-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${300 + index * 200}ms` }}
              >
                {/* Icon circle */}
                <div className="relative mx-auto mb-8">
                  <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent/20 bg-primary transition-all duration-700 group-hover:border-accent/40 group-hover:shadow-lg group-hover:shadow-accent/10">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 transition-colors duration-500 group-hover:bg-accent/20 ${stepsVisible ? "animate-icon-spring" : "opacity-0"}`}
                      style={{ animationDelay: `${450 + index * 200}ms` }}>
                      <step.icon className="h-7 w-7 text-accent" />
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground shadow-lg shadow-accent/30">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-primary-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 mx-auto max-w-xs leading-relaxed text-primary-foreground/50">
                  {step.description}
                </p>

                <div className="mt-5 inline-flex rounded-full border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-1.5 transition-all duration-500 group-hover:border-accent/20 group-hover:bg-accent/10">
                  <span className="text-xs font-semibold text-primary-foreground/60 group-hover:text-accent transition-colors duration-500">
                    {step.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className={`mt-16 text-center ${ctaVisible ? "animate-cinematic-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "200ms" }}
        >
          <Button
            size="lg"
            className="group h-14 bg-accent px-12 text-base font-semibold text-accent-foreground hover:bg-accent/90 cursor-pointer shadow-2xl shadow-accent/20 transition-all duration-500 hover:shadow-accent/30 hover:scale-[1.03]"
            asChild
          >
            <a href="tel:+12132976853">
              Call (213) 297-6853
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
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
