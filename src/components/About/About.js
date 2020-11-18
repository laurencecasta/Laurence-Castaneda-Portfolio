import React from 'react'

import './styles.css'

import aboutImg from './about-picture.jpg'
import underscore from './underscore.png'

function About() {
  const underscoreStyle = {
    width: '30px',
    height: '7px',
    'padding-top': '47px',
  }
  return (
    <section className='aboutSection'>
      <div className='aboutImg'>
        <div className='aboutRectangle'></div>
        <img src={aboutImg} alt='about'></img>
      </div>
      <div className='text'>
        <div className='title'>
          <h2>About Me</h2>
          <img style={underscoreStyle} src={underscore} alt='underscore'></img>
        </div>
      </div>
    </section>
  )
}

export default About