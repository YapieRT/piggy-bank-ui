import React, { useState, useEffect } from 'react';
import './step-list-item.css'

import arrow from "../../../icons/tutorial-page/arrow.png"

const StepListItem = (props) => {
    const { icon, step, descr } = props;
    const [isShowing, setIsShowing] = useState(false);
    const [cardHeight, setCardHeight] = useState(300);

    const handleClick = () => {
        setIsShowing(prevIsShowing => !prevIsShowing);
    };

    useEffect(() => {
        if (isShowing) {
            const element = document.getElementById(`descr-${step}`);
            if (element) {
                setCardHeight(300 + element.clientHeight);
                console.log(document.getElementById(`descr-${step}`))
            }
        } else {
            setCardHeight(300);
        }
    }, [isShowing, step]);

    return (<>
        <div
            className={`card${isShowing ? ' show' : ''}`}
            style={{ height: cardHeight + 'px', transition: 'height 0.5s ease-in-out, transform 0.5s ease-in-out' }}
            onClick={handleClick}
        >
            <img className="card-image" src={icon} alt={step} />
            <div className="card-title">
                <h2 className="title">{step}</h2>
                <img src={arrow} alt="title-arrow" className="title-arrow" />
                {/* <span className="title-arrow">{">"
                }</span> */}
            </div>
            <div className="card-flap">
                <div className="card-description" id={`descr-${step}`}>
                    {descr}
                </div>
            </div>
        </div>
    </>);
}

export default StepListItem;