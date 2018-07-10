import React from 'react'

class Body extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    const cohortBody = {
      background: "url('./images/mamaku-fern.jpg')",
      height: '100%',
      width: '100%',
      position: 'absolute'
    }
    return (
      <div style={cohortBody}>
      </div>
    )
  }
}

export default Body
