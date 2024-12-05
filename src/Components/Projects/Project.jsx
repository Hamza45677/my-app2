import React from 'react';
import './Project.css'; // Assuming you are styling with an external CSS file

const Projects = () => {
  const projects = [
    {
      title: 'Basic Assignment',
      description: 'A responsive portfolio website built using React and Tailwind CSS.',
      link: 'https://my-app-five-orpin.vercel.app/',
      image: "/images/pic3.jpg"
    },
    {
      title: 'White Space',
      description: 'An online store with features like product listing, shopping cart, and checkout.',
      link: 'https://my-app-3-4nog.vercel.app/',
      image: "/images/pi4.jpg"
    },
    {
      title: 'Weather App',
      description: 'A weather app that provides real-time weather information using APIs.',
      link: 'https://yourweatherapp.com',
      image: '',
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
