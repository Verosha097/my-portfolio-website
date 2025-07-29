import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Icons import කළා
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Verosha Bomulla. All Rights Reserved.</p>
                </div>
                <div className="social-links">
                    <a href="https://github.com/Verosha097" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/verosha-bomulla-b74277333/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;