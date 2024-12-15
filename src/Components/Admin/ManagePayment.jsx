import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManagePayment.css';
import Navigation from './Sidebar';

function ManagePaymentsPage() {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await axios.get('http://localhost:8080/paymentDetails/fetchAll');
                setPayments(response.data);
            } catch (error) {
                console.error('Error fetching payments:', error);
            }
        };

        fetchPayments();
    }, []);

    return (
        <Navigation>
            <div className="managePayment-container">
                <div className='managePayment-content'>
                <center><h2 className="managePayment-heading">Manage Payments</h2></center>
                
                <div className="managePayment-paymentList">
                    <table className="managePayment-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Application ID</th>
                                <th>Amount</th>
                                <th>Transaction ID</th>
                                <th>Payment Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment) => (
                                <tr key={payment.payment_id} className="managePayment-tableRow">
                                    <td>{payment.payment_id}</td>
                                    <td>{payment.adoptionApplication?.application_id || 'N/A'}</td>
                                    <td>${payment.amount}</td>
                                    <td>{payment.transaction_id}</td>
                                    <td>{new Date(payment.payment_date).toLocaleDateString()}</td>
                                    <td>{payment.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </Navigation>
    );
}

export default ManagePaymentsPage;
