import React from 'react'

function NavBar() {
  return (
    <header>
      <h1>LC</h1>
      <nav>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
        <a href='/'>Resume</a>
        <a href='/' className='work-link'>See My Work</a>
      </nav>
    </header>
  )
}

export default NavBar