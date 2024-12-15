import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './MYAdoption.css';

function MyAdoption() {
    const [applications, setApplications] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApplications = async () => {
            const loggedInUser = JSON.parse(localStorage.getItem('user'));
            if (loggedInUser) {
                try {
                    const response = await axios.get(`http://localhost:8080/adoptionDetails/fetchByUserId/${loggedInUser.id}`);
                    setApplications(response.data);
                } catch (error) {
                    console.error('Error fetching adoption applications:', error);
                }
            } else {
                navigate('/login');
            }
        };

        fetchApplications();
    }, [navigate]);

    const handlePayment = (applicationId) => {
        navigate(`/payment/${applicationId}`);
    };

    return (
        <>
            <Navbar />
            <div className="my-adoption-container">
                <h2>My Adoption Applications</h2>
                {applications.length > 0 ? (
                    <table className="adoption-table">
                        <thead>
                            <tr>
                                <th>Application ID</th>
                                <th>Pet Name</th>
                                <th>Status</th>
                                <th>Application Date</th>
                                <th>Comments</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((application) => (
                                <tr key={application.application_id}>
                                    <td>{application.application_id}</td>
                                    {application.pet ? (
                                        <>
                                            <td>{application.pet.pet_name}</td>
                                            <td>{application.status}</td>
                                            <td>{new Date(application.applicationDate).toLocaleDateString()}</td>
                                            <td>{application.comments}</td>
                                            <td>
                                                {(application.status === 'Accepted' || application.status === 'Paid') && (
                                                    <button
                                                        className="payment-button"
                                                        onClick={() => handlePayment(application.application_id)}
                                                        disabled={application.status === 'Paid'}
                                                    >
                                                        {application.status === 'Paid' ? 'Paid' : 'Make Payment'}
                                                    </button>
                                                )}
                                            </td>
                                        </>
                                    ) : (
                                        <td colSpan="5">Pet Information Unavailable</td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="no-applications">No adoption applications found.</p>
                )}
            </div>
            <Footer />
        </>
    );
}

export default MyAdoption;
