import React from 'react'

import ProjectLinks from '../ProjectLinks/ProjectLinks'

import './styles.css'

import underscore from './underscore.png'

function Main(props) {
  const { scopeDescription, processDescription, processDescription2, resultDescription } = props;
  return (
    <main>
      <div className='scope'>
        <div className='title' id='about-title'>
          <h2>Project Scope</h2>
          <img className='underscore' src={underscore} alt='underscore'></img>
        </div>
        <p>{ scopeDescription }</p>
      </div>
      <ProjectLinks />
      <div className='process-container'>
        <div className='process'>
          <div className='title' id='process-title'>
            <h2>The Process</h2>
            <img className='underscore' src={underscore} alt='underscore'></img>
          </div>
          <p>{ processDescription }</p>
          <p>{ processDescription2 }</p>
        </div>
      </div>
      <div className='result'>
        <div className='title' id='about-title'>
          <h2>The Result</h2>
          <img className='underscore' src={underscore} alt='underscore'></img>
        </div>
        <p>{ resultDescription }</p>
      </div>
      <ProjectLinks />
    </main>
  )
}

export default Main
