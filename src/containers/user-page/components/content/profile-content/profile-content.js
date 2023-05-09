import React from 'react';
import './profile-content.css';
import card from "../../../../../img/main-page/main_card.png";

class ProfileContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: [
                { cardNumber: "1234 5678 9012 3456", amount: "50", balance: "1050.15" },
                { cardNumber: "9876 5432 1098 7654", amount: "100", balance: "1150.15" }
            ],
            cardNumber: "",
            amount: "",
            balance: 1000.15
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    addTransaction = () => {
        const { cardNumber, amount, balance } = this.state;
        const newTransaction = {
            cardNumber,
            amount,
            balance: parseFloat(balance) + parseFloat(amount)
        };
        this.setState((prevState) => ({
            transactions: [...prevState.transactions, newTransaction],
            cardNumber: "",
            amount: "",
            balance: newTransaction.balance
        }));
    };

    deleteTransaction = (index) => {
        const { transactions } = this.state;
        transactions.splice(index, 1);
        this.setState({ transactions });
    };

    render() {
        const { transactions, cardNumber, amount, balance } = this.state;
        const userData = {
            name: "Jack Daniels",
            phone: "12345",
            birthdate: "11/11/2011",
            mail: "jack.daniels@gmail.com",
            balance: balance.toFixed(2)
        };

        return (
            <div className="content">
                <div className="general">
                    <div className="card-img">
                        <img src={card} alt="" />
                    </div>
                    <div className="wrapper-info">
                        <div className="user-info">
                            <p className="text m5 bold">
                                Name: <span className="text regular">{userData.name}</span>
                            </p>
                            <p className="text m5 bold">
                                Phone: <span className="text regular">{userData.phone}</span>
                            </p>
                            <p className="text m5 bold">
                                Birthdate:{" "}
                                <span className="text regular">{userData.birthdate}</span>
                            </p>
                            <p className="text m5 bold">
                                Mail: <span className="text regular">{userData.mail}</span>
                            </p>
                        </div>
                        {/* <div className="wrapper-btn">
                            <button className="btn logout">Log Out</button>
                        </div> */}
                    </div>
                </div>
                <div className="data">
                    <div className="user-data">
                        <div className="user-balance">
                            <h3 className="text balance regular">BALANCE IS:</h3>
                            <p className="text balance sized bold">{userData.balance}$</p>
                        </div>
                    </div>
                    <div className="data-operations">
                        <div className="transfer-operation">
                            <input
                                type="text"
                                className="input transfer-from"
                                placeholder="Card Number"
                                name="cardNumber"
                                value={cardNumber}
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="number"
                                className="input transfer-to"
                                placeholder="Amount"
                                name="amount"
                                value={amount}
                                onChange={this.handleInputChange}
                            />
                            <button className="btn transfer" onClick={this.addTransaction}>
                                Transfer
                            </button>
                        </div>
                    </div>
                    <div className="transaction-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Card Number</th>
                                    <th>Amount</th>
                                    <th>Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction, index) => (
                                    <tr key={index}>
                                        <td>{transaction.cardNumber}</td>
                                        <td>{transaction.amount}</td>
                                        <td>{transaction.balance}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileContent;