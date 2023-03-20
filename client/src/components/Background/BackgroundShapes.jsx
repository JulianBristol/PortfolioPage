/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import { IoLogoNodejs, IoLogoHtml5, IoLogoGithub, IoLogoCss3 } from 'react-icons/io';
import { HiStar, HiCloud } from 'react-icons/hi2';
import { HiCode, HiOutlineCog } from 'react-icons/hi';
import { FaReact } from 'react-icons/fa';
import './BackgroundShapes.css';

const BackgroundShapes = () => {
  /* Randomizer Effects */
  const randomizeColor = () => {
    let color;
    const num = Math.random();

    if (num >= 0.75) {
      color = 'reds';
    } else if (num >= 0.5) {
      color = 'blues';
    } else if (num >= 0.3) {
      color = 'yellows';
    } else if (num >= 0.1) {
      color = 'greens';
    } else {
      color = 'pinks';
    }

    return color;
  };

  const randomizeSize = () => {
    let size;
    const num = Math.random();

    if (num >= 0.8) {
      size = 'lg';
    } else if (num >= 0.5) {
      size = 'md';
    } else {
      size = 'sm';
    }

    return size;
  };

  useEffect(() => {
    const parallax = (e) => {
      const wWidth = window.innerWidth / 2;
      const wHeight = window.innerHeight / 2;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const grp1 = document.querySelectorAll('.shapeGp1');
      const grp2 = document.querySelectorAll('.shapeGp2');
      const grp3 = document.querySelectorAll('.shapeGp3');
      const grp4 = document.querySelectorAll('.shapeGp4');

      grp1.forEach((selection) => {
        selection.style.transform = `
        translateX(${50 - (mouseX - wWidth) * 0.1}px)
        translateY(${50 - (mouseY - wHeight) * 0.1}px)
        rotate(${-15 + mouseX * 0.05}deg)
        `;
      });

      grp2.forEach((selection) => {
        selection.style.transform = `
        translateX(${50 + (mouseX - wWidth) * 0.1}px)
        translateY(${50 + (mouseY - wHeight) * 0.1}px)
        rotate(${-25 + mouseY * 0.15}deg)
        `;
      });

      grp3.forEach((selection) => {
        selection.style.transform = `
        translateY(${50 + (-mouseX - wWidth) * 0.1}px)
        translateX(${50 - (mouseY - wHeight) * 0.3}px)
        rotate(${25 - mouseX * 0.35}deg)
        `;
      });

      grp4.forEach((selection) => {
        selection.style.transform = `
        translateX(${50 - (mouseX - wWidth) * 0.35}px)
        translateY(${50 + (mouseY - wHeight) * 0.25}px)
        rotate(${-25 + mouseY * 0.45}deg)
        `;
      });
    };

    // Add event listener
    document.addEventListener('mousemove', parallax);
    return () => window.removeEventListener('mousemove', parallax);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const pageTop = document.scrollingElement.scrollTop;
      const target = document.getElementById('shapesContainer');
      const scrollFactor = 0.7;
      const parallaxValue = Math.floor(pageTop * scrollFactor);

      const regex = /translate:\s*\d+px\s+(\d+)px;/;
      const updatedStyle = target.getAttribute('style').replace(regex, `translate: 30px ${parallaxValue}px;`);
      target.setAttribute('style', updatedStyle);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id='shapesContainer' style={{ translate: '0 92px' }}>
      <IoLogoNodejs className={`bgShape ${randomizeColor()} ${randomizeSize()} x0 y0 shapeGp1`}/>

      <IoLogoGithub className={`bgShape ${randomizeColor()} lg x1 y1 shapeGp3`}/>
      <FaReact className='bgShape pinks sm x3 y1 shapeGp4'/>
      <IoLogoCss3 className={`bgShape ${randomizeColor()} ${randomizeSize()} x4 y1 shapeGp3`}/>

      <IoLogoHtml5 className={`bgShape ${randomizeColor()} ${randomizeSize()} x4 y2 shapeGp4`}/>
      <IoLogoCss3 className={`bgShape ${randomizeColor()} ${randomizeSize()} x3 y2 shapeGp3`}/>
      <HiStar className={`bgShape ${randomizeColor()} ${randomizeSize()} x2 y2 shapeGp3`}/>

      <HiCloud className={`bgShape ${randomizeColor()} lg x1 y3 shapeGp3`}/>
      <IoLogoNodejs className={`bgShape ${randomizeColor()} ${randomizeSize()} x3 y3 shapeGp2`}/>
      <HiOutlineCog className={`bgShape ${randomizeColor()} ${randomizeSize()} x4 y3 shapeGp3`}/>

      <HiCode className={`bgShape ${randomizeColor()} ${randomizeSize()} x2 y4 shapeGp1`}/>
      <IoLogoHtml5 className={`bgShape ${randomizeColor()} ${randomizeSize()} x3 y4 shapeGp4`}/>
      <FaReact className={`bgShape ${randomizeColor()} ${randomizeSize()} x4 y4 shapeGp1`}/>

      <IoLogoCss3 className={`bgShape ${randomizeColor()} ${randomizeSize()} x0 y5 shapeGp1`}/>
      <HiCode className={`bgShape ${randomizeColor()} ${randomizeSize()} x1 y5 shapeGp4`}/>
      <IoLogoNodejs className={`bgShape ${randomizeColor()} ${randomizeSize()} x5 y5 shapeGp4`}/>

      <IoLogoGithub className={`bgShape ${randomizeColor()} lg x2 y6 shapeGp3`}/>
      <IoLogoHtml5 className={`bgShape ${randomizeColor()} ${randomizeSize()} x3 y6 shapeGp4`}/>
      <IoLogoNodejs className={`bgShape ${randomizeColor()} ${randomizeSize()} x4 y6 shapeGp3`}/>
    </div>
  );
};

export default BackgroundShapes;
