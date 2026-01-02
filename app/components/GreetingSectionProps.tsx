"use client";
import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import weddingData from "../data/wddingData.json";
import { p } from "framer-motion/client";

interface GreetingSectionProps {
  guestName: string;
}
const { pengantin } = weddingData;

export const GreetingSection: React.FC<GreetingSectionProps> = ({ guestName }) => {
  return (
    <section 
      className="w-100 d-flex align-items-center justify-content-center"
      style={{ 
        minHeight: "100vh",
        background: "transparent" 
      }}
    >
      <Container className="d-flex justify-content-center px-4">
        <Card
          className="border-0 shadow-lg text-center"
          style={{
            maxWidth: "600px",
            width: "100%",
            padding: "30px 20px",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            borderRadius: "30px",
            border: "1px solid rgba(212, 175, 55, 0.3)",
          }}
        >
          <Card.Body className="text-light">
            
            {/* AREA FOTO PROFIL BULAT */}
            <Row className="justify-content-center align-items-center mb-4 g-3">
              <Col xs="auto">
                <div style={{
                  padding: "4px",
                  border: "1.5px solid #D4AF37",
                  borderRadius: "50%",
                  display: "inline-block"
                }}>
                  <Image 
                    src={pengantin.pria.foto} 
                    roundedCircle 
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    alt="Mempelai Pria"
                  />
                </div>
              </Col>
              
              <Col xs="auto">
                <span style={{ fontSize: "1.5rem", color: "#D4AF37", fontFamily: "serif" }}>{pengantin.pria.namaPanggilan} & {pengantin.wanita.namaPanggilan}</span>
              </Col>

              <Col xs="auto">
                <div style={{
                  padding: "4px",
                  border: "1.5px solid #D4AF37",
                  borderRadius: "50%",
                  display: "inline-block"
                }}>
                  <Image 
                    src={pengantin.wanita.foto}
                    roundedCircle 
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    alt="Mempelai Wanita"
                  />
                </div>
              </Col>
            </Row>

            <h2 
              className="fw-bold mb-4" 
              style={{ 
                color: "#D4AF37", 
                fontFamily: "serif", 
                fontSize: "2.2rem",
                letterSpacing: "1px"
              }}
            >
              Salam Hormat
            </h2>

            <div 
              className="fst-italic opacity-90" 
              style={{ 
                fontSize: "1.1rem", 
                lineHeight: "1.8",
                color: "#f8f9fa" 
              }}
            >
              <p className="mb-0">
                &quot;Keluarga besar kami sangat menghargai kehadiran 
                <span className="d-block fw-bold my-2" style={{ color: "#D4AF37", fontSize: "1.3rem" }}>
                  {guestName || "Tamu Undangan"}
                </span> 
                untuk menjadi bagian dari kebahagiaan kami.&quot;
              </p>
            </div>

            <div className="mt-4">
               <p className="mb-0" style={{ letterSpacing: "2px", fontSize: "0.8rem", color: "#D4AF37", textTransform: "uppercase" }}>
                 Kami yang berbahagia,
               </p>
               <h4 className="mt-2" style={{ fontFamily: "serif", color: "white" }}>{pengantin.pria.namaLengkap} & {pengantin.wanita.namaLengkap}</h4>
            </div>

            <div 
              className="mx-auto mt-4" 
              style={{ 
                width: "60px", 
                height: "2px", 
                background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" 
              }} 
            />
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};