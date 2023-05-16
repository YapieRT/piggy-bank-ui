import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.sass';
/* import Pages from './components/Pages'; */
import MainPage from './containers/main-page/main-page';
import UserPage from './containers/user-page/user-page';

import AdminPage from './containers/admin-panel/admin-page';

function App() {
  document.title = 'PiggyBank';
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='/adminpanel' element={<AdminPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

/* export { Header }; */
/* const Header = () => {
  return <h2>Hello World!</h2>
} */

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

/* class Field extends React.Component {
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
} */
