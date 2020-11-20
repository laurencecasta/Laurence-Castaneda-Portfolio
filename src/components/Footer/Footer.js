import React from 'react'

import './styles.css'

import logo from './lc-logo.png'
import linkedin from './linkedin.png'
import github from './github.png'
import mail from './mail.png'

function Footer() {
  const logoStyle = {
    width: '118px',
    height: '78px',
    display: 'block',
    margin: '0 auto',
    'padding-top': '63px',
  }
  const iconStyle = {
    width: '32px',
    height: '32px',
    'border-radius': '0',
  }
  return (
    <footer>
      <img style={logoStyle} src={logo} alt='logo'></img>
      <p>I help businesses expand their vision by leveraging the power of tech to solve important problems.</p>
      <div className='footerSocials'>
        <a href='https://www.linkedin.com/in/laurence-castaneda-523965137/'><img style={iconStyle} src={linkedin} alt='linkedin'></img></a>
        <a href='https://github.com/laurencecasta'><img style={iconStyle} src={github} alt='github'></img></a>
        <a href='mailto: larrycasta11@gmail.com'><img style={iconStyle} src={mail} alt='mail'></img></a>
      </div>
    </footer>
  )
}

export default Footer