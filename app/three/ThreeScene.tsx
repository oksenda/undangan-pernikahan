"use client"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, useGLTF, Environment } from '@react-three/drei'
import { Suspense } from 'react'

function Model3D({ path }: { path: string }) {
  const { scene } = useGLTF(path)
  return <primitive object={scene} scale={1.5} />
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 h-screen w-full z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Model3D path="/assets/ring.glb" />
          </Float>
          <Environment preset="sunset" />
        </Suspense>
        
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  )
}