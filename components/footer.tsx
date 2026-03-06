import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react"

const services = [
  { label: "General Cleaning",        href: "#services" },
  { label: "Carpet & Upholstery",     href: "#services" },
  { label: "Construction Cleanup",    href: "#services" },
  { label: "Floor Stripping & Waxing",href: "#services" },
  { label: "Janitorial Service",      href: "#services" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary">

      {/* Thin separator from FinalCTA */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />

      {/* Background depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-accent/[0.03] blur-[100px]" />

      {/* ── Brand display ── */}
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-14 border-b border-primary-foreground/[0.06]">
        <a href="#" className="group block text-center">
          <p className="font-serif font-bold leading-none tracking-tighter text-primary-foreground text-[clamp(3.5rem,12vw,9rem)] transition-opacity duration-500 group-hover:opacity-80">
            SICAL
          </p>
          <p className="font-serif font-bold leading-none tracking-tighter text-accent text-[clamp(3.5rem,12vw,9rem)] -mt-[0.08em] transition-opacity duration-500 group-hover:opacity-80">
            CLEANING
          </p>
        </a>
        <p className="mt-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/25">
          Complete Maintenance · Greater Los Angeles
        </p>
      </div>

      {/* ── Main grid ── */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">

        {/* Contact */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary-foreground/30">Contact</h4>
          <div className="mt-7 flex flex-col gap-5">
            <a
              href="tel:+12132976853"
              className="group flex items-center gap-3 text-sm font-semibold text-primary-foreground transition-colors hover:text-accent"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
                <Phone className="h-4 w-4 text-accent" />
              </div>
              (213) 297-6853
            </a>
            <a
              href="mailto:leoscal716@gmail.com"
              className="group flex items-center gap-3 text-sm text-primary-foreground/40 transition-colors hover:text-primary-foreground/70"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
                <Mail className="h-4 w-4 transition-colors group-hover:text-accent" />
              </div>
              leoscal716@gmail.com
            </a>
            <span className="flex items-center gap-3 text-sm text-primary-foreground/40">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary-foreground/10 bg-primary-foreground/5">
                <MapPin className="h-4 w-4 text-primary-foreground/30" />
              </div>
              Los Angeles, CA &amp; surrounding areas
            </span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary-foreground/30">Services</h4>
          <ul className="mt-7 flex flex-col gap-3">
            {services.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="group inline-flex items-center gap-1 text-sm text-primary-foreground/45 transition-colors hover:text-primary-foreground/80"
                >
                  {s.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA card */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary-foreground/30">Get Started</h4>
          <div className="mt-7 rounded-2xl border border-accent/20 bg-accent/[0.05] p-7 backdrop-blur-sm">
            <p className="text-sm leading-relaxed text-primary-foreground/50">
              Ready for a spotless space? Call us for a free estimate — no commitment.
            </p>
            <a
              href="tel:+12132976853"
              className="group mt-6 flex items-center gap-3 transition-colors hover:text-accent"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 ring-1 ring-accent/30 transition-all duration-300 group-hover:bg-accent/25 group-hover:scale-110">
                <Phone className="h-4 w-4 text-accent" />
              </div>
              <span className="font-serif text-xl font-bold text-primary-foreground transition-colors group-hover:text-accent">
                (213) 297-6853
              </span>
            </a>
            <div className="mt-5 h-px bg-gradient-to-r from-accent/20 to-transparent" />
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/25">
              Free estimate · Same-day available
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative border-t border-primary-foreground/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-xs text-primary-foreground/20">
            © {new Date().getFullYear()} Sical Cleaning. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-primary-foreground/20 transition-colors hover:text-primary-foreground/50"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
