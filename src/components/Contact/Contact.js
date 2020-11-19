import React from 'react'

import './styles.css'

import underscore from './underscore.png'

function Contact() {
  const underscoreStyle = {
    width: '30px',
    height: '7px',
    'padding-top': '47px',
  }
  return (
    <section className='contact'>
      <div className='contact-left'>
        <div className='title' id='contact-title'>
          <h2>Let's Connect!</h2>
          <img style={underscoreStyle} src={underscore} alt='underscore'></img>
        </div>
        <p>Fill out the form below and I'll respond within the next 24 hours.</p>
        <form>
          <label htmlFor='name-input'>Name</label>
          <input type='text' id='name-input' name='name-input'/>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' name='email'/>
          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message'/>
          <button>Submit</button>
        </form>
      </div>
      <div className='contact-right'>
        right section goes here
      </div>
    </section>
  )
}

export default Contact