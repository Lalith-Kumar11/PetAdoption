import React, { useState } from "react";
import { FaBars, FaTh, FaUserAlt, FaPaw, FaFileAlt,FaMoneyBillWave } from "react-icons/fa"; 
import { NavLink } from "react-router-dom";
import './Sidebar.css';
import { GiBirdCage } from "react-icons/gi";

const Navigation = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />
    },
    {
      path: "/ManageUser",
      name: "Manage User",
      icon: <FaUserAlt />
    },
    {
      path: "/ManagePet",
      name: "Manage Pet",
      icon: <FaPaw />
    },
    {
      path: "/ManageAdoption",
      name: "Manage Adoption",
      icon: <FaFileAlt />
    },
    {
      path: "/PetPickUpRequest",
      name: "PetPickUp request",
      icon: <GiBirdCage/>
    },
    {
      path: "/ManagePayment",
      name: "ManagePayment",
      icon: <FaMoneyBillWave/>
    }
  ];

  return (
    <div className="sidebar-container">
      <div className="sidebar-navigation">
        <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar-top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="sidebar-logo">ADMIN</h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="sidebar-bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className='sidebar-link' activeClassName='sidebar-active'>
              <div className="sidebar-icon">{item.icon}</div>
              <div style={{ display: isOpen ? "block" : "none" }} className="sidebar-link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main className="sidebar-main">{children}</main>
    </div>
  );
}

export default Navigation;
