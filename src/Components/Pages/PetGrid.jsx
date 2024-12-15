import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PetDetails from './PetDetails';
import { FaFilter } from 'react-icons/fa';
import './PetGrid.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const PetGrid = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [filter, setFilter] = useState('All');
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const filterRef = useRef(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:8080/petDetails/fetchAll');
        setPets(response.data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);

  const handlePetClick = (pet) => {
    setSelectedPet(pet);
  };

  const handleClose = () => {
    setSelectedPet(null);
  };

  const handleFilterChange = (category) => {
    setFilter(category);
    setShowFilterOptions(false);
  };

  const toggleFilterOptions = () => {
    setShowFilterOptions((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setShowFilterOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredPets = filter === 'All' ? pets : pets.filter((pet) => pet.species === filter);

  return (
    <div>
      <Navbar/>
      <div className="petgrid-filter-header-container">
        <h2 className="petgrid-heading">Adopt Your Buddy</h2>
        <div className="petgrid-filter" ref={filterRef}>
          <FaFilter onClick={toggleFilterOptions} className="petgrid-filter-icon" />
          {showFilterOptions && (
            <div className="petgrid-filter-options">
              <select
                className="petgrid-filter-select"
                value={filter}
                onChange={(e) => handleFilterChange(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Parrot">Parrot</option>
              </select>
            </div>
          )}
        </div>
      </div>
      <div className="petgrid-pet-grid">
        {filteredPets.map((pet) => (
          <div key={pet.pet_id} className="petgrid-pet-card" onClick={() => handlePetClick(pet)}>
            <img
              src={`data:image/jpeg;base64,${pet.image}`}
              alt={pet.pet_name}
              className="petgrid-pet-image"
            />
            <div className="petgrid-pet-info">
              <h3 className="petgrid-pet-name">{pet.pet_name}</h3>
              <p className="petgrid-pet-breed">{pet.breed}</p>
              <p className="petgrid-pet-category">{pet.species}</p>
              <p className="petgrid-pet-price">₹{pet.fee}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedPet && <PetDetails pet={selectedPet} onClose={handleClose} />}
      <Footer/>
    </div>
  );
};

export default PetGrid;
