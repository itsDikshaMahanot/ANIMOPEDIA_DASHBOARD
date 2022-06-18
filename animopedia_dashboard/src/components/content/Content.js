import { ButtonComponent } from '../button/Button'
import React from 'react';
import './Content.css';
import '../../App.css';

function Content() {
    return (
        <div className='content-main'>
            <h1>Know Your Pet </h1>
            <p>Know in detail about your pet</p>
            <div className='content-btn'>
                <ButtonComponent className='btn' buttonstyle='btn--outline' buttonsize='btn--large' text='MORE' />
            </div>
        </div>
    )
}

export default Content