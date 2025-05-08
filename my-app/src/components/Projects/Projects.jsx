import React from 'react';
import projectData from '../../data/Projects.json';
import '../../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      {/* <h2 className="projects-title">🚀 Projects</h2> */}
      <div className="projects-grid">
        {projectData.map(({ id, title, link, desc }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3 className="project-title">{title}</h3>
            {desc && <p className="project-desc">{desc}</p>}
            <span className="project-link">View on GitHub ↗</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
