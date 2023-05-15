import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './profile-content.css';
import card from '../../../../../img/main-page/main_card.png';
import axios from 'axios';

function ProfileContent(props) {
  document.title = 'PiggyBank - Profile';
  const [transfers, setTransfers] = useState([]);
  const [ReceiverCard, setReceiverCard] = useState('');
  const [sum_transfer, setTransferAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [phone, setPhone] = useState('Loading...');
  const [mail, setMail] = useState('Loading...');
  const [birhDate, setBirthDate] = useState('Loading...');
  const [name, setName] = useState('Loading...');
  const [cardNumber, setCardNumber] = useState('Loading...');
  const [transferStatus, setTransferStatus] = useState('');

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
        setTransfers(info.data.transfers);
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
    setReceiverCard(event.target.value);
  };

  const addTransaction = async () => {
    if (ReceiverCard === cardNumber) {
      setTransferStatus('You cannot send money to yourself!');
      return;
    }
    if (sum_transfer > balance) {
      setTransferStatus('You cannot send more then you have!');
      return;
    }
    await axios
      .post('http://localhost:3002/createTransfer', {
        SenderCard: cardNumber,
        ReceiverCard: ReceiverCard,
        sum_transfer: sum_transfer,
      })
      .then((response) => {})
      .catch((error) => {
        setTransferStatus(error.response.data.message);
      });
    const newTransaction = {
      ReceiverCard: ReceiverCard,
      sum_transfer: sum_transfer,
      balance: balance - Number(sum_transfer),
    };
    await setBalance(balance - Number(sum_transfer));
    await setTransfers([newTransaction, ...transfers]);
    console.log(transfers);
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
              {transfers.map((transfer, index) => {
                let transferCard;
                let transferAmount;
                if (String(transfer.ReceiverCard) === cardNumber) {
                  transferCard = String(transfer.SenderCard);
                  transferAmount = '+' + String(transfer.sum_transfer);
                  return (
                    <tr key={index}>
                      <td>{transferCard}</td>
                      <td>{transferAmount}$</td>
                      <td>{transfer.balance}$</td>
                    </tr>
                  );
                }
                if (String(transfer.SenderCard) === cardNumber) {
                  transferCard = String(transfer.SenderCard);
                  transferAmount = '-' + String(transfer.sum_transfer);
                  return (
                    <tr key={index}>
                      <td>{transferCard}</td>
                      <td>{transferAmount}$</td>
                      <td>{transfer.balance}$</td>
                    </tr>
                  );
                }
                console.log(transfer);
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProfileContent;
