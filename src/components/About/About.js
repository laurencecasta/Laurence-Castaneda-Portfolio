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
    <section className='aboutSection' id='about'>
      <div className='aboutImg'>
        <div className='aboutRectangle'></div>
        <img src={aboutImg} alt='about'></img>
      </div>
      <div className='text'>
        <div className='title' id='about-title'>
          <h2>About Me</h2>
          <img style={underscoreStyle} src={underscore} alt='underscore'></img>
        </div>
        <p className='topText'>I grew up very interested in everything STEM. As a kid, I watched Sci-Fi movies like they were my food and water, and I dreamed of a time where the crazy technology of Star Wars would manifest as a reality.</p>
        <br/>
        <p className='textBody'>
          This wild curiosity drove me to take some of the most advanced mathematics and  science classes during my years of schooling. Then in my senior year, I was introduced to a whole new world when I took my first Computer Science course. From that moment, I realized the power of computers and software, and I knew I wanted to be a part of this in some way.
          <br/>
          <br/>
          When I think about my life and how I want to be remembered, one major thing I want people to say about me is that I solved real problems that stayed solved. At the end of the day, writing code and geeking out over the latest technologies is nothing more than a hobby if I do not leverage this skill and technology to solve important world problems.
          <br/>
          <br/>
          Nullam blandit ultricies tellus ac scelerisque. Duis ut facilisis mauris, vestibulum convallis ligula. Phasellus metus orci, bibendum cursus suscipit at, consequat at odio. Duis ut vehicula dui. Etiam finibus pharetra sem, lacinia lacinia leo viverra sed. Pellentesque suscipit lectus risus. Nullam at dapibus lorem, id blandit ligula.
        </p>
      </div>
    </section>
  )
}

export default About