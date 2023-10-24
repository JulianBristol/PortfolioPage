import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { fadeIn, textVariant } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';
import { github } from '../../assets';
import { projects } from '../../constants';
import './PortfolioCSS.css';

const Portfolio = () => (
    <div className='glassmorphism' style={{ maxWidth: '1500px' }}>
      {/* Original */}
        <motion.div variants={textVariant()} style={{ display: 'grid' }}>
            <h2 className='sectionTitle'>Check Out My Projects</h2>
        </motion.div>
        <motion.p className='sectionDesc' variants={fadeIn('', '', 0.1, 1)}>
            {/* eslint-disable-next-line max-len */}
            These projects demonstrate my skills and experience with real-life examples of my work. Each project is described briefly and includes links to where you can see the code and how it works. They show how I can solve tough problems, work with different technologies, and lead projects well.
        </motion.p>
        <div className='projectCardGroup'>
            {projects.map((project, index) => (
                <ProjectCard
                    key={`project-${index}`}
                    index={index}
                    {...project}
                />
            ))}
        </div>
    </div>
);

const ProjectCard = ({ index, name, description, tags, image, sourceCodeLink, activeLink }) => (
        <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
            <Tilt
                options={{
                  max: 15,
                  scale: 1,
                  speed: 1500
                }}
                className='tiltComponent'
            >
                <div
                className={`${'card'} ${activeLink !== undefined && activeLink !== '' ? 'pointer' : ''}`}
                onClick={() => {
                  if (activeLink !== undefined && activeLink !== '') {
                    window.open(activeLink, '_blank');
                  }
                }}>
                  <div className='cardImgContainer'>
                    <img
                    className='cardImg'
                    src={image}
                    alt={name}
                    />
                    {sourceCodeLink !== undefined && sourceCodeLink !== ''
                      ? <div className='gitOverlay' onClick={() => {
                        window.open(sourceCodeLink, '_blank');
                      }}>
                        <img
                        className='gitHubIcon'
                        src={github}
                        alt='github Link'
                        />
                    </div>
                      : ''
                    }
                </div>
                <div className='cardText'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                <div className='skillTags'>
                    {tags.map((tag) => (
                        <p key={tag.name} style={{ color: tag.color }}>
                            {tag.name}
                        </p>
                    ))}
                </div>
                </div>
                </div>
            </Tilt>
        </motion.div>
);

ProjectCard.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
  sourceCodeLink: PropTypes.string,
  activeLink: PropTypes.string,
};

export default SectionWrapper(Portfolio, 'portfolio', true);
