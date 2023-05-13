import React from 'react';
import './login-content.css';

import { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const LoginContent = () => {
  document.title = 'PiggyBank - Login';
  const navigate = useNavigate();
  const [password, setEnteredPassword] = useState('');
  const [email, setEnteredEmail] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const postData = { email: email, password: password };
    await axios
      .post('http://localhost:3002/login', postData)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        navigate('/user#profile');
        setLoginStatus(response.data.message);
      })
      .catch((error) => {
        setLoginStatus(error.response.data.message);
      });
  };
  return (
    <div className='content'>
      <h2>Welcome Back!</h2>
      <h4>Please fill in the form below:</h4>
      <form className='loginForm' onSubmit={submitHandler}>
        <div className='input-container'>
          <label>Email:</label>
          <input required type='text' placeholder='Write text here...' onChange={emailChangeHandler} />
        </div>
        <div className='input-container'>
          <label>Password:</label>
          <input required type='password' placeholder='Write text here...' onChange={passwordChangeHandler} />
        </div>
        <p className='loginStatus'>{loginStatus}</p>
        <button className='loginButton' type='submit'>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginContent;
