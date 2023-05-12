/* eslint-disable max-len */
import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  git,
  figma,
  capella,
  lykka,
  water,
  blog,
  travelWisely,
  threejs,
} from '../assets';

import logo from '../assets/company/logo.svg';
import java from '../assets/tech/java.png';

export const navLinks = [
  {
    id: 'history',
    fLetter: 'h',
    title: 'ISTORY',
  },
  {
    id: 'portfolio',
    fLetter: 'p',
    title: 'ORTFOLIO',
  },
  {
    id: 'contact',
    fLetter: 'c',
    title: 'ONTACT',
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Computer Science Student',
    companyName: 'Capella University',
    icon: capella,
    date: 'Jan 2020 - Sept 2022',
    points: [
      'Learn and use languages and software to build in React.js, JavaScript, HTML, CSS, Java, SQL, and MongoDB',
      'Collaborating with students in teams composed of designers, project managers, and other developers to create graded school projects.',
      'Implement Agile methodologies, namely Scrum.',
      'Participating in learning activities directed to learn from and teach others.',
    ],
  },
  {
    title: 'Front-End Developer Intern',
    companyName: 'Lykka Village',
    icon: lykka,
    date: 'July 2022 - Feb 2023',
    points: [
      'Design components and webpages using UI/UX best practices.',
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'UI/UX Contractor and Front-End Developer',
    companyName: 'Consultancy',
    icon: logo,
    date: 'Feb 2023 - Present',
    points: [
      'Collaborate with stakeholders and other developers to create flexible designs and create custom web solutions',
      'Develop responsive and user-friendly websites using HTML, CSS, JavaScript, and other web technologies',
      'Design visually appealing and engaging user interfaces',
    ],
  },
];

const projects = [
  {
    name: 'Searcy Water Utilities',
    description:
        'Revamp the existing Searcy Water Utilities website to provide information and services to the residents of Searcy Arkansas',
    tags: [
      {
        name: 'Coming Soon',
        color: '#FF0000',
      },
      {
        name: 'mongodb',
        color: '#7dc353',
      },
      {
        name: 'expressJS',
        color: '#CC112C',
      },
      {
        name: 'react',
        color: '#00d9ff',
      },
      {
        name: 'nodejs',
        color: '#ac22e0',
      },
      {
        name: 'MUI',
        color: '#0ea5e9',
      },
    ],
    image: water,
    sourceCodeLink: '',
    activeLink: 'http://searcywater.org/',
  },
  {
    name: 'BlogSonia',
    description:
        'BlogSonia is a website that combines my portfolio, blog, and thoughts with AI-generated profiles and posts. Built using ReactJS, Javascript, MUI, and several APIs, it aims to help people learn more about me and my ideas.',
    tags: [
      {
        name: 'react',
        color: '#00d9ff',
      },
      {
        name: 'javascript',
        color: '#ffd600',
      },
      {
        name: 'MUI',
        color: '#0ea5e9',
      },
    ],
    image: blog,
    sourceCodeLink: 'https://github.com/JulianBristol/BlogSonia',
    activeLink: 'https://blogsonia.netlify.app/',
  },
  {
    name: 'Travel Wisely',
    description:
        'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'react',
        color: '#00d9ff',
      },
      {
        name: 'javascript',
        color: '#ffd600',
      },
      {
        name: 'MUI',
        color: '#0ea5e9',
      },
    ],
    image: travelWisely,
    sourceCodeLink: 'https://github.com/JulianBristol/TravelWisely',
    activeLink: 'https://travelwisely.netlify.app/',
  },
];

export { technologies, experiences, projects };
