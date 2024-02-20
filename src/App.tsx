import { useState, useEffect } from 'react';
import './styles/App.css';
import Profile from './components/profile';
import Header from './components/header';
import Experience from './components/experience';
import Skills from './components/skills';
import ProjectCarousel from './components/projects';
import About from './components/about';

import mejpg from './assets/me.jpg';
import kerijpg from './assets/keri.jpg';

function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
  };

  useEffect(() => {
    const element = document.getElementById(activeSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  const experiences = [
    {
      type: 'school',
      title: 'University of Miskolc',
      company: 'Software Information Technology BSc.',
      location: 'Miskolc',
      startDate: '2022',
      endDate: 'present',
      description: 'I am currently studying at the University of Miskolc, where I am studying software information technology. I am currently in the 3rd semester of my studies. I am interested in the field of software development, so I am constantly learning new things. I am currently learning the basics of web development, and I am also interested in the field of artificial intell',
    },    {
      type: 'work',
      title: 'UCMDB developer, Python scripter',
      company: 'National Tax and Customs Administration.',
      location: 'Miskolc',
      startDate: '10-2023',
      endDate: 'present',
      description: 'Exploring the server infrastructure of virtual environments.      Network infrastructure reconnaissance.      Programmatically addressing discovered devices through specific protocols.   Establishing interfaces between monitoring devices and the reconnaissance tool.',
    },
    {
      type: 'work',
      title: 'Python developer',
      company: 'Amtech rendszerház kft.',
      location: 'Budapest',
      startDate: '09-2023',
      endDate: '06-2023',
      description: 'I spent my internship at Amtech Rendszerház Kft., where I worked on pygame-based gamedevelopment. During the project, I used MySQL database, FastAPI framework and Pythonbase libraries. With the help of my experience, I managed to create an interactive game,which I will present as a thesis.',
    },
    {
      type: 'work',
      title: '3D measuring machine operator',
      company: 'Prec-Cast Kft.',
      location: 'Sátoraljaújhely',
      startDate: '06-2021',
      endDate: '09-2021',
      description: "As a 3D quality controller, my role was to take responsibility for the quality and accuracy ofthe 3D modeling process. My task was a detailed evaluation of the completed aluminumcastings to ensure that they met the customer's expectations and the company's standards.I identified the machining errors and documented them."
    },
    {
      type: 'work',
      title: 'Warehouse worker',
      company: 'Italkereskedő-ház zrt.',
      location: 'City, Country',
      startDate: '07.2019',
      endDate: '09-2019',
      description: 'Storage, movement, warehouse placement of goods, physical loading and unloadingonto/from trucks. Participation in customer service. Receiving orders, checking theirquantity and quality.'
    },
    {
      type: 'school',
      title: 'High school',
      company: 'Szent István Katolikus Technikum és Gimnázium',
      location: 'Sátoraljaújhely',
      startDate: '2017',
      endDate: '2021',
      description: 'I graduated from Szent István Katolikus Technikum és Gimnázium in 2021. I studied in the field of information technology. During my studies, I learned the basics of programming, webdevelopment, and I also learned the basics of computer networks and hardware.'
    },
    {
      type: 'work',
      title: '3D modelling, webdesign',
      company: 'Erasmus - Global School',
      location: 'Wien',
      startDate: '11.2018',
      endDate: '12.2018',
      description: 'Website design planning and the creation of the necessary graphics and other mediaelements, as well as their integration into the website.  Making 3-dimensional models of buildings and objects.      Keeping a blog in English about progress at work.'
    }
  ];
  

  const projects = [
    {
      title: 'Project 1',
      description:  'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: mejpg,
    },
    {
      title: 'Project 2',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: mejpg,
    },    {
      title: 'Project 3',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: kerijpg,
    },    {
      title: 'Project 4',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: kerijpg,
    },    {
      title: 'Project 5',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: kerijpg,
    },    {
      title: 'Project 6',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: mejpg,
    },    {
      title: 'Project 7',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: kerijpg,
    },    {
      title: 'Project 8',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: kerijpg,
    },
  ];


  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <div className= 'title'>
        <h1>Szendrei Gábor</h1>
      </div>
      <div id="about">
      <About />
      <Profile />
      </div>
      <div id="skills">
        {<Skills />}
      </div>
      <div id="experience">
        {<Experience experiences={experiences} />}
      </div>
      <div id="projects">
         <ProjectCarousel projects={projects} />
      </div>
      <div id="contact">Contact Section Content</div>
    </>
  );
}

export default App;
