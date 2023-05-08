/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StarsCanvas } from './components/3D_Components/index';
import Hero from './components/Hero/Hero.jsx';
import Header from './header/Header.jsx';
import BackgroundShapes from './components/Background/BackgroundShapes.jsx';
import Current from './components/Current/Current.jsx';
import History from './components/History/History.jsx';
import Tech from './components/Tech/Tech.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div id='headerBorder'/>
      <div id='headerBorderBlur'/>
        <BackgroundShapes />
        <div className='pageContent'>
          <div className='spacer'/>
          <Hero />
          <div className='spacer'/>
          <Current />
          <History />
          <Tech />
          <Portfolio />
          <div className='starsPlacement'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
