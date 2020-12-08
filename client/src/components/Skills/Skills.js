import React from 'react'

import SkillSet from '../SkillSet/SkillSet'

import './styles.css'

import underscore from './underscore.png'
import tool from './tool.png'
import code from './code.png'
import frameworks from './frameworks.png'

function Skills() {
  const underscoreStyle = {
    width: '30px',
    height: '7px',
    paddingTop: '47px',
  }
  return (
    <section id='skills'>
      <div className='title'>
        <h2>Skills</h2>
        <img style={underscoreStyle} src={underscore} alt='underscore'></img>
      </div>
      <div className='skillSets'>
        <SkillSet
          icon={code}
          title='languages'
          set={[
            'JavaScript',
            'HTML',
            'CSS',
            ]}
        />
        <SkillSet
          icon={tool}
          title='tools'
          set={[
            'Visual Studio Code',
            'Linux OS (GUI and Terminal)',
            'Digital Ocean Hosting',
            'Google Chrome DevTools',
            'NPM',
            ]}
        />
        <SkillSet
          icon={frameworks}
          title='frameworks'
          set={[
            'React.js',
            'Node.js',
            'Express.js',
            ]}
        />
      </div>
    </section>
  )
}

export default Skills