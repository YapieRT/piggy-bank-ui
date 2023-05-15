import React from 'react';

import Header from '../../components/header/header';
import StartPage from './components/start-page/start-page.js';
import Tutorial from './components/tutorial-page/tutorial-page.js';
import Contacts from './components/contacts-page/contacts-page.js';
import Info from './components/info-page/info-page.js';
import Footer from '../../components/footer/footer';

import './main-page.css';

function MainPage() {
  return (
    <>
      <Header nav={true} buttons={true} />
      <StartPage />
      <Tutorial />
      <Info />
      <Contacts />
      <Footer getStartedFlag={true} />
    </>
  );
}

export default MainPage;
