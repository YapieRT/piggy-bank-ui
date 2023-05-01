import React from 'react';
import './header.css'
import { BrowserRouter as Link } from 'react-router-dom';
import logo from '../../icons/header/logo.png'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showBurgerMenu: false,
        };
    }

    handleMenuClick = () => {
        this.setState(prevState => ({
            showBurgerMenu: !prevState.showBurgerMenu,
        }));
    };

    render() {
        const items = ["Home", "Instruction", "About Us", "Support"];
        const navItemList = items.map((title) => (
            <li className="nav-item" key={title}>
                <a href="#">{title}</a>
            </li>
        ));

        return (
            <header className="header">
                <div className="logo-container">
                    <a href="#" className="logo">
                        <img src={logo} alt="" />
                    </a>
                </div>

                <div className="burger-menu">
                    <button onClick={this.handleMenuClick}>☰</button>
                </div>

                <nav className={`nav ${this.state.showBurgerMenu ? "active" : ""}`}>
                    <ul className="nav-items">{navItemList}</ul>
                    <div className="buttons-container">
                        <button className="button">Log In</button>
                        <button className="button">Sign Up</button>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;


{/* <header>
<nav className="nav">
    <a href="#" className="site-logo"><img src={test_icon} alt="" /></a>
    <ul className="bars">
        <li>
            <a href='#'>Home</a>
        </li>
        <li>
            <a href='#'>Instruction</a>
        </li>
        <li>
            <a href='#'>About Us</a>
        </li>
        <li>
            <a href='#'>Support</a>
        </li>
    </ul>
    <a href="#" className="site-logo"><img src={test_icon} alt="" /></a>
</nav>
</header > */}















{/* <nav className="nav">
<a href="#" className="site-logo"><img src={test_icon} alt="" /></a>
<ul>
    <NavLink to="/tutorial">Tutorial</NavLink>
    <li>
    <a href='#'>Home</a>
</li>
<li>
    <a href='#'>Instruction</a>
</li>
<li>
    <a href='#'>About Us</a>
</li>
<li>
    <a href='#'>Support</a>
</li>

</ul>
</nav> */}