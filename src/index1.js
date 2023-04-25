import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { Header } from './App';
import App from './components/app/app';
//import reportWebVitals from './reportWebVitals';

/* const test = React.createElement('h2', { className: 'greetings' }, 'Hello World'); */

const text = 'Hello World!';
const test = (
  <div>
    <h2 className='text'>Текст: {text}</h2>
    <input type="text" />
    <label htmlFor="">Aboba</label>
    <button tabIndex="0">Click</button>
  </div>
);
/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
