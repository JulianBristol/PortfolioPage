import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants/index';
import Icon from '../components/Icon Files/Icon.jsx';
import IconText from '../components/Icon Files/IconText.jsx';
import './Header.css';
import MenuBar from '../components/Menu/MenuBar/MenuBar.jsx';

const Header = () => (
    <div id='headerBar'>
        <nav>
            <div className='icon'>
                <Link to='/'
                onClick={() => {
                  window.scrollTo(0, 0);
                }}>
                    <Icon />
                    <IconText/>
                </Link>
        </div>
        <ul className='hide_md'>
            {navLinks.map((link) => (
                <a href={`#${link.id}`} key={link.id}>
                    <li>
                        <span className='firstLetter'>{link.fLetter}</span>
                        {link.title}
                        <div className='textReflection'>
                            <span className='firstLetter'>{link.fLetter}</span>
                            {link.title}
                        </div>
                    </li>
                </a>
            ))}
            <a href='https://face-blog.netlify.app' target='_blank' rel="noreferrer">
                    <li>
                        <span className='firstLetter'>b</span>
                        LOG
                        <div className='textReflection'>
                            <span className='firstLetter'>b</span>
                            LOG
                        </div>
                    </li>
                </a>
        </ul>
            <div className='menuBtn show_md'>
                <MenuBar />
            </div>
      </nav>
    </div>
);

export default Header;
