import React from "react";
import "./About.css"; // Import the CSS file

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        {/* About Image */}
        <div className="about-image slide-in">
          <img
            src="/images/pic1.jpg"
            alt="About Me"
            className="profile-img"
          />
        </div>

        {/* About Content */}
        <div className="about-content fade-in">
          <h2>About Me</h2>
          <p>
            Hello! I'm <span className="highlight">Hamza Sohail</span>, a passionate web developer with a strong love for
            creating beautiful and functional websites. I specialize in
            <span className="highlight"> Frontend Development</span> and have experience with modern web technologies.
          </p>
          <p>
            I thrive on solving problems and bringing ideas to life. My journey
            in development has been fueled by a relentless curiosity and desire
            to grow as a developer.
          </p>
          <a href="#contact" className="btn zoom-in">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
