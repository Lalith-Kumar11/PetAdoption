import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import Login from './Components/Login/Login';
// import Footer from './Components/Footer/Footer';
import FAQ from './Components/Footer/Links/Faq';
import Privacy from './Components/Footer/Links/Privacy';
import PetGrid from './Components/Pages/PetGrid';
import PetDetails from './Components/Pages/PetDetails';
import PetDetailPage from './Components/Pages/PetDetailPage';
import About from './Components/Navbar/About';
import Blog from './Components/Navbar/Blog';
import PetPickupRequest from './Components/Navbar/PetPickUp';
import Profile from './Components/Login/Profile';
import PaymentPage from './Components/Login/Payment';

import Dashboard from './Components/Admin/Dashboard';
import ManageUser from './Components/Admin/ManageUser';
import ManagePet from './Components/Admin/ManagePet';
import ManageAdoption from './Components/Admin/ManageAdoption';
import PetPickupRequestManagement from './Components/Admin/PetPickUpRequest';
import MyAdoption from './Components/Login/MYAdoption';
import ManagePaymentsPage from './Components/Admin/ManagePayment';

import './App.css';

const App = () => {
  const [selectedPet, setSelectedPet] = useState(null);

  const handlePetClick = pet => {
    setSelectedPet(pet);
  };

  const handleAdopt = pet => {
    alert(`You have adopted ${pet.name}!`);
    setSelectedPet(null);
  };

  const handleClose = () => {
    setSelectedPet(null);
  };

  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/FAQ" element={<FAQ />} />
        <Route exact path="/Privacy" element={<Privacy />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Blog" element={<Blog />} />
        <Route exact path="/pet" element={<PetGrid onPetClick={handlePetClick} />} />
        <Route path="/pet-detail/:id" element={<PetDetailPage />} />
        <Route path="/PetPickUp" element={<PetPickupRequest/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path='/MYAdoption' element={<MyAdoption/>} />
        <Route path="/payment/:applicationId" element={<PaymentPage />} />

        
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path='/ManageUser' element={<ManageUser/>}/>
        <Route path='/ManagePet' element={<ManagePet/>}/>
        <Route path='/ManageAdoption' element={<ManageAdoption/>}/>
        <Route path='/PetPickUpRequest' element={<PetPickupRequestManagement />}/>
        <Route path='/ManagePayment' element={<ManagePaymentsPage/>} />
      
        
      </Routes>
      {selectedPet && (
        <PetDetails pet={selectedPet} onAdopt={handleAdopt} onClose={handleClose} />
      )}
    </div>
  );
};

export default App;
