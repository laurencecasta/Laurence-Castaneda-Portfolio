import React from 'react'

import Card from '../../Card/Card'

import '../../Work/styles.css'

import underscore from '../../Work/underscore.png'
import dynamoDonuts from '../../Work/dynamo-donuts-card.jpg'
import browserCalculator from '../../Work/Browser-Calculator.png'
import toDoList from '../../Work/todolist.png'
import library from '../../Work/Library-App.jpg'
import sketch from '../../Work/Etch-a-Sketch.jpg'
import schoolPage from '../../Work/School-Page.jpg'

function OtherWork() {
  const underscoreStyle = {
    width: '30px',
    height: '7px',
    'padding-top': '47px',
  }
  return (
    <section className='other-work' id='other-work'>
      <div className='title'>
        <h2>See More Work</h2>
        <img style={underscoreStyle} src={underscore} alt='underscore'></img>
      </div>
      <div className='cards'>
        <Card
          image={dynamoDonuts}
          title='Restaurant Landing Page'
          description='This is a description of this project. This is a description of this project'
          tools='HTML, CSS, JAVASCRIPT'
          link='/projects/restaurantpage'
        />
        <Card
          image={browserCalculator}
          title='Browser Calculator'
          description='This is a description of this project. This is a description of this project'
          tools='HTML, CSS, JAVASCRIPT'
          link='/projects/calculator'
        />
        <Card
          image={library}
          title='Library App'
          description='This is a description of this project. This is a description of this project'
          tools='HTML, CSS, JAVASCRIPT'
          link='/projects/library'
        />
        <Card
          image={toDoList}
          title='To Do List'
          description='This is a description of this project. This is a description of this project'
          tools='HTML, CSS, JAVASCRIPT'
          link='/projects/todolist'
        />
        <Card
          image={sketch}
          title='Etch-a-Sketch'
          description='This is a description of this project. This is a description of this project'
          tools='HTML, CSS, JAVASCRIPT'
          link='/projects/sketch'
        />
        <Card
          image={schoolPage}
          title='School Landing Page'
          description='This is a description of this project. This is a description of this project'
          tools='HTML, CSS, JAVASCRIPT'
          link='/projects/schoolpage'
        />
      </div>
    </section>
  )
}

export default OtherWork
