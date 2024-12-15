import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import homeIcon from './homeicon2.jpg'; // Adjust the path as needed
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Lab from './SelectOptions/assets/images/Tabbycat3.jpeg';
import Bea from './SelectOptions/assets/images/Cockatoo.jpeg';
import Gol from './SelectOptions/assets/images/GoldenRetriever.jpeg';
import './Home.css';


const Home = () => {
  return (
    <div className="home-homepage">
      <Navbar />

      <section className="home-hero">
        <div className="home-hero-content">
          <h2>Welcome to PawsAndHome</h2>
          <p>Find your perfect pet companion today!</p>
          <p>Our mission is to connect loving families with wonderful pets in need of a home.</p>
          <p>We believe every pet deserves a loving family, and every family deserves a loving pet.</p>
          <Link to="/pet" className='Home-link-getstarted-button'>
            <button className="home-get-started">
              Get Started <FaArrowRight />
            </button>
          </Link>
        </div>
        <img src={homeIcon} alt="Adopt a Pet" className="home-hero-image" />
      </section>

      <section className="home-featured-pets">
        <h2>Featured Pets</h2>
        <div className="home-pet-cards">
          <div className="home-pet-card">
            <img src={Gol} alt="Pet 1" />
            <h3>Bella</h3>
            <p>Breed: Golden Retriever</p>
          </div>
          <div className="home-pet-card">
            <img src={Bea} alt="Pet 2" />
            <h3>coco</h3>
            <p>Breed: Cockatoo</p>
          </div>
          <div className="home-pet-card">
            <img src={Lab} alt="Pet 3" />
            <h3>Milo</h3>
            <p>Breed: TabbyCat</p>
          </div>
        </div>
      </section>

      <section className="home-testimonials">
        <h2>What Our Users Say</h2>
        <div className="home-testimonial-cards">
          <div className="home-testimonial-card">
            <p>"PawsAndHome made it so easy to adopt a pet. We found our new puppy, and we couldn't be happier!"</p>
            <h4>- Jane Doe</h4>
          </div>
          <div className="home-testimonial-card">
            <p>"Adopting through this platform was an amazing experience. The process was smooth, and we found the perfect cat!"</p>
            <h4>- John Smith</h4>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
