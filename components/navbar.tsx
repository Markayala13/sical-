"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#how-it-works" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${scrolled ? "pt-3 px-4 sm:px-6" : ""}`}>

      {/* Scroll progress bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-accent/60 via-accent to-accent/60 transition-all duration-75 ease-linear"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Pill / full-width container */}
      <div className={`mx-auto transition-all duration-700 ease-out ${scrolled ? "max-w-5xl" : "max-w-7xl"}`}>
        <div className={`flex items-center justify-between transition-all duration-700 ease-out ${
          scrolled
            ? "rounded-2xl border border-white/[0.08] bg-primary/75 backdrop-blur-xl px-5 py-3 shadow-2xl shadow-black/30 ring-1 ring-white/[0.04]"
            : "px-6 py-4 border-b border-transparent"
        }`}>

          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className={`font-serif font-bold tracking-tight text-primary-foreground transition-all duration-500 ${scrolled ? "text-lg" : "text-xl"}`}>
              Lilis <span className="text-accent">Complete Cleaning</span> <span className="text-primary-foreground/50 font-normal text-sm">LLC</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover-underline rounded-lg px-4 py-2 text-sm font-medium text-primary-foreground/65 hover:text-primary-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="tel:+12132976853"
              className="flex items-center gap-2 text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/10">
                <Phone className="h-3.5 w-3.5 text-accent" />
              </div>
              (213) 297-6853
            </a>
            <Button
              className="bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer gap-2 font-semibold shadow-lg shadow-accent/20 transition-all duration-500 hover:shadow-accent/30 hover:scale-[1.02]"
              asChild
            >
              <a href="tel:+12132976853">
                Free Estimate
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden cursor-pointer text-primary-foreground transition-colors duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t bg-card/98 backdrop-blur-2xl lg:hidden transition-all duration-500 ease-out ${
          mobileOpen ? "max-h-[28rem] opacity-100 border-border/50" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-5" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 border-t border-border pt-5">
            <a
              href="tel:+12132976853"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-foreground"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                <Phone className="h-4 w-4 text-accent" />
              </div>
              (213) 297-6853
            </a>
            <Button className="mt-3 w-full bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer gap-2 font-semibold h-12">
              Get Free Estimate
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
