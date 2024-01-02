import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Profile from './components/profile';
import Header from './components/header';
import Experience from './components/experience';

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
      title: 'Software Developer',
      company: 'Example Company',
      location: 'City, Country',
      startDate: 'January 2020',
      endDate: 'Present',
      description: 'Worked on various projects using React and Node.js.',
    },    {
      title: 'Software Developer',
      company: 'Example Company',
      location: 'City, Country',
      startDate: 'January 2020',
      endDate: 'Present',
      description: 'Worked on various projects using React and Node.js.',
    },    {
      title: 'Software Developer',
      company: 'Example Company',
      location: 'City, Country',
      startDate: 'January 2020',
      endDate: 'Present',
      description: 'Worked on various projects using React and Node.js.',
    },
    // Add more experiences as needed
  ];

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <Profile />
      <div id="about">About Section Content</div>
      <div id="skills">Skills Section Content</div>
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
