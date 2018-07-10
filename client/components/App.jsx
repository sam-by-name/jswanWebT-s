import React from 'react'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import SignIn from './Signin'
import {Cohort} from './mamaku/Cohort'

import {HashRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className='sauce'>
        <Route path='/login' component={SignIn} />
        <Route path='/cohort' component={Cohort} />
        <ErrorMessage />
        <WaitIndicator />
      </div>
    </Router>
  )
}

export default App
