import { useState, useEffect } from 'react';
import './styles/App.css';
import Profile from './components/profile';
import Header from './components/header';
import Experience from './components/experience';
import Skills from './components/skills';
import ProjectCarousel from './components/projects';
import About from './components/about';
import Footer from './components/footer';
import msjpg from './assets/ms.jpg';
import blogjpg from './assets/blog.jpg';
import wcjpg from './assets/wc.jpg';
import sanifpng from './assets/sanif.png';
import projectcpng from './assets/projectc.png';

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
      description: 'I am currently studying at the University of Miskolc, where I am studying software information technology. I am currently in the 3rd semester of my studies. My thesis is a 2D action-adventure game, which I developed in Python using Pygame libary.',
    },    {
      type: 'work',
      title: 'Intern',
      company: 'National Tax and Customs Administration. - Hungary',
      location: 'Miskolc',
      startDate: '10.2023',
      endDate: 'present',
      description: "I'm assisting in the exploration of network infrastructure through uCMDB, as well as contributing to the creation of various views and reports based on data. Additionally, I'm involved in establishing interfaces between uCMDB and unsupported devices using Python and REST API.",
    },
    {
      type: 'work',
      title: 'Intership',
      company: 'Amtech rendszerház kft.',
      location: 'Budapest',
      startDate: '09.2023',
      endDate: '06.2023',
      description: 'I spent my internship at Amtech Rendszerház Kft., where I worked on pygame-based game development. During the project, I used MySQL database, FastAPI framework and other Pythonbased libraries. With the help of my experience, I managed to create an interactive game, which I will present as a thesis.',
    },
    {
      type: 'work',
      title: '3D measuring machine operator',
      company: 'Prec-Cast Kft.',
      location: 'Sátoraljaújhely',
      startDate: '06.2021',
      endDate: '09.2021',
      description: "As a 3D quality controller, my role was to take responsibility for the quality and accuracy ofthe 3D modeling process. My task was a detailed evaluation of the completed aluminumcastings to ensure that they met the customer's expectations and the company's standards.I identified the machining errors and documented them."
    },
    {
      type: 'work',
      title: 'Warehouse worker',
      company: 'Italkereskedő-ház zrt.',
      location: 'Sárospatak',
      startDate: '07.2019',
      endDate: '09.2019',
      description: 'My job involved handling storage, movement, and warehouse placement of goods, as well as physically loading and unloading onto/from trucks. Additionally, I actively participated in customer service by receiving orders and meticulously checking their quantity and quality.'
    },
    {
      type: 'school',
      title: 'High school',
      company: 'Szent István Katolikus Technikum és Gimnázium',
      location: 'Sátoraljaújhely',
      startDate: '2017',
      endDate: '2021',
      description: 'I graduated from Szent István Katolikus Technikum és Gimnázium in 2021. I studied in the field of information technology. During my studies, I learned the basics of programming, webdevelopment, and I also learned about computer networks and hardware.'
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
      title: 'Marooned Sailor',
      description:  'Marooned Sailor is a 2D platformer game, where the player has to escape from a deserted island. The game is written in Python, and it uses the Pygame library. The game has a simple design. The game has an account system and able to save the highscores.',
      image: msjpg,
    },
    {
      title: 'Dev Blog',
      description: 'I had to write weekly reports of the Marooned Sailor game and I decided to create a blog for it. The blog is written in React and it has a simple design. The blog is able to display the posts and it has a search function witch can filter the posts by the title, post date, and content aswell.',
      image: blogjpg,
    },    {
      title: 'Worktime Calculator',
      description: "This application was created to calculate my friend's work hours. It is programmed in Python and features a straightforward graphical user interface. Not only can the application compute work hours, but it can also store the data in a file.",
      image: wcjpg,
    },    {
      title: 'SAN switch interface',
      description: "I've made an interface for SAN switches. The interface was written in Python, and it's using REST API to communicate with the switches. The interface is able to discover the brocade SAN switches, and upload the CIs and connections to the uCMDB.",
      image: sanifpng,
    },    {
      title: 'Project C',
      description: "This game was developed as part of a Software Technology course. Me and three friends collaborated to create a 2D adventure game using Java and AlmasB's FXGL library. The focus of the course was on documentation, we also decided to developing the game.",
      image: projectcpng,
    }
  ];


  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <div className= 'title'>
        <h1>Gábor Szendrei</h1>
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
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default App;
