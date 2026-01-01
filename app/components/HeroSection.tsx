"use client"
import React, { useEffect, useState } from "react"

interface HeroSectionProps {
  guestName: string
  weddingDate?: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  guestName,
  weddingDate = "2026-06-01T10:00:00"
}) => {

  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 })

  useEffect(() => {
    const target = new Date(weddingDate).getTime()
    const timer = setInterval(() => {
      const diff = target - Date.now()
      if (diff <= 0) return clearInterval(timer)

      setCountdown({
        days: Math.floor(diff / (1000*60*60*24)),
        hours: Math.floor((diff / (1000*60*60)) % 24),
        minutes: Math.floor((diff / (1000*60)) % 60)
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [weddingDate])

  return (
    <div style={{ 
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      
      {/* CARD — width mengikuti konten */}
      <div style={{
        width: "fit-content",
        maxWidth: 480,
        textAlign: "center",
        padding: "28px 22px",
        borderRadius: 26,
        border: "1px solid rgba(212,175,55,.35)",
        background: "rgba(0,0,0,.55)",
        backdropFilter: "blur(8px)",
        color: "white"
      }}>
        
        <div style={{ opacity:.7, marginBottom: 12, letterSpacing: 4 }}>
          ✦ ✦ ✦
        </div>

        <p style={{ fontSize: "1.1em", letterSpacing: ".35em", color: "#D4AF37" }}>
          WELCOME
        </p>

        <h2 style={{ fontSize: "2.2em", margin: "10px 0" }}>
          {guestName}
        </h2>

        <p style={{ opacity:.85 }}>
          Undangan Pernikahan<br/>
          <span style={{ color: "#D4AF37" }}>Kiki & Nia</span>
        </p>

        <p style={{ maxWidth: 360, margin: "14px auto", opacity:.7, fontStyle: "italic" }}>
          “Dan di antara tanda-tanda-Nya ialah Dia menciptakan untukmu pasangan…”
        </p>

        <div style={{ display:"flex", gap:14, justifyContent:"center", marginTop: 10 }}>
          <div><strong>{countdown.days}</strong><div style={{opacity:.7}}>Hari</div></div>
          <div><strong>{countdown.hours}</strong><div style={{opacity:.7}}>Jam</div></div>
          <div><strong>{countdown.minutes}</strong><div style={{opacity:.7}}>Menit</div></div>
        </div>
        <div style={{ opacity:.7, marginTop: 18, letterSpacing: 4 }}>
          ✦ ✦ ✦
        </div>
      </div>
    </div>
  )
}
