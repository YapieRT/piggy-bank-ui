import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

/* REGISTRATION STEP CONTENT */
import { RenderStepOne, RenderStepTwo, RenderStepThree, RenderStepFour } from './step-content/step-content';

import './reg-content.css';

const RegistrationForm = () => {
  const ip = 'http://localhost';
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const totalSteps = 4;

  const [registrationStatus, setRegistrationStatus] = useState('');
  const [registrationErrors, setRegistrationErrors] = useState([]);

  const handleUserData = async (attr) => {
    await setUserData({
      ...userData,
      ...attr,
    });
  };

  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handlePasswordConfirm = async (passConfirm) => {
    await setPasswordConfirm(passConfirm);
  };

  const [color, setColor] = useState('#D68CD3');
  const [cardType, setCardType] = useState('visa');

  const handleColorChange = (color) => {
    setColor(color);
  };
  const handleCardType = (type) => {
    setCardType(type);
  };

  const [signUpResponseData, setSignUpResponseData] = useState({});

  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    birth_date: '',
    phone_number: '',
    address: '',
    email: '',
    password: '',
  });

  const handleFinish = async () => {
    try {
      const signupResponse = await axios.post(`${ip}:3002/signup`, { ...userData });
      const responseData = signupResponse.data;
      setSignUpResponseData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormDataNext = async () => {
    await axios
      .post(`${ip}:3002/existenceCheck`, { ...userData })
      .then((response) => {
        setRegistrationStatus('');
        setRegistrationErrors([]);
        if (userData.password === passwordConfirm && userData.password !== '') {
          setCurrentStep(currentStep + 1);
          return;
        } else {
          setRegistrationStatus('Your password are not the same');
          return;
        }
      })
      .catch((error) => {
        if (error.response.data.errors) setRegistrationErrors(error.response.data.errors);

        if (error.response.data.message) setRegistrationStatus(error.response.data.message);
        return;
      });
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    const createCard = async () => {
      if (signUpResponseData && Object.keys(signUpResponseData).length !== 0) {
        localStorage.setItem('token', signUpResponseData.token);
        try {
          await axios.post(`${ip}:3002/create-card`, {
            userId: signUpResponseData._id,
            cardType: cardType,
            cardColor: color,
          });
          navigate('/user#profile', {});
        } catch (error) {
          console.log(error);
        }
      }
    };
    createCard();
  }, [signUpResponseData, cardType, color]);

  const renderProgressBar = () => {
    return (
      <div className='progress-bar'>
        {Array.from({ length: totalSteps }, (_, index) => (
          <React.Fragment key={index}>
            <div className={`progress-bar__step ${index < currentStep ? 'active' : ''}`}>
              {index + 1 <= currentStep - 1 ? <span>&#10003;</span> : index + 1}
            </div>
            {index !== totalSteps - 1 && (
              <div className={`progress-bar__connector ${index < currentStep - 1 ? 'active' : ''}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className='step-content'>
            <RenderStepOne />
          </div>
        );
      case 2:
        return (
          <div className='step-content'>
            <RenderStepTwo
              onChange={handleUserData}
              registrationStatus={registrationStatus}
              registrationErrors={registrationErrors}
              onChangePasswordConfirm={handlePasswordConfirm}
              userData={userData}
            />
          </div>
        );
      case 3:
        return (
          <div className='step-content'>
            <RenderStepThree onColorChange={handleColorChange} onCardTypeChange={handleCardType} />
          </div>
        );
      case 4:
        return (
          <div className='step-content'>
            <RenderStepFour />
          </div>
        );
      default:
        return null;
    }
  };

  const renderNavigationButtons = () => {
    if (currentStep === 1) {
      return (
        <button className='navigation-btn std' onClick={handleNext}>
          Next{' '}
        </button>
      );
    } else if (currentStep === totalSteps && currentStep !== 1) {
      return (
        <>
          <button className='navigation-btn std' onClick={handleFinish}>
            Finish
          </button>
        </>
      );
    } else {
      return (
        <>
          <button className='navigation-btn nstd' onClick={handlePrevious}>
            Previous
          </button>
          <button className='navigation-btn std' onClick={currentStep === 2 ? handleFormDataNext : handleNext}>
            Next
          </button>
        </>
      );
    }
  };

  return (
    <div className='registration-form'>
      {renderProgressBar()}
      {renderContent()}
      <div className='navigation-buttons'>{renderNavigationButtons()}</div>
    </div>
  );
};

export default RegistrationForm;
