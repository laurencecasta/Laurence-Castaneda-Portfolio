import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";

import Project from '../Project/Project'

import donuts from './Dynamo-Donuts-Landing-Page.png'
import calculator from './Browser-Calculator.png'
import library from './Library-App.png'
import list from './list.png'
import sketch from './Etch-a-Sketch.png'
import school from './NorthPointeWebsite.png'

function Projects() {
  return (
    <div>
      <Switch>
        <Route path='/projects/restaurantpage'>
          <Project
            title='Restaurant Landing Page'
            summary='This is a brief summary of restaurant page. This is a brief summary of restaurant page. This is a brief summary of restaurant page.'
            roles={['Front End\nDeveloper', 'Back End\nDeveloper']}
            languages={['JavaScript', 'HTML', 'CSS', 'React.js']}
            tools={['VS Code', 'NPM', 'Git', 'Webpack']}
            img={donuts}
          />
        </Route>
        <Route path='/projects/calculator'>
          <Project
            title='Browser Calculator'
            summary='This is a brief summary of calculator. This is a brief summary of calculator. This is a brief summary of calculator.'
            roles={['Front End\nDeveloper', 'Back End\nDeveloper']}
            languages={['JavaScript', 'HTML', 'CSS']}
            tools={['VS Code', 'NPM', 'Git']}
            img={calculator}
          />
        </Route>
        <Route path='/projects/library'>
          <Project
            title='Library App'
            summary='This is a brief summary of library. This is a brief summary of library. This is a brief summary of library.'
            roles={['Front End\nDeveloper', 'Back End\nDeveloper']}
            languages={['JavaScript', 'HTML', 'CSS']}
            tools={['VS Code', 'NPM', 'Git']}
            img={library}
          />
        </Route>
        <Route path='/projects/todolist'>
          <Project
            title='To Do List'
            summary='This is a brief summary of list. This is a brief summary of list. This is a brief summary of list.'
            roles={['Front End Developer', 'Back End Developer']}
            languages={['JavaScript', 'HTML', 'CSS']}
            tools={['VS Code', 'NPM', 'Git']}
            img={list}
          />
        </Route>
        <Route path='/projects/sketch'>
          <Project
            title='Etch-a-Sketch'
            summary='This is a brief summary of sketch. This is a brief summary of sketch. This is a brief summary of sketch.'
            roles={['Front End Developer', 'Back End Developer']}
            languages={['JavaScript', 'HTML', 'CSS']}
            tools={['VS Code', 'NPM', 'Git']}
            img={sketch}
          />
        </Route>
        <Route path='/projects/schoolpage'>
          <Project
            title='School Page'
            summary='This is a brief summary of school. This is a brief summary of school. This is a brief summary of school.'
            roles={['Front End Developer', 'Back End Developer']}
            languages={['JavaScript', 'HTML', 'CSS']}
            tools={['VS Code', 'NPM', 'Git']}
            img={school}
          />
        </Route>
      </Switch>
    </div>   
  )
}
export default Projects