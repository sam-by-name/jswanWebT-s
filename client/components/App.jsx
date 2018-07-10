import React from 'react'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import Signin from './Signin'

import {HashRouter as Router} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className='sauce'>
        <div><h1>Hi</h1></div>
        <Signin />
        <ErrorMessage />
        <WaitIndicator />
      </div>
    </Router>
  )
}

export default App
