import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/* import { styles } from '../styles'; */
/* import { menu, close } from '../assets'; */
import Icon from '../components/Icon Files/Icon.jsx';
import IconText from '../components/Icon Files/IconText.jsx';
import './Header.css';

const Header = () => {
  /* eslint-disable no-unused-vars */
  const [active, setActive] = useState('');

  return (
    <div id='headerBar' style={{ height: '92px' }}>
        <nav>
            <div className='icon'>
                <Link to='/'
                onClick={() => {
                  setActive('');
                  window.scrollTo(0, 0);
                }}>
                    <Icon />
                    <IconText/>
                </Link>
        </div>
        <ul>
            <a href='about'><li>
                <span className='firstLetter'>a</span>BOUT
                <div className='textReflection'><span className='firstLetter'>a</span>BOUT</div>
            </li></a>
            <a href='portfolio'><li>
            <span className='firstLetter'>p</span>ORTFOLIO
                <div className='textReflection'><span className='firstLetter'>p</span>ORTFOLIO</div>
            </li></a>
            <a href='blog'><li>
            <span className='firstLetter'>b</span>LOG
                <div className='textReflection'><span className='firstLetter'>b</span>LOG</div>
            </li></a>
            <a href='contact'><li>
            <span className='firstLetter'>c</span>ONTACT
                <div className='textReflection'><span className='firstLetter'>c</span>ONTACT</div>
            </li></a>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
