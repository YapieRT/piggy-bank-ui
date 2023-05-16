import React from 'react';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import './admin-page.css';
import '../user-page/components/content/profile-content/profile-content.css';

import { useState, useEffect } from 'react';

import axios from 'axios';

function AdminPage() {
  const [panel, setPanel] = useState(false);
  const [accessCode, setAccessCode] = useState('');

  const [enterStatus, setEnterStatus] = useState('');

  const [cardNumber, setCardNumber] = useState('');
  const [amount, setAmount] = useState('');

  const [isResponse, setIsResponse] = useState(true);
  const [balanceUpdateStatus, setBalanceUpdateStatus] = useState('');

  const cardNumberChangeHandler = (event) => {
    setCardNumber(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const [cards, setCards] = useState([]);

  const accessCodeChangeHandler = (event) => {
    setAccessCode(event.target.value);
  };

  useEffect(() => {
    const getUserCards = async () => {
      await axios
        .get('http://localhost:3002/admin/users')
        .then((response) => {
          setCards(response.data.usersCards);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (panel) getUserCards();
  }, [cards, panel]);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (accessCode == 'admin') setPanel(true);
  };

  const updateBalance = async (event) => {
    event.preventDefault();
    await axios
      .post('http://localhost:3002/admin/updatebalance', {
        cardNumber: cardNumber,
        amount: Number(amount),
      })
      .then((response) => {
        console.log(response);
        setIsResponse(true);
        setBalanceUpdateStatus(response.data.message);
        setCards(cards);
      })
      .catch((error) => {
        console.log(error);
        setIsResponse(false);
        setBalanceUpdateStatus(error.response.data.message);
      });
  };
  const renderContent = () => {
    if (!panel)
      return (
        <>
          <Header />
          <div className='wrapper-admin-content'>
            <div className='admin-panel-content'>
              <h2>Admin Panel</h2>
              <h4>Please enter access code:</h4>
              <form className='admin-enter-form' onSubmit={submitHandler}>
                <div className='input-container'>
                  <label>Access Code:</label>
                  <input required type='password' placeholder='Write text here...' onChange={accessCodeChangeHandler} />
                </div>
                <p className='enterStatus'>{enterStatus}</p>
                <button className='enterButton' type='submit'>
                  Get In
                </button>
              </form>
            </div>
          </div>
        </>
      );
    else
      return (
        <>
          <Header />
          <div style={{ marginBottom: '10px' }}></div>
          <div className='wrapper-admin-content'>
            {/*                 <div className="admin-row-wrapper">
                    <div className="admin-column-wrapper"> */}
            <div className='admin-header'>
              <div className='general'>
                <h2>PIGGY BANK - ADMIN PANEL</h2>
                <div className='general-row'>
                  <h3>
                    <span>Updated</span>: 11/11/2011
                  </h3>
                  <h3>
                    <span>Version</span>: 0.0.1a
                  </h3>
                </div>
              </div>
              <div className='descr'>
                <p>
                  Welcome to the Piggy Bank Admin Panel. This panel provides access to various administrative tools for
                  managing the internet banking system.
                </p>
              </div>
            </div>
            <div className='admin-operations'>
              <div className='title'>
                <p>
                  Insert and withdraw<br></br>
                  <span>Admin Tool</span>
                </p>
              </div>
              <form className='form' onSubmit={updateBalance}>
                <div className='form-row'>
                  <div className='form-input'>
                    <label htmlFor='cardNumber'>Card Number:</label>
                    <input type='text' id='cardNumber' name='cardNumber' required onChange={cardNumberChangeHandler} />
                  </div>
                  <div className='form-input'>
                    <label htmlFor='amountValue'>Amount:</label>
                    <input type='text' id='amountValue' name='amountValue' required onChange={amountChangeHandler} />
                  </div>
                </div>
                <div className='form-btn-row'>
                  <button className='form-btn insert'>Insert</button>
                  <button className='form-btn withdraw'>Withdraw</button>
                </div>
                <p className={isResponse ? 'UpdateConfirm' : 'UpdateError'}>{balanceUpdateStatus}</p>
              </form>
            </div>
            <div className='admin-table'>
              <div className='title'>
                <p>
                  User Info Table<br></br>
                  <span>Admin User Data</span>
                </p>
              </div>
              <table>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left' }}>Full Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Card Number</th>
                    <th>Card Balance</th>
                    <th>Action Buttons</th>
                  </tr>
                </thead>
                <tbody style={{ height: 'auto' }}>
                  {cards.map((card, index) => {
                    return (
                      <tr key={index}>
                        {' '}
                        <td style={{ textAlign: 'left' }}>{card.userId.name + ' ' + card.userId.surname}</td>
                        <td>{card.userId.phone_number}</td>
                        <td>{card.userId.email}</td>
                        <td>{card.number}</td>
                        <td>{card.balance}$</td>
                        <td>
                          <button>Remove</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <Footer getStartedFlag={false} />
        </>
      );
  };
  return renderContent();
}

export default AdminPage;
