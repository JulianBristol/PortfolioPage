/* eslint-disable react/prop-types */
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';
import './HistoryCSS.css';
import { experiences } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { textVariant } from '../../utils/motion';

const History = () => {
  const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement className='timelineElementCard'
    date={experience.date}
    iconStyle={{ background: experience.iconBG }}
    icon={
        <div className='xpIcon'>
            <img
            src={experience.icon}
            alt={experience.companyName}
            className='xpIconIMG'
            />
        </div>
    }
    >
        <div>
            <h3 className='xpCardTitle'>
                {experience.title}
            </h3>
            <p className='xpCardName'>{experience.companyName}</p>
            <ul className='xpListContainer'>
                {experience.points.map((point, key) => (
                    <li
                    key={`experience_point_${key}`}
                    className='XPListElem'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    </VerticalTimelineElement>
  );

  return (
    <>
    <motion.div className='history' variants={textVariant()}>
    <h2 className='sectionTitle'>What Have I Done So Far?</h2>
    </motion.div>
    <div className='verticalTimelineContainer'>
        <VerticalTimeline>
            {experiences.map((experience, key) => (
                <ExperienceCard key={key} experience={experience} />
            ))}
        </VerticalTimeline>
    </div>
    </>
  );
};

export default SectionWrapper(History, 'history', false);
