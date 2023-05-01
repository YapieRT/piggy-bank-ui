import React from 'react';
import Main from './main-page/main-page'
import Tutorial from './tutorial-page/tutorial-page'
import Contacts from './contacts-page/contacts-page';
import Info from './info-page/info-page';
import Header from './header/header';
import Footer from './footer/footer';
import CardTest from './test-page/card_test';
/* import Test from './test-page/test-page'; */
function Pages() {
    return (
        <div className="Pages">
            <Header />
            <Main />
            <Tutorial />
            <Info />
            <Contacts />
            <Footer />
            {/* <CardTest /> */}

            {/* <Main />
                    <Tutorial id="tutorial" />
                    <Info />
                    <Contacts /> */}
            {/* <Test /> */}
        </div>
    );
}
export default Pages;