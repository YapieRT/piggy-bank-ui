import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './profile-content.css';
import card from '../../../../../img/main-page/main_card.png';
import axios from 'axios';

function ProfileContent(props) {
  document.title = 'PiggyBank - Profile';
  const [transfers, setTransfers] = useState([]);
  const [id_receiver, setReceiverId] = useState('');
  const [sum_transfer, setTransferAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [phone, setPhone] = useState('Loading...');
  const [mail, setMail] = useState('Loading...');
  const [birhDate, setBirthDate] = useState('Loading...');
  const [name, setName] = useState('Loading...');
  const [cardNumber, setCardNumber] = useState('Loading...');
  const [transferStatus, setTransferStatus] = useState('');

  const testTransactions = [
    { cardNumber: '1234 5678 9012 3456', amount: 50, balance: 1050.15 },
    { cardNumber: '9876 5432 1098 7654', amount: 100, balance: 1150.15 },
  ];

  const splitCardNumber = (cardNumber) => {
    cardNumber = cardNumber.replace(/\s/g, '');

    let groups = cardNumber.match(/.{1,4}/g);

    let formattedCardNumber = groups.join(' ');

    return formattedCardNumber;
  };

  useEffect(() => {
    const getInfo = async () => {
      try {
        const info = await axios.post('http://localhost:3002/getTransfersById', {
          token: localStorage.getItem('token'),
        });
        console.log(info);
        setName(info.data.user.name + ' ' + info.data.user.surname);
        setPhone(info.data.user.phone_number);
        setMail(info.data.user.email);
        setBirthDate(info.data.user.birth_date.substring(0, 10));
        setBalance(info.data.card.balance);
        setCardNumber(info.data.card.number);
      } catch (error) {
        console.log(error);
      }
    };
    getInfo();
  }, []);

  const transferAmountHandler = (event) => {
    setTransferAmount(Number(event.target.value));
  };

  const receiverCardHandler = (event) => {
    setReceiverId(event.target.value);
  };

  const addTransaction = () => {
    console.log(sum_transfer, balance);
    if (sum_transfer > balance) {
      setTransferStatus('You cannot transfer such amount of money');
      return;
    }
    const newTransaction = { id_receiver: id_receiver, sum_transfer: sum_transfer, balance: balance - sum_transfer };
    setBalance(balance - sum_transfer);
    setTransfers([newTransaction, ...transfers]);
  };

  return (
    <div className='content'>
      <div className='general'>
        <div className='card-img'>
          <img src={card} alt='' />
        </div>
        <div className='wrapper-info'>
          <div className='user-info'>
            <p className='text m5 bold'>
              Name: <span className='text regular'>{name}</span>
            </p>
            <p className='text m5 bold'>
              Phone: <span className='text regular'>{phone}</span>
            </p>
            <p className='text m5 bold'>
              Birthdate: <span className='text regular'>{birhDate}</span>
            </p>
            <p className='text m5 bold'>
              Mail: <span className='text regular'>{mail}</span>
            </p>
          </div>
        </div>
      </div>
      <div className='data'>
        <div className='user-data'>
          <div className='user-balance'>
            <h3 className='text balance regular'>YOUR CARD NUMBER IS:</h3>
            <p className='text balance sized bold'>{splitCardNumber(cardNumber)}</p>
            <h3 className='text balance regular'>BALANCE IS:</h3>
            <p className='text balance sized bold'>{balance}$</p>
          </div>
        </div>
        <div className='data-operations'>
          <div className='transfer-operation'>
            <input
              type='text'
              className='input transfer-from'
              placeholder='Card Number'
              name='cardNumber'
              onChange={receiverCardHandler}
            />
            <input
              type='number'
              className='input transfer-to'
              placeholder='Amount'
              name='amount'
              onChange={transferAmountHandler}
            />
            <button className='btn transfer' onClick={addTransaction}>
              Transfer
            </button>
          </div>
          <p className='transferStatus'>{transferStatus}</p>
        </div>
        <div className='transaction-table'>
          <table>
            <thead>
              <tr>
                <th>Card Number</th>
                <th>Amount</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {transfers.map((transfer, index) => (
                <tr key={index}>
                  <td>{transfer.id_receiver}</td>
                  <td>{transfer.sum_transfer}</td>
                  <td>{transfer.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProfileContent;
