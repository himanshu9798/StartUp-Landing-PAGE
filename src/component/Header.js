import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

function Header(){
  return (
    <>
    <div className='main'>
        <div className='first'>
           <li className='landoname'>Lando</li>
            <li className='navlink'><Link to="/home">Home</Link></li>
            <li className='navlink'><Link to="/price">Price</Link></li>
            <li className='navlink'><Link to="/about">About</Link></li>
            <li className='navlink'><Link to="/contact">Contact</Link></li>
        </div>
        <div className='second'>
          <li>Sign Up</li>
          <li><button className='signupbutton'>Sign Up</button></li>
        </div>
    </div>
    </>
  )
}

export default Header;
