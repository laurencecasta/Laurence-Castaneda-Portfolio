import React from 'react'

import './styles.css'

function NavBar() {
  return (
    <header>
      <h1 className='logo'>LC</h1>
      <nav>
        <a href='/'>Home</a>
        <a href='#about'>About</a>
        <a href='/'>Contact</a>
        <a href='/'>Resume</a>
        <a href='#work' className='work-link'>See My Work</a>
      </nav>
    </header>
  )
}

export default NavBar