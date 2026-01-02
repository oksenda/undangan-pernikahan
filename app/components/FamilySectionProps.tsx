"use client";
import { i } from "framer-motion/client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import weddingData from "../data/wddingData.json";

interface FamilySectionProps {
  title: string;
  maleMembers: string[];  
  femaleMembers: string[]; 
}

export const FamilySection: React.FC<FamilySectionProps> = ({ title, maleMembers, femaleMembers }) => {
  return (
    <section 
      className="py-5 d-flex align-items-center" 
      style={{ 
        background: "var(--glass-bg)",
        minHeight: "100vh",
        borderRadius: "30px",
        margin: "20px",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.1)"
      }}
    >
      <Container className="text-center">
        {/* BAGIAN KATA PENGHORMATAN */}
        <div className="mb-5 px-3">
          <h3 
            className="mb-4" 
            style={{ 
              fontFamily: "serif", 
              color: "#D4AF37", 
              fontStyle: "italic",
              fontSize: "1.8rem" 
            }}
          >
            Atas Kehadiran & Doa Restunya
          </h3>
          <p 
            className="mx-auto opacity-75" 
            style={{ maxWidth: "800px", lineHeight: "1.8", fontSize: "1.05rem" }}
          >
            Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila 
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai. 
            Atas kehadiran serta doa restunya, kami ucapkan terima kasih.
          </p>
        </div>

        {/* NAMA PENGANTIN TENGAH */}
        <div className="my-5">
          <p className="text-uppercase mb-2" style={{ letterSpacing: "3px", color: "#D4AF37", fontSize: "0.8rem" }}>
            Sampai Jumpa di Hari Bahagia Kami,
          </p>
          <h2 
            className="display-4 fw-bold" 
            style={{ fontFamily: "serif", color: "#D4AF37" }}
          >
            {weddingData.pengantin.pria.namaPanggilan} & {weddingData.pengantin.wanita.namaPanggilan}
          </h2>
        </div>

        {/* DAFTAR KELUARGA BESAR */}
        <div className="mt-5">
          <h5 
            className="mb-5 fw-bold text-uppercase" 
            style={{ color: "#D4AF37", letterSpacing: "4px", fontSize: "1.1rem" }}
          >
            {title} :
          </h5>
          
          <Row className="justify-content-center g-0">
            {/* KOLOM KELUARGA PRIA */}
            <Col xs={12} md={5} className="text-center text-md-end pe-md-5 mb-4 mb-md-0" style={{ borderRight: "1px solid rgba(212, 175, 55, 0.2)" }}>
              <h6 className="fw-bold mb-3 text-warning text-uppercase" style={{ letterSpacing: "2px", fontSize: "0.9rem" }}>
                Keluarga Pria
              </h6>
              <ul className="list-unstyled opacity-75" style={{ lineHeight: "2.2", fontSize: "1rem" }}>
                {maleMembers.map((member, i) => (
                  <li key={i}>{member}</li>
                ))}
              </ul>
            </Col>

            {/* KOLOM KELUARGA WANITA */}
            <Col xs={12} md={5} className="text-center text-md-start ps-md-5">
              <h6 className="fw-bold mb-3 text-warning text-uppercase" style={{ letterSpacing: "2px", fontSize: "0.9rem" }}>
                Keluarga Wanita
              </h6>
              <ul className="list-unstyled opacity-75" style={{ lineHeight: "2.2", fontSize: "1rem" }}>
                {femaleMembers.map((member, i) => (
                  <li key={i}>{member}</li>
                ))}
              </ul>
            </Col>
          </Row>

          <p className="mt-5 opacity-50 fst-italic" style={{ fontSize: "0.9rem" }}>
            Dan seluruh keluarga lainnya.
          </p>
        </div>

        {/* ORNAMEN AKHIR */}
        <div className="mt-5 pt-3 opacity-50" style={{ letterSpacing: "12px", color: "#D4AF37" }}>
          ✦ ✦ ✦
        </div>
      </Container>
    </section>
  );
};