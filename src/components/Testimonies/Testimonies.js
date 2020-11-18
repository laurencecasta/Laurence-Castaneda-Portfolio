import React from 'react'

import './styles.css'

import underscore from './underscore.png'

function Testimonies() {
  const underscoreStyle = {
    width: '30px',
    height: '7px',
    'padding-top': '47px',
  }
  return (
    <section className='testimonies'>
      <div className='title'>
        <h2>Testimonials</h2>
        <img style={underscoreStyle} src={underscore} alt='underscore'></img>
      </div>
    </section>
  )
}

export default Testimonies