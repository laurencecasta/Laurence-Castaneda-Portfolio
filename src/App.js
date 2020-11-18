import React from 'react'
import './App.css';

import Background from './components/Background/Background'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Testimonies from './components/Testimonies/Testimonies'

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Background />
        <NavBar />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Testimonies />
      </div>
    )
  }
}

export default App;
