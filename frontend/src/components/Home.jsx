import React from 'react';
import './Home.css';

 import profileImage from '/verosha-profile.jpg'; 

const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="home-overlay"></div>
            <div className="home-content">
                <div className="home-profile-pic-container">
                    {<img src={profileImage} alt="Verosha Bomulla" className="home-profile-pic" /> }
                    
                </div>
                <h1 className="home-title">Hi, I'm Verosha Bomulla</h1>
                <p className="home-subtitle">I am an undergraduate Software Engineer</p>

                <div className="home-cta">
                    <a href="/Verosha Bomulla - CV.pdf" className="btn btn-cv" download>
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;