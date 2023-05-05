import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const RotateHint = ({ bottom }) => (
    <div className='rotateHintContainer' style={{ bottom: `${bottom}` }}>
                <span>
                  <div className='rotateHint'>
                    <motion.div
                      animate={{
                        x: [0, 24, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'loop'
                      }}
                      className='motionArrow'
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
                    </motion.div>
                  </div>
                </span>
              </div>
);

RotateHint.propTypes = {
  bottom: PropTypes.string,
};

export default RotateHint;
