import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdoptRulesPage from './AdoptRulesPage';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import food from './petfood.jpg';
import bath from './petbath.jpg';
import check from './petcheckup.jpg';

import './PetDetailPage.css';

const PetDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const [showRulesPage, setShowRulesPage] = useState(false);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await fetch(`http://localhost:8080/petDetails/fetchById/${id}`);
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('pet', JSON.stringify(data));
          setPet(data);
        } else {
          console.error('Failed to fetch pet details');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPet();
  }, [id]);

  const handleAdopt = () => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setShowRulesPage(true);
    } else {
      navigate('/Login');
    }
  };

  const closeRulesPage = () => {
    setShowRulesPage(false);
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (!pet) {
    return <div>Loading...</div>;
  }

  const getButtonProps = () => {
    switch (pet.status) {
      case 'Available':
        return { text: 'Adopt', disabled: false };
      case 'Requested':
        return { text: 'Requested', disabled: true };
      case 'Not Available':
        return { text: 'Not Available', disabled: true };
      case 'Approved':
        return { text: 'Already Bought', disabled: true };
      default:
        return { text: 'Adopt', disabled: true };
    }
  };

  const { text, disabled } = getButtonProps();

  return (
    <>
      <Navbar />
      {showRulesPage ? (
        <div className="petdetailpage-overlay background-image">
          <AdoptRulesPage onClose={closeRulesPage} onAdopt={() => alert('Request Submitted!')} />
        </div>
      ) : (
        <div className="petdetailpage-container">
          <div className="petdetailpage-left">
            <h2 className="petdetailpage-heading">{pet.pet_name}</h2>
            <div className="petdetailpage-info">
              <p><strong>Breed:</strong> {pet.breed}</p>
              <p><strong>Category:</strong> {pet.species}</p>
              <p><strong>Age:</strong> {pet.age}</p>
              <p><strong>Gender:</strong> {pet.gender}</p>
              <p><strong>Description:</strong> {pet.description}</p>
            </div>
          </div>

          <div className="petdetailpage-right">
            <div className="petdetailpage-slider">
              <img
                src={`data:image/jpeg;base64,${pet.image}`}
                alt={pet.pet_name}
                className="petdetailpage-image-large"
              />
            </div>
            <p className="petdetailpage-price"><strong>Adoption Fee: ₹</strong> {pet.fee}</p>
            <div className="petdetailpage-button-container">
              <button
                className={`petdetailpage-adopt-button ${disabled ? 'disabled' : ''}`}
                onClick={handleAdopt}
                disabled={disabled}
              >
                {text}
              </button>
              <button className="petdetailpage-back-button" onClick={handleBack}>Back</button>
            </div>
          </div>

          <div className="petdetailpage-bottom">
            <h3 className="petdetailpage-bottom-heading">Care Your Buddy</h3>
            <div className="petdetailpage-grid">
              <div className="petdetailpage-grid-item">
                <img src={food} alt="1" className="grid-image" />
                <p>A balanced and consistent feeding schedule is key to maintaining your pet's health and energy levels.
                   Regular meals help ensure they get the nutrients they need to thrive.</p>
              </div>
              <div className="petdetailpage-grid-item">
                <img src={bath} alt="2" className="grid-image" />
                <p>Regular baths help keep your pet clean, healthy, and free from skin irritations,
                   while also strengthening the bond between you and your furry friend.</p>
              </div>
              <div className="petdetailpage-grid-item">
                <img src={check} alt="3" className="grid-image" />
                <p>Regular medical checkups are essential to detect early signs of illness and 
                   ensure your pet stays healthy, happy, and active throughout their life.</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default PetDetailPage;
