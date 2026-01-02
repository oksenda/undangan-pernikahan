"use client";
import dynamic from "next/dynamic";
import { Container, Button } from "react-bootstrap";
import MusicPlayer from "./components/MusicPlayer";
import weddingData from "./data/wddingData.json";

const WeddingCanvas = dynamic(() => import("./components/WeddingCanvas"), { ssr: false });

import { useState, useLayoutEffect } from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState("Tamu Kehormatan");

  useLayoutEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to && to.trim() !== "") {
      setGuestName(to); // Aman, tidak ada warning
    }
  }, []);

  return (
    <main style={{ width: "100vw", height: "100vh", background: "black", overflow: "hidden", position: "relative" }}>
      <MusicPlayer isPlaying={isOpen} />

{!isOpen ? (
  <div 
    className="d-flex align-items-center justify-content-center text-center"
    style={{
      position: "absolute",
      inset: 0,
      zIndex: 99,
      background: "radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)",
    }}
  >
    <Container className="animate__animated animate__fadeIn">
      {/* Ornamen Atas */}
      <div className="mb-4" style={{ color: "#D4AF37", fontSize: "1.5rem" }}>
        <i className="bi bi-heart-fill"></i>
      </div>

      <p className="text-uppercase mb-2" style={{ color: "#D4AF37", letterSpacing: "5px", fontSize: "0.8rem", fontWeight: "300" }}>
        The Wedding Of
      </p>
      
      <h1 
        className="mb-4" 
        style={{ 
          color: "#D4AF37", 
          fontFamily: "serif", 
          fontSize: "calc(2.5rem + 2vw)",
          fontWeight: "bold",
          textShadow: "0 0 20px rgba(212, 175, 55, 0.3)"
        }}
      >
        {weddingData.pengantin.pria.namaPanggilan} & {weddingData.pengantin.wanita.namaPanggilan}
      </h1>

      {/* Glassmorphism Card untuk Nama Tamu */}
      <div 
        className="mx-auto my-5 p-4"
        style={{
          maxWidth: "450px",
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "25px",
          border: "1px solid rgba(212, 175, 55, 0.2)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.8)"
        }}
      >
        <p className="text-light opacity-75 mb-3" style={{ fontSize: "0.9rem" }}>
          Kepada Bapak/Ibu/Saudara/i:
        </p>
        <h2 className="mb-4" style={{ color: "white", fontFamily: "serif", fontWeight: "300", letterSpacing: "1px" }}>
          {guestName}
        </h2>
        
        <Button 
          onClick={() => setIsOpen(true)}
          className="px-5 py-2 border-0 shadow-lg"
          style={{
            background: "linear-gradient(45deg, #D4AF37, #F9E498)",
            color: "black",
            borderRadius: "50px",
            fontWeight: "bold",
            fontSize: "1rem",
            letterSpacing: "1px",
            transition: "all 0.3s ease"
          }}
        >
          <i className="bi bi-envelope-open-fill me-2"></i> Buka Undangan
        </Button>
      </div>

      {/* Ornamen Bawah */}
      <div style={{ color: "rgba(212, 175, 55, 0.5)", fontSize: "0.8rem", letterSpacing: "2px" }}>
        #oktech
      </div>
    </Container>
  </div>
) : (
  <div className="animate__animated animate__fadeIn">
     <WeddingCanvas key={guestName} guestName={guestName} />
  </div>
)}
      
      <style jsx global>{`
        .animate__fadeIn {
          animation: fadeIn 1.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </main>
  );
}