import React from 'react'

function NavBtn(props) {
  return (
    props.display ?
    <div className='toggle-button'>
      <span style={{fontSize: '25px', lineHeight: '25px', color: 'white', marginTop: '-5px'}}>
        <i className="fa fa-times"></i>
      </span>
    </div>
    :
    <div className='toggle-button'>
      <span className='bar'></span>
      <span className='bar'></span>
      <span className='bar'></span>
    </div>
  )
}

export default NavBtn
