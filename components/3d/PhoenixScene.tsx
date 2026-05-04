"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/** Particle-based phoenix rising effect */
function PhoenixParticles() {
  const meshRef = useRef<THREE.Points>(null);
  const particleCount = 800;

  const { positions, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const siz = new Float32Array(particleCount);

    // Phoenix silhouette distribution
    for (let i = 0; i < particleCount; i++) {
      const t = i / particleCount;
      const angle = t * Math.PI * 8;
      const radius = Math.sin(t * Math.PI) * (1.5 + Math.random() * 0.5);

      // Body shape (elliptical with wings)
      let x, y, z;
      if (t < 0.6) {
        // Body and upward flow
        x = Math.sin(angle) * radius * 0.4 + (Math.random() - 0.5) * 0.3;
        y = t * 5 - 1.5 + (Math.random() - 0.5) * 0.4;
        z = Math.cos(angle) * radius * 0.3 + (Math.random() - 0.5) * 0.2;
      } else if (t < 0.8) {
        // Wings spread
        const wingT = (t - 0.6) / 0.2;
        const side = i % 2 === 0 ? 1 : -1;
        x = side * wingT * 2.5 + (Math.random() - 0.5) * 0.5;
        y = 1.0 + Math.sin(wingT * Math.PI) * 0.8 + (Math.random() - 0.5) * 0.3;
        z = (Math.random() - 0.5) * 0.3;
      } else {
        // Tail flames (below)
        const tailT = (t - 0.8) / 0.2;
        x = (Math.random() - 0.5) * (0.5 + tailT * 0.3);
        y = -1.5 - tailT * 1.5 + (Math.random() - 0.5) * 0.3;
        z = (Math.random() - 0.5) * 0.3;
      }

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Color gradient: crimson → amber → gold
      const colorT = (y + 3) / 6;
      const r = THREE.MathUtils.lerp(0.9, 1.0, colorT);
      const g = THREE.MathUtils.lerp(0.22, 0.75, colorT);
      const b = THREE.MathUtils.lerp(0.27, 0.15, Math.max(0, colorT));
      col[i * 3] = r;
      col[i * 3 + 1] = g;
      col[i * 3 + 2] = b;

      siz[i] = 2 + Math.random() * 4;
    }

    return { positions: pos, colors: col, sizes: siz };
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    // Slow rotation
    meshRef.current.rotation.y = Math.sin(time * 0.15) * 0.3;

    // Gentle floating
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.1;

    // Update particle positions for rising effect
    const posArray = meshRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3 + 1; // y position
      posArray[idx] += 0.003;
      // Reset particles that float too high
      if (posArray[idx] > 4) {
        posArray[idx] = -3;
      }
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
          <bufferAttribute
            attach="attributes-size"
            args={[sizes, 1]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </Float>
  );
}

/** Ambient glow orbs */
function GlowOrbs() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <group ref={ref}>
      {[...Array(5)].map((_, i) => {
        const angle = (i / 5) * Math.PI * 2;
        const radius = 2.5 + Math.random();
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              (Math.random() - 0.5) * 2,
              Math.sin(angle) * radius,
            ]}
          >
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshBasicMaterial
              color={i % 2 === 0 ? "#E63946" : "#F4A236"}
              transparent
              opacity={0.4}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function PhoenixScene() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 3, 2]} intensity={1} color="#E63946" />
        <pointLight position={[0, -2, 1]} intensity={0.5} color="#F4A236" />
        <PhoenixParticles />
        <GlowOrbs />
      </Canvas>
    </div>
  );
}
