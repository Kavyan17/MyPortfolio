import React from 'react';
import workData from "../../data/WorkExperience.json";
import "../../styles/WorkExperience.css"; 
import laptopImage from '../../assets/laptop.png';

const WorkExperience = () => {
  return (
    <div className="work-container">
      <h2 className="work-title">Workstation Adventures 🚀</h2>
      <div className="work-grid">
        {workData.map((item) => (
          <div className="work-card" key={item.id}>
            <div className="laptop-frame">
              <img src={laptopImage} alt="Laptop" className="laptop-img" />
              <div className="screen-default">
                <h3>{item.title}</h3>
                <p>{item.org}</p>
                <p>{item.start_date} - {item.end_date} | {item.location}</p>
              </div>
              <div className="screen-hover">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
