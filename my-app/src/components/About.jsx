import React, {useState, useEffect} from 'react';
import AboutData from "../data/About.json";

const About = () => {
    const[about, setAbout] = useState("");

    useEffect(() => {
        setAbout(AboutData);
    }, []);

    return(
        <>
            <div>
                <h1>About Me</h1>
                <h2>{about}</h2>
            </div>
        </>

    );
};

export default About