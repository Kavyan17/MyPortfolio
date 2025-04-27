import React from 'react';
import techData from '../../data/Technologies.json';
import '../../styles/Technologies.css';

const Technologies = () => {
  return (
    <div className="tech-container">
      <h2 className="tech-title">🚀 Technologies I Know</h2>

      <div className="tech-grid">
        {techData.map((tech) => (
          <div key={tech.id} className="tech-card">
            <div className="tech-card-inner">
              <div className="tech-card-front">
                <img 
                  src={require(`../../assets/tech-icons/${tech.icon}`)} 
                  alt={tech.name} 
                  className="tech-icon"
                />
                <p className="tech-name">{tech.name}</p>
              </div>
              <div className="tech-card-back">
                <p className="tech-level">{tech.level}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
