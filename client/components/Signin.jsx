import React from 'react'
// import {Routes, Links} from 'react-router-dom'

class Signin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      placeholder: 'Hello'
    }
  }
  render () {
    return (
      <div>
        <div>
          <div><input type="text" /></div>
          <div><input type="password" /></div>
          <input type="submit" value="Sign In" />
        </div>
        <div>

        </div>
      </div>
    )
  }
}

export default Signin
