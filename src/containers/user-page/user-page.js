import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/header';
import LoginContent from './components/content/login-content/login-content';
import RegistrationContent from './components/content/reg-content/reg-content';
import ProfileContent from './components/content/profile-content/profile-content';
import Footer from '../../components/footer/footer';
import './user-page.css';

function UserPage() {
  const location = useLocation();
  const activeTab = location.hash || '#login';

  let activeContent;
  switch (activeTab) {
    case '#login':
      activeContent = <LoginContent />;
      break;
    case '#signup':
      activeContent = <RegistrationContent />;
      break;
    case '#profile':
      activeContent = <ProfileContent />;
      break;
    default:
      activeContent = <LoginContent />;
      break;
  }
  return (
    <>
      <Header buttons={true} />
      <div className='wrapper-user-content'>{activeContent}</div>
      <Footer getStartedFlag={false} />
    </>
  );
}

export default UserPage;
