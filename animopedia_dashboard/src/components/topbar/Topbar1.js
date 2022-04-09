import { Link } from '@mui/material'
import React from 'react'

function Topbar1() {
  return (
    <>
    <nav className="navbar">
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo'>
                Animopedia 
            </Link>
        </div>
    </nav>
    
    </>
  )
}

export default Topbar1