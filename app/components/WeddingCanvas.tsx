"use client"
import React, { Suspense, useMemo } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, PerspectiveCamera, ScrollControls, Scroll } from "@react-three/drei"
import { WeddingRings } from "../three/WeddingRings"
import { WeddingRingsScroll } from "../three/WeddingRingScroll"
import { HeroSection } from "./HeroSection"
import { GreetingSection } from "./GreetingSectionProps"
import { LocationSection } from "./LocationSection"
import { FamilySection } from "./FamilySectionProps"
import { GallerySection } from "./GallerySectionProps"
import { WeddingTimeSection } from "./WeddingTimeSection"

interface WeddingCanvasProps {
  guestName: string
  isOpen: boolean
}

export const WeddingCanvas: React.FC<WeddingCanvasProps> = ({ guestName, isOpen }) => {
  const galleryImages = useMemo(
    () => [
      "/assets/asset1.jpeg",
      "/assets/asset2.jpeg",
      "/assets/asset3.jpg",
      "/assets/asset4.webp",
    ],
    []
  )

  return (
    <Canvas style={{ width: "100%", height: "100vh" }} shadows gl={{ antialias: true }}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={70} />
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />

      <Suspense fallback={null}>
        <Environment preset="city" />

        {/* Wedding Rings selalu ada */}
        <WeddingRings name1="Kiki" name2="Nia" />

        {/* ScrollControls selalu ada, tapi isi conditional */}
        <ScrollControls pages={6} damping={0.2}>
          {isOpen && <WeddingRings name1="Kiki" name2="Nia" />}
          <Scroll html style={{ width: "100%" }}>
            {isOpen && (
              <>
                <HeroSection guestName={guestName} />
                 <GreetingSection guestName={guestName} />
                <WeddingTimeSection date="1 Januari 2026" time="10:00 WIB" />
                <LocationSection />
                 <GallerySection images={galleryImages} />
                <FamilySection
                  title="Keluarga Besar"
                  members={["Ayah: Budi", "Ibu: Siti", "Kakak: Rina", "Adik: Riko"]}
                />
              </>
            )}
          </Scroll>
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}
