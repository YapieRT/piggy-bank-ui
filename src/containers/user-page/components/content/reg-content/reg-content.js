import './reg-content.css';
import { useState } from 'react';

const RegistrationContent = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    phone: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: '',
    color: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data
    console.log(formData);
  };

  return (
    <div className='registration-form'>
      <div className='step-progress'>
        <div className={`step ${step === 1 ? 'active' : ''}`}></div>
        <div className={`step ${step === 2 ? 'active' : ''}`}></div>
        <div className={`step ${step === 3 ? 'active' : ''}`}></div>
        <div className={`step ${step === 4 ? 'active' : ''}`}></div>
      </div>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className='step-content'>
            <button type='button' onClick={handleNext}>
              Start
            </button>
          </div>
        )}
        {step === 2 && (
          <div className='step-content'>
            <div className='row'>
              <div className='input-container'>
                <label>First Name:</label>
                <input
                  type='text'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder='First Name'
                  required
                />
              </div>
              <div className='input-container'>
                <label>Last Name:</label>
                <input
                  type='text'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder='Last Name'
                  required
                />
              </div>
            </div>
            <div className='row'>
              <div className='input-container'>
                <label>Birth Date:</label>
                <input
                  type='date'
                  name='birthDate'
                  value={formData.birthDate}
                  onChange={handleChange}
                  placeholder='Birth Date'
                  required
                />
              </div>
              <div className='input-container'>
                <label>Phone:</label>
                <input
                  type='tel'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder='Phone'
                  required
                />
              </div>
            </div>
            <div className='row'>
              <div className='input-container'>
                <label>Address:</label>
                <input
                  type='text'
                  name='address'
                  value={formData.address}
                  onChange={handleChange}
                  placeholder='Address'
                  required
                />
              </div>
            </div>
            <div className='row'>
              <div className='input-container'>
                <label>Email:</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Email'
                  required
                />
              </div>
            </div>
            <div className='row'>
              <div className='input-container'>
                <label>Password:</label>
                <input
                  type='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Password'
                  required
                />
              </div>
              <div className='input-container'>
                <label>Confirm Password:</label>
                <input
                  type='password'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder='Confirm Password'
                  required
                />
              </div>
            </div>
            <div className='button-container'>
              <button className='previous' type='button' onClick={handlePrevious}>
                Previous
              </button>
              <button type='button' onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className='step-content'>
            <div className='row'>
              <div className='input-container'>
                <label>Color:</label>
                <div className='radio-container'>
                  <input
                    type='radio'
                    id='yellow'
                    name='color'
                    value='yellow'
                    checked={formData.color === 'yellow'}
                    onChange={handleChange}
                  />
                  <label htmlFor='yellow'>Yellow</label>
                </div>
                <div className='radio-container'>
                  <input
                    type='radio'
                    id='red'
                    name='color'
                    value='red'
                    checked={formData.color === 'red'}
                    onChange={handleChange}
                  />
                  <label htmlFor='red'>Red</label>
                </div>
                <div className='radio-container'>
                  <input
                    type='radio'
                    id='pink'
                    name='color'
                    value='pink'
                    checked={formData.color === 'pink'}
                    onChange={handleChange}
                  />
                  <label htmlFor='pink'>Pink</label>
                </div>
                <div className='radio-container'>
                  <input
                    type='radio'
                    id='purple'
                    name='color'
                    value='purple'
                    checked={formData.color === 'purple'}
                    onChange={handleChange}
                  />
                  <label htmlFor='purple'>Purple</label>
                </div>
              </div>
            </div>
            <div className='button-container'>
              <button className='previous' type='button' onClick={handlePrevious}>
                Previous
              </button>
              <button type='button' onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className='step-content'>
            <button className='previous' type='button' onClick={handlePrevious}>
              Previous
            </button>
            <button type='submit'>Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationContent;
