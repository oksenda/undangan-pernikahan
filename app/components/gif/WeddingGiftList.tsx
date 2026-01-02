"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GiftCard from "./GiftCard";
import { GifAccount } from "../../data/GifAccount";

export default function WeddingGiftList() {
  return (
    <section 
      className="py-5 text-light mx-2 mx-md-5" 
      style={{ 
         background: "rgba(255, 255, 255, 0.05)",
        minHeight: "100vh",
        borderRadius: "30px",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        margin: "20px",
      }}
    >
      <Container className="px-3 px-md-5"> 
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold fst-italic text-warning mb-3">
            Wedding Gift
          </h2>
          <p className="mx-auto small text-warning opacity-75 fst-italic" style={{ maxWidth: "500px" }}>
            Doa restu Anda adalah hadiah terindah, namun jika ingin berbagi kebahagiaan, Anda dapat melalui:
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {GifAccount.map((acc, i) => (
            <Col xs={12} md={6} lg={4} className="d-flex justify-content-center" key={i}>
              <GiftCard {...acc} />
            </Col>
          ))}
        </Row>

        <div className="mt-5 text-center">
          <p className="text-uppercase text-warning fw-semibold small mb-0" style={{ letterSpacing: "3px" }}>
            Terima Kasih 🤍
          </p>
        </div>
      </Container>
    </section>
  );
}