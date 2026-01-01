"use client"
import { Float, Text } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

interface RingModelProps {
  name1: string
  name2: string
}

export function RingModel({ name1, name2 }: RingModelProps) {
  const { size } = useThree()

  // Skala diperbesar agar sebanding dengan layar
  const scale = size.width < 768 ? 0.8 : 1.5
  const posY = size.width < 768 ? -0.1 : 0

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.3}>
      <group scale={scale} position={[0, posY, 0]}>
        
        {/* Cincin Kiri - Posisi lebih tegak/miring diagonal */}
        <mesh 
          position={[-0.8, 0, 0]} 
          rotation={[Math.PI / 4, 0.5, 0]}
        >
          <torusGeometry args={[1, 0.1, 32, 100]} />
          <meshStandardMaterial 
            color="#D4AF37" 
            metalness={1} 
            roughness={0.1} 
          />
        </mesh>

        {/* Cincin Kanan - Posisi lebih lurus/rebah dan ditarik sedikit ke belakang agar ada jarak visual */}
        <mesh 
          position={[0.8, -0.3, -0.5]} // Diturunkan (-0.3) dan digeser ke belakang (-0.5)
          rotation={[Math.PI / -3, 1, 0.5]} // Sudut lebih lurus/horizontal
        >
          <torusGeometry args={[1, 0.1, 32, 100]} />
          <meshStandardMaterial 
            color="#FFD700" 
            metalness={1} 
            roughness={0.1} 
          />
        </mesh>
      </group>
    </Float>
  )
}