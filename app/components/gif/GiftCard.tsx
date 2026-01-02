"use client";
import React, { useState } from "react";
import { Copy, Check, QrCode } from "lucide-react";
import { Card, Button, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

export type GiftCardVariant = "dark" | "warning" | "danger" | "primary";

export interface GiftCardProps {
  provider: string;
  accountNumber: string;
  type: string;
  owner: string;
  qris?: string;
  variant?: GiftCardVariant;
}

export default function GiftCard({
  provider,
  accountNumber,
  owner,
  qris,
  variant = "dark",
}: GiftCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Gagal menyalin:", err);
    }
  };

  // Format angka agar tetap dalam satu baris (FontSize dinamis)
  const formatted = accountNumber.replace(/(\d{4})(?=\d)/g, "$1 ");

  return (
    <div className="d-flex justify-content-center my-3 px-2">
      <Card
        bg={variant}
        text="white"
        className="border-0 shadow-lg position-relative overflow-hidden"
        style={{ 
          width: "350px", // Ukuran lebih compact agar pas di layar HP
          height: "210px", // Proporsi kartu kredit asli
          borderRadius: "15px",
          background: variant === "dark" ? "linear-gradient(135deg, #1a1a1a 0%, #333333 100%)" : "" 
        }}
      >
        {/* Efek Kilauan Kartu */}
        <div className="position-absolute w-100 h-100" style={{
          background: "linear-gradient(225deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%)",
          top: 0, left: 0, pointerEvents: "none"
        }} />

        <Card.Body className="p-3 d-flex flex-column justify-content-between h-100 position-relative">
          
          {/* Header: Logo & Provider */}
          <div className="d-flex justify-content-between align-items-start">
            <div className="d-flex align-items-center gap-2">
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px" }}>
                <img 
                  src={`https://www.google.com/s2/favicons?domain=${provider.toLowerCase()}.com&sz=64`} 
                  alt="logo"
                  style={{ width: "20px", height: "20px", objectFit: "contain" }}
                  onError={(e) => (e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/60/60378.png")}
                />
              </div>
              <span className="fw-bold" style={{ fontSize: "1rem" }}>{provider}</span>
            </div>
            <div className="text-end">
                <small className="fw-bold opacity-50" style={{ fontSize: "0.6rem", letterSpacing: "1px" }}>VIRTUAL CARD</small>
            </div>
          </div>

          {/* Body: Nomor Rekening (Dikecilkan agar tidak turun ke bawah) */}
          <div className="text-center w-100">
            <small className="d-block opacity-50 mb-1" style={{ fontSize: "0.65rem" }}>ACCOUNT NUMBER</small>
            <h4 className="fw-bold mb-0" style={{ 
                letterSpacing: "3px", 
                fontSize: "1.3rem", // Ukuran angka lebih kecil agar presisi
                whiteSpace: "nowrap" 
            }}>
              {formatted}
            </h4>
          </div>

          {/* Footer: Nama & Tombol */}
          <div className="d-flex justify-content-between align-items-end">
            <div style={{ maxWidth: "70%" }}>
              <small className="d-block opacity-50" style={{ fontSize: "0.65rem" }}>CARD HOLDER</small>
              <p className="fw-semibold text-truncate mb-0" style={{ fontSize: "0.85rem" }}>{owner}</p>
            </div>
            
            <div className="d-flex gap-2">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="copy-tooltip">{copied ? "Copied!" : "Copy"}</Tooltip>}
              >
                <Button
                  onClick={handleCopy}
                  variant={copied ? "success" : "outline-light"}
                  className="rounded-circle p-0 d-flex align-items-center justify-content-center border-opacity-50"
                  style={{ width: "32px", height: "32px" }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </Button>
              </OverlayTrigger>

              {qris && (
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="qris-tooltip">QRIS</Tooltip>}
                >
                  <Button
                    onClick={() => window.open(qris, "_blank")}
                    variant="outline-light"
                    className="rounded-circle p-0 d-flex align-items-center justify-content-center border-opacity-50"
                    style={{ width: "32px", height: "32px" }}
                  >
                    <QrCode size={14} />
                  </Button>
                </OverlayTrigger>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}