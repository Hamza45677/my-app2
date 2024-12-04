
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"; // Social Media Icons
import "./Contact.css"; // Import CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log(formData);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        {/* Title */}
        <div className="contact-title fade-in">
          <h2>Contact Me</h2>
          <p className="contact-description">
            Feel free to reach out for any inquiries or collaborations! You can also find me on social media.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form fade-in">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="social-media-links fade-in">
          <h3>Find me on:</h3>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/hamza-ali-3a88b32a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Hamza45677"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/offx._.hamii/profilecard/?igsh=MWpteTluZ3V1bno0MA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
