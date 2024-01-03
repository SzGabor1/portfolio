import { useState, useEffect } from 'react';
import './styles/App.css';
import Profile from './components/profile';
import Header from './components/header';
import Experience from './components/experience';
import Skills from './components/skills';

function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
  };

  useEffect(() => {
    // Scroll to the active section when it changes
    const element = document.getElementById(activeSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  const experiences = [
    {
      title: '3D modelling, webdesign',
      company: 'Erasmus - Global School',
      location: 'Wien',
      startDate: '11.2018',
      endDate: '12.2018',
      description: 'Website design planning and the creation of the necessary graphics and other mediaelements, as well as their integration into the website.  Making 3-dimensional models of buildings and objects.      Keeping a blog in English about progress at work.'
        },    {
      title: 'Warehouse worker',
      company: 'Italkereskedő-ház zrt.',
      location: 'City, Country',
      startDate: '07.2019',
      endDate: '09-2019',
      description: 'Storage, movement, warehouse placement of goods, physical loading and unloadingonto/from trucks. Participation in customer service. Receiving orders, checking theirquantity and quality.' },    {
      title: '3D measuring machine operator',
      company: 'Prec-Cast Kft.',
      location: 'Sátoraljaújhely',
      startDate: '06-2021',
      endDate: '09-2021',
      description: "As a 3D quality controller, my role was to take responsibility for the quality and accuracy ofthe 3D modeling process. My task was a detailed evaluation of the completed aluminumcastings to ensure that they met the customer's expectations and the company's standards.I identified the machining errors and documented them."
    },    {
      title: 'Python developer',
      company: 'Amtech rendszerház kft.',
      location: 'Budapest',
      startDate: '09-2023',
      endDate: '06-2023',
      description: 'I spent my internship at Amtech Rendszerház Kft., where I worked on pygame-based gamedevelopment. During the project, I used MySQL database, FastAPI framework and Pythonbase libraries. With the help of my experience, I managed to create an interactive game,which I will present as a thesis.',
    },    {
      title: 'UCMDB developer, Python scripter',
      company: 'National Tax and Customs Administration.',
      location: 'Miskolc',
      startDate: '10-2023',
      endDate: 'present',
      description: 'Exploring the server infrastructure of virtual environments.      Network infrastructure reconnaissance.      Programmatically addressing discovered devices through specific protocols.   Establishing interfaces between monitoring devices and the reconnaissance tool.',
    },

  ];

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <Profile />
      <div id="about">About Section Content</div>
      <div id="skills">
        <Skills />
      </div>
        
      <div id="education">Education Section Content</div>
      <div id="work">Work Section Content</div>
      <div id="experience">
        <Experience experiences={experiences} />
      </div>
      <div id="contact">Contact Section Content</div>
    </>
  );
}

export default App;
