import React from 'react'

function NavBtn(props) {
  return (
    <div className={props.display % 2 > 0 ? 'toggle-button open' : 'toggle-button'}>
      <div className='toggle-button-burger'></div>
    </div>
  )
}

export default NavBtn
