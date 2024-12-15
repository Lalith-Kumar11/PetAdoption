import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdoptRulesPage from './AdoptRulesPage';
import './PetDetails.css';

const PetDetails = ({ pet, user, onClose }) => {
  const navigate = useNavigate();
  const [showAdoptRules, setShowAdoptRules] = useState(false);

  const handleAdopt = () => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setShowAdoptRules(true);
    } else {
      navigate('/Login');
    }
  };

  const closeAdoptRules = () => {
    setShowAdoptRules(false);
  };

  const handleViewMore = () => {
    navigate(`/pet-detail/${pet.pet_id}`);
  };


  const getAdoptButtonText = () => {
    switch (pet.status) {
      case 'Available':
        return 'Adopt';
      case 'Requested':
        return 'Requested';
      case 'Not Available':
        return 'Not Available';
      case 'Approved':
        return 'Already Bought';
      default:
        return 'Adopt';
    }
  };

  const getAdoptButtonClass = () => {
    switch (pet.status) {
      case 'Available':
        return 'petdetails-adopt-button';
      case 'Requested':
      case 'Not Available':
      case 'Approved':
        return 'petdetails-adopt-button-disabled';
      default:
        return 'petdetails-adopt-button';
    }
  };

  return (
    <div className="petdetails-modal-overlay">
      <div className="petdetails-modal-content">
        <span className="petdetails-close-button" onClick={onClose}>&times;</span>
        <div className="petdetails-content">
          <img src={`data:image/jpeg;base64,${pet.image}`} alt={pet.pet_name} className="petdetails-pet-image-large" />
          <div className="petdetails-pet-info-large">
            <h2 className="petdetails-pet-name">{pet.pet_name}</h2>
            <p className="petdetails-pet-breed">Breed: {pet.breed}</p>
            <p className="petdetails-pet-category">Category: {pet.species}</p>
            <p className="petdetails-pet-price">Adoption Fee: ₹{pet.fee}</p>
          </div>
        </div>
        <button
          className={getAdoptButtonClass()}
          onClick={pet.status === 'Available' ? handleAdopt : null}
          disabled={pet.status !== 'Available'}
        >
          {getAdoptButtonText()}
        </button>
        <button className="petdetails-view-more-button" onClick={handleViewMore}>
          View More
        </button>
      </div>
      {showAdoptRules && (
        <AdoptRulesPage
          pet={pet}
          user={user}
          onClose={closeAdoptRules}
          onSuccess={() => {
            console.log('Adoption application submitted successfully');
          }}
        />
      )}
    </div>
  );
};

export default PetDetails;
