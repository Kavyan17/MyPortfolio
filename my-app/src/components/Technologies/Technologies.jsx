import React from 'react';
import techData from '../../data/Technologies.json';
import '../../styles/Technologies.css';
import cpp from '../../assets/tech-icons/cpp.png';
import java from '../../assets/tech-icons/java.png';

const icons = {
  "cpp.png": cpp,
  "java.png": java
};

const Technologies = () => {
  return (
    <div className="tech-container">
      <h2 className="tech-title">🚀 Technologies I Know</h2>
      <div className="tech-grid">
        {techData.map((tech) => (
          <div key={tech.id} className="tech-icon-wrapper">
            <div className="tech-icon-inner">
              <div className="tech-icon-front">
                <img src={icons[tech.icon]} alt={tech.name} className="tech-icon-img" />
              </div>
              <div className="tech-icon-back">
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
