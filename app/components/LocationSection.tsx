"use client"
import React from "react"

export const LocationSection: React.FC = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: '90%',
        maxWidth: '800px',
        padding: '30px',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '30px',
        border: '1px solid rgba(255,255,255,0.1)',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#D4AF37', fontFamily: 'serif', fontSize: '2em', marginBottom: '20px' }}>
          Lokasi Acara
        </h2>

        {/* Kontainer Peta */}
        <div style={{ 
          width: '100%', 
          height: '350px', 
          borderRadius: '20px', 
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)'
        }}>
          <iframe
            src="https://www.google.com/maps?q=0.1171486950210941,99.88443319856763&hl=id&z=17&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Informasi Lokasi */}
        <div style={{ marginTop: '20px', color: 'white' }}>
          <p style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Aua Kuniang</p>
          <p style={{ opacity: 0.7, fontSize: '0.9em' }}>
            Kec. Pasaman, Kabupaten Pasaman Barat, Sumatera Barat
          </p>

          <a 
            href="https://www.google.com/maps?q=0.1171486950210941, 99.88443319856763" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '15px',
              padding: '10px 20px',
              background: '#D4AF37',
              color: 'black',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '0.8em'
            }}
          >
            BUKA DI GOOGLE MAPS
          </a>
        </div>
      </div>
    </div>
  )
}
