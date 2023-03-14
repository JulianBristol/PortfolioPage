import React from 'react';
import BackgroundTextImg from './components/backgroundText/BackgroundTextImg.jsx';
import Home from './components/Home.jsx';
import Header from './header/Header.jsx';

function App() {
  return (
    <div className="App" >
      <BackgroundTextImg/>
    <div >
      <Header />
      <Home />
      </div>
    </div>
  );
}

export default App;
