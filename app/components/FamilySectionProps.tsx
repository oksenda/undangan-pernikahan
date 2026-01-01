"use client"
import React from "react"

interface FamilySectionProps {
  title: string
  members: string[]
}

export const FamilySection: React.FC<FamilySectionProps> = ({ title, members }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: '90%',
        maxWidth: '700px',
        padding: '40px',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '30px',
        border: '1px solid rgba(255,255,255,0.1)',
        textAlign: 'center',
        color: 'white'
      }}>
        <h2 style={{ color: '#D4AF37', fontFamily: 'serif', fontSize: '2em', marginBottom: '20px' }}>
          {title}
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2em' }}>
          {members.map((member, i) => (
            <li key={i} style={{ fontSize: '1em' }}>{member}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
