import React from 'react'

import './styles.css'

import heroImg from './portfolio-hero.jpg'
import downArrow from './downArrow.png'

function Hero() {
  const heroImgStyle = {
    width: '428px',
    height: '497px',
    borderRadius: '20px',
    marginTop: '-441px',
    position: 'relative',
    right: '92px',
  }

  const downArrowStyle = {
    width: '25.56px',
    height: '15.56px',
    right: '0px',
    display: 'block',
    margin: '25px auto 0px',
  }
  
  return (
    <div>
      <section>
        <div className='text'>
          <h1>Hi, my name is Laurence.</h1>
          <h1 className='who-i-am'>I'm a full-stack developer.</h1>
          <p>I help businesses focus on vision by leveraging the power of tech to solve their most important problems.</p>
        </div>
        <div className='image'>
          <div className='rectangle'></div>
          <img style={ heroImgStyle } src={heroImg} alt='Hero Portrait'></img>
        </div>
      </section>
      <div className='down-arrow-container'>
        <img style={downArrowStyle} src={downArrow} alt='arrow pointing down'></img>
      </div>
    </div>
  )
}

export default Hero