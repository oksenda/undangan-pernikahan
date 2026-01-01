"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { useMemo } from "react";

function RumahGadangRoof() {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-3, 0);
    s.quadraticCurveTo(-2.2, 1.6, -1.2, 0.6);
    s.quadraticCurveTo(0, -0.2, 1.2, 0.6);
    s.quadraticCurveTo(2.2, 1.6, 3, 0);
    return s;
  }, []);

  const extrude = useMemo(
    () => ({
      steps: 2,
      depth: 1,
      bevelEnabled: false
    }),
    []
  );

  return (
    <mesh position={[0, 1.8, 0]}>
      <extrudeGeometry args={[shape, extrude]} />
      <meshStandardMaterial
        color="#b48a2c"
        metalness={0.4}
        roughness={0.3}
      />
    </mesh>
  );
}

function PelaminanStage() {
  return (
    <group>
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[8, 0.2, 4]} />
        <meshStandardMaterial color="#f3e5c8" />
      </mesh>

      <mesh position={[0, 1, -1.8]}>
        <boxGeometry args={[7.2, 2.2, 0.2]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>

      <mesh position={[-1.2, 0.4, 0.2]}>
        <boxGeometry args={[1.2, 0.8, 0.6]} />
        <meshStandardMaterial color="#fff6dd" />
      </mesh>

      <mesh position={[1.2, 0.4, 0.2]}>
        <boxGeometry args={[1.2, 0.8, 0.6]} />
        <meshStandardMaterial color="#fff6dd" />
      </mesh>

      {[-3.2, 3.2].map((x) => (
        <mesh key={x} position={[x, 1, -1.6]}>
          <cylinderGeometry args={[0.08, 0.08, 2]} />
          <meshStandardMaterial color="#e6c65b" metalness={0.7} />
        </mesh>
      ))}
    </group>
  );
}

export default function MinangWeddingVenue() {
  return (
    <div className="w-full h-[650px]">
      <Canvas camera={{ position: [0, 2.2, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 4, 3]} intensity={1.4} />
        <directionalLight position={[-2, 3, -2]} intensity={0.6} />

        <Float floatIntensity={0.4} rotationIntensity={0.2}>
          <PelaminanStage />
          <RumahGadangRoof />
        </Float>

        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
