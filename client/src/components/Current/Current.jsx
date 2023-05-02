import React from 'react';
import { motion } from 'framer-motion';
import AvocadoToastCanvas from '../../JS_MASTERY_Components/canvas/AvocadoToast.jsx';
import './CurrentCSS.css';

const Current = () => (
    <div id='currentBG'>
    <div id='current'>
        <h2 className='sectionTitle'>What Am I Learing Now?</h2>
        <div className='columns'>
            <div className='currentStudies'>
                <p>I&apos;m on a mission to master <span>threeJS</span> and <span>machine learning</span>.</p>
                {/* eslint-disable-next-line max-len */}
                <p>If you&apos;re in need of a talented and enthusiastic developer who&apos;s fueled by a slightly unhealthy amount of avocado toast, then look no further!</p>
            </div>
            <div className='avocadoToastContainer'>
              <AvocadoToastCanvas />
              <div className='rotateHintContainer'>
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
            </div>
        </div>
    </div>
    </div>
);

export default Current;
