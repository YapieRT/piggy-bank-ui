import { useState } from 'react';
import Header from '../../components/header/header';
import axios from 'axios';
import './AdminPanel.css';

function AdminPanel() {
  document.title = 'PiggyBank - Login';

  const [panel, setPanel] = useState(false);
  const [accessCode, setAccessCode] = useState('');

  const [loginStatus, setLoginStatus] = useState('');

  const passwordChangeHandler = (event) => {
    setAccessCode(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
  };

  if (!panel)
    return (
      <>
        <Header />
        <div className='admin-panel'>
          <div className='admin-panel-content'>
            <h2>Welcome Back!</h2>
            <h4>Please fill in the form below:</h4>
            <form className='admin-panel-form' onSubmit={submitHandler}>
              <div className='input-container'>
                <label>Access Code:</label>
                <input required type='password' placeholder='Write text here...' onChange={passwordChangeHandler} />
              </div>
              <p className='loginStatus'>{loginStatus}</p>
              <button className='loginButton' type='submit'>
                Get In
              </button>
            </form>
          </div>
        </div>
      </>
    );
}

export default AdminPanel;
