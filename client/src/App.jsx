/* eslint-disable */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Contact, Experience, Feedbacks, Tech, Works, StarsCanvas } from './JS_MASTERY_Components';
import Hero from './components/Hero/Hero.jsx';
import Header from './header/Header.jsx';
import BackgroundShapes from './components/Background/BackgroundShapes.jsx';
import Current from './components/Current/Current';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div id='headerBorder'/>
      <div id='headerBorderBlur'/>
      <div id ='main_page' className="App">
        <BackgroundShapes />
        <div className='pageContent'>
          <div className='spacer'/>
          <Hero />
          <div className='spacer'/>
          <Current />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
