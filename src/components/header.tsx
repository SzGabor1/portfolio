import React from 'react';

interface HeaderProps {
  scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const handleLinkClick = (section: string) => {
    scrollToSection(section);
  };

  return (
    <div className="header home">
      <button onClick={() => handleLinkClick('home')}>Home</button>
      <button onClick={() => handleLinkClick('about')}>About</button>
      <button onClick={() => handleLinkClick('skills')}>Skills</button>
      <button onClick={() => handleLinkClick('experience')}>Experience</button>
      <button onClick={() => handleLinkClick('projects')}>Projects</button>
      <button onClick={() => handleLinkClick('contact')}>Contact</button>

    </div>
  );
};

export default Header;
