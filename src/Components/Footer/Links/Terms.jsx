import React, { useState } from 'react';
import './Terms.css';

const TermsAndConditions = ({ onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1 className="modal-title">Terms and Conditions</h1>
        <p className="modal-text">
          Welcome to our Pet Adoption website. By using our services, you agree to the following terms and conditions...
        </p>
        {isExpanded && (
          <div className="modal-expanded-text">
            <p>
              Here are more details about our terms and conditions. This section expands to include all necessary information about our policies, including but not limited to user responsibilities, data protection measures, and legal disclaimers.
            </p>
          </div>
        )}
        <button className="modal-view-more-button" onClick={toggleExpansion}>
          {isExpanded ? 'View Less' : 'View More'}
        </button>
        <button className="modal-button" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions;
