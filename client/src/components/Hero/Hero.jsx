/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Julian from '../../images/Good Enough.png';
import './Hero.css';
import { ComputersCanvas } from '../../JS_MASTERY_Components';

const Hero = () => {
  const [toggleText, setToggleText] = useState(true);
  useEffect(() => {
    document.getElementById('welcome').style.opacity = 1;
  }, []);

  return (
    <div>
        <div id="welcome">
            <div className='backgroundBlur'>
                <div className={`welcomeMessage ${toggleText ? 'pos1' : 'pos2'}`}>
                    <div className='welcomeContent'>

                        <div className='welcomeLeft'>
                            <div className='welcomeImgBG A'></div>
                            <div className='welcomeImgBG B'></div>
                            <div className='welcomeImgBG C'>
                                <img className='welcomeImg'
                                src={Julian}
                                alt="The sexiest being on the planet"/>
                            </div>
                        </div>

                        <div className='welcomeRight'>
                            <div className='text'>
                                <h1>Hey, it&apos;s me,
                                    <div className='JulianBristol'><span className='emph1'>J</span>ulian <span className="emph1">B</span>ristol</div>
                                </h1>
                                <div className='paragraphContainer'>
                                <div className={`julian_description ${toggleText ? 'desc1' : 'desc2'}`}>
                                <p className='primaryDesc'>I&apos;m a <span className='jobTitle'>Full-Stack Developer</span> who is passionate about creating interactive web applications as well as developing interesting software and experiences.</p>
                                <div className='secondaryDesc'>
                                <p>I am a philomath and a self-proclaimed ex-evil scientist, which means that I derive joy and entertainment from learning new things.</p>
                                <p>Where does the &quot;evil scientist&quot; part fit in?  Well, I was the type of kid who enjoyed taking apart electronic devices and game systems just to see what was inside (and maybe to steal their magnets and lasers). Over time, that destructive search for knowledge mellowed out into a more systematic approach.
                                </p>
                                <p>What does this mean for you? I crave to learn new things, whether they be software, processes, or systems. Teach me how to do something and I will do it better and faster than you expected. I am a hard worker who goes above and beyond not because it is expected of me, but rather because that is who I am.</p>
                                </div>
                                </div>
                                </div>
                                <button className={`toggleTextBtn ${toggleText ? 'textLeft' : 'textRight'}`} onClick={() => {
                                  setToggleText(!toggleText);
                                }
                                }>{toggleText ? 'Next' : 'Back'}</button>
                            </div>
                        </div>

                    </div>
                            <div className={`btnLinks ${toggleText ? 'btnPos1' : 'btnPos2'}`}>
                                <button>Resume()</button>
                                <button>LinkedIn</button>
                                <button>GitHub</button>
                            </div>
                </div>
            </div>
        </div>
        <ComputersCanvas />
    </div>
  ); };

export default Hero;
