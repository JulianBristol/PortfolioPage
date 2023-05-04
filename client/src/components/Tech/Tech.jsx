/* eslint-disable */
import React from 'react'
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';
import './TechCSS.css'

const Tech = () => {
  return (
    <div className='techContainer'>
      {technologies.map((technology) => (
        <div className='techItem' key={technology.name}>
          <img
          src={technology.icon}
          alt={technology.name}
          />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '', true)