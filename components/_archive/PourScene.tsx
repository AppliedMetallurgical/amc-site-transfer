"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const POUR_HEIGHT = 4.2;

export function PourScene() {
  const groupRef = useRef<THREE.Group>(null);
  const streamRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const sparksRef = useRef<THREE.Points>(null);

  const sparksGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const count = 80;
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 0.4;
      positions[i * 3 + 1] = Math.random() * POUR_HEIGHT - POUR_HEIGHT / 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.4;
      speeds[i] = 0.8 + Math.random() * 1.6;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("speed", new THREE.BufferAttribute(speeds, 1));
    return geo;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.18) * 0.08;
    }

    if (streamRef.current) {
      const mat = streamRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 2.4 + Math.sin(t * 6) * 0.6;
      streamRef.current.scale.x = 1 + Math.sin(t * 8) * 0.04;
      streamRef.current.scale.z = 1 + Math.cos(t * 8) * 0.04;
    }

    if (glowRef.current) {
      const mat = glowRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.55 + Math.sin(t * 3) * 0.12;
    }

    if (sparksRef.current) {
      const positions = sparksRef.current.geometry.attributes.position.array as Float32Array;
      const speeds = sparksRef.current.geometry.attributes.speed.array as Float32Array;
      for (let i = 0; i < positions.length / 3; i++) {
        positions[i * 3 + 1] -= speeds[i] * delta;
        if (positions[i * 3 + 1] < -POUR_HEIGHT / 2) {
          positions[i * 3] = (Math.random() - 0.5) * 0.4;
          positions[i * 3 + 1] = POUR_HEIGHT / 2 + Math.random() * 0.5;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 0.4;
        }
      }
      sparksRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      {/* Sand mold base — V-process geometry suggestion */}
      <mesh position={[0, -2.2, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[2.6, 3.0, 0.6, 8]} />
        <meshStandardMaterial
          color="#3a342a"
          roughness={0.95}
          metalness={0.0}
        />
      </mesh>
      <mesh position={[0, -1.85, 0]} receiveShadow>
        <cylinderGeometry args={[1.6, 2.6, 0.5, 8]} />
        <meshStandardMaterial color="#2b2620" roughness={1} metalness={0} />
      </mesh>
      <mesh position={[0, -1.5, 0]} receiveShadow>
        <cylinderGeometry args={[1.2, 1.6, 0.3, 8]} />
        <meshStandardMaterial
          color="#0d0c0b"
          roughness={0.85}
          metalness={0.05}
          emissive="#E85D2C"
          emissiveIntensity={0.35}
        />
      </mesh>

      {/* Pouring ladle — angled cylinder above */}
      <group position={[-2.2, 2.6, 0]} rotation={[0, 0, -0.45]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.55, 0.5, 1.0, 24]} />
          <meshStandardMaterial
            color="#1a1a1c"
            roughness={0.7}
            metalness={0.65}
          />
        </mesh>
        <mesh position={[0, 0.5, 0]}>
          <torusGeometry args={[0.55, 0.05, 8, 24]} />
          <meshStandardMaterial color="#2a2a2c" roughness={0.6} metalness={0.7} />
        </mesh>
        {/* Heat lip — emissive ring at the lip */}
        <mesh position={[0, -0.5, 0]}>
          <torusGeometry args={[0.5, 0.08, 8, 24]} />
          <meshStandardMaterial
            color="#0a0a0b"
            emissive="#FF4818"
            emissiveIntensity={1.6}
          />
        </mesh>
      </group>

      {/* Molten pour stream */}
      <mesh ref={streamRef} position={[-0.8, 0.4, 0]} rotation={[0, 0, 0.18]}>
        <cylinderGeometry args={[0.09, 0.13, POUR_HEIGHT, 12, 8]} />
        <meshStandardMaterial
          color="#FF8533"
          emissive="#FF4818"
          emissiveIntensity={2.6}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>

      {/* Bloom-fake — large transparent sphere around the pour */}
      <mesh ref={glowRef} position={[-0.7, 0.4, 0]}>
        <sphereGeometry args={[1.4, 24, 24]} />
        <meshBasicMaterial
          color="#FF6B33"
          transparent
          opacity={0.55}
          depthWrite={false}
        />
      </mesh>
      <mesh position={[-0.7, 0.4, 0]}>
        <sphereGeometry args={[2.4, 24, 24]} />
        <meshBasicMaterial
          color="#E85D2C"
          transparent
          opacity={0.18}
          depthWrite={false}
        />
      </mesh>

      {/* Sparks */}
      <points ref={sparksRef} geometry={sparksGeometry} position={[-0.7, 0.4, 0]}>
        <pointsMaterial
          color="#FFD08A"
          size={0.04}
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* Mold floor glow — molten metal pooling */}
      <mesh position={[0, -1.32, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.1, 32]} />
        <meshBasicMaterial color="#FF6B33" transparent opacity={0.85} />
      </mesh>
      <mesh position={[0, -1.30, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.7, 32]} />
        <meshBasicMaterial color="#E85D2C" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}
