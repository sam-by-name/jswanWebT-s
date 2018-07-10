import React from 'react'
import {connect} from 'react-redux'

import {regUsr} from '../actions'

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
    regUsr(username, password)
    e.preventDefault()
  }

  render () {
    const {username, password} = this.state
    return (
      <div>
        <form className='form'>
          <fieldset>
            <div>
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
