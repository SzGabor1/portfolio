import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import emailjs, { init } from 'emailjs-com'; // Import emailjs and init from emailjs-com
import '../styles/footer.css';

// Initialize EmailJS with your user ID
init("sTGTBpTJlqrJbOqAu");

const Footer: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message
    };

    // Send email using EmailJS
    emailjs.send("service_3nah1uq", "template_pz3gom9", templateParams)
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Optionally, you can reset the form fields here
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <footer>
      <div className='footer-content'>
        <div className="footer-left">
            <a href="https://github.com/SzGabor1" target='_blank'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/g%C3%A1bor-szendrei-0ab027298/" target='_blank'><FaLinkedin /></a>
            <a href="https://www.instagram.com/szendrei__gabor" target='_blank'><FaInstagram /></a>
        </div>
        <div className='footer-right'>
            <form onSubmit={handleSubmit}>
                <div className="inputfield name">
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required></input>
                <label htmlFor='name'>Name</label>
                </div>

                <div className="inputfield email">
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                <label htmlFor='email'>Email</label>

                </div>
                <div className="inputfield">
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                <label htmlFor='message'>Message</label>
                    
                </div>
                <div className="inputfield-button">
                <button type="submit" disabled={isSending}>Send</button>
                </div>
            </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
