import React from 'react';
import './contacts-page.css';

import viber from '../../icons/contacts-page/viber.png'
import telegram from '../../icons/contacts-page/telegram.png'
import facebook from '../../icons/contacts-page/facebook.png'
import twitter from '../../icons/contacts-page/twitter.png'

import ContactsList from './conctacts-list/contacts-list';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                { icon: viber, title: "viber", link: "https://google.com" },
                { icon: telegram, title: "telegram", link: "https://google.com" },
                { icon: facebook, title: "facebook", link: "https://google.com" },
                { icon: twitter, title: "twitter", link: "https://google.com" },
            ],
        }
    }
    render() {
        const title = "Support service";
        const descr = "No answering machines or robots. Communication only with living people who will crawl out of their skin for you! We communicate in messengers that are convenient for you"
        const { contacts } = this.state;
        return (
            <div className="contacts-page" >
                <div className="info">
                    <h2 className="title">{title}</h2>
                    <h3 className="descr">{descr}</h3>
                </div>
                <ContactsList
                    contact={contacts} />
            </div>);
    }
}

export default Contacts;