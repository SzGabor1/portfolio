import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {FaCode} from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';

interface ExperienceProps {
  experiences: {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle = {{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date={`${experience.startDate} - ${experience.endDate}`}
            icon={<FaCode />}
          >
            <h3 className="vertical-timeline-element-title">{experience.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
            <p>{experience.location}</p>
            <p>{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
