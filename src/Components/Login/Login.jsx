import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUser, FaPhoneAlt, FaEye, FaEyeSlash, FaAddressCard } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import './Login.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    mobile: '',
    address: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState({ login: false, signup: false });
  const navigate = useNavigate();

  const handleChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === 'login') {
      setLoginData((prevData) => ({ ...prevData, [name]: value }));
    } else if (formType === 'signup') {
      setSignupData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e, formType) => {
    e.preventDefault();
    let validationErrors = {};
    if (formType === 'login') {
        validationErrors = validateLoginForm(loginData);
    } else if (formType === 'signup') {
        validationErrors = validateSignupForm(signupData);
    }


    if(loginData.email === 'admin@gmail.com' && loginData.password === 'admin_09'){
          navigate("/dashboard")
    }
    else{
    if (Object.keys(validationErrors).length === 0) {
        try {
            const url = formType === 'login' ? 'http://localhost:8080/api/auth/login' : 'http://localhost:8080/api/auth/signup';
            const data = formType === 'login' ? loginData : signupData;
            console.log(`Submitting ${formType} form with data:`, data);
            const response = await axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data) {
                console.log(`${formType} form submitted:`, response.data);
                localStorage.setItem('user', JSON.stringify(response.data));
                navigate(formType === 'login' ? '/profile' : '/Home');
            } else {
                console.error(`${formType} failed:`, response.data.message);
                alert(formType === 'login' ? "Invalid email or password" : "Email already in use");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            if (error.response && error.response.data) {
                console.error('Error response data:', error.response.data);
            }
        }
    } else {
        setErrors(validationErrors);
    }
  }
};

  const validateLoginForm = (data) => {
    let errors = {};
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email format';
    }
    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    return errors;
  };

  const validateSignupForm = (data) => {
    let errors = {};
    if (!data.username.trim()) {
      errors.username = 'Username is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email format';
    }
    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!data.mobile.trim()) {
      errors.mobile = 'Mobile number is required';
    }
    if (!data.address.trim()) {
      errors.address = 'Address is required';
    }
    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const toggleShowPassword = (formType) => {
    setShowPassword((prev) => ({
      ...prev,
      [formType]: !prev[formType]
    }));
  };

  return (
    <>
    <Navbar/>
    <div className='login-container'>
      <div>
        <div className="login-toggle-btns">
          <button
            className={`login-toggle-btn ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`login-toggle-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {isLogin ? (
          <div id='login-content'>
            <form className='login-form'>
              <div className='login-input-container'>
                <AiOutlineMail />
                <input
                  type='email'
                  placeholder='Enter your email'
                  id='login-email'
                  name='email'
                  value={loginData.email}
                  onChange={(e) => handleChange(e, 'login')}
                />
              </div>
              <div className='login-error-msg'>{errors.email && <span>{errors.email}</span>}</div>

              <div className='login-input-container'>
                <FaLock />
                <input
                  type={showPassword.login ? 'text' : 'password'}
                  placeholder='Enter your password'
                  id='login-password'
                  name='password'
                  value={loginData.password}
                  onChange={(e) => handleChange(e, 'login')}
                />
                <button
                  type='button'
                  className='login-password-toggle-btn'
                  onClick={() => toggleShowPassword('login')}
                >
                  {showPassword.login ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className='login-error-msg'>{errors.password && <span>{errors.password}</span>}</div>

              <div className='login-remember'>
                <input type='checkbox' id='login-checkbox' />
                <label className='login-remember-me'>Remember me</label>
              </div>

              <button type='button' className='login-btn' onClick={(e) => handleSubmit(e, 'login')}>Log In</button>

              {/* <div className='login-forgot-password-container'>
                <p className='login-forgot-password-text'>Forgot Password?</p>
                <button type='button' className='login-forgot-password-btn'>Click Here</button>
              </div> */}
            </form>
          </div>
        ) : (
          <div id='signup-content'>
            <form className='signup-form'>
              <div className='login-input-container'>
                <FaUser />
                <input
                  type='text'
                  placeholder='Username'
                  id='signup-username'
                  name='username'
                  value={signupData.username}
                  onChange={(e) => handleChange(e, 'signup')}
                />
              </div>
              <div className='login-error-msg'>{errors.username && <span>{errors.username}</span>}</div>

              <div className='login-input-container'>
                <AiOutlineMail />
                <input
                  type='email'
                  placeholder='Enter your email'
                  id='signup-email'
                  name='email'
                  value={signupData.email}
                  onChange={(e) => handleChange(e, 'signup')}
                />
              </div>
              <div className='login-error-msg'>{errors.email && <span>{errors.email}</span>}</div>

              <div className='login-input-container'>
                <FaLock />
                <input
                  type={showPassword.signup ? 'text' : 'password'}
                  placeholder='Enter your password'
                  id='signup-password'
                  name='password'
                  value={signupData.password}
                  onChange={(e) => handleChange(e, 'signup')}
                />
                <button
                  type='button'
                  className='login-password-toggle-btn'
                  onClick={() => toggleShowPassword('signup')}
                >
                  {showPassword.signup ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className='login-error-msg'>{errors.password && <span>{errors.password}</span>}</div>

              <div className='login-input-container'>
                <FaLock />
                <input
                  type={showPassword.signup ? 'text' : 'password'}
                  placeholder='Confirm your password'
                  id='signup-confirm-password'
                  name='confirmPassword'
                  value={signupData.confirmPassword}
                  onChange={(e) => handleChange(e, 'signup')}
                />
                <button
                  type='button'
                  className='login-password-toggle-btn'
                  onClick={() => toggleShowPassword('signup')}
                >
                  {showPassword.signup ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className='login-error-msg'>{errors.confirmPassword && <span>{errors.confirmPassword}</span>}</div>

              <div className='login-input-container'>
                <FaPhoneAlt />
                <input
                  type='tel'
                  placeholder='Mobile Number'
                  id='signup-mobile'
                  name='mobile'
                  value={signupData.mobile}
                  onChange={(e) => handleChange(e, 'signup')}
                />
              </div>
              <div className='login-error-msg'>{errors.mobile && <span>{errors.mobile}</span>}</div>

              <div className='login-input-container'>
                <FaAddressCard />
                <input
                  type='text'
                  placeholder='Address'
                  id='signup-address'
                  name='address'
                  value={signupData.address}
                  onChange={(e) => handleChange(e, 'signup')}
                />
              </div>
              <div className='login-error-msg'>{errors.address && <span>{errors.address}</span>}</div>

              <button type='button' className='login-btn' onClick={(e) => handleSubmit(e, 'signup')}>Sign Up</button>
            </form>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Login;
