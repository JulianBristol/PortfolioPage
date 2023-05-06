import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName, widthBypass) => function HOC() {
  return (
        <motion.div
        id={`motionDiv-${idName}`}
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        style={{
          padding: `${widthBypass ? '0px' : '10px'}`,
          maxWidth: `${widthBypass ? '100%' : '1280px'}`,
          margin: 'auto',
          position: 'relative',
        }}
        >
          <span id={idName} style={{ userSelect: 'none' }}>&nbsp;</span>
            <Component />
        </motion.div>
  );
};

export default SectionWrapper;
