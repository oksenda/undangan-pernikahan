"use client";
import React, { useEffect, useState } from "react";
import { Container, Card, Carousel, Row, Col } from "react-bootstrap";
import weddingData from "../data/wddingData.json";

interface HeroSectionProps {
  guestName: string;
  weddingDate?: string;
  cardImages?: string[];
  pria?: object;
  wanita?: object;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  guestName,
  weddingDate = weddingData.acara.time,
  cardImages = weddingData.assets.cardImages
}) => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });
    const eventDate = new Date(weddingDate).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

    const pria = weddingData.pengantin.pria;
  const wanita = weddingData.pengantin.wanita;
  useEffect(() => {
    const target = new Date(weddingDate).getTime();
    const timer = setInterval(() => {
      const diff = target - Date.now();
      if (diff <= 0) return clearInterval(timer);

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section className="w-100 vh-100 d-flex align-items-center justify-content-center bg-transparent">
      <Container className="d-flex justify-content-center p-0">
        <Card
          className="border-0 shadow-lg overflow-hidden text-white position-relative mx-2"
          style={{
            maxWidth: "550px", // Diperbesar dari 420px
            width: "100%", 
            marginTop: "20px",
            borderRadius: "40px",
            minHeight: "600px",
          }}
        >
          {/* CAROUSEL FADE SEBAGAI BACKGROUND KARTU */}
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
            <Carousel fade controls={false} indicators={false} interval={3500} className="h-100">
              {cardImages.map((img, idx) => (
                <Carousel.Item key={idx} className="h-100">
                  <div
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "800px",
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {/* KONTEN DI DALAM KARTU */}
          <Card.Body 
            className="position-relative d-flex flex-column align-items-center justify-content-between text-center p-5" 
            style={{ zIndex: 1 }}
          >
            <div className="w-100">
              <div className="mb-3 opacity-75 fs-5" style={{ letterSpacing: "12px" }}>✦ ✦ ✦</div>
              
              <p className="fw-light mb-2" style={{ letterSpacing: "6px", color: "#D4AF37", fontSize: "0.9rem" }}>
                THE WEDDING OF
              </p>

              <h1 className="display-4 fw-bold mb-4" style={{ fontFamily: "serif", color: "#D4AF37" }}>
                {pria.namaPanggilan} & {wanita.namaPanggilan}
              </h1>
            </div>

            <div className="my-4">
              <p className="mb-1 opacity-75 fs-6">Kepada Bapak/Ibu/Saudara/i:</p>
              <h2 className="display-6 fw-bold">{guestName}</h2>
            </div>

            <div className="w-100">
              <p className="small opacity-75 mb-4 px-3 fst-italic" style={{ lineHeight: "1.8" }}>
                “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri...”
              </p>
              <div className="mb-4 text-warning">
                <p className="mb-0 fw-bold" style={{ letterSpacing: "2px", fontSize: "1.1rem" }}>
                  {eventDate}
                </p>
                <small className="opacity-75">Akad & Resepsi Pernikahan</small>
              </div>
              <Row className="w-100 g-0 py-4 border-top border-bottom border-white border-opacity-25 mx-auto">
                <Col>
                  <div className="fw-bold fs-2">{countdown.days}</div>
                  <small className="opacity-50 text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: "2px" }}>Hari</small>
                </Col>
                <Col className="border-start border-end border-white border-opacity-25">
                  <div className="fw-bold fs-2">{countdown.hours}</div>
                  <small className="opacity-50 text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: "2px" }}>Jam</small>
                </Col>
                <Col>
                  <div className="fw-bold fs-2">{countdown.minutes}</div>
                  <small className="opacity-50 text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: "2px" }}>Menit</small>
                </Col>
              </Row>

              <div className="mt-4 opacity-75 fs-5" style={{ letterSpacing: "12px" }}>✦ ✦ ✦</div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};