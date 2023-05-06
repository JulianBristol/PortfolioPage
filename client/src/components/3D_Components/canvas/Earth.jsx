/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import PropTypes from 'prop-types';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader.jsx';

const Earth = ({ isMobile }) => {
  const earth = useGLTF('./planet/scene.gltf');

  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 3 : 2.5}
    />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    /* Add event listener for changes to screen width */
    const mobileMediaQuery = window.matchMedia('(max-width: 1280px)');
    const tabletMediaQuery = window.matchMedia('(max-width: 1280px)');

    /* Set initial value for 'isMobile' */
    setIsMobile(mobileMediaQuery.matches);
    setIsTablet(tabletMediaQuery.matches);

    /* Define a callback function to handle changes to the media query */
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
      setIsTablet(event.matches);
    };

    /* Add the callback function as a listener for media query changes */
    tabletMediaQuery.addEventListener('change', handleMediaQueryChange);
    mobileMediaQuery.addEventListener('change', handleMediaQueryChange);

    /* Remove Event listener when component is unmounted */
    return () => {
      mobileMediaQuery.removeEventListener('change', handleMediaQueryChange);
      tabletMediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
    id='earthCanvas'
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      style={{
        overflow: 'visible',
        width: `${isTablet ? '550px' : '630px'}`,
        height: `${isTablet ? '550px' : '885px'}`
      }}
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
        <Earth isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

Earth.propTypes = {
  isMobile: PropTypes.bool,
};
export default EarthCanvas;
