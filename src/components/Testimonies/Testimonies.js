import React from 'react'

import Quote from '../Quote/Quote'

import './styles.css'

import underscore from './underscore.png'
import trey from './PT.jpg'

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
      <div className='quotes'>
        <Quote
          quote='You can turn an idea into reality with very little time and very few resources. The only potential bottleneck is your own creativity and your own mind, so the possibilities are endless.'
          avatar={trey}
          name='Trey Rose'
          occupation='lead pastor'
        />
        <Quote
          quote='You can turn an idea into reality with very little time and very few resources. The only potential bottleneck is your own creativity and your own mind, so the possibilities are endless.'
          avatar={trey}
          name='Trey Rose'
          occupation='lead pastor'
        />
      </div>
    </section>
  )
}

export default Testimonies