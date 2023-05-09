import React from 'react';
import './profile-content.css';

import card from "../../../../../img/main-page/main_card.png"

class ProfileContent extends React.Component {
    render() {
        const userData = {
            name: "Jack Daniels",
            phone: "12345",
            birthdate: "11/11/2011",
            mail: "jack.daniels@gmail.com",
            balance: 1000
        };
        return (
            <div className="content">
                <div className="general">
                    <div className="card-img">
                        <img src={card} alt="" />
                    </div>
                    <div className="wrapper-info">
                        <div className="user-info">
                            <p>Name: <span>{userData.name}</span> </p>
                            <p>Phone: <span>{userData.phone}</span> </p>
                            <p>Birthdate: <span>{userData.birthdate}</span> </p>
                            <p>Mail: <span>{userData.mail}</span> </p>
                        </div>
                        <div className="wrapper-btn">
                            <button className="btn logout">Log Out</button>
                        </div>
                    </div>
                </div>
                <div className="data">
                    <div className="user-data">
                        <div className="user-balance">
                            <h3 className="balance-text">BALANCE IS:</h3>
                            <p className="user-balance">{userData.balance}$</p>
                        </div>
                    </div>
                    <div className="data-operations">
                        <div className="transfer-operation">
                            <input type="number" className="input transfer-from" />
                            <input type="text" className="input transfer-to" />
                            <button className="btn transfer">Transfer</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/* const ProfileContent = () => {
    const userData = {
        name: "Client 1",
        phone: "123456",
        birthdate: "11/11/2011",
        mail: "jack.daniels@gmail.com"
    };
    return (
        <div className="content">
            <h2>Profile</h2>
            <p>Welcome to your profile page!</p>
        </div>
    );
}; */

export default ProfileContent;