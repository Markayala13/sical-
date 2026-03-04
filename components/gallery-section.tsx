"use client"

import { useState, useRef } from "react"
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const photos = [
  "/img/WhatsApp Image 2026-03-02 at 7.20.23 PM.jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.20.23 PM (1).jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.20.23 PM (2).jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.20.24 PM.jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.20.25 PM.jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.20.25 PM (1).jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.20.32 PM.jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.20.32 PM (1).jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.20.33 PM.jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.20.51 PM.jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.20.51 PM (1).jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.21.09 PM.jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.21.14 PM.jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.21.15 PM.jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.21.16 PM.jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.21.17 PM.jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.21.17 PM (1).jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.21.18 PM.jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.21.18 PM (1).jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.21.18 PM (2).jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.21.18 PM (3).jpeg",
  "/img/WhatsApp Image 2026-03-02 at 7.21.18 PM (4).jpeg",
]

const videos = [
  "/videos/WhatsApp Video 2026-03-02 at 7.20.21 PM.mp4",
  "/videos/WhatsApp Video 2026-03-02 at 7.20.30 PM.mp4",
  "/videos/WhatsApp Video 2026-03-02 at 7.20.37 PM.mp4",
  "/videos/WhatsApp Video 2026-03-02 at 7.20.39 PM.mp4",
  "/videos/WhatsApp Video 2026-03-02 at 7.20.42 PM.mp4",
  "/videos/WhatsApp Video 2026-03-02 at 7.20.44 PM.mp4",
  "/videos/WhatsApp Video 2026-03-02 at 7.20.47 PM.mp4",
  "/videos/WhatsApp Video 2026-03-02 at 7.20.50 PM.mp4",
  "/videos/WhatsApp Video 2026-03-02 at 7.20.53 PM.mp4",
  "/videos/WhatsApp Video 2026-03-02 at 7.21.05 PM.mp4",
  "/videos/WhatsApp Video 2026-03-02 at 7.21.07 PM.mp4",
  "/videos/WhatsApp Video 2026-03-02 at 7.21.13 PM.mp4",
  "/videos/WhatsApp Video 2026-03-02 at 7.21.15 PM.mp4",
]

type LightboxState = { type: "photo" | "video"; index: number } | null

export function GallerySection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()
  const { ref: photosRef, isVisible: photosVisible } = useScrollReveal()
  const { ref: videosRef, isVisible: videosVisible } = useScrollReveal()

  const [lightbox, setLightbox] = useState<LightboxState>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const mobileTrackRef = useRef<HTMLDivElement>(null)

  function scrollTrack(dir: "prev" | "next") {
    const t = trackRef.current
    if (!t) return
    const item = t.firstElementChild as HTMLElement
    const step = item ? item.offsetWidth + 16 : 320
    t.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" })
  }

  function scrollMobile(dir: "prev" | "next") {
    const t = mobileTrackRef.current
    if (!t) return
    t.scrollBy({ left: dir === "next" ? 200 : -200, behavior: "smooth" })
  }

  function prev() {
    if (!lightbox) return
    const list = lightbox.type === "photo" ? photos : videos
    setLightbox({ ...lightbox, index: (lightbox.index - 1 + list.length) % list.length })
  }

  function next() {
    if (!lightbox) return
    const list = lightbox.type === "photo" ? photos : videos
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % list.length })
  }

  return (
    <section id="gallery" className="relative py-28 md:py-40 overflow-hidden bg-background">
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/[0.03] blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* ── PHOTOS ── */}
        <div ref={headerRef} className={`mx-auto max-w-3xl text-center ${headerVisible ? "animate-cinematic-fade-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Work</span>
          </div>
          <h2 className="mt-8 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Real results, real spaces.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            Every photo is from an actual job. This is what we deliver.
          </p>
        </div>

        <div ref={photosRef} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] grid-flow-dense">
          {photos.map((src, i) => {
            const bentoClass =
              i === 0  ? "col-span-2 row-span-2" :  // grande
              i === 1  ? "row-span-2" :              // alta
              i === 10 ? "col-span-2 row-span-2" :  // grande
              i === 13 ? "col-span-2" :              // ancha
              i === 16 ? "row-span-2" :              // alta
              i === 21 ? "col-span-2" : ""           // ancha
            return (
              <button
                key={src}
                onClick={() => setLightbox({ type: "photo", index: i })}
                className={`group relative overflow-hidden rounded-2xl bg-muted cursor-pointer ${bentoClass} ${photosVisible ? "animate-slide-subtle" : "opacity-0"}`}
                style={{ animationDelay: `${i * 35}ms` }}
              >
                <img
                  src={src}
                  alt={`Work photo ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </button>
            )
          })}
        </div>

        {/* ── VIDEOS ── */}
        <div ref={videosRef} className={`mt-28 ${videosVisible ? "animate-cinematic-fade-up" : "opacity-0"}`}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Live Footage</span>
            </div>
            <h2 className="mt-8 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Team in Action.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              Watch our crew work their magic — no stock footage, just our real team.
            </p>
          </div>

          {/* Carousel — Mobile: 1 per view portrait, Desktop: 3 per row */}
          <div className="mt-12">

            {/* ── MOBILE: single portrait card centered, with arrows ── */}
            <div className="sm:hidden flex items-center gap-3 justify-center">
              <button
                onClick={() => scrollMobile("prev")}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background shadow-md hover:border-accent/40 cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4 text-foreground" />
              </button>
              <div className="w-[200px] overflow-hidden rounded-2xl">
              <div
                ref={mobileTrackRef}
                className="flex snap-x snap-mandatory overflow-x-auto"
                style={{ scrollbarWidth: "none" }}
              >
                {videos.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setLightbox({ type: "video", index: i })}
                    className="group relative flex-shrink-0 w-[200px] aspect-[9/16] snap-start overflow-hidden bg-muted cursor-pointer"
                  >
                    <video
                      src={src}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      muted
                      preload="metadata"
                      onLoadedMetadata={(e) => { (e.target as HTMLVideoElement).currentTime = 1 }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg">
                        <Play className="h-5 w-5 text-primary ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-bold text-white/80 backdrop-blur-sm">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </button>
                ))}
              </div>
              </div>
              <button
                onClick={() => scrollMobile("next")}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background shadow-md hover:border-accent/40 cursor-pointer"
              >
                <ChevronRight className="h-4 w-4 text-foreground" />
              </button>
            </div>

            {/* ── DESKTOP: 3-per-row landscape with nav buttons ── */}
            <div className="hidden sm:block relative">
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
              <div
                ref={trackRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
                style={{ scrollbarWidth: "none" }}
              >
                {videos.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setLightbox({ type: "video", index: i })}
                    className="group relative flex-shrink-0 w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] snap-start h-[220px] overflow-hidden rounded-2xl bg-muted cursor-pointer"
                  >
                    <video
                      src={src}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      muted
                      preload="metadata"
                      onLoadedMetadata={(e) => { (e.target as HTMLVideoElement).currentTime = 1 }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors duration-300">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Play className="h-6 w-6 text-primary ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-bold text-white/80 backdrop-blur-sm">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => scrollTrack("prev")}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background shadow-lg transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:scale-105 cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5 text-foreground" />
              </button>
              <button
                onClick={() => scrollTrack("next")}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background shadow-lg transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:scale-105 cursor-pointer"
              >
                <ChevronRight className="h-5 w-5 text-foreground" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-[70px] text-primary" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="currentColor" opacity="0.3" />
          <path d="M0,60 C360,20 1080,80 1440,60 L1440,80 L0,80 Z" fill="currentColor" />
        </svg>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            className="max-h-[90vh] max-w-5xl w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.type === "photo" ? (
              <img
                src={photos[lightbox.index]}
                alt="Work photo"
                className="max-h-[90vh] max-w-full rounded-xl object-contain shadow-2xl"
              />
            ) : (
              <video
                src={videos[lightbox.index]}
                controls
                autoPlay
                className="max-h-[90vh] max-w-full rounded-xl shadow-2xl"
              />
            )}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium">
            {lightbox.index + 1} / {(lightbox.type === "photo" ? photos : videos).length}
          </div>
        </div>
      )}
    </section>
  )
}
