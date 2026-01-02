"use client";
import React from "react";
import { Container, Card, Button } from "react-bootstrap";

export const LocationSection: React.FC = () => {
  return (
    <section className="w-100 vh-100 d-flex align-items-center justify-content-center bg-transparent">
      <Container className="d-flex justify-content-center px-3">
        <Card
          className="border-0 shadow-lg text-center text-white"
          style={{
            maxWidth: "800px",
            width: "100%",
            padding: "30px",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            borderRadius: "30px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Card.Body className="p-0">
            {/* Judul dengan style Bootstrap */}
            <h2 
              className="mb-4" 
              style={{ color: '#D4AF37', fontFamily: 'serif', fontSize: '2.2rem' }}
            >
              Lokasi Acara
            </h2>

            {/* Kontainer Peta - Tetap menggunakan iframe & filter Anda */}
            <div 
              className="mb-4 mx-auto shadow-lg"
              style={{ 
                width: '100%', 
                height: '350px', 
                borderRadius: '20px', 
                overflow: 'hidden',
                filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)',
                border: '1px solid rgba(212,175,55,0.3)'
              }}
            >
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

            {/* Informasi Lokasi - Data Tidak Berubah */}
            <div className="mt-3">
              <h4 className="fw-bold mb-1" style={{ fontSize: '1.4rem' }}>Aua Kuniang</h4>
              <p className="opacity-75 mb-4" style={{ fontSize: '0.95rem' }}>
                Kec. Pasaman, Kabupaten Pasaman Barat, Sumatera Barat
              </p>

              {/* Tombol dengan komponen Button React Bootstrap */}
              <Button 
                href="https://www.google.com/maps?q=0.1171486950210941, 99.88443319856763" 
                target="_blank" 
                rel="noopener noreferrer"
                variant="outline-warning"
                className="px-4 py-2"
                style={{
                  backgroundColor: '#D4AF37',
                  color: 'black',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  border: 'none',
                  fontSize: '0.85rem',
                  letterSpacing: '1px'
                }}
              >
                BUKA DI GOOGLE MAPS
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};