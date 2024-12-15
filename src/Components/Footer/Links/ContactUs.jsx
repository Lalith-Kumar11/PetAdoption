import React from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ContactUs = ({ onClose }) => {
  return (
    <div className="contact-modal-overlay">
      <div className="contact-modal-content">
        <h1 className="contact-modal-title">Contact Us</h1>
        <p className="contact-modal-intro">
          We're here to help! Please fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit" className="contact-submit-button">Submit</button>
        </form>
        <button className="contact-close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
