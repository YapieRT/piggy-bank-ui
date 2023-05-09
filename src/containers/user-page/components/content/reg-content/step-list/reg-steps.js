import React from 'react';

export const RegistrationStepOne = () => {
    return (
        <div className="content">
            <h2>Registration</h2>
            <form>
                <input type="text" placeholder="Username" />
                <button type="submit">Next Step</button>
            </form>
        </div>);
}

export const RegistrationStepTwo = () => {
    return (
        <div className="content">
            <h2>Registration</h2>
            <form>
                <input type="email" placeholder="Email" />
                <button type="submit">Next Step</button>
            </form>
        </div>);
}

export const RegistrationStepThree = () => {
    return (
        <div className="content">
            <h2>Registration</h2>
            <form>
                <input type="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>);
}