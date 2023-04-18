import React from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello World!</h2>
}

/* const Field = () => {
  const holder = 'Введіть текст';
  const styledField = {
    width: '300px'
  };
  return <input
    placeholder={holder}
    type="text"
    style={styledField} />
} */

class Field extends React.Component {
  render() {
    const holder = 'Введіть текст';
    const styledField = {
      width: '300px'
    };
    return <input
      placeholder={holder}
      type="text"
      style={styledField} />
  }
}

function Btn() {
  const text = 'Log In';
  const logged = false;
  const error = false;
  return <button>{logged ? 'Enter' : error ? 'Error' : 'Log In'}</button>
}

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Header />
      </React.StrictMode>
      <Field />
      <Btn />
    </div>
  );
}
export { Header };
export default App;
