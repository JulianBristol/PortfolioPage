/* eslint-disable */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './JS_MASTERY_Components';
import Home from './components/Home.jsx';
import Header from './header/Header.jsx';
import BackgroundShapes from './components/Background/BackgroundShapes.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div id='headerBorder'/>
      <div id='headerBorderBlur'/>
    <div className='relative z-0 bg-primary'>
        <Navbar />
        <Hero />
    </div>
    <div id ='main_page' className="App">
      <div >

      <BackgroundShapes />
      </div>
    <div className='pageContent'>
      <div className='spacer'/>
      <Home />
      <div className='spacer'/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
