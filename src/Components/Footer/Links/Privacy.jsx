import React from 'react';
import './Privacy.css';
import { FaDog } from 'react-icons/fa';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
const Privacy = () => {
  return (
    <>
    <Navbar/>
    <div className="privacy-container">
      
      <FaDog className="privacy-icon" />
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-intro">
        Welcome to our Pet Adoption website. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
      </p>
      <div className="privacy-section">
        <h2 className="privacy-heading">1. Information We Collect</h2>
        <p className="privacy-text">
          We collect personal information that you provide to us directly, such as your name, email address, phone number, and any other details you provide when you sign up or interact with our website.
        </p>
      </div>
      <div className="privacy-section">
        <h2 className="privacy-heading">2. How We Use Your Information</h2>
        <p className="privacy-text">
          We use your information to process pet adoption requests, improve our website, and communicate with you about our services. We may also use your information to send you promotional materials, if you have opted in to receive them.
        </p>
      </div>
      <div className="privacy-section">
        <h2 className="privacy-heading">3. How We Protect Your Information</h2>
        <p className="privacy-text">
          We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We use encryption and secure servers to ensure your data is safe.
        </p>
      </div>
      <div className="privacy-section">
        <h2 className="privacy-heading">4. Sharing Your Information</h2>
        <p className="privacy-text">
          We do not sell or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website and providing our services, but only under strict confidentiality agreements.
        </p>
      </div>
      <div className="privacy-section">
        <h2 className="privacy-heading">5. Changes to This Privacy Policy</h2>
        <p className="privacy-text">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
        </p>
      </div>
      <div className="privacy-section">
        <h2 className="privacy-heading">6. Contact Us</h2>
        <p className="privacy-text">
          If you have any questions or concerns about this Privacy Policy or our practices, please contact us at <a href="mailto:privacy@petadoption.com">privacy@petadoption.com</a>.
        </p>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default Privacy;
