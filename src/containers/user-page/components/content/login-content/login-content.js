import React from 'react';
import './login-content.css';

import { useState } from 'react';
import axios from 'axios';

const LoginContent = () => {
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
        setLoginStatus(response.data.message);
      })
      .catch((error) => {
        setLoginStatus(error.response.data.message);
      });
  };
  return (
    <div className='content'>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <input required type='text' placeholder='Email' onChange={emailChangeHandler} />
        <input required type='password' placeholder='Password' onChange={passwordChangeHandler} />
        <p>{loginStatus}</p>
        <button className='loginButton' type='submit'>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginContent;
