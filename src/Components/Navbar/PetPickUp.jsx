import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PetPickUp.css';
import image1 from './Injured.jpeg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const PetPickupRequest = () => {
  const [formData, setFormData] = useState({
    pet_type: '',
    pet_condition: {
      abandoned: false,
      injured: false,
      stray: false
    },
    location: '',
    description: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const checkFormValidity = () => {
      const { pet_type, pet_condition, location, description } = formData;
      const isAnyConditionChecked = Object.values(pet_condition).some(Boolean);
      if (pet_type && isAnyConditionChecked && location && description) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    };
    checkFormValidity();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        pet_condition: { ...prevData.pet_condition, [name]: checked }
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));

    const petConditionArray = Object.entries(formData.pet_condition)
      .filter(([key, value]) => value)
      .map(([key]) => key)
      .join(', ');
  
    const payload = {
      ...formData,
      pet_condition: petConditionArray,
      user: user ? user : {}
    };

    console.log('Payload being sent:', payload);
  
    try {
      const response = await axios.post('http://localhost:8080/requestDetails/insertRequest', payload);
      if (response.status === 200) {
        alert('Pet PickUp Request submitted successfully.we will contact you once we check the details!!! \n \nThank You PAH team');
        setFormData({
          pet_type: '',
          pet_condition: {
            abandoned: false,
            injured: false,
            stray: false
          },
          location: '',
          description: '',
        });
      }
    } catch (error) {
      console.error('Error submitting request:', error);
      alert('Request Submission Failed');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="PetPickUp-pet-pickup-request-container">
      
      <div className="PetPickUp-pet-pickup-request">
        <div className="PetPickUp-image-section">
          <img src={image1} alt="Pet" className="PetPickUp-pet-image" />
        </div>
        <div className="PetPickUp-form-section">
          <span className="PetPickUp-notice">Important Notice : </span>
          <span className="PetPickUp-notice-info">
            Our pet pickup service is currently available exclusively for abandoned pets and stray animals.
            If you have found a stray or need assistance with an abandoned pet, please submit a pickup request through our platform.
            We appreciate your support and dedication to helping animals in need.
          </span>
          <h1>Pet Pickup Request</h1>
          <form onSubmit={handleSubmit}>
            <div className="PetPickUp-form-group">
              <label htmlFor="pet_type">Pet Type</label>
              <input
                type="text"
                id="pet_type"
                name="pet_type"
                value={formData.pet_type}
                onChange={handleChange}
                className="PetPickUp-pet-pickup-input"
                required
              />
            </div>
            <div className="PetPickUp-form-group">
              <label>Pet Condition</label>
              <div className="PetPickUp-checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="abandoned"
                    checked={formData.pet_condition.abandoned}
                    onChange={handleChange}
                    className="PetPickUp-pet-pickup-checkbox"
                  />
                  Abandoned
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="injured"
                    checked={formData.pet_condition.injured}
                    onChange={handleChange}
                    className="PetPickUp-pet-pickup-checkbox"
                  />
                  Injured
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="stray"
                    checked={formData.pet_condition.stray}
                    onChange={handleChange}
                    className="PetPickUp-pet-pickup-checkbox"
                  />
                  Stray
                </label>
              </div>
            </div>
            <div className="PetPickUp-form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="PetPickUp-pet-pickup-input"
                required
              />
            </div>
            <div className="PetPickUp-form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="PetPickUp-pet-pickup-input"
                required
              />
            </div>
            <button type="submit" className="PetPickUp-pet-pickup-submit" disabled={!isFormValid}>Submit Request</button>
          </form>
          <p className="PetPickUp-contact-info">
            The shelter may contact you through phone in case of any queries regarding the pick up request.
          </p>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default PetPickupRequest;
