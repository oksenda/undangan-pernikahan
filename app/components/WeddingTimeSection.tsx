"use client";
import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

interface WeddingTimeSectionProps {
  date: string; // Format: "Senin, 01 Juni 2026"
  time: string; // Format: "10:00 - Selesai"
  targetDate: string; // Format ISO: "2026-06-01T10:00:00" untuk counter
}

export const WeddingTimeSection: React.FC<WeddingTimeSectionProps> = ({ 
  date, 
  time, 
  targetDate,
}) => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section 
      className="w-100 d-flex align-items-center justify-content-center py-5" 
      style={{ minHeight: "100vh", background: "transparent" }}
    >
      <Container className="d-flex justify-content-center px-4">
        <Card
          className="border-0 shadow-lg text-center text-white"
          style={{
            maxWidth: "600px",
            width: "100%",
            padding: "40px 20px",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            borderRadius: "40px",
            border: "1px solid rgba(212, 175, 55, 0.3)",
          }}
        >
          <Card.Body>
            {/* Judul */}
            <h2 
              className="fw-bold mb-4" 
              style={{ color: "#D4AF37", fontFamily: "serif", fontSize: "2.5rem" }}
            >
              Waktu Pernikahan
            </h2>

            {/* Info Tanggal & Jam */}
            <div className="mb-5">
              <div className="mb-3">
                <i className="bi bi-calendar3 d-block mb-2 text-warning fs-3"></i>
                <h5 className="fw-light text-uppercase tracking-widest" style={{ letterSpacing: "3px" }}>Tanggal</h5>
                <p className="fs-4 fw-bold">{date}</p>
              </div>
              <hr className="mx-auto opacity-25" style={{ width: "50%", color: "#D4AF37" }} />
              <div className="mt-3">
                <i className="bi bi-clock d-block mb-2 text-warning fs-3"></i>
                <h5 className="fw-light text-uppercase tracking-widest" style={{ letterSpacing: "3px" }}>Pukul</h5>
                <p className="fs-4 fw-bold">{time}</p>
              </div>
            </div>

            {/* Countdown Counter */}
            <div className="mt-4 pt-4 border-top border-white border-opacity-10">
              <h6 className="text-uppercase mb-4 opacity-75" style={{ letterSpacing: "4px" }}>Menuju Hari Bahagia</h6>
              <Row className="g-2 justify-content-center">
                <Col xs={3}>
                  <div className="p-3 rounded-4" style={{ background: "rgba(212, 175, 55, 0.15)", border: "1px solid rgba(212, 175, 55, 0.2)" }}>
                    <span className="d-block fs-4 fw-bold text-warning">{countdown.days}</span>
                    <small className="text-uppercase opacity-75" style={{ fontSize: "0.6rem" }}>Hari</small>
                  </div>
                </Col>
                <Col xs={3}>
                  <div className="p-3 rounded-4" style={{ background: "rgba(212, 175, 55, 0.15)", border: "1px solid rgba(212, 175, 55, 0.2)" }}>
                    <span className="d-block fs-4 fw-bold text-warning">{countdown.hours}</span>
                    <small className="text-uppercase opacity-75" style={{ fontSize: "0.6rem" }}>Jam</small>
                  </div>
                </Col>
                <Col xs={3}>
                  <div className="p-3 rounded-4" style={{ background: "rgba(212, 175, 55, 0.15)", border: "1px solid rgba(212, 175, 55, 0.2)" }}>
                    <span className="d-block fs-4 fw-bold text-warning">{countdown.minutes}</span>
                    <small className="text-uppercase opacity-75" style={{ fontSize: "0.6rem" }}>Menit</small>
                  </div>
                </Col>
                <Col xs={3}>
                  <div className="p-3 rounded-4" style={{ background: "rgba(212, 175, 55, 0.15)", border: "1px solid rgba(212, 175, 55, 0.2)" }}>
                    <span className="d-block fs-4 fw-bold text-warning">{countdown.seconds}</span>
                    <small className="text-uppercase opacity-75" style={{ fontSize: "0.6rem" }}>Detik</small>
                  </div>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};