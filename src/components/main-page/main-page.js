import React from 'react';
import './main-page.css';
import main_card from '../../img/main-page/main_card.png';
import InputMask from 'react-input-mask';

class Main extends React.Component {
    render() {
        const title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
        const subtitle = "Pellentesque sodales ipsum a cursus tincidunt."
        const descr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales ipsum a cursus tincidunt. Pellentesque id facilisis leo. Pellentesque id vulputate sapien. Sed nec tortor lacus.Cras ut leo tempus, consequat eros id, rhoncus ligula. Etiam facilisis orci sed ex aliquam maximus. Quisque in metus accumsan, posuere massa eget, ultrices lectus. Morbi sed diam at dui dictum gravida non id leo. Integer nec erat eu sem aliquet aliquet sit amet at elit.Pellentesque ullamcorper."
        return (
            <div className="main">
                <h1 className="title">{title}</h1>
                <h2 className="subtitle">{subtitle}</h2>
                <div className="info">
                    <img src={main_card} alt="main_card" />
                    <div className="info_block">
                        <h3 className="descr">{descr}</h3>
                        <div className="buttons">
                            <InputMask
                                mask="+38 (099) 999-99-99"
                                /* placeholder="+38 (0__) ___-__-__" */
                                maskChar=""
                                placeholder="Input your number here"
                                className='phone'
                            />
                            {/* <input type="number" className="phone" placeholder='+380 (XX) XXX-XX-XX' /> */}
                            <a href="#" className="download">Download</a>
                        </div></div>

                </div>


            </div>
        );
    }
}

export default Main;