import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am an undergraduate student pursuing a BEng (Hons) in Software Engineering at the
            Informatics Institute of Technology (IIT), Sri Lanka, affiliated with the University of
            Westminster, UK. I am passionate about learning new technologies and constantly
            strive to expand my technical knowledge.
          </p>
           
        </div>
        <div className="skills-section">
            <h3>My Core Skills</h3>
            <div className="skills-container">
                <span>React.js</span>
                <span>Node.js</span>
                <span>JavaScript</span>
                <span>Java</span>
                <span>Python</span>
                <span>HTML & CSS</span>
                <span>Spring Boot</span>
                <span>Flutter</span>
                <span>Kotlin</span>
                <span>Figma</span>
                <span>MongoDB</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;