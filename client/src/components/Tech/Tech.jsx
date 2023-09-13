import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';
import './TechCSS.css';

const Tech = () => (
    <div className='techContainer'>
      {technologies.map((technology) => (
        <motion.div
        className='techItem'
        key={technology.name}
        >
          <motion.div
        animate={{
          zoom: [0.95, 1, 0.95],
        }}
        transition={{
          duration: 8 * 1 + Math.random(),
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
);

export default SectionWrapper(Tech, '', true);
