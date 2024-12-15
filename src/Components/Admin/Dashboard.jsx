import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import './Dashboard.css';
import Navigation from './Sidebar';


ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [data, setData] = useState({
    users: 0,
    pets: 0,
    adoptionForms: 0,
    pickupRequests: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, petsRes, adoptionFormsRes, pickupRequestsRes] = await Promise.all([
          axios.get('http://localhost:8080/api/auth/fetchAll'),
          axios.get('http://localhost:8080/petDetails/fetchAll'),
          axios.get('http://localhost:8080/adoptionDetails/fetchAll'),
          axios.get('http://localhost:8080/requestDetails/fetchAll'),
        ]);

        setData({
          users: usersRes.data.length,
          pets: petsRes.data.length,
          adoptionForms: adoptionFormsRes.data.length,
          pickupRequests: pickupRequestsRes.data.length,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const pieData = {
    labels: ['Users', 'Pets', 'Adoption Forms', 'Pickup Requests'],
    datasets: [
      {
        data: [data.users, data.pets, data.adoptionForms, data.pickupRequests],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <Navigation>
      <div className="Dashboard-container">
        <div className='Dashboard-content'>
        <h1 className="Dashboard-title">Dashboard</h1>
        <div className="Dashboard-stats">
          <div className="Dashboard-card">Users: {data.users}</div>
          <div className="Dashboard-card">Pets: {data.pets}</div>
          <div className="Dashboard-card">Adoption Forms: {data.adoptionForms}</div>
          <div className="Dashboard-card">Pickup Requests: {data.pickupRequests}</div>
        </div>
        <div className="Dashboard-chart-container">
          <Pie data={pieData} width={150} height={150} />
        </div>
        </div>
      </div>
    </Navigation>
  );
};

export default Dashboard;
