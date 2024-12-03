import React from "react";
import "./Home.css"; // Import the CSS file

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        {/* Text Content */}
        <div className="text-content">
          <h1 className="fade-in">
            Hi, I'm <span className="highlight">Hamza Sohail</span>
          </h1>
          <p className="slide-in">
            A passionate <span className="highlight">Web Developer</span> creating beautiful and functional websites.
          </p>
          <a href="#projects" className="btn zoom-in">
            View My Work
          </a>
        </div>

        {/* Hero Image */}
        <div className="image-content slide-in">
          <img
            src="https://via.placeholder.com/400"
            alt="Profile"
            className="profile-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
