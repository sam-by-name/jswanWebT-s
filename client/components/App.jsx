import React from 'react'
import Signin from './Signin'

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
        <div>
          <div><h1>Hi</h1></div>
          <Signin />
        </div>
      </Router>
    )
  }
}

export default App
