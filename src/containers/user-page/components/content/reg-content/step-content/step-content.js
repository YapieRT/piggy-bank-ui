import React, { useState } from 'react';

import './step-content.css';
/* ### STEP ONE ### */
import logo from '../../../../../../icons/header/logo.png';
/* ### STEP THREE ### */
import visa from '../../../../../../img/user-page/reg-content/visa.png';
import mastercard from '../../../../../../img/user-page/reg-content/mastercard.png';

export const RenderStepOne = () => {
  return (
    <div className='step-wrapper step-one'>
      <img src={logo} alt='' className='logo' />
      <h2 className='title'>Before you start</h2>
      <span className='descr'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, optio alias. Eligendi error iure atque corporis
        quas blanditiis ducimus nihil earum magnam cupiditate nemo eum animi illo aperiam, veniam illum?
      </span>
    </div>
  );
};

export const RenderStepTwo = ({
  onChange,
  registrationStatus,
  registrationErrors,
  onChangePasswordConfirm,
  userData,
}) => {
  const updateUserData = (obj) => {
    onChange(obj);
  };

  const errorHandlers = () => {
    if (registrationErrors.length !== 0) {
      let errors = registrationErrors.map((error, index) => (
        <p className='registrationStatus' key={index}>
          {error.msg}
        </p>
      ));
      return <>{errors}</>;
    } else if (registrationStatus) {
      return <p className='registrationStatus'>{registrationStatus}</p>;
    }
  };

  const firstNameHandler = (event) => {
    updateUserData({ name: event.target.value });
  };
  const secondNameHandler = (event) => {
    updateUserData({ surname: event.target.value });
  };
  const birthDateHandler = (event) => {
    updateUserData({ birth_date: event.target.value });
  };
  const phoneHandler = (event) => {
    updateUserData({ phone_number: event.target.value });
  };
  const addressHandler = (event) => {
    updateUserData({ address: event.target.value });
  };
  const emailHandler = (event) => {
    updateUserData({ email: event.target.value });
  };
  const passwordHandler = (event) => {
    updateUserData({ password: event.target.value });
  };
  const passwordConfirmHandler = (event) => {
    onChangePasswordConfirm(event.target.value);
  };

  return (
    <div className='step-wrapper step-two'>
      <h2 className='title'>Please fill in the form below:</h2>
      <form className='form'>
        <div className='form-row'>
          <div className='form-input'>
            <label htmlFor='firstName'>First Name:</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              required
              onChange={firstNameHandler}
              value={userData.name}
            />
          </div>
          <div className='form-input'>
            <label htmlFor='lastName'>Last Name:</label>
            <input type='text' id='lastName' name='lastName' onChange={secondNameHandler} value={userData.surname} />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-input'>
            <label htmlFor='birthDate'>Birth Date:</label>
            <input
              type='date'
              id='birthDate'
              name='birthDate'
              onChange={birthDateHandler}
              value={userData.birth_date}
            />
          </div>
          <div className='form-input'>
            <label htmlFor='phoneNumber'>Phone Number:</label>
            <input
              type='tel'
              id='phoneNumber'
              name='phoneNumber'
              onChange={phoneHandler}
              value={userData.phone_number}
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-input'>
            <label htmlFor='cityaddress'>City, Address:</label>
            <input type='text' id='cityaddress' name='cityaddress' onChange={addressHandler} value={userData.address} />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-input'>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' onChange={emailHandler} value={userData.email} />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-input'>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' onChange={passwordHandler} value={userData.password} />
          </div>
          <div className='form-input'>
            <label htmlFor='confirmPassword'>Confirm Password:</label>
            <input type='password' id='confirmPassword' name='confirmPassword' onChange={passwordConfirmHandler} />
          </div>
        </div>
        {errorHandlers()}
      </form>
    </div>
  );
};

export const RenderStepThree = ({ onColorChange, onCardTypeChange }) => {
  const [cardColor, setCardColor] = useState('#D68CD3');
  const [cardType, setCardType] = useState('visa');

  const handleImageClick = (type) => {
    onCardTypeChange(type);
    setCardType(type);
    console.log(cardType);
  };

  const handleColorChange = (event) => {
    onColorChange(event.target.value);
    setCardColor(event.target.value);
  };

  const cardStyle = {
    background: cardColor,
  };

  return (
    <div className='step-wrapper step-three'>
      <h2 className='title'>There's only a few left</h2>
      <span className='descr'>Choose the type of card you want and your favorite color</span>
      <div className='card-wrapper' style={cardStyle}>
        <img
          src={visa}
          alt=''
          className='visa'
          style={{ opacity: cardType === 'visa' ? 1 : 0.3 }}
          onClick={() => handleImageClick('visa')}
        />
        <img
          src={mastercard}
          alt=''
          className='mastercard'
          style={{ opacity: cardType === 'mastercard' ? 1 : 0.3 }}
          onClick={() => handleImageClick('mastercard')}
        />
      </div>
      <input type='color' value={cardColor} onChange={handleColorChange} className='color-range' />
    </div>
  );
};

export const RenderStepFour = () => {
  return (
    <div className='step-wrapper step-four'>
      <span className='success'>&#10004;</span>

      <h2 className='title'>Well done!</h2>
      <span className='descr'>Registration was successful, now you can close this window and go to your profile</span>
    </div>
  );
};
