/* eslint-disable */
import React from 'react'
import { motion } from 'framer-motion';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';
import './TechCSS.css'

const Tech = () => {
  const movement = 4;

  return (
    <div className='techContainer'>
      {technologies.map((technology, index) => (
        <motion.div
        className='techItem'
        key={technology.name}
        >
          <motion.div 
        animate={{
          zoom: [0.85, 1, 0.85],
        }}
        transition={{
          duration: 8 + (index*2)/5,
          repeat: Infinity,
          repeatType: 'loop'
        }}>
            <img
            src={technology.icon}
            alt={technology.name}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '', true)