import React from 'react'
import {connect} from 'react-redux'

import {regUsr} from '../actions'
// import { url } from 'inspector';

class Signin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    const {username, password} = this.state
    const deets = {
      username: username,
      password: password
    }
    regUsr(deets)
    e.preventDefault()
  }

  render () {
    const {username, password} = this.state

    const styleBod = {
      background: "url('./images/spaghetti-sauce.jpg')",
      width: '100%',
      height: '100%',
      position: 'absolute'
    }

    const styleForm = {
      margin: '250px auto',
      width: '446px',
      height: '300px',
      backgroundColor: 'gray'
    }

    const signInLogo = {
      width: '100px',
      height: '120px',
      margin: '10px 150px'
    }
    return (
      <div className="signIn" style={styleBod}>
        <div>
          <form style={styleForm}>
            <fieldset>
              <div>
                <img style={signInLogo} src='./images/open-sauce-logo.png' />
                <label>Username</label>
                <input id="username" type="text" name="username" value={username} onChange={this.handleChange}/>
              </div>
              <div>
                <label>Password</label>
                <input id="password" type="password" name="password" value={password} onChange={this.handleChange} />
              </div>
              <div>
                <button onClick={this.handleSubmit}>Sign In
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    regUsr: (username, password) => {
      return dispatch(regUsr({username, password}))
    }
  }
}

export default connect(null, mapDispatchToProps)(Signin)
