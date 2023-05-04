import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';

const Portfolio = () => {
  const rest = 'portfolio';
  return (
    <div>
        <motion.div variants={textVariant()} style={{ display: 'grid' }}>
            <h2 className='sectionTitle'>Projects!</h2>
        </motion.div>
        <motion.div className='currentStudies' variants={fadeIn('', '', 0.1, 1)}>
            <p>I&apos;m on a mission to master <span>threeJS</span> and <span>machine learning</span>.</p>
            <br/>
            {/* eslint-disable-next-line max-len */}
            <p>If you&apos;re in need of a talented and enthusiastic developer who&apos;s fueled by a slightly unhealthy amount of avocado toast, then look no further!</p>
        </motion.div>
      {rest}
    </div>
  );
};

export default SectionWrapper(Portfolio, 'portfolio', false);
