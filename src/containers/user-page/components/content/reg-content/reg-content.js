import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* REGISTRATION STEP CONTENT */
import { RenderStepOne, RenderStepTwo, RenderStepThree, RenderStepFour } from './step-content/step-content';

import './reg-content.css';

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    birth_date: '',
    phone_number: '',
    address: '',
    email: '',
  });
  const handleUserData = (attr) => {
    setUserData({ ...userData, attr });
  };
  const handleFormDataNext = () => {
    setCurrentStep(currentStep + 1);
  };
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFinish = () => {
    // FINISH LOGIC
    console.log('User data:', userData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

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
            <RenderStepTwo onChange={handleUserData} />
          </div>
        );
      case 3:
        return (
          <div className='step-content'>
            <RenderStepThree />
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
    } else if (currentStep === totalSteps) {
      return (
        /*  <Link to="/user#login">
                         
                     </Link> */
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
