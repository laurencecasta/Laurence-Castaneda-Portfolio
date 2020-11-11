import React from 'react'

import './styles.css'

import underscore from './underscore.png'

function Projects() {
  const underscoreStyle = {
    width: '30px',
    height: '7px',
    'padding-top': '47px',
  }
  return (
    <section className='work'>
      <div className='title'>
        <h2>Work</h2>
        <img style={underscoreStyle} src={underscore} alt='underscore'></img>
      </div>
      <div className='cards'>
        cards go here
      </div>
    </section>
  )
}

export default Projects