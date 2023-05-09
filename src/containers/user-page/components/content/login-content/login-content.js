import React from 'react';
import './login-content.css';

const LoginContent = () => {
    return (
        <div className="content">
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default LoginContent;