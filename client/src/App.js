import React from 'react';
import Home from './components/Home.jsx';
import Header from './header/Header.jsx';
import './App.css';
import BackgroundShapes from './components/Background/BackgroundShapes.jsx';

function App() {
  return (
    <div id ='main_page' className="App">
      <BackgroundShapes />
      <div className='spacer'/>
    <div className='pageContent'>
      <Home />
      <div className='spacer'/>
      </div>
      <Header />
      <div id='headerBorder'/>
      <div id='headerBorderBlur'/>
    </div>
  );
}

export default App;
