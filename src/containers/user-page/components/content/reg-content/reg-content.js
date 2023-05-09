import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './reg-content.css';
import { RegistrationStepOne, RegistrationStepTwo, RegistrationStepThree } from './step-list/reg-steps';

const RegistrationContent = () => {
    const regComp = RegistrationStepOne();
    return (
        <Carousel variant="dark">
            <Carousel.Item>

                <RegistrationStepOne />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <RegistrationStepTwo />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <RegistrationStepThree />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default RegistrationContent;