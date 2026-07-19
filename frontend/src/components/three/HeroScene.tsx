import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sparkles,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function CyberCore() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.25;
      group.current.rotation.x += delta * 0.08;
    }
  });

  return (
    <group ref={group}>
      {/* Main Wireframe Globe */}
      <Float speed={2} floatIntensity={1.5}>
        <mesh>
          <icosahedronGeometry args={[1.15, 2]} />
          <meshPhysicalMaterial
            color="#06B6D4"
            emissive="#06B6D4"
            emissiveIntensity={2}
            metalness={1}
            roughness={0}
            wireframe
          />
        </mesh>
      </Float>

      {/* Inner Energy Core */}
      <mesh>
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshPhysicalMaterial
          color="#06B6D4"
          emissive="#06B6D4"
          emissiveIntensity={5}
          transparent
          opacity={0.22}
          roughness={0}
          metalness={1}
        />
      </mesh>

      {/* Outer Glass Sphere */}
      <mesh>
        <sphereGeometry args={[1.35, 64, 64]} />
        <meshPhysicalMaterial
          transparent
          opacity={0.08}
          color="#22D3EE"
          roughness={0}
          transmission={1}
          thickness={1}
        />
      </mesh>

      {/* Ring 1 */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.7, 0.015, 16, 100]} />
        <meshBasicMaterial color="#22D3EE" />
      </mesh>

      {/* Ring 2 */}
      <mesh rotation={[0, Math.PI / 4, Math.PI / 2]}>
        <torusGeometry args={[2.1, 0.01, 16, 100]} />
        <meshBasicMaterial color="#06B6D4" />
      </mesh>

      {/* Ring 3 */}
      <mesh rotation={[Math.PI / 3, 0, Math.PI / 5]}>
        <torusGeometry args={[2.45, 0.01, 16, 100]} />
        <meshBasicMaterial color="#67E8F9" />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 6],
        fov: 45,
      }}
    >
      <color attach="background" args={["#09090B"]} />

      <ambientLight intensity={0.8} />

      <pointLight
        position={[5, 5, 5]}
        intensity={80}
        color="#06B6D4"
      />

      <pointLight
        position={[-5, -5, -5]}
        intensity={30}
        color="#22D3EE"
      />

      <CyberCore />

      <Sparkles
        count={700}
        scale={14}
        size={2}
        speed={0.4}
        color="#22D3EE"
      />

      <Environment preset="night" />

      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.35}
        scale={10}
        blur={2}
      />

      <OrbitControls
        autoRotate
        autoRotateSpeed={0.6}
        enableZoom={false}
      />
    </Canvas>
  );
}