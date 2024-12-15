import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageUser.css';
import Navigation from './Sidebar';
const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/auth/fetchAll');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/auth/deleteUser/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const viewUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <Navigation>
    <div className="manageUser-container">
      <div className="manageUser-content">
        <UserList users={users} deleteUser={deleteUser} viewUser={viewUser} />
        {selectedUser && (
          <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
        )}
      </div>
    </div>
    </Navigation>
  );
};

const UserList = ({ users, deleteUser, viewUser }) => {
  return (
    <div className="manageUser-user-list-container">
      <div className="manageUser-user-list-header">
        <h2 className="manageUser-user-list-title">User List</h2>
      </div>
      <table className="manageUser-user-list-table">
        <thead>
          <tr>
            <th className="manageUser-user-list-th">ID</th>
            <th className="manageUser-user-list-th">Name</th>
            <th className="manageUser-user-list-th">Phone Number</th>
            <th className="manageUser-user-list-th">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="manageUser-user-list-td">{user.id}</td>
              <td className="manageUser-user-list-td">{user.username}</td>
              <td className="manageUser-user-list-td">{user.mobile}</td>
              <td className="manageUser-user-list-td">
                <button className="manageUser-view-user-button" onClick={() => viewUser(user)}>View More</button>
                <button className="manageUser-delete-user-button" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const UserModal = ({ user, onClose }) => {
  return (
    <div className="manageUser-modal-overlay">
      <div className="manageUser-modal-content">
        <h3 className="manageUser-modal-title">User Details</h3>
        <p className="manageUser-modal-text"><strong>ID:</strong> <span>{user.id}</span></p>
        <p className="manageUser-modal-text"><strong>Name:</strong> <span>{user.username}</span></p>
        <p className="manageUser-modal-text"><strong>Phone Number:</strong> <span>{user.mobile}</span></p>
        <p className="manageUser-modal-text"><strong>Email:</strong> <span>{user.email}</span></p>
        <p className="manageUser-modal-text"><strong>Address:</strong> <span>{user.address}</span></p>
        <p className="manageUser-modal-text"><strong>Account Created Date:</strong> <span>{new Date(user.date_of_creation).toLocaleDateString()}</span></p>
        <button className="manageUser-modal-close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ManageUser;
