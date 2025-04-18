import React, { useState } from 'react';
import workData from "../../data/WorkExperience.json";
import "../../styles/WorkExperience.css"; 

const WorkExperience = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="work-container">
      <h2 className="work-title">Workstation Adventures 🚀</h2>
      <div className="work-grid">
        {workData.map((work) => (
          <div
            key={work.id}
            className={`work-card ${hoveredId === work.id ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredId(work.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="computer-frame">
              <div className="screen-content">
                <h3>{work.title}</h3>
                <p>{work.org}</p>
                <p>{work.start_date} - {work.end_date} | {work.location}</p>
              </div>
            </div>
            {hoveredId === work.id && <div className="blur-overlay"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
