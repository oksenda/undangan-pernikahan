"use client"
import { Float, Cloud } from "@react-three/drei"

export function CloudLayer() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group>
        <Cloud
          opacity={0.4}
          speed={0.2}
          bounds={[10, 2, 2]}
          position={[0, -2, 0]}
          concentrate="inside"
        />
        <Cloud
          opacity={0.2}
          speed={0.1}
          bounds={[20, 5, 5]}
          position={[0, -4, -10]}
        />
      </group>
    </Float>
  )
}
