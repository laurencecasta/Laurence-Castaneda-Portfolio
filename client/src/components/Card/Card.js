import React from 'react'

import './styles.css'

function Card(props) {
  const { imgPath, title, description, tools, link } = props
  const listTools = tools.join(', ')
  return (
    <div className='card'>
      <img src={imgPath} alt='Project Thumbnail'></img>
      <h2>{title}</h2>
      <p className='description'>{description}</p>
      <p className='tools'>{listTools}</p>
      <a href={link}>View Case Study</a>
    </div>
  )
}

export default Card