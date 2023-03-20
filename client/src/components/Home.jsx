/* eslint-disable max-len */
import React, { useEffect } from 'react';
import Julian from '../images/Good Enough.png';
import './Home.css';

const Home = () => {
  useEffect(() => {
    document.getElementById('welcome').style.opacity = 1;
  }, []);

  return (
        <div id="welcome">
            <div className='backgroundBlur'>
<div className='welcomeMessage'>

    <div className='wcRight'>
        <div className='wcImgBG A' style={{ backgroundColor: '#360A11' }}>
            </div>
        <div className='wcImgBG B'>
        </div>
        <div className='wcImgBG C'>
            <img className='wcImg'
            src={Julian}
            alt="The sexiest being on the planet"
            />
            </div>
    </div>
    <div className='wcLeft'>
        <div className='text'>
    <h1>Hey, it&apos;s me,
                <div className='JulianBristol'><span className='emph1'>J</span>ulian <span className="emph1">B</span>ristol</div>
                </h1>
                <p>I&apos;m a <span className='jobTitle'>Full-Stack
                Developer</span> who is passionate about creating
                interactive web applications as well as developing interesting software and experiences.</p>
                </div>
                <div className='btnLinks'>
                <button>Resume()</button>
                <button>LinkedIn</button>
                <button>GitHub</button>
                </div>
    </div>
</div>
</div>
        </div>
  ); };

export default Home;
