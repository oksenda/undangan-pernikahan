"use client"
import React from "react"

interface WeddingTimeSectionProps {
  date: string
  time: string
}

export const WeddingTimeSection: React.FC<WeddingTimeSectionProps> = ({ date, time }) => {
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: '90%',
        maxWidth: '600px',
        padding: '40px',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '30px',
        border: '1px solid rgba(255,255,255,0.1)',
        textAlign: 'center',
        color: 'white'
      }}>
        <h2 style={{ color: '#D4AF37', fontFamily: 'serif', fontSize: '2em', marginBottom: '20px' }}>Waktu Pernikahan</h2>
        <p style={{ fontSize: '1.2em', marginBottom: '10px' }}>Tanggal: {date}</p>
        <p style={{ fontSize: '1.2em' }}>Pukul: {time}</p>
      </div>
    </div>
  )
}
