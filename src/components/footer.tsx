import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import '../styles/footer.css';
const Footer: React.FC = () => {
  return (
    <footer>
      <div className='footer-content'>
        <div className="footer-left">
            <a href="https://github.com/SzGabor1" target='_blank'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/g%C3%A1bor-szendrei-0ab027298/" target='_blank'><FaLinkedin /></a>
            <a href="https://www.instagram.com/szendrei__gabor" target='_blank'><FaInstagram /></a>
        </div>
        <div className='footer-right'>
            <form>
                <div className="inputfield name">
                <input id="name" type="text" required></input>
                <label htmlFor='name'>Name</label>
                </div>

                <div  className="inputfield email">
                <input id="email" type="text" required></input>
                <label htmlFor='email'>Email</label>

                </div>
                <div className="inputfield">
                <textarea id="message" required></textarea>
                <label htmlFor='message'>Message</label>
                    
                </div>
                <div className="inputfield-button">
                <button type="submit">Send</button>
                </div>
            </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
