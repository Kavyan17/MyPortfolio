import React from "react";
import "../../styles/Home.css";
import profilePic from "../../assets/profile/profile.jpeg"; 
// import Particles from 'react-particles-js';
// import ParticleBackground from './home-particle.jsx';

const Home = () => {
    return (
        <div className="home-container">
            <div className="intro-section">
                <h1>👋 Hi, I'm Kavya— Engineer, Innovator & Creative Thinker</h1>
                <p>
                    Welcome to my digital space! I’m a passionate Software Engineer with a strong foundation in 
                    full-stack development, data-driven problem-solving, and creative design. Whether I’m building
                    scalable backend systems, designing intuitive UIs, or experimenting with new ideas like automated 
                    environment setups and resume tools, I thrive 
                    at the intersection of technology and innovation.
                </p>
                <p>Explore my journey, projects, and passions. 🌟</p>
            </div>
            <div className="image-section">
                <div className="image-wrapper">
                    <img src={profilePic} alt="Kavya Profile" className="profile-img" />
                </div>
            </div>
            {/* <ParticleBackground/>  */}
        </div>
    );
};

export default Home;
