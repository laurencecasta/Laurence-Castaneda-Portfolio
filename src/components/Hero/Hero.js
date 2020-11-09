import React from 'react'

import './styles.css'

import heroImg from './portfolio-hero.jpg'

function Hero() {
  return (
    <section>
      <div className='text'>
        <h1>Hi, my name is Laurence.</h1>
        <h1 className='who-i-am'>I'm a full-stack developer.</h1>
        <p>I help businesses expand their vision by leveraging the power of tech to solve important problems.</p>
      </div>
      <div className='image'>
        <div className='rectangle'></div>
        <img src={heroImg} alt='Hero Portrait'></img>
      </div>
    </section>
  )
}

export default Hero