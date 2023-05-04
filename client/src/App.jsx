/* eslint-disable */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Contact, Feedbacks, Works, StarsCanvas } from './JS_MASTERY_Components';
import Hero from './components/Hero/Hero.jsx';
import Header from './header/Header.jsx';
import BackgroundShapes from './components/Background/BackgroundShapes.jsx';
import Current from './components/Current/Current';
import History from './components/History/History';
import Tech from './components/Tech/Tech';

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
          <History />
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
