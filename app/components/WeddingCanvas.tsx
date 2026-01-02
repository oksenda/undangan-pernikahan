"use client"
import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, PerspectiveCamera, ScrollControls, Scroll } from "@react-three/drei"
import { WeddingRingsScroll } from "../three/WeddingRingScroll"
import { HeroSection } from "./HeroSection"
import { GreetingSection } from "./GreetingSectionProps"
import { LocationSection } from "./LocationSection"
import { FamilySection } from "./FamilySectionProps"
import { GallerySection } from "./GallerySectionProps"
import { WeddingTimeSection } from "./WeddingTimeSection"
import WeddingGiftList from "./gif/WeddingGiftList"
import { RSVPSection } from "./RSVPSection"
import weddingData from "../data/wddingData.json"
// Import komponen ScrollReveal yang sudah kita buat tadi
import { ScrollReveal } from "./ScrollReveal" 

interface WeddingCanvasProps {
  guestName: string
}

const WeddingCanvas: React.FC<WeddingCanvasProps> = ({ guestName }) => {
  const galleryImages = weddingData.assets.galleryImages;

  return (
    <Canvas style={{ width: "100%", height: "100vh" }} shadows gl={{ antialias: true }}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={70} />
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />

      <Suspense fallback={null}>
        <Environment preset="city" />
        <ScrollControls pages={9} damping={0.2}>
          {/* Properti nama diambil dari JSON agar sinkron */}
          <WeddingRingsScroll 
            name1={weddingData.pengantin.pria.namaPanggilan} 
            name2={weddingData.pengantin.wanita.namaPanggilan} 
          />
          
          <Scroll html style={{ width: "100%", height: "100%", top: 0, left: 0, pointerEvents: "auto" }}>
            
            <ScrollReveal animationType="zoom-in">
              <HeroSection guestName={guestName} />
            </ScrollReveal>

            <ScrollReveal animationType="fade-up">
              <GreetingSection guestName={guestName} />
            </ScrollReveal>

            <ScrollReveal animationType="fade-up">
              <WeddingTimeSection 
                date={weddingData.acara.time.split("T")[0]} 
                time={weddingData.acara.time.split("T")[1]} 
                targetDate={weddingData.acara.time}
              />
            </ScrollReveal>

            <ScrollReveal animationType="fade-left">
              <LocationSection />
            </ScrollReveal>

            <ScrollReveal animationType="zoom-in">
              <GallerySection images={galleryImages} />
            </ScrollReveal>

            <ScrollReveal animationType="fade-up">
              <WeddingGiftList />
            </ScrollReveal>

            <ScrollReveal animationType="fade-up">
              <RSVPSection />
            </ScrollReveal>

            <ScrollReveal animationType="fade-left">
              <FamilySection
                title="Keluarga Besar"
                maleMembers={weddingData.acara.maleMembers}
                femaleMembers={weddingData.acara.femaleMembers}
              />
            </ScrollReveal>
            
          </Scroll>
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}

export default WeddingCanvas;