import React from 'react';

const Home = () => (
        <div id="home" style={{ width: '100%' }}>
            <div className="rightDiv">
            <h1>Hey, it&apos;s me,
                <div id="name"><span className='emph1'> Julian</span> <span className="emph2">Bristol</span></div>
                </h1>
                <p>I&apos;m a <span className='jobTitle'>Full-Stack Developer</span> who is passionate about creating
                interactive web applications as well as developing interesting software and experiences.</p>
                <div id='btnLinks'>
                <button>Resume()</button>
                <button>LinkedIn</button>
                <button>GitHub</button>
                </div>
                <div className="leftDiv">
                    <img
                    src="https://avatars.githubusercontent.com/u/82460914?v=4"
                    alt="The sexiest being on the planet"
                    style={{ borderRadius: '50%',
                      marginLeft: '300px',
                      width: '350px',
                      height: '350px',
                      boxShadow: '-10px 0 #8c162755, -20px 0 #a4674255, -30px 0 #bfbe5f55',
                    }}
                    />
                </div>
            </div>
        </div>
);

export default Home;
