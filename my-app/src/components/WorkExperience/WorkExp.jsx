import React from 'react';
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
    1: "#ff69b4", // Luke - Pink
    2: "#800080", // Purdue - Purple
    3: "#007bff", // TCS - Blue
    4: "#ffd700", // Profile (general) - Gold
    5: "#20c997", // Siemens - Teal
    6: "#ff7f00", // BHEL - Orange
};

const WorkExperience = () => {
  return (
    <div className="work-container">
      <h2 className="work-title">Workstation Adventures 🚀</h2>
      <div className="work-grid">
        {workData.map((item) => (
          <div className="work-card" key={item.id}>
            <div className="laptop-frame">
              <img src={laptopImage} alt="Laptop" className="laptop-img" />
              
              {/* Default screen - show title and date */}
              <div className="screen-default">
                <h3>{item.title}</h3>
                <p>({item.start_date} - {item.end_date})</p>
              </div>

              {/* Hover screen - show full details */}
              <div className="screen-hover">
                <img 
                  src={logos[item.id]} 
                  alt="Organization Logo" 
                  className="org-logo"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    marginBottom: "8px",
                    boxShadow: `0 0 6px ${glowColors[item.id]}`,
                  }}
                />
                <p style={{ fontWeight: "bold" }}>{item.org}</p>
                <p style={{ fontSize: "0.8rem" }}>{item.start_date} - {item.end_date}</p>
                <p style={{ fontSize: "0.8rem", marginBottom: "8px" }}>{item.location}</p>
                <p style={{ fontSize: "0.75rem" }}>{item.description}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
