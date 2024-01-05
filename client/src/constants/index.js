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
  nextjs,
  git,
  figma,
  capella,
  lykka,
  smartwiz,
  water,
  blog,
  travelWisely,
  breadit,
  wanderInn,
  /* cloudinaryDemo, */
  heavensVault,
} from '../assets';

import logo from '../assets/company/logo.svg';
import java from '../assets/tech/java.webp';

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
    name: 'Tailwind CSS',
    icon: tailwind,
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
    name: 'NextJS',
    icon: nextjs,
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
    date: 'Feb 2023 - Sept 2023',
    points: [
      'Collaborate with stakeholders and other developers to create flexible designs and create custom web solutions',
      'Develop responsive and user-friendly websites using HTML, CSS, JavaScript, and other web technologies',
      'Design visually appealing and engaging user interfaces',
    ],
  },
  {
    title: 'Software Developer',
    companyName: 'SmartWiz',
    icon: smartwiz,
    date: 'Nov 2023 - Present',
    points: [
      `Collaborate with product managers, design, and QA teams to translate business requirements into scalable web experiences, 
      ensuring effective communication and seamless integration throughout the development process.`,
      `Utilized expertise in React.js, TypeScript, and other modern web technologies to build user-friendly and 
      responsive web experiences driving customer engagement and retention.`,
      `Reviewed code for complex software modules, consistently adhering to industry best practices
      and coding standards.`,
    ],
  },
];

const projects = [
  {
    name: 'WanderInn',
    description: `Discover unique stays, from cozy cabins to urban lofts, and everything in between. 
    With WanderInn, you'll find the ideal place to call home while you explore new destinations.`,
    tags: [
      {
        name: 'React.js',
        color: '#00d9ff',
      },
      {
        name: 'TypeScript',
        color: '#07ff00',
      },
      {
        name: 'TailwindCSS',
        color: '#a0eba8',
      },
      {
        name: 'MongoDB',
        color: '#7dc353',
      },
      {
        name: 'Redux',
        color: '#adc3c3',
      },
    ],
    image: wanderInn,
    sourceCodeLink: 'https://github.com/JulianBristol/WanderInn',
    activeLink: 'https://wanderinn.vercel.app/',
  },
  {
    name: 'Breadit',
    description: 'Breadit is a Reddit clone for just about anything you can think of. Feel free to signup for an account and post whatever you like. It is a FullStack application that employs concepts like infinite scrolling, caching, authentication, optimistic updates and more.',
    tags: [
      {
        name: 'React.js',
        color: '#00d9ff',
      },
      {
        name: 'TypeScript',
        color: '#07ff00',
      },
      {
        name: 'TailwindCSS',
        color: '#a0eba8',
      },
      {
        name: 'MongoDB',
        color: '#7dc353',
      },
      {
        name: 'Redux',
        color: '#adc3c3',
      },
    ],
    image: breadit,
    sourceCodeLink: 'https://github.com/JulianBristol/Breadit',
    activeLink: 'https://breadit.netlify.app/',
  },
  {
    name: 'Searcy Water Utilities',
    description: 'Revamp the existing Searcy Water Utilities website to provide information and services to the residents of Searcy Arkansas.',
    tags: [
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
    description: 'FaceBlog is a website that combines my portfolio, blog, and thoughts with AI-generated profiles and posts. Built using ReactJS, Javascript, MUI, and several APIs, it aims to help people learn more about me and my ideas.',
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
    description: 'A comprehensive platform that empowers users with location-based information, weather forecasts, and recommendations for nearby restaurants, hotels, and attractions. It helps users make informed travel decisions and explore new places with confidence.',
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
    description: 'Heaven\'s Vault is a game with an interesting gimmick where you need to translate ancient runes into modern day language. This program acts as a translator of sorts, allowing you to Create, Read, Update, and Delete words and their meanings.',
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
    activeLink: 'https://github.com/JulianBristol/HeavensVaultTranslator',
  }/*
  {
    name: 'Cloudinary Image Viewer',
    description: 'Cloudinary is a cloud-enabled image and video storage and management site. This application displays my abilities to work with Cloudinary\'s API to upload, store, and retrieve images for viewer consumption. While originally intended to work with a backend server, the code has been recently modified for display using Netlify\'s serverless backend',
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
    activeLink: 'https://cloudinaryupload.netlify.app/',
  }, */
];

export { technologies, experiences, projects };
