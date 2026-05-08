"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PourScene } from "./PourScene";

export function Hero3D() {
  return (
    <Canvas
      camera={{ position: [4.5, 1.5, 6], fov: 38 }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        toneMapping: 2,
        toneMappingExposure: 1.1,
      }}
      shadows
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.18} color="#7a7570" />
        <directionalLight
          position={[5, 6, 4]}
          intensity={0.6}
          color="#bcb8ae"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight
          position={[-1, 1, 0.5]}
          intensity={6}
          distance={4}
          decay={1.5}
          color="#FF6B33"
        />
        <pointLight
          position={[0, -1.2, 0]}
          intensity={3}
          distance={2.5}
          decay={1.5}
          color="#FF8533"
        />
        <PourScene />
        <fog attach="fog" args={["#0A0A0B", 8, 16]} />
      </Suspense>
    </Canvas>
  );
}
