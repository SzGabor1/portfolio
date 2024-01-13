import { useState, useEffect } from 'react';
import './styles/App.css';
import Profile from './components/profile';
import Header from './components/header';
import Experience from './components/experience';
import Skills from './components/skills';
import ProjectCarousel from './components/projects';

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
      <Profile />
      <div id="about">About Section Content
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat exercitationem autem beatae, reprehenderit maxime eum. Quidem maiores officiis, consectetur optio excepturi accusantium, numquam molestias, dolorem laboriosam magni non quaerat facilis!
      Debitis quidem expedita laboriosam adipisci libero quia est consequatur maiores veritatis mollitia voluptatum vitae, cupiditate rerum similique saepe! Voluptas tenetur laboriosam dolorum laudantium nam. Ullam consectetur blanditiis aut sunt perferendis!
      Eaque, deleniti? Debitis omnis ipsam fuga consectetur corporis illum saepe iusto a sapiente temporibus facere veniam, ad ut inventore recusandae! Voluptas temporibus quidem explicabo ea molestiae maiores itaque, repellendus maxime.
      Eaque dolore, ab sunt aut tempora laudantium velit nesciunt id. A incidunt dignissimos, fugit accusantium expedita quos iure fugiat vitae ipsum tempora eaque, optio veniam praesentium eveniet totam quam! Doloremque.
      Aperiam eaque blanditiis qui minus aut? Enim autem eum possimus, saepe quaerat ratione expedita iusto, consectetur nemo, suscipit similique quod iure quisquam distinctio? Voluptates porro rerum incidunt placeat cumque et.
      Distinctio ab, id modi culpa quas quidem beatae dolorum quis a, architecto voluptatum laboriosam facilis doloribus quasi autem illo at, magnam itaque voluptatem suscipit expedita! Ducimus ab quasi id nulla?
      Similique quam quisquam minima nobis facere, quis accusamus repudiandae sint beatae officia assumenda? Dolorem omnis soluta nihil sint recusandae saepe unde, rem, modi distinctio hic, sapiente quos earum maiores quod.
      Architecto eum dolorem hic dolorum beatae possimus inventore. Pariatur nostrum velit ipsam, veritatis adipisci iusto necessitatibus quas sapiente corrupti, ad eum ipsum iste hic itaque deleniti tenetur vel in totam.
      Nulla, id alias ipsa rerum quia, eos porro molestias obcaecati consectetur corrupti tempore cumque aperiam qui quas animi adipisci dolor rem laborum. Dolorum nemo veniam tempore aliquam accusamus, ducimus possimus.
      Ullam magnam cupiditate at voluptatibus perspiciatis qui temporibus officiis voluptatum vitae consequatur, laudantium nostrum veritatis! Porro quod culpa, assumenda, ad tenetur vero voluptatem magnam libero praesentium non pariatur animi sunt?
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience experiences={experiences} />
      </div>
      <div id="projects">
         <ProjectCarousel projects={projects} />
      </div>
      <div id="contact">Contact Section Content</div>
    </>
  );
}

export default App;
