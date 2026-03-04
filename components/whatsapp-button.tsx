"use client"

import { useEffect, useState } from "react"

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <a
      href="https://wa.me/12132976853"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-6 right-6 z-[200] flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ backgroundColor: "#25D366" }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: "#25D366" }} />
      {/* WhatsApp icon */}
      <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.74.7 5.35 2.03 7.64L.5 31.5l8.1-2.01A15.45 15.45 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.4a13.3 13.3 0 01-6.8-1.87l-.49-.29-5.06 1.26 1.34-4.87-.32-.5A13.27 13.27 0 012.6 16C2.6 9.1 8.1 3.6 16 3.6S29.4 9.1 29.4 16 23.9 28.9 16 28.9zm7.3-9.97c-.4-.2-2.36-1.16-2.72-1.3-.37-.13-.63-.2-.9.2s-1.03 1.3-1.27 1.56c-.23.27-.46.3-.86.1-.4-.2-1.68-.62-3.2-1.97-1.18-1.05-1.98-2.35-2.21-2.74-.23-.4-.02-.61.17-.81.18-.18.4-.46.6-.7.2-.23.27-.4.4-.66.14-.27.07-.5-.03-.7-.1-.2-.9-2.17-1.23-2.97-.32-.78-.65-.67-.9-.68h-.76c-.27 0-.7.1-1.06.5-.37.4-1.4 1.37-1.4 3.33s1.43 3.86 1.63 4.13c.2.26 2.82 4.3 6.83 6.03.96.41 1.7.66 2.28.84.96.3 1.83.26 2.52.16.77-.12 2.36-.97 2.7-1.9.33-.93.33-1.73.23-1.9-.1-.17-.36-.27-.76-.47z"/>
      </svg>
    </a>
  )
}
