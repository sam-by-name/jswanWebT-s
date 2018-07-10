import React from 'react'
import {regUsr} from '../actions'

const Signin = () => {
  return (
    <div>
      <div>
        <div>
          <label>Username</label>
          <input id="username" type="text" />
        </div>
        <div>
          <label>Password</label>
          <input id="password" type="password" />
        </div>
        <div>
          <input type="submit" value="Sign In"
            onClick={regUsr} />
        </div>
      </div>
    </div>
  )
}

export default Signin
