import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Payment.css';

function PaymentPage() {
    const { applicationId } = useParams();
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApplicationDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/adoptionDetails/fetchById/${applicationId}`);
                if (response.data) {
                    setAmount(response.data.pet.fee);
                }
            } catch (error) {
                console.error('Error fetching application details:', error);
            }
        };

        fetchApplicationDetails();
    }, [applicationId]);

    const handlePayment = async () => {
        const paymentDetails = {
            adoptionApplication: { application_id: applicationId },
            amount: amount,
        };
        
        try {
            console.log(paymentDetails);
            const paymentResponse = await axios.post('http://localhost:8080/paymentDetails/insertPayment', paymentDetails);

            if (paymentResponse.status === 200) {
                const statusUpdate = 'Paid';
                const statusResponse = await axios.put(`http://localhost:8080/adoptionDetails/updateStatus/${applicationId}?status=${statusUpdate}`);
                
                if (statusResponse.status === 200) {
                    alert('Payment successfull!!');
                    navigate('/MYAdoption');
                }
            }
        } catch (error) {
            console.error('Error making payment:', error.response ? error.response.data : error.message);
            alert('Payment failed. Please try again.');
        }
    };

    return (
        <>
            <Navbar />
            <div className="payment-container">
                <div className='payment-container-div'>
                <h2>Make Payment</h2>
                <div className="payment-details">
                    <p><strong>Application ID:</strong> {applicationId}</p>
                    <p><strong>Amount:</strong> ${amount.toFixed(2)}</p>
                </div>
                <button className="payment-button" onClick={handlePayment}>
                    Confirm Payment
                </button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PaymentPage;
