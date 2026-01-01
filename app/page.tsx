"use client"
import { useState } from "react"
import { InputOverlay } from "./components/InputOverlay"
import { WeddingCanvas } from "./components/WeddingCanvas"

export default function HomePage() {
  const [guestName, setGuestName] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    if (guestName.trim() === "") {
      alert("Silakan masukkan nama Anda terlebih dahulu")
      return
    }
    setIsOpen(true)
  }

  return (
    <div style={{ width: '100vw', height: '100vh', background: 'black', overflow: 'hidden' }}>
      {!isOpen && (
        <InputOverlay
          guestName={guestName}
          setGuestName={setGuestName}
          handleOpen={handleOpen}
        />
      )}
      <WeddingCanvas guestName={guestName} isOpen={true} />
    </div>
  )
}
