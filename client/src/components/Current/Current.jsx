import React from 'react';
import { motion } from 'framer-motion';
import { AvocadoToastCanvas } from '../3D_Components/index';
import './CurrentCSS.css';
import { fadeIn, textVariant } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';
import RotateHint from '../RotateHint.jsx';

const Current = () => (
    <div id='currentBG'>
    <div id='currentDiv'>
      <motion.div variants={textVariant()} style={{ display: 'grid' }}>
        <h2 className='sectionTitle'>What Am I Learing Now?</h2>
        </motion.div>
        <div className='columns'>
            <motion.div className='currentStudies' variants={fadeIn('', '', 0.1, 1)}>
                <p>I&apos;m on a mission to master <span>threeJS</span> and <span>machine learning</span>.</p>
                <br/>
                {/* eslint-disable-next-line max-len */}
                <p>If you&apos;re in need of a talented and enthusiastic developer who&apos;s fueled by a slightly unhealthy amount of avocado toast, then look no further!</p>
            </motion.div>
            <div className='avocadoToastContainer'>
              <AvocadoToastCanvas />
              <RotateHint />
            </div>
        </div>
    </div>
    </div>
);

export default SectionWrapper(Current, 'current', true);
