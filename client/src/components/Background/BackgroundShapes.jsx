/* eslint-disable prefer-const */
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

  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;

  const moveComponents = (e) => {
    let amountMovedX = (centerX - e.clientX) / 20;
    let amountMovedY = (centerY - e.clientY) / 20;

    $('.shapeGp1')
      .css('transform', `translate3d(${amountMovedX * 9}px, ${amountMovedY * 4}px, 0)
      rotate(${amountMovedY * 4}deg)`);
    $('.shapeGp2')
      .css('transform', `translate3d(${amountMovedX * -4}px, ${amountMovedY * 2}px, 0)
      rotate(${amountMovedY * 2}deg)`);
    $('.shapeGp3')
      .css('transform', `translate3d(${amountMovedX * -9}px, ${amountMovedY * -2}px, 0)
      rotate(${amountMovedY * -4}deg)`);
    $('.shapeGp4')
      .css('transform', `translate3d(${amountMovedX * 2}px, ${amountMovedY * -6}px, 0)
      rotate(${amountMovedY * 4}deg)`);
  };

  let count = 0;
  useEffect(() => {

  }, [document.body.addEventListener('mousemove', (e) => {
    if (count % 20 === 0) {
      moveComponents(e);
    }
    /* eslint-disable no-plusplus */
    count++;
  })]);

  return (
    <div id='shapesContainer' style={{ translate: '0 0px' }}>
      <IoLogoNodejs className={`bgShape ${randomizeColor()} ${randomizeSize()} x0 y0 shapeGp1`}/>

      <IoLogoGithub className={`bgShape ${randomizeColor()} lg x1 y1 shapeGp2`}/>
      <FaReact className='bgShape pinks sm x3 y1 shapeGp4'/>
      <IoLogoCss3 className={`bgShape ${randomizeColor()} ${randomizeSize()} x4 y1 shapeGp3`}/>

      <IoLogoHtml5 className={`bgShape ${randomizeColor()} ${randomizeSize()} x4 y2 shapeGp4`}/>
      <IoLogoCss3 className={`bgShape ${randomizeColor()} ${randomizeSize()} x3 y2 shapeGp1`}/>
      <HiStar className={`bgShape ${randomizeColor()} ${randomizeSize()} x2 y2 shapeGp3`}/>

      <HiCloud className={`bgShape ${randomizeColor()} lg x1 y3 shapeGp2`}/>
      <IoLogoNodejs className={`bgShape ${randomizeColor()} ${randomizeSize()} x3 y3 shapeGp2`}/>
      <HiOutlineCog className={`bgShape ${randomizeColor()} ${randomizeSize()} x4 y3 shapeGp3`}/>

      <HiCode className={`bgShape ${randomizeColor()} ${randomizeSize()} x2 y4 shapeGp1`}/>
      <IoLogoHtml5 className={`bgShape ${randomizeColor()} ${randomizeSize()} x3 y4 shapeGp2`}/>
      <FaReact className={`bgShape ${randomizeColor()} ${randomizeSize()} x4 y4 shapeGp1`}/>

      <IoLogoCss3 className={`bgShape ${randomizeColor()} ${randomizeSize()} x0 y5 shapeGp1`}/>
      <HiCode className={`bgShape ${randomizeColor()} ${randomizeSize()} x1 y5 shapeGp4`}/>
      <IoLogoNodejs className={`bgShape ${randomizeColor()} ${randomizeSize()} x5 y5 shapeGp4`}/>

      <IoLogoGithub className={`bgShape ${randomizeColor()} lg x2 y6 shapeGp2`}/>
      <IoLogoHtml5 className={`bgShape ${randomizeColor()} ${randomizeSize()} x3 y3 shapeGp4`}/>
      <IoLogoNodejs className={`bgShape ${randomizeColor()} ${randomizeSize()} x4 y4 shapeGp3`}/>

      <IoLogoNodejs className={`bgShape ${randomizeColor()} ${randomizeSize()} x3 y5 shapeGp2`}/>
      <HiOutlineCog className={`bgShape ${randomizeColor()} ${randomizeSize()} x4 y5 shapeGp3`}/>

      <HiCode className={`bgShape ${randomizeColor()} ${randomizeSize()} x2 y2 shapeGp1`}/>
      <IoLogoNodejs className={`bgShape ${randomizeColor()} ${randomizeSize()} x3 y1 shapeGp2`}/>
      <FaReact className={`bgShape ${randomizeColor()} ${randomizeSize()} x4 y3 shapeGp1`}/>
    </div>
  );
};

export default BackgroundShapes;
