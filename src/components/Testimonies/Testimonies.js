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
          quote='Laurence brings a high level of integrity and compassion to the table. His passion to do things right, while doing the right thing, adds tremendous value to any team.'
          avatar={trey}
          name='Trey Rose'
          occupation='lead pastor'
        />
        <Quote
          quote='Laurence brings a high level of integrity and compassion to the table. His passion to do things right, while doing the right thing, adds tremendous value to any team.'
          avatar={trey}
          name='Trey Rose'
          occupation='lead pastor'
        />
      </div>
    </section>
  )
}

export default Testimonies