"use client"
import dynamic from "next/dynamic"

// Dynamic import WeddingCanvas, ssr: false penting
const WeddingCanvas = dynamic(() => import("./components/WeddingCanvas"), { ssr: false })

export default function HomePage() {
  const guestName = (() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const to = params.get("to")
      if (to && to.trim() !== "") return to
    }
    return "Tamu Kehormatan"
  })()

  return (
    <div style={{ width: "100vw", height: "100vh", background: "black", overflow: "hidden" }}>
      <WeddingCanvas key={guestName} guestName={guestName} />
    </div>
  )
}
