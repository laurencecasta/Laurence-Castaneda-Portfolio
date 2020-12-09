import React from 'react'

import './styles.css'

import aboutImg from './about-picture.jpg'
import underscore from './underscore.png'

function About() {
  return (
    <section className='aboutSection' id='about'>
      <div className='aboutImg'>
        <div className='aboutRectangle'></div>
        <img src={aboutImg} alt='about'></img>
      </div>
      <div className='text'>
        <div className='title' id='about-title'>
          <h2>About Me</h2>
          <img className='underscore' src={underscore} alt='underscore'></img>
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
          When I am not coding I love to go on new adventures with my wife, Makayla. We love to travel every chance that we get. I also love to make music. I play the guitar, bass, and piano. My creativity awakens when I am behind one of these instruments the same way it does when I am behind the keyboard solving a problem with code!
        </p>
      </div>
    </section>
  )
}

export default About