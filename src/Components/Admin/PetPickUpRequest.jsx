import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PetPickUpRequest.css';
import Navigation from './Sidebar';

const PetPickupRequestManagement = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await axios.get('http://localhost:8080/requestDetails/fetchAll');
      setRequests(response.data);
    } catch (error) {
      console.error("There was an error fetching the requests!", error);
    }
  };

  const handleAccept = async (id) => {
    try {
      await axios.put(`http://localhost:8080/requestDetails/updateStatus/${id}`, null, {
        params: { status: 'Accepted' },
      });
      fetchRequests();
    } catch (error) {
      console.error("There was an error updating the status!", error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(`http://localhost:8080/requestDetails/updateStatus/${id}`, null, {
        params: { status: 'Rejected' },
      });
      fetchRequests();
    } catch (error) {
      console.error("There was an error updating the status!", error);
    }
  };

  return (
    <Navigation>
      <div className="PetRequest-container">
        <div className='PetRequest-content'>
        <h1 className="PetRequest-title">Pet Pickup Request Management</h1>
        <table className="PetRequest-table">
          <thead className="PetRequest-thead">
            <tr className="PetRequest-tr">
              <th className="PetRequest-th">Category</th>
              <th className="PetRequest-th">Condition</th>
              <th className="PetRequest-th">Location</th>
              <th className="PetRequest-th">Description</th>
              <th className="PetRequest-th">Status</th>
              <th className="PetRequest-th">Actions</th>
            </tr>
          </thead>
          <tbody className="PetRequest-tbody">
            {requests.map((request) => (
              <tr key={request.request_id} className="PetRequest-tr">
                <td className="PetRequest-td">{request.pet_type}</td>
                <td className="PetRequest-td">{request.pet_condition}</td>
                <td className="PetRequest-td">{request.location}</td>
                <td className="PetRequest-td">{request.description}</td>
                <td className="PetRequest-td">{request.status}</td>
                <td className="PetRequest-td">
                  {request.status === 'Pending' && (
                    <>
                      <button className="PetRequest-button PetRequest-button-accept" onClick={() => handleAccept(request.request_id)}>Accept</button>
                      <button className="PetRequest-button PetRequest-button-reject" onClick={() => handleReject(request.request_id)}>Reject</button>
                    </>
                  )}
                  {request.status !== 'Pending' && (
                    <span className="PetRequest-status">{request.status}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </Navigation>
  );
};

export default PetPickupRequestManagement;
