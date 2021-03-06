import React from 'react'

import Quote from '../Quote/Quote'

import './styles.css'

import underscore from './underscore.png'
import trey from './PT.jpg'

function Testimonies() {
  return (
    <section className='testimonies'>
      <div className='title'>
        <h2>Testimonial</h2>
        <img className='underscore' src={underscore} alt='underscore'></img>
      </div>
      <div className='quotes'>
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