import React from 'react'

import ProjectLinks from '../ProjectLinks/ProjectLinks'

import './styles.css'

import underscore from './underscore.png'

function Main() {
  const underscoreStyle = {
    width: '30px',
    height: '7px',
    paddingTop: '47px',
  }
  return (
    <main>
      <div className='scope'>
        <div className='title' id='about-title'>
          <h2>Project Scope</h2>
          <img style={underscoreStyle} src={underscore} alt='underscore'></img>
        </div>
        <p>I grew up very interested in everything STEM. As a kid, I watched Sci-Fi movies like they were my food and water, and I dreamed of a time where the crazy technology of Star Wars would manifest as a reality. </p>
      </div>
      <ProjectLinks />
      <div className='process-container'>
        <div className='process'>
          <div className='title' id='process-title'>
            <h2>The Process</h2>
            <img style={underscoreStyle} src={underscore} alt='underscore'></img>
          </div>
          <p>I grew up very interested in everything STEM. As a kid, I watched Sci-Fi movies like they were my food and water, and I dreamed of a time where the crazy technology of Star Wars would manifest as a reality. </p>
          <br />
          <p>I grew up very interested in everything STEM. As a kid, I watched Sci-Fi movies like they were my food and water, and I dreamed of a time where the crazy technology of Star Wars would manifest as a reality. </p>
        </div>
      </div>
      <div className='result'>
        <div className='title' id='about-title'>
          <h2>The Result</h2>
          <img style={underscoreStyle} src={underscore} alt='underscore'></img>
        </div>
        <p>I grew up very interested in everything STEM. As a kid, I watched Sci-Fi movies like they were my food and water, and I dreamed of a time where the crazy technology of Star Wars would manifest as a reality. </p>
      </div>
      <ProjectLinks />
    </main>
  )
}

export default Main
