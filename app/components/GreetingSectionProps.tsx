"use client"
import React from "react"

interface GreetingSectionProps {
  guestName: string
}

export const GreetingSection: React.FC<GreetingSectionProps> = ({ guestName }) => (
  <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{
      maxWidth: '500px',
      padding: '40px',
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(15px)',
      borderRadius: '30px',
      border: '1px solid rgba(212,175,55,0.3)',
      textAlign: 'center',
      color: 'white'
    }}>
      <h2 style={{ color: '#D4AF37', fontFamily: 'serif', fontSize: '2em', marginBottom: '20px' }}>Salam Hormat</h2>
<p>
  {`"Keluarga besar kami sangat menghargai kehadiran Bapak/Ibu/Saudara/i ${guestName} untuk menjadi bagian dari kebahagiaan kami."`}
</p>

    </div>
  </div>
)
