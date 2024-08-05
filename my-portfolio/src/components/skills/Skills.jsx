import React from 'react';
import "./skills.scss";

const skillList = [
  { name: "JavaScript", color: "#f1c40f" },
  { name: "React", color: "#61dafb" },
  { name: "CSS", color: "#264de4" },
  { name: "HTML", color: "#e34c26" },
  { name: "Node.js", color: "#68a063" },
  { name: "Git", color: "#f1502f" },
  { name: "TypeScript", color: "#3178c6" },
  { name: ".Net", color: "#8ed6fb" }
];

export default function Skills() {
  return (
    <div className='skills' id="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        {skillList.map((skill, index) => (
          <div className="circle" key={index} style={{ backgroundColor: skill.color }}>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}