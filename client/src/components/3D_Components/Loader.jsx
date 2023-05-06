import React from 'react';
import { Html } from '@react-three/drei';

const Loader = (marginLeft) => (
    <Html>
      <span className="loader" style={ marginLeft }></span>
      </Html>
);

export default Loader;
