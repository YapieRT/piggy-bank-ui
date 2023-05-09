import React, { useState } from 'react';
import './card.css'; // подключаем файл стилей
import step_1 from '../../img/tutorial-page/step_1.png'

const Card = ({ imageSrc, title, description }) => {
    const [isShowing, setIsShowing] = useState(false);

    const handleClick = () => {
        setIsShowing(prevIsShowing => !prevIsShowing);
    };

    return (<>
        <div className={`card${isShowing ? ' show' : ''}`} onClick={handleClick}>
            <img className="card-image" src={step_1} alt={title} />
            <div className="card-title">
                <h2 className="title">{title}</h2>
            </div>
            <div className="card-flap">
                <div className="card-description">
                    {description}
                </div>
            </div>
        </div>
    </>);
};

export default Card;