import {ButtonComponent} from '../button/Button' 
import React from 'react';
import './Content.css';
import '../../App.css';

function Content() {
    return (
        <div className='content-main'>
            <img src='./images/dog.jpg' alt='My Dog' />
            <h1>Know Your Pet </h1>
            <p>Know in detail about your pet</p>
            <div className='content-btn'>
            <ButtonComponent className='btns' buttonstyle='btn--outline' buttonsize='btn--large'>
                Click me
            </ButtonComponent>
            </div>

        </div>
    )
}

export default Content