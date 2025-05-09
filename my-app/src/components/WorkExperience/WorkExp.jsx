import React, { useState } from 'react';
import workData from "../../data/WorkExperience.json";
import "../../styles/WorkExperience.css";
import laptopImage from '../../assets/laptop.png';
import purdueLogo from "../../assets/PFW.jpeg";
import luke from "../../assets/LUKE.avif";
import tcs from "../../assets/TCS.jpeg";
import profile from "../../assets/profile/profile.jpeg";
import siemens from "../../assets/SIEMENS.jpeg";
import bhel from "../../assets/BHEL.jpeg";

const logos = {
    1: luke,
    2: purdueLogo,
    3: tcs,
    4: profile,
    5: siemens,
    6: bhel,
};

const glowColors = {
    1: "#ff69b4",
    2: "#800080",
    3: "#007bff",
    4: "#ffd700",
    5: "#20c997",
    6: "#ff7f00",
};

const WorkExperience = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleCardClick = (item) => {
    setActiveItem(item);
  };

  const handleBackClick = () => {
    setActiveItem(null);
  };

  return (
    <div className="work-container">
      {activeItem ? (
        <div className="expanded-view">
          <div className="left-section">
            <div className="laptop-frame">
              <img src={laptopImage} alt="Laptop" className="laptop-img" />
              <div className="screen-default">
                <h3>{activeItem.title}</h3>
                <p>({activeItem.start_date} - {activeItem.end_date})</p>
              </div>
            </div>
          </div>
          <div className="right-section">
            <button className="back-button" onClick={handleBackClick}>← Back</button>
            <div className="header-row">
              <img
                src={logos[activeItem.id]}
                alt="Org Logo"
                className="org-logo"
                style={{ boxShadow: `0 0 6px ${glowColors[activeItem.id]}` }}
              />
              <h3 className="job-title">{activeItem.title}</h3>
            </div>
            <p className="job-description">{activeItem.description}</p>
        </div>
        </div>
      ) : (
        <div className="work-grid">
          {workData.map((item) => (
            <div
              className="work-card"
              key={item.id}
              onClick={() => handleCardClick(item)}
            >
              <div className="laptop-frame clickable">
                <img src={laptopImage} alt="Laptop" className="laptop-img" />
                <div className="screen-default">
                  <h3>{item.title}</h3>
                  <p>({item.start_date} - {item.end_date})</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkExperience;
