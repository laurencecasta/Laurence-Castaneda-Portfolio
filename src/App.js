import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Background from './components/Background/Background'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Work from './components/Work/Work'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Testimonies from './components/Testimonies/Testimonies'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route component={Home} path='/' />
        </Switch>
        <Contact />
        <Footer />
      </div>
    )
  }
}

function Home() {
  return (
    <div>
      <Background />
      <Hero />
      <Work />
      <Skills />
      <About />
      <Testimonies />
    </div>
  )
}

export default App;
