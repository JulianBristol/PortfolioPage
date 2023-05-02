/* eslint-disable */
import React from 'react'
import { Html, useProgress} from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className='canvas-load'></span>
      <p style={{ 
        fontSize: '3rem',
        color: 'var(--red-neon)',
        textShadow: '0px 0px 4px #8c16278c',
        fontWeight: 900,
        fontFamily: 'Lobster',
        marginTop: 40
         }}>{progress.toFixed(2)}%</p>
      </Html>
  )
}

export default Loader