"use client"
import React from "react"

interface GallerySectionProps {
  images: string[]
}

export const GallerySection: React.FC<GallerySectionProps> = ({ images }) => {
  return (
    <div style={{ 
      width: '100%', 
      padding: '40px 0', // Padding atas bawah saja
      background: 'rgba(0,0,0,0.8)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h2 style={{
        color: '#D4AF37',
        fontFamily: 'serif',
        fontSize: '1.8em',
        textAlign: 'center',
        marginBottom: '30px'
      }}>
        Galeri Pasangan
      </h2>

      {/* Container Utama: Membatasi lebar agar tidak mentok pinggir HP */}
      <div style={{
        width: '90%',        // Memberi jarak 5% kiri dan 5% kanan di HP
        maxWidth: '1000px',  // Batas lebar maksimal di laptop
        display: 'grid',
        /* Perbaikan: minmax diturunkan ke 140px agar muat 2 kolom di HP */
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '15px',         // Jarak antar gambar diperkecil sedikit agar manis
      }}>
        {images.map((img, i) => (
          <div key={i} style={{
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
            aspectRatio: '3/4', // Mengunci rasio gambar agar seragam (seperti portrait HP)
            background: '#222'
          }}>
            <img
              src={img}
              alt={`Gallery ${i}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // Gambar akan memenuhi box tanpa distorsi
                display: 'block'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}