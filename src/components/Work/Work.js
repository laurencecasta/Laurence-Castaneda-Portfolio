import React from 'react'

import Card from '../Card/Card'

import './styles.css'

import underscore from './underscore.png'
import dynamoDonuts from './dynamo-donuts-card.jpg'
import browserCalculator from './Browser-Calculator.png'
import toDoList from './todolist.png'
import library from './Library-App.jpg'
import sketch from './Etch-a-Sketch.jpg'
import schoolPage from './School-Page.jpg'

function Work() {
  const underscoreStyle = {
    width: '30px',
    height: '7px',
    'padding-top': '47px',
  }
  return (
    <section className='work' id='work'>
      <div className='title'>
        <h2>Work</h2>
        <img style={underscoreStyle} src={underscore} alt='underscore'></img>
      </div>
      <div className='cards'>
        <Card
          image={dynamoDonuts}
          title='Restaurant Landing Page'
          description='This is a description of this project. This is a description of this project'
          tools='HTML, CSS, JAVASCRIPT'
          link='/'
        />
        <Card
          image={browserCalculator}
          title='Browser Calculator'
          description='This is a description of this project. This is a description of this project'
          tools='HTML, CSS, JAVASCRIPT'
          link='/'
        />
        <Card
          image={library}
          title='Library App'
          description='This is a description of this project. This is a description of this project'
          tools='HTML, CSS, JAVASCRIPT'
          link='/'
        />
        <Card
          image={toDoList}
          title='To Do List'
          description='This is a description of this project. This is a description of this project'
          tools='HTML, CSS, JAVASCRIPT'
          link='/'
        />
        <Card
          image={sketch}
          title='Etch-a-Sketch'
          description='This is a description of this project. This is a description of this project'
          tools='HTML, CSS, JAVASCRIPT'
          link='/'
        />
        <Card
          image={schoolPage}
          title='School Landing Page'
          description='This is a description of this project. This is a description of this project'
          tools='HTML, CSS, JAVASCRIPT'
          link='/'
        />
      </div>
    </section>
  )
}

export default Work