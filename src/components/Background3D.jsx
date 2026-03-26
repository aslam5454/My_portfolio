import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

// An interactive floating shape that follows the mouse slowly
function InteractiveShape() {
  const meshRef = useRef();
  const { mouse, viewport } = useThree();

  useFrame((state, delta) => {
    // Smoothly interpolate position towards mouse
    const targetX = (mouse.x * viewport.width) / 4;
    const targetY = (mouse.y * viewport.height) / 4;
    
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 2 * delta);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 2 * delta);
    
    // Slow rotation
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial 
          color="#00f3ff" 
          attach="material" 
          distort={0.4} 
          speed={2} 
          roughness={0.2} 
          metalness={0.8}
          wireframe={true}
        />
      </Sphere>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#00f3ff" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#9d00ff" />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <InteractiveShape />
      
      <Environment preset="city" />
    </>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
}
