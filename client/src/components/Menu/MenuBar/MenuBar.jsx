import React, { useState } from 'react';
import { navLinks } from '../../../constants/index';
import MenuButton from '../MenuButton/MenuButton.jsx';
import './MenuBarCSS.css';

const MenuBar = () => {
  const [active, setActive] = useState(false);

  return (
    <div id='menuBarContainer' className={`${active ? 'active' : ''}`}>
        <div className={`menuBtnContainer ${active ? 'active' : ''}`}>
            <MenuButton setActive={setActive} active={active}/>
        </div>
        {navLinks.map((link) => (
                <a href={`#${link.id}`} key={link.id} onClick={() => {
                  setActive(!active);
                }}>
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

    </div>
  );
};

export default MenuBar;
