import React from "react";
import './tutorial-page.css'
import StepList from "./step-list/step-list";
import StepListItem from "./step-list-item/step-list-item";
import SecurityList from "./security-list/security-list";

import step_1 from '../../../../img/tutorial-page/step_1.png'
import step_2 from '../../../../img/tutorial-page/step_2.png'
import step_3 from '../../../../img/tutorial-page/step_3.png'

class Tutorial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { icon: step_1, step: 'Step 1', descr: 'Its description for Step 1 instruction card' },
                { icon: step_2, step: 'Step 2', descr: 'Its description for Step 2 instruction card' },
                { icon: step_3, step: 'Step 3', descr: 'Its description for Step 3 instruction card, longest than others steps by lorem: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus iure qui expedita veniam' },
            ],
            list: [
                { descr: 'A definite and practical biometric login.' },
                { descr: 'Two-factor authentication for access and transaction security.' },
                { descr: 'Encryption system that protects data and information.' },
            ]
        }
    }
    render() {
        const title = "Open PiggyBank account";
        const { data } = this.state;
        const { list } = this.state;
        const text_container_subtitle = "Transaction anywhere, anytime"
        const text_container_title = "We care about your account security"
        return (<>
            <div className="tutorial" id="Instruction">
                <h2 className="title">{title}</h2>
                <StepList
                    data={data} />
                <div className="security">
                    <div className="text-container">
                        <h3 className="subtitle">{text_container_subtitle}</h3>
                        <h2 className="title">{text_container_title}</h2>
                    </div>
                    <SecurityList
                        list={list} />
                    <a href="#" className="start_btn">Get Started</a>
                </div>
            </div>
        </>
        )
    }
}

export default Tutorial;