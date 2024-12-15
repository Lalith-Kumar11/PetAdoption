import React, { useState } from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import TermsAndConditions from './Links/Terms';
import ContactUs from './Links/ContactUs';

function Footer() {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openTermsModal = () => {
    setIsTermsModalOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const closeTermsModal = () => setIsTermsModalOpen(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div>
      <section className="footer-section">
        <div className="footer-box-container">
          <div className="footer-box">
            <h3>Extra Links</h3>
            <Link to={'/FAQ'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}> <FontAwesomeIcon icon={faArrowRight} /> FAQs </Link>
            <Link to={'/Privacy'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}> <FontAwesomeIcon icon={faArrowRight} /> Privacy Policy </Link>
            <a href="#!" onClick={openTermsModal}> <FontAwesomeIcon icon={faArrowRight} /> Terms & Conditions </a>
            <a href="#!" onClick={openContactModal}> <FontAwesomeIcon icon={faArrowRight} /> Contact Us </a>
          </div>
          <div className="footer-box">
            <h3>Follow Us</h3>
            <Link to={'https://www.facebook.com/'}> <FontAwesomeIcon icon={faFacebookF} /> Facebook </Link>
            <Link to={'https://twitter.com/?lang=en'}> <FontAwesomeIcon icon={faTwitter} /> Twitter </Link>
            <Link to={'https://www.instagram.com/'}> <FontAwesomeIcon icon={faInstagram} /> Instagram </Link>
            <Link to={'https://www.linkedin.com/'}> <FontAwesomeIcon icon={faLinkedin} /> LinkedIn </Link>
            <Link to={'https://www.pinterest.com/'}> <FontAwesomeIcon icon={faPinterest} /> Pinterest </Link>
          </div>
          <div className="footer-box">
            <h3>Newsletter</h3>
            <p>Subscribe for the latest updates and offers on pet products!</p>
            <form action="">
              <input type="email" placeholder="Enter your email" className="footer-input" />
              <button type="submit" className="footer-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {isTermsModalOpen && (
        <TermsAndConditions onClose={closeTermsModal} />
      )}

      {isContactModalOpen && (
        <ContactUs onClose={closeContactModal} />
      )}
    </div>
  );
}

export default Footer;
