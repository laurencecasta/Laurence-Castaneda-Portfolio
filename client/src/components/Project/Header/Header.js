import React from 'react'

import './styles.css'

function Header(props) {
  const { title, summary, roles, languages, tools, img, imgPath } = props
  const renderedRoles = roles.map((role, index) => <li key={index}>{role}</li>)
  const renderedLanguages = languages.map((language, index) => <li key={index}>{language}</li>)
  const renderedTools = tools.map((tool, index) => <li key={index}>{tool}</li>)
  const imgStyle = {
    width: '428px',
    height: '497px',
    borderRadius: '20px',
    marginTop: '-441px',
    marginLeft: '-92px'
  }
  return (
    <header>
      <div className='header-txt'>
        <h1>{title}</h1>
        <p>{summary}</p>
        <div className='run-down'>
          <div>
            <h4>Languages</h4>
            <ul>{renderedLanguages}</ul>
          </div>
          <div>
            <h4>Tools/Frameworks</h4>
            <ul>{renderedTools}</ul>
          </div>
          <div>
            <h4>My Role</h4>
            <ul>{renderedRoles}</ul>
          </div>
        </div>
      </div>
      <div className='header-img'>
        <div className='project-img-back'></div>
        <img style={imgStyle} src={imgPath || img} alt='project screenshot'></img>
      </div>
    </header>  
  )
}

export default Header