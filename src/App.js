import React from 'react'
import './App.css';

import NavBar from './components/NavBar'

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
      </div>
    )
  }
}

export default App;
