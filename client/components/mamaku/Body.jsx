import React from 'react'
import {connect} from 'react-redux'

const Body = () => {
  const cohortBody = {
    background: "url('./images/mamaku-fern.jpg')",
    height: '100%',
    width: '100%',
    position: 'absolute'
  }
  return (
    <div style={cohortBody}>
      <img />
    </div>
  )
}

function mapStateToProps (state) {
  if (state.addWords.length === 0) {
    return {
      peers: ['sam', 'Bron', 'Cornelia', 'Shane', 'Anthony', 'Matt', 'Indigo', 'Rach', 'Caitlin', 'Michael']
    }
  }
  return {
    peers: state.addPeers[0]
  }
}

export default connect(mapStateToProps, null)(Body)
