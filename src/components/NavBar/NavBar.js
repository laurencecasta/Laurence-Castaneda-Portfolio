import React from 'react'

import './styles.css'

import logo from './lc-logo.png'

function NavBar() {
  const logoStyle = {
    width: '118px',
    height: '78px',
    display: 'block',
    'margin-left': '23px',
    'margin-top': '4px'
  }
  return (
    <header>
      <img style={logoStyle} src={logo} alt='logo'></img>
      <nav>
        <a href='/'>Home</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
        <a href='/'>Resume</a>
        <a href='#work' className='work-link'>See My Work</a>
      </nav>
    </header>
  )
}

export default NavBar