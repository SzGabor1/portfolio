import React, { useState } from 'react';
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

import '../styles/header.css'

interface HeaderProps {
  scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (section: string) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  const handleNavToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const navClass = isOpen ? 'show-nav' : '';

  return (
    <div className="header home">
      <header>
        <div className="header-text">
          <p>Portfolio</p>
        </div>
        <CgMenuLeft className="open" onClick={handleNavToggleClick}/>
        <nav>
          <ul className={`${navClass}`}>
            <AiOutlineClose className="close" onClick={handleNavToggleClick}/>
            <li onClick={() => handleLinkClick('home')}>Home</li>
            <li onClick={() => handleLinkClick('about')}>About</li>
            <li onClick={() => handleLinkClick('skills')}>Skills</li>
            <li onClick={() => handleLinkClick('experience')}>Experience</li>
            <li onClick={() => handleLinkClick('projects')}>Projects</li>
            <li onClick={() => handleLinkClick('contact')}>Contact</li>
          </ul>
        </nav>
      </header>
      {/*
      <button onClick={() => handleLinkClick('home')}>Home</button>
      <button onClick={() => handleLinkClick('about')}>About</button>
      <button onClick={() => handleLinkClick('skills')}>Skills</button>
      <button onClick={() => handleLinkClick('experience')}>Experience</button>
      <button onClick={() => handleLinkClick('projects')}>Projects</button>
      <button onClick={() => handleLinkClick('contact')}>Contact</button>
  */}
    </div>
  );
};

export default Header;
