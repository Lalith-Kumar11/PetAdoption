import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhoneAlt, FaAddressCard } from 'react-icons/fa';
import './Profile.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Profile() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const loggedInUser = JSON.parse(localStorage.getItem('user'));
            if (loggedInUser) {
                try {
                    const response = await axios.get(`http://localhost:8080/api/auth/fetchById/${loggedInUser.id}`);
                    setUser(response.data);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            } else {
                navigate('/login');
            }
        };

        fetchUser();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const handleMyAdoption = () => {
        navigate('/MYAdoption');
    };

    return (
        <>
            <Navbar />
            <div className='profile-container'>
                {user ? (
                    <div className='profile-details'>
                        <h2>Profile</h2>
                        <div className='profile-info'>
                            <label><FaUser /> Username:</label>
                            <span>{user.username}</span>
                        </div>
                        <div className='profile-info'>
                            <label><FaEnvelope /> Email:</label>
                            <span>{user.email}</span>
                        </div>
                        <div className='profile-info'>
                            <label><FaPhoneAlt /> Mobile:</label>
                            <span>{user.mobile}</span>
                        </div>
                        <div className='profile-info'>
                            <label><FaAddressCard /> Address:</label>
                            <span>{user.address}</span>
                        </div>
                        <div className='profile-actions'>
                            <button onClick={handleLogout} className='logout-btn'>Logout</button>
                            <button onClick={handleMyAdoption} className='my-adoption-btn'>My Adoption</button>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <Footer />
        </>
    );
}

export default Profile;
