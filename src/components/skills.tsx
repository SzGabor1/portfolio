import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../styles/Skills.css';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsData = {
    Python: 'Python',
    Java: 'Java',
    JavaScript: 'JavaScript',
    C: 'C',
    SQL: 'SQL',
    HTML: 'HTML',
    CSS: 'CSS',
    PHP: 'PHP',
    UCMDB: 'UCMDB',
    Photoshop: 'Photoshop',
    'Office 365': 'Office 365',
    React: 'React',
    'Node.js': 'Node.js',
    FastAPI: 'FastAPI',
    Pygame: 'Pygame',
    Bootstrap: 'Bootstrap',
  };

  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skillsRef.current) {
      const elements = skillsRef.current.querySelectorAll('.progress-bar-container');

      elements.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
            },

          }
        );
      });
    }
  }, []);

  return (
    <div className="skills" ref={skillsRef}>
      <div className="skills_title">
        <h2>Skills, technologies</h2>
      </div>
      <div className="skills_content">
        <div className="prog_languages">
          <h3>Programming languages</h3>
          <ul>
            {(Object.keys(skillsData) as Array<keyof typeof skillsData>).slice(0, 8).map((skill) => (
              <li key={skill} className="progress-bar-container">
                {skillsData[skill]}
              </li>
            ))}
          </ul>
        </div>
        <div className="other_skills">
          <h3>Apps, Frameworks, libraries</h3>
          <ul>
            {(Object.keys(skillsData) as Array<keyof typeof skillsData>).slice(8).map((skill) => (
              <li key={skill} className="progress-bar-container">
                {skillsData[skill]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
