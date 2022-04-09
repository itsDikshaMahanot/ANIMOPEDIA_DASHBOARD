import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'



const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const ButtonComponent = ({ children, type, onClick, buttonstyle, buttonsize, text }) => {
    const checkButtonstyle = STYLES.includes(buttonstyle) ? buttonstyle : STYLES[0];
    const checkButtonsize = SIZES.includes(buttonsize) ? buttonsize : SIZES[0];
    console.log(checkButtonstyle)
    return (
        <Link to='/' className=''>
            <button className={`btn ${checkButtonstyle} ${checkButtonsize}`}
                onClick={onClick}
                type={type}
            >
                {text}
            </button>
        </Link>
    )
}
