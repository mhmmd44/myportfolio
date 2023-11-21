import React from 'react';
import './navbar.css';
import logo from '../../assets/logom.png';

const Navbar = () => {
  return (
    <div>
      <img src={logo} alt=''/>
      <div className="desktopMenu">

      </div>
      <button className='dektopMenuBtn'>
      <img src="" alt="" className='desktopMenuImg' /> Contact Me
      </button>
    </div>
  )
}

export default Navbar
