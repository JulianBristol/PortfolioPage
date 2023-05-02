/* eslint-disable */
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { Object3D } from 'three';

const AvocadoToast = () => {
  const toast = useGLTF('./avocadoToast/scene.gltf');
  //Create a new pivot point
  const pivot = new Object3D();
  pivot.position.set(0, 0, -6);
  pivot.add(toast.scene);

  return (
    <mesh>
      {/* <hemisphereLight intensity={0.15}
      groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      /> */}
      <group position={[0, 0.25, -1.25]}>
      <primitive object={pivot} scale={6.75} />
    </group>
    </mesh>
  )
}
const AvocadoToastCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 4], fov: 45 }}
      gl={{ 
        preserveDrawingBuffer: true,
     }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 3.5}
          minPolarAngle={Math.PI / 3.5}
        />
        <AvocadoToast />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default AvocadoToastCanvas