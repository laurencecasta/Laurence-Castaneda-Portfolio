import React from 'react'

import quoteIcon from './quote.png'

import './styles.css'

function Quote(props) {
  const { quote, avatar, name, occupation } = props;
  const avatarStyle = {
    width: '93px',
    height: '93px',
    borderRadius: '100px',
    display: 'block',
    margin: '7.37px auto 0px'
  }

  return (
    <div className='quote'>
      <div className='quoteTxt'>
        <img className='quoteIcon' src={quoteIcon} alt='quote icon'></img>
        <p>{quote}</p>
      </div>
      <div className='pointer'></div>
      <img style={avatarStyle} src={avatar} alt='author avatar'></img>
      <p className='author-name'>{name}</p>
      <p className='occupation'>{occupation}</p>
    </div>
  )
}

export default Quote