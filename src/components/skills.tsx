import 'react-vertical-timeline-component/style.min.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/Skills.css'; 

const Skills = () => {
  const skillsData: { [key: string]: number } = {
    Python: 80,
    Java: 60,
    JavaScript: 70,
    C: 50,
    SQL: 65,
    HTML: 75,
    CSS: 70,
    PHP: 55,
    UCMDB: 85,
    Photoshop: 90,
    'Office 365': 75,
    React: 80,
    'Node.js': 70,
    FastAPI: 60,
    Pygame: 55,
    Bootstrap: 65,
  };

  return (
    <div className="skills">
      <div className="skills_title">
        <h2>Skills, technologies</h2>
      </div>
      <div className="skills_content">
        <div className="prog_languages">
          <h3>Programming languages</h3>
          <ul>
            {Object.keys(skillsData).slice(0, 8).map(skill => (
              <li key={skill}>
                <div className="progress-bar-container">
                  <CircularProgressbar
                    value={skillsData[skill]}
                    text={skill}
                    styles={buildStyles({
                      textColor: 'black',
                      pathColor: skillsData[skill] === 100 ? 'lightblue' : '#3e98c7',
                      trailColor: 'transparent',
                    })}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="other_skills">
          <h3>Apps, Frameworks, libraries</h3>
          <ul>
            {Object.keys(skillsData).slice(8).map(skill => (
              <li key={skill}>
                <div className="progress-bar-container">
                  <CircularProgressbar
                    value={skillsData[skill]}
                    text={skill}
                    styles={buildStyles({
                      textColor: 'black',
                      pathColor: skillsData[skill] === 100 ? 'lightblue' : '#3e98c7',
                      trailColor: 'transparent',
                    })}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
