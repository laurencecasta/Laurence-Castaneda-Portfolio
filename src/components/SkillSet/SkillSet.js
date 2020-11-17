import React from 'react'

import './styles.css'

function SkillSet(props) {
  const { icon, title, set } = props;
  const setRendered = set.map((set, index) => <p key={index} class='skillItem'>{set}</p>)
  return (
    <div className='skillSet'>
      <img src={icon} alt='icon'></img>
      <p id='skillSetName'>{title.toUpperCase()}</p>
      {setRendered}
    </div>
  )
}

export default SkillSet