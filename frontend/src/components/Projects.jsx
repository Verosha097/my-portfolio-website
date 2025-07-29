import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
        const response = await axios.get(`${apiUrl}/projects`);
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        setError('Could not load projects. Please make sure the backend server is running.');
        console.error(err);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) return <section id="projects" className="projects-section"><p>Loading Projects...</p></section>;
  if (error) return <section id="projects" className="projects-section"><p style={{color: '#ef4444'}}>{error}</p></section>;

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
