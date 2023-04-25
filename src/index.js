import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pages from './components/Pages'
< link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Livvic" ></link >
const text = 'Hello World!';
const test = (
  <div>
    <h2 className='text'>Текст: {text}</h2>
    <input type="text" />
    <label htmlFor="">Aboba</label>
    <button tabIndex="0">Click</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>
);
