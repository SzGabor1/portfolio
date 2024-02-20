import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../styles/skills.css';
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiMicrosoftoffice } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { TbBrandCoinbase } from "react-icons/tb";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsData = {
    Python: <FaPython />,
    SQL: <SiMysql />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    C: <TbBrandCoinbase />,
    Java: <FaJava />,
    Git: <FaGit />,
    React: <FaReact />,
    FastAPI: <SiFastapi />,
    'Office 365': <SiMicrosoftoffice />,
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
            {(Object.keys(skillsData) as Array<keyof typeof skillsData>).slice(0, 6).map((skill) => (
              <li key={skill} className="progress-bar-container">
                {skillsData[skill]}
              </li>
            ))}
          </ul>
        </div>
        <div className="other_skills">
          <h3>Apps, Frameworks, libraries</h3>
          <ul>
            {(Object.keys(skillsData) as Array<keyof typeof skillsData>).slice(6).map((skill) => (
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
