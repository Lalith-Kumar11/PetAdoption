import React from 'react';
import { FaPaw, FaHeart, FaHandsHelping, FaHome } from 'react-icons/fa';
import './About.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const About = () => {
  return (
    <div>
      <Navbar/>
    <div className="about-container">
      
      <div className="about-content">
        <div className="about-text">
          <h1 className="about-title"><FaPaw className="about-icon" /> About PawsAndHome</h1>
          <p className="about-description">
            Welcome to PawsAndHome, where we connect loving homes with pets in need. Our mission is to ensure every pet finds a caring family. We work with shelters and rescue groups to provide a platform for pet adoption. Join us in making a difference one paw at a time.
          </p>

          <div className="about-mission">
            <h2 className="about-mission-title"><FaHeart className="about-icon" /> Our Mission</h2>
            <p className="about-mission-description">
              At PawsAndHome, we believe every pet deserves a loving home. Our dedicated team works tirelessly to support animal welfare, promote adoption, and create a community of pet lovers who are committed to making a positive impact.
            </p>
          </div>

          <div className="about-values">
            <h2 className="about-values-title"><FaHandsHelping className="about-icon" /> Our Values</h2>
            <ul className="about-values-list">
              <li className="about-values-item">Compassion: We care deeply about the well-being of animals and work to ensure they receive the love and care they deserve.</li>
              <li className="about-values-item">Integrity: We operate with transparency and honesty in all our dealings, ensuring trust within our community.</li>
              <li className="about-values-item">Community: We believe in the power of community to drive change and bring about positive outcomes for pets and people alike.</li>
            </ul>
          </div>

          <div className="about-team">
            <h2 className="about-team-title"><FaHome className="about-icon" /> Meet Our Team</h2>
            <p className="about-team-description">
              Our team is composed of passionate individuals who are dedicated to making a difference. From our experienced animal care specialists to our enthusiastic volunteers, everyone at PawsAndHome plays a crucial role in our mission.
            </p>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default About;
