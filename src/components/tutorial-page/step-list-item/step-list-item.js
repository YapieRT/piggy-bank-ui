import React from 'react';
import './step-list-item.css'
const StepListItem = (props) => {
    const { icon, step, descr } = props;
    return (
        <div className="step-item">
            <div className="image-container">
                <img src={icon} alt="icon" className="icon" />
            </div>
            <div className="step-container">
                <span className="step">{step}</span>
                <h3 className="descr">{descr}</h3>
            </div>
        </div>
    )
}

export default StepListItem;