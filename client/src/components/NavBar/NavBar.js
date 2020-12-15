import React, { useState } from 'react'

import NavBtn from './NavBtn/NavBtn'

import './styles.css'

import logo from './lc-logo.png'

function NavBar() {
  const [display, setDisplay] = useState(0);
  const logoStyle = {
    width: '118px',
    height: '78px',
    display: 'block',
    marginLeft: '23px',
    marginTop: '4px'
  }
  const toggleMenu = (e) => {
    e.preventDefault();
    setDisplay(display + 1);
    console.log(display);
  }
  return (
    <header>
      <a href='/'><img style={logoStyle} src={logo} alt='logo'></img></a>
      <a href='/#' onClick={toggleMenu}>
        <NavBtn
          display={display}
        />
      </a>
      <nav id = {display % 2 > 0 && display ? 'nav-dropdown' : display ? 'nav-fadeup' : ''}
        className = 'nav-menu'
      >
        <ul className='nav-list'>
          <li className='nav-link'><a href='/'>Home</a></li>
          <li className='nav-link'><a href='/#about'>About</a></li>
          <li className='nav-link'><a href='/#contact'>Contact</a></li>
          <li className='nav-link'><a href='/Laurence-Castaneda-Resume-2020.docx' download>Resume</a></li>
          <li className='work-link-container'><a className='work-link' id='work' href='/#work-section'>See My Work</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar