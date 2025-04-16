import React, { useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import educationData from "../../data/Education.json";
import "../../styles/Education.css"; 
import purdueLogo from "../../assets/PFW.jpeg";
import utdLogo from "../../assets/UTD.jpeg";
import grietLogo from "../../assets/GRIET.jpeg";
import sriChaitanyaLogo from "../../assets/SC.jpeg";
import stmarysLogo from "../../assets/STM.jpg";

const logos = {
    1: purdueLogo,
    2: utdLogo,
    3: grietLogo,
    4: sriChaitanyaLogo,
    5: stmarysLogo,
};

const Education = () => {
    const canvasRefs = useRef([]);
    const [triggered, setTriggered] = useState({});

    const triggerConfetti = (index) => {
        if (triggered[index]) return;

        const canvas = canvasRefs.current[index];
        if (!canvas) return;

        const myConfetti = confetti.create(canvas, { resize: true, useWorker: true });

        myConfetti({
            particleCount: 60,
            spread: 70,
            origin: { x: 0.5, y: 0.5 },
        });

        setTriggered(prev => ({ ...prev, [index]: true }));
    };

    return (
        <div className="education-container">
            <h1 className="edu-title">My Scholar Saga 📚✨</h1>
            <div className="edu-grid">
                {educationData.map((edu, index) => (
                    <div
                        className="edu-card"
                        key={edu.id}
                        onMouseEnter={() => triggerConfetti(index)}
                        style={{ position: 'relative' }}
                    >
                        <canvas
                            ref={el => canvasRefs.current[index] = el}
                            className="confetti-canvas"
                        />
                        <div className="grad-hat-container">
                            <img
                                src="/assets/grad-hat.jpg"
                                alt="Grad Hat"
                                className="grad-hat"
                            />
                        </div>
                        <div className="edu-info">
                            <div className="edu-header">
                                <img src={logos[edu.id]} alt={edu.university} className="edu-logo" />
                                <h2 className="edu-univ">{edu.university}</h2>
                            </div>
                            <p><strong>Degree:</strong> {edu.degree}</p>
                            {edu.field && <p><strong>Field:</strong> {edu.field}</p>}
                            <p><strong>Duration:</strong> {edu.start_date} - {edu.end_date}</p>
                            <p><strong>Grade:</strong> {edu.grade}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
