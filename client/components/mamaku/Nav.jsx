import React from 'react'
import {Link} from 'react-router-dom'
import {Ideas} from './nav/Ideas'
import {Notes} from './nav/Notes'
import {Calendar} from './nav/Calendar'
import {Games} from './nav/Games'
import {Slack} from './nav/Slack'
import {Logout} from './nav/Logout'

const Nav = () => {
  const navStyle = {
    height: '120px',
    width: '100%'
  }
  const signInLogo = {
    float: 'left',
    width: '140px',
    height: '120px',
    margin: '10px 50px'
  }
  return (
    <div style={navStyle}>
      <img style={signInLogo} src='./images/open-sauce-logo.png' />
      <Link to='/Ideas'><Ideas /></Link>
      <Link to='/Notes'><Notes /></Link>
      <Link to='/Calendar'><Calendar /></Link>
      <Link to='/Games'><Games /></Link>
      <Link to='/Slack'><Slack /></Link>
      <Link to='/Logout'><Logout /></Link>
    </div>
  )
}

export default Nav
