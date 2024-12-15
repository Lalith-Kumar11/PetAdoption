import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
import './AdoptRulesPage.css';

const AdoptRulesPage = ({ onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [comments, setComments] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const handleAdoptClick = async (pet) => {
    if (inputValue === 'I ASSURE') {
      try {
        const adoptionApplication = {
          user: JSON.parse(localStorage.getItem('user')),
          pet: JSON.parse(localStorage.getItem('pet')),
          comments: comments || 'User assured adoption responsibilities',
          status: 'Pending'
        };

        const response = await fetch('http://localhost:8080/adoptionDetails/insertApplication', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(adoptionApplication)
        });

        if (response.ok) {
          alert('Your Adoption application Submitted successfully,we will notify you once the form is accepted!!');
          onClose();
          navigate(`/pet`);
        } else {
          alert('Application Submission Failed');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Application Submission Failed');
      }
    } else {
      alert('Please type "I ASSURE" to proceed.');
    }
  };

  return (
    <div className="rules-modal-overlay">
      <div className="rules-modal-content">
        <span className="rules-close-button" onClick={onClose}><FaTimes /></span>
        <h3>Please review the following rules before adopting</h3>
        <ul>
          <li>Understand the pet’s needs and breed characteristics.</li>
          <li>Ensure you can provide proper care for the pet.</li>
          <li>Provide a safe and loving environment for the pet.</li>
          <li>Ensure your home is pet-friendly and secure.</li>
          <li>Be prepared for the responsibilities of pet ownership.</li>
          <li>Commit to regular veterinary care and vaccinations.</li>
          <li>Understand the pet’s dietary and exercise needs.</li>
          <li>Be prepared for the time and financial investment required for pet care.</li>
        </ul>
        <input
          className="rules-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type 'I ASSURE' to proceed"
        />
        <textarea
          className="rules-comments"
          value={comments}
          onChange={handleCommentsChange}
          placeholder="Enter your comments (optional)"
        />
        <button
          className="rules-button"
          onClick={handleAdoptClick}
          disabled={inputValue !== 'I ASSURE'}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default AdoptRulesPage;
