import React from 'react';
import Main from './main-page/main-page'
import Tutorial from './tutorial-page/tutorial-page'
import Contacts from './contacts-page/contacts-page';
/* import Test from './test-page/test-page'; */
function Pages() {
    return (
        <div className="Pages">
            <Main />
            <Tutorial />
            <Contacts />
            {/* <Test /> */}
        </div>
    );
}
export default Pages;