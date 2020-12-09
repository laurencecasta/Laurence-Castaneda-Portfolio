import React from 'react'

import './styles.css'

function ProjectLinks(props) {
  const {liveLink, githubRepo} = props;
  return (
    <div className='project-links'>
      <a className='live-link' href={liveLink || '/'}>Live Project</a>
      <a className='github-link' href={githubRepo || '/'}>GitHub Repository</a>
    </div>
  )
}

export default ProjectLinks
