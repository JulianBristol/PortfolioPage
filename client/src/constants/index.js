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
  cloudinaryDemo,
  heavensVault,
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
    date: 'July 2022 - Sept 2022',
    points: [
      'Design components and webpages using UI/UX best practices.',
      'Develop and maintain web applications using React.js and other related technologies.',
      'Collaborate with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implement responsive design and ensure cross-browser compatibility.',
      'Participate in code reviews and provide constructive feedback to other developers.',
    ],
  },
  {
    title: 'Front-End Developer',
    companyName: 'Lykka Village',
    icon: lykka,
    date: 'Sept 2022 - Feb 2023',
    points: [
      'Implement advanced code refactoring techniques, performance optimization - reducing database and RESTful API calls by 23%',
      'Implement collegiate training and mentoring programs to help students master CSS3, HTML5, JavaScript, and Reactjs',
      'Design, develop, and deploy web pages following the latest UI/UX design practices and WCAG accessibility standards',
      'Employed the use of Gitlab to manage version control and incorporation of students\' code.'
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
        name: 'MongoDB',
        color: '#7dc353',
      },
      {
        name: 'Express.js',
        color: '#CC112C',
      },
      {
        name: 'React.js',
        color: '#00d9ff',
      },
      {
        name: 'Node.js',
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
    name: 'FaceBlog',
    description:
        'FaceBlog is a website that combines my portfolio, blog, and thoughts with AI-generated profiles and posts. Built using ReactJS, Javascript, MUI, and several APIs, it aims to help people learn more about me and my ideas.',
    tags: [
      {
        name: 'React.js',
        color: '#00d9ff',
      },
      {
        name: 'JavaScript',
        color: '#ffd600',
      },
      {
        name: 'MUI',
        color: '#0ea5e9',
      },
    ],
    image: blog,
    sourceCodeLink: 'https://github.com/JulianBristol/FaceBlog',
    activeLink: 'https://face-blog.netlify.app',
  },
  {
    name: 'Travel Wisely',
    description:
    'A comprehensive a platform that empowers users with location-based information, weather forecasts, and recommendations for nearby restaurants, hotels, and attractions. It helps users make informed travel decisions and explore new places with confidence.',
    tags: [
      {
        name: 'React.js',
        color: '#00d9ff',
      },
      {
        name: 'JavaScript',
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
  {
    name: 'Heaven\'s Vault Translator',
    description:
    'Heaven\'s Vault is a game with an interesting gimmick where you need to translate ancient runes into modern day language. This program acts as a translator of sorts, allowing you to Create, Read, Update, and Delete words and their meanings.',
    tags: [
      {
        name: 'Java',
        color: '#ffb5b5',
      },
      {
        name: 'MySQL',
        color: '#e38b5d',
      },
      {
        name: 'CRUD',
        color: '#c599ff',
      },
      {
        name: 'SceneBuilder',
        color: '#dffc5e',
      },
    ],
    image: heavensVault,
    sourceCodeLink: 'https://github.com/JulianBristol/HeavensVaultTranslator',
  },
  {
    name: 'Cloudinary Image Viewer',
    description:
    'Cloudinary is a cloud-enabled image and video storage and management site. This application displays my abilities to work with Cloudinary\'s API to upload, store, and retrieve images for view consumption. While originally intended to work with a backend server, the code has been recently modified for display using Netlify\'s serverless backend',
    tags: [
      {
        name: 'React.js',
        color: '#00d9ff',
      },
      {
        name: 'JavaScript',
        color: '#ffd600',
      },
      {
        name: 'CSS',
        color: '#0ee979',
      },
      {
        name: 'Node.js',
        color: '#ac22e0',
      },
      {
        name: 'Express.js',
        color: '#CC112C',
      },
    ],
    image: cloudinaryDemo,
    sourceCodeLink: 'https://github.com/JulianBristol/CloudinaryImageUpload_Demo',
    activeLink: 'https://clouduploud.netlify.app',
  },
];

export { technologies, experiences, projects };
