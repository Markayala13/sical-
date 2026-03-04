"use client"

import { Home, Brush, Building2, SprayCan, Droplets, HardHat, CheckCircle2, ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Home,
    title: "General Cleaning",
    description: "Complete cleaning services available daily, weekly, or monthly. Tailored to your schedule and property requirements.",
    features: ["Daily / Weekly / Monthly", "Custom checklists", "Dedicated team"],
    accent: "from-accent/10 to-accent/[0.02]",
  },
  {
    icon: Brush,
    title: "Carpet & Upholstery",
    description: "Deep extraction and steam cleaning that removes embedded stains, allergens, and odors from carpets and furniture.",
    features: ["Hot-water extraction", "Stain & odor removal", "Fast dry time"],
    accent: "from-accent/10 to-accent/[0.02]",
  },
  {
    icon: HardHat,
    title: "Construction Cleanup",
    description: "Post-construction cleaning that removes dust, debris, and residue. Move-in ready results, every time.",
    features: ["Debris removal", "Dust & particle cleaning", "Final detail polish"],
    accent: "from-accent/10 to-accent/[0.02]",
  },
  {
    icon: SprayCan,
    title: "Stripping, Sealing & Waxing",
    description: "Complete floor restoration. We strip old finishes, seal, and wax your floors to a brilliant, protective shine.",
    features: ["Complete stripping", "Professional sealing", "High-gloss waxing"],
    accent: "from-accent/10 to-accent/[0.02]",
  },
  {
    icon: Droplets,
    title: "Power & Pressure Washing",
    description: "High-pressure cleaning for exteriors, driveways, sidewalks, parking structures, and building facades.",
    features: ["Building exteriors", "Driveways & lots", "Parking structures"],
    accent: "from-accent/10 to-accent/[0.02]",
  },
  {
    icon: Building2,
    title: "Temporary Janitorial",
    description: "On-demand janitorial staff for events, vacancies, emergencies, or to fill gaps in your regular schedule.",
    features: ["Event cleaning", "Emergency coverage", "Scalable teams"],
    accent: "from-accent/10 to-accent/[0.02]",
  },
]

export function FeaturesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

  return (
    <section id="services" className="relative bg-card py-28 md:py-40 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.012]" style={{
        backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/[0.03] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header — asymmetric editorial */}
        <div ref={headerRef} className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">

          {/* Left: badge + headline */}
          <div className={`relative ${headerVisible ? "animate-cinematic-slide-right" : "opacity-0"}`}>
            {/* Watermark number */}
            <div className="pointer-events-none absolute -left-2 -top-10 select-none font-serif text-[150px] font-bold leading-none text-foreground/[0.04]">
              06
            </div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Services</span>
              </div>
              <h2 className="mt-6 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                Everything<br />your space<br /><span className="text-accent">needs.</span>
              </h2>
            </div>
          </div>

          {/* Right: description + mini stats */}
          <div className={`max-w-xs shrink-0 ${headerVisible ? "animate-cinematic-slide-left" : "opacity-0"}`}
            style={{ animationDelay: "150ms" }}>
            <p className="text-base leading-relaxed text-muted-foreground">
              Six specialized services under one roof. From carpet care to power washing — one call covers it all.
            </p>
            <div className="mt-8 flex items-center gap-6 border-t border-border pt-6">
              {[
                { value: "6", label: "Services" },
                { value: "1", label: "Call needed" },
                { value: "LA", label: "Coverage" },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-6">
                  {i > 0 && <div className="h-8 w-px bg-border" />}
                  <div>
                    <p className="font-serif text-2xl font-bold text-foreground">{s.value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-gradient-to-r from-accent/20 via-border to-transparent" />

        {/* Services Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  const { ref, isVisible } = useScrollReveal()
  const animClass = index % 2 === 0 ? "animate-cinematic-slide-right" : "animate-cinematic-slide-left"

  return (
    <div
      ref={ref}
      className={`group gradient-border-card rounded-2xl transition-all duration-700 ${
        isVisible ? animClass : "opacity-0"
      }`}
      style={{ animationDelay: `${(index % 3) * 90 + 60}ms` }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-background p-8 h-full">
      {/* Hover gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 transition-opacity duration-700 group-hover:opacity-100`} />

      <div className="relative">
        {/* Icon */}
        <div className="mb-7 flex items-center justify-between">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/15 bg-accent/[0.06] transition-all duration-500 group-hover:border-accent/25 group-hover:bg-accent/10 group-hover:scale-110">
            <service.icon className="h-8 w-8 text-accent" />
          </div>
          <span className={`text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40 transition-colors duration-500 group-hover:text-accent/50 ${isVisible ? "animate-counter-pop" : "opacity-0"}`}
            style={{ animationDelay: `${(index % 3) * 90 + 180}ms` }}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Text */}
        <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>

        {/* Features */}
        <ul className="mt-6 flex flex-col gap-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-[13px] text-foreground/70">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent/60" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-7">
          <Button variant="ghost" size="sm" className="cursor-pointer gap-2 px-0 text-xs font-bold uppercase tracking-wider text-accent hover:bg-transparent hover:text-accent/80 transition-all duration-300" asChild>
            <a href="tel:+12132976853">
              Request Quote
              <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </div>
  )
}
