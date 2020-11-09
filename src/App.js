import React from 'react'
import './App.css';

import Background from './components/Background/Background'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'

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
      </div>
    )
  }
}

export default App;
