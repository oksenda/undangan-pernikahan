"use client";
import React, { useState, useEffect } from "react";
import { Container, Form, Button, Card, Row, Col, Badge } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const API_URL = "https://script.google.com/macros/s/AKfycbzDEfQHcdvzP0jCghTeEofYoAlh4PEvXOSJusmEbs460SxNzFEdmtfUbCUWv3WgGAopHw/exec";

export const RSVPSection: React.FC = () => {
  const [formData, setFormData] = useState({ nama: "", kehadiran: "Hadir", ucapan: "" });
  const [comments, setComments] = useState<{ nama: string; kehadiran: string; ucapan: string }[]>([]);
  const [loading, setLoading] = useState(false);

  // Hitung Statistik
  const totalHadir = comments.filter(c => c.kehadiran === "Hadir").length;
  const totalAbsen = comments.filter(c => c.kehadiran === "Tidak Hadir").length;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // Filter pesan yang null atau kosong
        const filteredData = data.filter((item: any) => item.ucapan && item.ucapan.trim() !== "");
        setComments(filteredData.reverse());
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
      });

      MySwal.fire({
        title: <span style={{ color: "#D4AF37", fontFamily: "serif" }}>Terima Kasih!</span>,
        html: <i style={{ color: "white" }}>Konfirmasi dan doa restu Anda telah kami terima.</i>,
        icon: "success",
        background: "#1a1a1a",
        confirmButtonColor: "#D4AF37",
        iconColor: "#D4AF37",
      }).then(() => {
        setFormData({ nama: "", kehadiran: "Hadir", ucapan: "" });
        window.location.reload();
      });
    } catch (error) {
      MySwal.fire("Error", "Gagal mengirim pesan", "error");
    }
    setLoading(false);
  };

  return (
    <section className="py-5" style={{  
            background: "var(--glass-bg)", 
              backdropFilter: "blur(10px)",
              margin: "20px",
              borderRadius: "30px",
              border: "1px solid rgba(212, 175, 55, 0.3)"  }}>
      <Container>
        <Row className="justify-content-center">
          {/* KOLOM FORM RSVP */}
          <Col lg={5} className="mb-5">
            <Card className="p-4 shadow-lg border-0" style={{ 
              background: "rgba(255, 255, 255, 0.05)", 
              backdropFilter: "blur(10px)",
              borderRadius: "30px",
              border: "1px solid rgba(212, 175, 55, 0.3)" 
            }}>
              <h2 className="text-center mb-4" style={{ fontFamily: "serif", color: "#D4AF37" }}>RSVP</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#D4AF37" }}>Nama Tamu</Form.Label>
                  <Form.Control 
                    required
                    value={formData.nama}
                    onChange={(e) => setFormData({...formData, nama: e.target.value})}
                    style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "none" }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#D4AF37" }}>Konfirmasi Kehadiran</Form.Label>
                  <Form.Select 
                    value={formData.kehadiran}
                    onChange={(e) => setFormData({...formData, kehadiran: e.target.value})}
                    style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "none" }}
                  >
                    <option value="Hadir" className="text-dark">Hadir</option>
                    <option value="Tidak Hadir" className="text-dark">Tidak Hadir</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label style={{ color: "#D4AF37" }}>Ucapan & Doa</Form.Label>
                  <Form.Control 
                    as="textarea" rows={3} required
                    placeholder="Tulis ucapan manis Anda..."
                    value={formData.ucapan}
                    onChange={(e) => setFormData({...formData, ucapan: e.target.value})}
                    style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "none" }}
                  />
                </Form.Group>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn w-100 py-2 border-0 fw-bold"
                  style={{ 
                    background: "#D4AF37", 
                    color: "black", 
                    borderRadius: "15px",
                    cursor: loading ? "not-allowed" : "pointer", // Tambahan untuk UX saat loading
                    opacity: loading ? 0.7 : 1
                  }}
                >
                  {loading ? "Sabar ya..." : "Kirim Ucapan"}
                </button>
              </Form>
            </Card>
          </Col>

          {/* KOLOM DAFTAR UCAPAN */}
          <Col lg={6}>
            <div className="d-flex justify-content-between align-items-center mb-4 px-2">
              <h4 className="mb-0" style={{ fontFamily: "serif", color: "#D4AF37" }}>Wishes</h4>
              <div>
                <Badge bg="success" className="me-2 px-3 py-2 opacity-75">Hadir: {totalHadir}</Badge>
                <Badge bg="danger" className="px-3 py-2 opacity-75">Absen: {totalAbsen}</Badge>
              </div>
            </div>

            {/* SCROLLABLE CONTAINER */}
            <div className="pe-2 custom-scroll" style={{ 
              maxHeight: "550px", 
              overflowY: "auto",
            }}>
              {comments.length === 0 ? (
                <p className="text-center opacity-50 mt-5">Belum ada ucapan...</p>
              ) : (
                comments.map((item, i) => (
                  <div key={i} className="mb-4 p-3 position-relative" style={{ 
                    background: "rgba(255,255,255,0.03)", 
                    borderRadius: "20px",
                    borderLeft: `4px solid ${item.kehadiran === "Hadir" ? "#D4AF37" : "#ff4d4d"}`
                  }}>
                    <div className="d-flex align-items-center mb-2">
                      <div className="me-2" style={{ width: "35px", height: "35px", background: "#D4AF37", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "black", fontWeight: "bold" }}>
                        {item.nama.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h6 className="mb-0" style={{ color: "#D4AF37" }}>{item.nama}</h6>
                        <small className="opacity-50" style={{ fontSize: "0.7rem", color: "white" }}>
                           {item.kehadiran === "Hadir" ? "✔️ Konfirmasi Hadir" : "❌ Berhalangan"}
                        </small>
                      </div>
                    </div>
                    <p className="mb-0 ps-1" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: "1.5" }}>
                      {item.ucapan}
                    </p>
                  </div>
                ))
              )}
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx global>{`
        .custom-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #D4AF37;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};