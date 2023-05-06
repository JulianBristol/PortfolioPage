/* eslint-disable max-len */
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

  const randomizeJitter = (x) => {
    let movement;
    const negative = Math.random();
    const num = Math.random();

    if (negative >= 0.5) {
      movement = x * num;
    } else {
      movement = -x * num;
    }

    return movement;
  };

  const shapeGp1JitterX = randomizeJitter(5);
  const shapeGp2JitterX = randomizeJitter(3.8);
  const shapeGp3JitterX = randomizeJitter(2.5);
  const shapeGp4JitterX = randomizeJitter(1);
  const shapeGp1JitterY = randomizeJitter(3);
  const shapeGp2JitterY = randomizeJitter(5);
  const shapeGp3JitterY = randomizeJitter(8);
  const shapeGp4JitterY = randomizeJitter(10);

  useEffect(() => {
    const handleScroll = () => {
      const pageTop = document.scrollingElement.scrollTop;
      const target = document.getElementById('shapesContainer');
      const scrollFactor = 0.7;
      const parallaxValue = Math.floor(pageTop * scrollFactor);

      const regex = /^\s*transform\s*:\s*translateY\(\s*\d+(?:\.\d+)?px\s*\)\s*;\s*$/;
      const updatedStyle = target.getAttribute('style').replace(regex, `transform: translateY( ${parallaxValue}px);`);
      target.setAttribute('style', updatedStyle);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const moveComponents = (e) => {
    const amountMovedX = (centerX - e.clientX) / 20;
    const amountMovedY = (centerY - e.clientY) / 20;

    $('.shapeGp1')
      .css('transform', `translate3d(${amountMovedX * 9}px, ${amountMovedY * 4}px, 0)`);
    $('.shapeGp2')
      .css('transform', `translate3d(${amountMovedY * -4}px, ${amountMovedX * 2}px, 0)`);
    $('.shapeGp3')
      .css('transform', `translate3d(${amountMovedX * -9}px, ${amountMovedY * -2}px, 0)`);
    $('.shapeGp4')
      .css('transform', `translate3d(${amountMovedX * 2}px, ${amountMovedY * -6}px, 0)`);
  };

  let count = 0;
  const handleMouseMove = (e) => {
    if (count % 20 === 0) {
      moveComponents(e);
      count = 0;
    }
    /* eslint-disable no-plusplus */
    count++;
  };

  useEffect(() => {
    document.body.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return (
    <div id='shapesContainer' style={{ transform: 'translateY(0px)' }}>
      <div className='shapesPlane shapeGp1' >
      <IoLogoNodejs style={{ left: `${shapeGp1JitterX + 50}%`, top: `${shapeGp1JitterY}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()} x0`}/>
      <HiCode style={{ left: `${shapeGp1JitterX + 25}%`, top: `${shapeGp1JitterY + 25}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <IoLogoCss3 style={{ left: `${shapeGp1JitterX + 50}%`, top: `${shapeGp1JitterY + 25}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <FaReact style={{ left: `${shapeGp1JitterX + 80}%`, top: `${shapeGp1JitterY + 50}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <HiCode style={{ left: `${shapeGp1JitterX + 25}%`, top: `${shapeGp1JitterY + 80}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <FaReact style={{ left: `${shapeGp1JitterX + 80}%`, top: `${shapeGp1JitterY + 80}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      </div>

      <div className='shapesPlane shapeGp2' >
      <IoLogoGithub style={{ left: `${shapeGp2JitterX + 10}%`, top: `${shapeGp2JitterY + 10}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <IoLogoNodejs style={{ left: `${shapeGp2JitterX + 50}%`, top: `${shapeGp2JitterY + 10}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <IoLogoGithub style={{ left: `${shapeGp2JitterX + 25}%`, top: `${shapeGp2JitterY + 25}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <HiCloud style={{ left: `${shapeGp2JitterX + 10}%`, top: `${shapeGp2JitterY + 50}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <IoLogoNodejs style={{ left: `${shapeGp2JitterX + 50}%`, top: `${shapeGp2JitterY + 50}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <HiOutlineCog style={{ left: `${shapeGp2JitterX + 80}%`, top: `${shapeGp2JitterY + 50}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <IoLogoNodejs style={{ left: `${shapeGp2JitterX + 50}%`, top: `${shapeGp2JitterY + 80}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      </div>

      <div className='shapesPlane shapeGp3' >
      <HiCloud style={{ left: `${shapeGp3JitterX + 10}%`, top: `${shapeGp3JitterY + 10}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <IoLogoCss3 style={{ left: `${shapeGp3JitterX + 80}%`, top: `${shapeGp3JitterY + 10}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <HiStar style={{ left: `${shapeGp3JitterX + 25}%`, top: `${shapeGp3JitterY + 25}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <FaReact style={{ left: `${shapeGp3JitterX + 50}%`, top: `${shapeGp3JitterY + 25}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <HiOutlineCog style={{ left: `${shapeGp3JitterX + 80}%`, top: `${shapeGp3JitterY + 50}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <IoLogoGithub style={{ left: `${shapeGp3JitterX + 25}%`, top: `${shapeGp3JitterY + 80}%` }} className={`bgShape ${randomizeColor()} lg`}/>
      <IoLogoNodejs style={{ left: `${shapeGp3JitterX + 80}%`, top: `${shapeGp3JitterY + 80}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      </div>

      <div className='shapesPlane shapeGp4' >
      <FaReact style={{ left: `${shapeGp4JitterX + 50}%`, top: `${shapeGp4JitterY + 10}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <IoLogoHtml5 style={{ left: `${shapeGp4JitterX + 80}%`, top: `${shapeGp4JitterY + 25}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <HiCode style={{ left: `${shapeGp4JitterX + 10}%`, top: `${shapeGp4JitterY + 50}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <HiCloud style={{ left: `${shapeGp4JitterX + 25}%`, top: `${shapeGp4JitterY + 80}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <IoLogoHtml5 style={{ left: `${shapeGp4JitterX + 50}%`, top: `${shapeGp4JitterY + 50}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <IoLogoNodejs style={{ left: `${shapeGp4JitterX + 50}%`, top: `${shapeGp4JitterY + 80}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      <IoLogoCss3 style={{ left: `${shapeGp4JitterX + 10}%`, top: `${shapeGp4JitterY + 80}%` }} className={`bgShape ${randomizeColor()} ${randomizeSize()}`}/>
      </div>

    </div>
  );
};

export default BackgroundShapes;
