import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch, faPaw } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navigation() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchClick = () => {
        if (searchQuery.trim()) {
            navigate(`/search?query=${searchQuery}`);
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        handleSearchClick();
    };

    const handlePetPickUpClick = () => {
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        if (loggedInUser) {
            navigate('/PetPickUp');
        } else {
            alert('You need to be logged in to access this page.');
            navigate('/Login');
        }
    };

    return (
        <div className='navbar-header'>
            <div id='navbar-logo'>
                <FontAwesomeIcon icon={faPaw} />
                PawsAndHomes
            </div>
            <ul className='navbar'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/pet'}>Pets</Link></li>
                <li><Link to={'/About'}>About</Link></li>
                <li><Link to={'/Blog'}>Blog</Link></li>
                <li>
                    <button onClick={handlePetPickUpClick} className='navbar-link-button'>
                        PetPickUp
                    </button>
                </li>
            </ul>
            <form className="navbar-search-form" onSubmit={handleSearchSubmit}>
                <input
                    type="search"
                    placeholder="search here..."
                    id="navbar-search-box"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <FontAwesomeIcon
                    icon={faSearch}
                    className="search-icon"
                    onClick={handleSearchClick}
                />
            </form>
            <div className="navbar-icons">
                {JSON.parse(localStorage.getItem('user')) ? (
                    <div id="navbar-login-btn" className="navbar-login-btn">
                        <Link to={'/profile'}>
                            <FontAwesomeIcon icon={faUserCircle} />
                        </Link>
                    </div>
                ) : (
                    <div id="navbar-login-btn" className="navbar-login-btn">
                        <Link to={'/Login'}>
                            <FontAwesomeIcon icon={faUserCircle} />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navigation;
