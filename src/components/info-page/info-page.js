import React from 'react';
import './info-page.css';
import InfoList from './info-list/info-list';

import test_icon from '../../icons/info-page/test_icon.png'

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [
                { icon: test_icon, title: "Money Transfer", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { icon: test_icon, title: "Money Transfer", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { icon: test_icon, title: "Money Transfer", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { icon: test_icon, title: "Money Transfer", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { icon: test_icon, title: "Money Transfer", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { icon: test_icon, title: "Money Transfer", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { icon: test_icon, title: "Money Transfer", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { icon: test_icon, title: "Money Transfer", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { icon: test_icon, title: "Money Transfer", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
            ],
        }
    }
    render() {
        const title = "Product & Services on PiggyBank";
        const subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales ipsum a cursus tincidunt. Pellentesque id facilisis leo. Pellentesque id vulputate sapien. Sed nec tortor lacus.";
        const { info } = this.state;
        return (<>
            <div className="info-page">
                <div className="text-container">
                    <h1 className="title">{title}</h1>
                    <h2 className="subtitle">{subtitle}</h2>
                </div>
                <InfoList info={info} />
            </div>
        </>);
    }
}

export default Info;