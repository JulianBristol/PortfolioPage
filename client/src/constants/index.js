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
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

import logo from '../assets/company/logo.svg';

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
    id: 'blog',
    fLetter: 'b',
    title: 'LOG',
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

const testimonials = [
  {
    testimonial:
        'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
        'I\'ve never met a web developer who truly cares about their clients\' success like Rick does.',
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
        'After Rick optimized our website, our traffic increased by 50%. We can\'t thank them enough!',
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
        'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
        'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
        'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { technologies, experiences, testimonials, projects };
