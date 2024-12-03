import React from "react";
import "./Project.css"; 
const projects = [
  {
    title: "Project 1",
    description: "This is a brief description of project 1.",
    imageUrl: "https://via.placeholder.com/400x250",
    link: "#",
  },
  {
    title: "Project 2",
    description: "This is a brief description of project 2.",
    imageUrl: "https://via.placeholder.com/400x250",
    link: "#",
  },
  {
    title: "Project 3",
    description: "This is a brief description of project 3.",
    imageUrl: "https://via.placeholder.com/400x250",
    link: "#",
  },
  {
    title: "Project 4",
    description: "This is a brief description of project 4.",
    imageUrl: "https://via.placeholder.com/400x250",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        {/* Title */}
        <div className="projects-title fade-in">
          <h2>My Projects</h2>
          <p className="projects-description">
            Check out some of the amazing projects I have worked on.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card fade-in">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="project-link">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
