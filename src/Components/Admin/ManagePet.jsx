import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManagePet.css';
import Navigation from './Sidebar';
const ManagePet = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [editingPet, setEditingPet] = useState(null);
  const [addingPet, setAddingPet] = useState(false);
  const [newPet, setNewPet] = useState({
    pet_name: '', species: '', breed: '', age: '', image: null, gender: '', description: '', status: '', fee: ''
  });

  useEffect(() => {
    axios.get('http://localhost:8080/petDetails/fetchAll')
      .then(response => setPets(response.data))
      .catch(error => console.error('Error fetching pets:', error));
  }, []);

  const addPet = () => {
    const formData = new FormData();
    
    Object.keys(newPet).forEach(key => {
      if (key === 'image' && newPet[key]) {
        formData.append(key, newPet[key]);
      } else if (newPet[key]) {
        formData.append(key, newPet[key]);
      }
    });
  
    axios.post('http://localhost:8080/petDetails/insertPet', formData)
      .then(response => {
        setPets([...pets, response.data]);
        setAddingPet(false);
        setNewPet({ pet_name: '', species: '', breed: '', age: '', image: null, gender: '', description: '', status: 'Available', fee: '' });
      })
      .catch(error => console.error('Error adding pet:', error));
  };
  
  

  const updatePet = (updatedPet) => {
    const formData = new FormData();
    Object.keys(updatedPet).forEach(key => {
      formData.append(key, updatedPet[key]);
    });

    axios.put(`http://localhost:8080/petDetails/updatePet/${updatedPet.pet_id}`, formData)
      .then(response => {
        setPets(pets.map(pet => pet.pet_id === updatedPet.pet_id ? response.data : pet));
        setEditingPet(null);
      })
      .catch(error => console.error('Error updating pet:', error));
  };

  const deletePet = (id) => {
    axios.delete(`http://localhost:8080/petDetails/deleteById/${id}`)
      .then(() => {
        setPets(pets.filter(pet => pet.pet_id !== id));
      })
      .catch(error => console.error('Error deleting pet:', error));
  };

  const viewPet = (pet) => {
    setSelectedPet(pet);
  };

  const startEdit = (pet) => {
    setEditingPet(pet);
  };



  const handleEditChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'image') {
      setEditingPet((prev) => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setEditingPet((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };
  

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updatePet(editingPet);
  };

  const handleNewPetChange = (e) => {
    const { name, value, files } = e.target;
  
    if (name === 'image' && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPet((prev) => ({
          ...prev,
          [name]: reader.result
        }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setNewPet((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  

  return (
    <Navigation>
    <div className="managepet-container">
      <div className="managepet-content">
        <PetList pets={pets} deletePet={deletePet} viewPet={viewPet} startEdit={startEdit} />
        {selectedPet && (
          <PetModal pet={selectedPet} onClose={() => setSelectedPet(null)} />
        )}
        {editingPet && (
          <EditPetForm pet={editingPet} onChange={handleEditChange} onSubmit={handleEditSubmit} onClose={() => setEditingPet(null)} />
        )}
        {addingPet && (
          <AddPetForm pet={newPet} onChange={handleNewPetChange} onSubmit={addPet} onClose={() => setAddingPet(false)} />
        )}
      </div>
      <button className="managepet-add-pet-button" onClick={() => setAddingPet(true)}>Add Pet</button>
    </div>
    </Navigation>
  );
};

const PetList = ({ pets, deletePet, viewPet, startEdit }) => {
  return (
    <div className="managepet-list-container">
      <div className="managepet-list-header">
        <center><h2 className="managepet-list-title" >Pet List</h2></center>
      </div>
      <table className="managepet-list-table">
        <thead>
          <tr>
            <th className="managepet-list-th">ID</th>
            <th className="managepet-list-th">Name</th>
            <th className="managepet-list-th">Breed</th>
            <th className="managepet-list-th">Category</th>
            <th className="managepet-list-th">Age</th>
            <th className="managepet-list-th">Status</th>
            <th className="managepet-list-th">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.map(pet => (
            <tr key={pet.pet_id}>
              <td className="managepet-list-td">{pet.pet_id}</td>
              <td className="managepet-list-td">{pet.pet_name}</td>
              <td className="managepet-list-td">{pet.breed}</td>
              <td className="managepet-list-td">{pet.species}</td>
              <td className="managepet-list-td">{pet.age}</td>
              <td className="managepet-list-td">{pet.status}</td>
              <td className="managepet-list-td">
                <button className="managepet-view-pet-button" onClick={() => viewPet(pet)}>View More</button>
                <button className="managepet-edit-pet-button" onClick={() => startEdit(pet)}>Edit</button>
                <button className="managepet-delete-pet-button" onClick={() => deletePet(pet.pet_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PetModal = ({ pet, onClose }) => {
  return (
    <div className="managepet-modal-overlay">
      <div className="managepet-modal-content">
        <h3 className="managepet-modal-title">Pet Details</h3>
        <div className="managepet-modal-title-underline"></div>
        <p className="managepet-modal-text">
          <img
            src={`data:image/jpeg;base64,${pet.image}`}
            alt={pet.pet_name}
            className="managepet-modal-text-pet-image"
          />
        </p>
        <p className="managepet-modal-text"><strong className='managepet-modal-text-strong'>ID:</strong> <span>{pet.pet_id}</span></p>
        <p className="managepet-modal-text"><strong className='managepet-modal-text-strong'>Name:</strong> <span>{pet.pet_name}</span></p>
        <p className="managepet-modal-text"><strong className='managepet-modal-text-strong'>Breed:</strong> <span>{pet.breed}</span></p>
        <p className="managepet-modal-text"><strong className='managepet-modal-text-strong'>Category:</strong> <span>{pet.species}</span></p>
        <p className="managepet-modal-text"><strong className='managepet-modal-text-strong'>Age:</strong> <span>{pet.age}</span></p>
        <p className="managepet-modal-text"><strong className='managepet-modal-text-strong'>Gender:</strong> <span>{pet.gender}</span></p>
        <p className="managepet-modal-text"><strong className='managepet-modal-text-strong'>About Breed:</strong> <span>{pet.description}</span></p>
        <p className="managepet-modal-text"><strong className='managepet-modal-text-strong'>Price:</strong> <span>₹{pet.fee}</span></p>
        <p className="managepet-modal-text"><strong className='managepet-modal-text-strong'>Status:</strong> <span>{pet.status}</span></p>
        <button className="managepet-modal-cancel-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};


const EditPetForm = ({ pet, onChange, onSubmit, onClose }) => {
  return (
    <div className="managepet-modal-overlay">
      <div className="managepet-modal-content">
        <h3 className="managepet-modal-title">Edit Pet</h3>
        <div className="managepet-modal-title-underline"></div>
        <form onSubmit={onSubmit} className="managepet-modal-form">
          <label>
            Name:
            <input
              type="text"
              name="pet_name"
              value={pet.pet_name}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Species:
            <input
              type="text"
              name="species"
              value={pet.species}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Breed:
            <input
              type="text"
              name="breed"
              value={pet.breed}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={pet.age}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Image:
            <input
              type="file"
              name="image"
              onChange={onChange} 
            />
          </label>
          <label>
            Gender:
            <input
              type="text"
              name="gender"
              value={pet.gender}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={pet.description}
              onChange={onChange}
              required
            ></textarea>
          </label>
          <label>
            Status:
            <select
              name="status"
              value={pet.status}
              onChange={onChange}
              required
            >
              <option value="Available">Available</option>
              <option value="In Check">In Check</option>
              <option value="Not Available">Not Available</option>
              <option value="Approved">Approved</option>
            </select>
          </label>
          <label>
            Fee:
            <input
              type="number"
              name="fee"
              value={pet.fee}
              onChange={onChange}
              required
            />
          </label>
          <button type="submit" className="managepet-modal-save-button">Save</button>
          <button type="button" className="managepet-modal-cancel-button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};


const AddPetForm = ({ pet, onChange, onSubmit, onClose }) => {
  return (
    <div className="managepet-modal-overlay">
      <div className="managepet-modal-content">
        <h3 className="managepet-modal-title">Add New Pet</h3>
        <div className="managepet-modal-title-underline"></div>
        <form onSubmit={onSubmit} className="managepet-modal-form">
          <label>
            Name:
            <input
              type="text"
              name="pet_name"
              value={pet.pet_name}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Breed:
            <input
              type="text"
              name="breed"
              value={pet.breed}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Category:
            <input
              type="text"
              name="species"
              value={pet.species}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={pet.age}
              onChange={onChange}
              required
            />
          </label>
          <label>
            About Breed:
            <input
              type="text"
              name="description"
              value={pet.description}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Gender:
            <input
              type="text"
              name="gender"
              value={pet.gender}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="fee"
              value={pet.fee}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Status:
            <select
              name="status"
              value={pet.status}
              onChange={onChange}
            >
              <option value="Available">Available</option>
              <option value="In Check">In Check</option>
              <option value="Not Available">Not Available</option>
              <option value="Approved">Approved</option>
            </select>
          </label>
          <label>
            Image:
            <input
              type="file"
              name="image"
              onChange={(e) => onChange({ target: { name: 'image', value: e.target.files[0] } })}
            />
          </label>
          <button type="submit" className="managepet-modal-save-button">Save</button>
          <button type="button" className="managepet-modal-cancel-button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};


export default ManagePet;
