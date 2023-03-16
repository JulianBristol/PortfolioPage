import React from 'react';
import Icon from '../components/Icon Files/Icon.jsx';
import IconText from '../components/Icon Files/IconText.jsx';
import './Header.css';

const Header = () => (
    <div id='headerBar' style={{ height: '92px' }}>

        <div className='navDiv'>
            <div className='icon'>
            <a href='/'>
        <Icon />
        <IconText/>
        </a>
        </div>
        <nav>
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
    </div>
);

export default Header;
