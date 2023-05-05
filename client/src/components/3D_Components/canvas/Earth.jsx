/* eslint-disable */
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');
  return (
    <primitive
      object={earth.scene}
      scale={2.5}
    />
  )
}

const EarthCanvas = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
      /* Add event listener for changes to screen width */
      const mediaQuery = window.matchMedia('(max-width: 1280px)');

      /* Set initial value for 'isMobile' */
      setIsTablet(mediaQuery.matches);

      /* Define a callback function to handle changes to the media query */
      const handleMediaQueryChange = (event) => {
        setIsTablet(event.matches);
      }
      console.log(isTablet);
      /* Add the callback function as a listener for media query changes */
      mediaQuery.addEventListener('change', handleMediaQueryChange);

      /* Remove Event listener when component is unmounted */
      return () => {
          mediaQuery.removeEventListener('change', handleMediaQueryChange);
      }
  },[])
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      style={{ overflow: 'visible', width: `${isTablet ? '550px' :'630px'}`, height: `${isTablet ? '550px' :'885px'}` }}
      camera={{ 
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
       }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;