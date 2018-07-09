import React from 'react'

import {HashRouter as Router} from 'react-router-dom'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <Router>
        <div><h1>Hi</h1></div>
        
      </Router>
    )
  }
}

export default App
