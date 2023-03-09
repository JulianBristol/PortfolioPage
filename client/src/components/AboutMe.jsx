import React from 'react';

const aboutMe = () => (
        <div>
            <div id="right">
            <h1>Hey, it&apos;s me,
                <div id="name"><span className='emph1'> Julian</span> <span className="emph2">Bristol</span></div>
                </h1>
                <p>I&apos;m a <span>Full-Stack Developer</span> who is passionate about creating
                interactive web applications as well as developing interesting software and experiences.</p>
                <div id='btnLinks'>
                <button>Resume()</button>
                <button>LinkedIn</button>
                <button>GitHub</button>
                </div>
                <div>
                    <img
                    src="https://avatars.githubusercontent.com/u/82460914?v=4"
                    alt="The sexiest being on the planet"
                    />
                </div>
            </div>
        </div>
);

export default aboutMe;
