/* eslint-disable */
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { Object3D } from 'three';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor='red' />
      <pointLight intensity={1} />
      <primitive
      object={computer.scene}
      scale={3.75}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true }}
      style={{ outline: '1px dashed red', height: '300px'}}
    >
      <Suspense /* fallback={<CanvasLoader />} */>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}


const AvocadoToast = () => {
  const toast = useGLTF('./avocadoToast/scene.gltf');
  //Create a new pivot point
  const pivot = new Object3D();
  pivot.position.set(0, 0, -6);
  pivot.add(toast.scene)

  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor='black' />
      <pointLight intensity={1} />
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
      camera={{ position: [20, 3, 4], fov: 25, }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ outline: '1px dashed red', height: '300px'}}
    >
      <Suspense /* fallback={<CanvasLoader />} */>
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