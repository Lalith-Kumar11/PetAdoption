import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import './ManageAdoption.css';
import Navigation from './Sidebar';

const UserDetailsModal = ({ userDetails, onClose }) => {
  if (!userDetails) return null;

  return (
    <div className="ManageAdoption-modal-overlay">
      <div className="ManageAdoption-modal-content">
        <center><h2>User Details</h2></center>
        <div className="manageAdoption-modal-title-underline"></div>
        <div className="ManageAdoption-modal-text">
          <p><strong>Username:</strong> {userDetails.username}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Phone:</strong> {userDetails.mobile}</p>
          <p><strong>Address:</strong> {userDetails.address || 'N/A'}</p>
        </div>
        <button className="ManageAdoption-modal-close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const PetDetailsModal = ({ petDetails, onClose }) => {
  if (!petDetails) return null;

  return (
    <div className="ManageAdoption-modal-overlay">
      <div className="ManageAdoption-modal-content">
        <center><h2>Pet Details</h2></center>
        <div className="manageAdoption-modal-title-underline"></div>
        <div className="ManageAdoption-modal-text">
          <p><strong>Pet Id:</strong> {petDetails.pet_id}</p>
          <p><strong>Pet Name:</strong> {petDetails.pet_name}</p>
          <p><strong>Breed:</strong> {petDetails.breed}</p>
          <p><strong>Age:</strong> {petDetails.age} years</p>
          <p><strong>Gender:</strong> {petDetails.gender}</p>
        </div>
        <button className="ManageAdoption-modal-close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const ManageAdoption = () => {
  const [adoptionForms, setAdoptionForms] = useState([]);
  const [formStatistics, setFormStatistics] = useState({
    received: 0,
    accepted: 0,
    inReview: 0,
  });
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);
  const [selectedPetDetails, setSelectedPetDetails] = useState(null);

  const fetchAdoptionForms = async () => {
    try {
      const response = await axios.get('http://localhost:8080/adoptionDetails/fetchAll');
      setAdoptionForms(response.data);
    } catch (error) {
      console.error('Error fetching adoption forms:', error);
    }
  };

  const updateStatistics = useCallback(() => {
    const received = adoptionForms.length;
    const accepted = adoptionForms.filter(form => form.status === 'Accepted').length;
    const inReview = adoptionForms.filter(form => form.status === 'Pending' || form.status === 'Review').length;
    
    setFormStatistics({ received, accepted, inReview });
  }, [adoptionForms]);

  const changeStatus = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:8080/adoptionDetails/updateStatus/${id}`, null, {
        params: { status: newStatus },
      });
      setAdoptionForms(adoptionForms.map(form =>
        form.application_id === id ? { ...form, status: newStatus } : form
      ));
    } catch (error) {
      console.error('Error updating status:', error);
    }
    updateStatistics();
  };

  const viewUserDetails = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/auth/fetchById/${userId}`);
      setSelectedUserDetails(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const viewPetDetails = async (pet_id) => {
    try {
      const response = await axios.get(`http://localhost:8080/petDetails/fetchById/${pet_id}`);
      setSelectedPetDetails(response.data);
    } catch (error) {
      console.error('Error fetching pet details:', error);
    }
  };

  const closeUserDetailsModal = () => {
    setSelectedUserDetails(null);
  };

  const closePetDetailsModal = () => {
    setSelectedPetDetails(null);
  };

  useEffect(() => {
    fetchAdoptionForms();
  }, []);

  useEffect(() => {
    updateStatistics();
  }, [adoptionForms, updateStatistics]);

  return (
    <Navigation>
      <div className="ManageAdoption-container">
        <div className='ManageAdoption-content'>
        <div className="ManageAdoption-form-statistics">
          <div className="ManageAdoption-stat-item">No. of Forms Received: {formStatistics.received}</div>
          <div className="ManageAdoption-stat-item">No. of Forms Accepted: {formStatistics.accepted}</div>
          <div className="ManageAdoption-stat-item">No. of Forms in Review: {formStatistics.inReview}</div>
        </div>

        <div className="ManageAdoption-form-table-container">
          <table className="ManageAdoption-form-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User Details</th>
                <th>Pet Details</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {adoptionForms.map(form => (
                <tr key={form.application_id}>
                  <td>{form.application_id}</td>
                  <td
                    className="ManageAdoption-user-name"
                    onClick={() => viewUserDetails(form.user?.id)}
                  >
                    {form.user?.username || 'N/A'}
                  </td>
                  <td
                    className="ManageAdoption-pet-details"
                    onClick={() => viewPetDetails(form.pet?.pet_id)}
                  >
                    {form.pet?.pet_name || 'N/A'} - {form.pet?.breed || 'N/A'}
                  </td>
                  <td>{form.status}</td>
                  <td>
                    {form.status === 'Pending' && (
                      <>
                        <button
                          className="ManageAdoption-approve-button"
                          onClick={() => changeStatus(form.application_id, 'Accepted')}
                        >
                          Approve
                        </button>
                        <button
                          className="ManageAdoption-reject-button"
                          onClick={() => changeStatus(form.application_id, 'Rejected')}
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {form.status !== 'Pending'  && form.status !=='Paid' &&(
                      <>
                        <button className="ManageAdoption-approve-button" onClick={() => changeStatus(form.application_id, 'Accepted')}>Approve</button>
                        <button className="ManageAdoption-reject-button" onClick={() => changeStatus(form.application_id, 'Rejected')}>Reject</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>

        {selectedUserDetails && (
          <UserDetailsModal userDetails={selectedUserDetails} onClose={closeUserDetailsModal} />
        )}
        {selectedPetDetails && (
          <PetDetailsModal petDetails={selectedPetDetails} onClose={closePetDetailsModal} />
        )}
      </div>
    </Navigation>
  );
};

export default ManageAdoption;
