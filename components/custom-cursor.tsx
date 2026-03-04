"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [isFine,  setIsFine]  = useState(false)
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    setMounted(true)
    setIsFine(window.matchMedia("(pointer: fine)").matches)
  }, [])

  /* ── Desktop: dot + trailing ring ── */
  useEffect(() => {
    if (!isFine || !mounted) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let raf: number

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }

    const tick = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12

      dotRef.current!.style.transform  = `translate(${mx - 4}px, ${my - 4}px)`
      ringRef.current!.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`

      raf = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [isFine, mounted])

  /* ── Mobile: tap ripple ── */
  useEffect(() => {
    if (isFine || !mounted) return

    const onTouch = (e: TouchEvent) => {
      const t  = e.touches[0]
      const id = Date.now() + Math.random()
      setRipples(prev => [...prev, { x: t.clientX, y: t.clientY, id }])
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 700)
    }

    window.addEventListener("touchstart", onTouch, { passive: true })
    return () => window.removeEventListener("touchstart", onTouch)
  }, [isFine, mounted])

  if (!mounted) return null

  /* Mobile */
  if (!isFine) {
    return (
      <>
        {ripples.map(r => (
          <div
            key={r.id}
            className="pointer-events-none fixed z-[9999] h-10 w-10 rounded-full border border-accent/60 bg-accent/10 animate-touch-ripple"
            style={{ left: r.x, top: r.y }}
          />
        ))}
      </>
    )
  }

  /* Desktop */
  return (
    <>
      {/* Dot — snaps instantly */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-accent"
        style={{ willChange: "transform" }}
      />
      {/* Ring — trails with lerp */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-9 w-9 rounded-full border border-accent/50"
        style={{ willChange: "transform" }}
      />
    </>
  )
}
