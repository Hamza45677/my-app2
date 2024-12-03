import React from "react";
import "./Skills.css"; // Import CSS file
import { Doughnut } from "react-chartjs-2"; // Import Doughnut chart from react-chartjs-2
import { Chart as ChartJS, Tooltip, ArcElement, Title, Legend } from "chart.js"; // Required for chart.js
ChartJS.register(Tooltip, ArcElement, Title, Legend);

const Skills = () => {
  // Doughnut Chart data
  const data = {
    labels: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    datasets: [
      {
        data: [90, 80, 75, 85, 70], // Skill levels (in %)
        backgroundColor: ["#f06529", "#264de4", "#f7df1e", "#61dbfb", "#68a063"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        {/* Skills Title */}
        <div className="skills-title fade-in">
          <h2>My Skills</h2>
          <p className="skills-description">
            I'm proficient in various technologies and continuously expanding my skill set.
          </p>
        </div>

        {/* Skills Progress Bars */}
        <div className="skills-progress fade-in">
          <div className="skill">
            <label>HTML</label>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="skill">
            <label>CSS</label>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="skill">
            <label>JavaScript</label>
            <div className="progress-bar">
              <div className="progress" style={{ width: "75%" }}></div>
            </div>
          </div>
          <div className="skill">
            <label>React</label>
            <div className="progress-bar">
              <div className="progress" style={{ width: "85%" }}></div>
            </div>
          </div>
          <div className="skill">
            <label>Node.js</label>
            <div className="progress-bar">
              <div className="progress" style={{ width: "70%" }}></div>
            </div>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="donut-chart fade-in">
          <h3>Skill Proficiency</h3>
          <Doughnut data={data} options={{ responsive: true }} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
