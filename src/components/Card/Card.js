import React from 'react'

import './styles.css'

function Card(props) {
  const { image, title, description, tools, link } = props

  return (
    <div className='card'>
      <img src={image} alt='Project Thumbnail'></img>
      <h2>{title}</h2>
      <p className='description'>{description}</p>
      <p className='tools'>{tools}</p>
      <a href={link}>View Case Study</a>
    </div>
  )
}

export default Card