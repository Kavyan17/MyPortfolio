import React from 'react';
import techData from '../../data/Technologies.json';
import '../../styles/Technologies.css';
import cpp from '../../assets/tech-icons/cpp.png';
import java from '../../assets/tech-icons/java.png';
import c from '../../assets/tech-icons/c.png';
import python from '../../assets/tech-icons/python.png';
import csharp from '../../assets/tech-icons/csharp.png';
import mysql from '../../assets/tech-icons/MySQL.png';
import postgres from '../../assets/tech-icons/PostgresSQL.png';
import react from '../../assets/tech-icons/React.png'; 
import html from '../../assets/tech-icons/html.png'; 
import css from '../../assets/tech-icons/css.png'; 
import js from '../../assets/tech-icons/js.png';
import ts from '../../assets/tech-icons/ts.png';
import node from '../../assets/tech-icons/node.png';
import graphql from '../../assets/tech-icons/graphql.png';
import git from '../../assets/tech-icons/git.png';
import gcp from '../../assets/tech-icons/gcp.png';
import eclipse from '../../assets/tech-icons/eclipse.png';
import jira from '../../assets/tech-icons/jira.png';
import json from '../../assets/tech-icons/json.png';
import mocha from '../../assets/tech-icons/mocha.png';
import matlab from '../../assets/tech-icons/matlab.png';
import pytorch from '../../assets/tech-icons/pytorch.png';
import sklearn from '../../assets/tech-icons/scikit-learn.png';
import tensorflow from '../../assets/tech-icons/tensorflow.png';
import vscode from '../../assets/tech-icons/vscode.png';

const icons = {
  "cpp.png": cpp,
  "java.png": java,
  "c.png": c,
  "python.png": python,
  "c#.png": csharp,
  "MySQL.png": mysql,
  "PostgresSQL.png": postgres,
  "React.png": react,
  "html.png": html,
  "css.png": css,
  "js.png": js,
  "ts.png": ts,
  "node.png": node,
  "graphql.png": graphql,
  "git.png": git,
  "gcp.png": gcp,
  "eclipse.png": eclipse,
  "jira.png": jira,
  "json.png": json,
  "mocha.png": mocha,
  "matlab.png": matlab,
  "pytorch.png": pytorch,
  "scikit-learn.png": sklearn,
  "tensorflow.png": tensorflow,
  "vscode.png": vscode,
};

const uniqueTechData = Array.from(
    new Map(techData.map(item => [item.name + item.icon, item])).values()
);

const Technologies = () => {
  return (
    <div className="tech-container">
      {/* <h2 className="tech-title">👩‍💻 My Dev Arsenal</h2> */}
      
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
