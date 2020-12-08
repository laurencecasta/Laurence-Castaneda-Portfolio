import React from 'react'

import './styles.css'

function Social(props) {
  const { icon, socialName, link } = props;
  const iconStyle = {
    width: '32px',
    height: '32px',
    borderRadius: '0',
  }
  return (
    <a href={link} className='socials'>
      <img style={iconStyle} src={icon} alt='linkedin'></img>
      <span>{socialName}</span>
    </a>
  )
}

export default Social