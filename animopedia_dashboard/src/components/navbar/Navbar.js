import { Link } from 'react-router-dom';
import React, { useState , useEffect } from 'react';
// import { Button } from '@mui/material';
import {ButtonComponent} from '../button/Button'
import './Navbar.css'
import PetsOutlined from '@mui/icons-material/PetsOutlined';




function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect (() =>{
        showButton();
    },[]
    )

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        Animopedia
                        <span> < PetsOutlined className='peticon' /> </span>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                FAQ
                            </Link>
                        </li>
                    </ul>
                    {button  &&  <ButtonComponent buttonstyle="btn--outline" text='FAQ'/> }
                </div>
            </nav>

        </>
    )
}

export default Navbar