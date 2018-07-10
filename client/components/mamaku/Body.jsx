import React from 'react'
import {connect} from 'react-redux'

const Body = (props) => {
  const cohortBody = {
    background: "url('./images/mamaku-fern.jpg')",
    height: '100%',
    width: '100%',
    position: 'absolute'
  }
  const peerPic = {
    margin: '40px',
    color: 'white'
  }
  return (
    <div style={cohortBody}>
      {
        props.peers.map((peer, i) =>
          <div key={i} style={peerPic} >{peer}</div>)
      }
    </div>
  )
}

function mapStateToProps (state) {
  if (state.addPeers.length === 0) {
    return {
      peers: ['sam', 'Bron', 'Cornelia', 'Shane', 'Anthony',
        'Matt', 'Indigo', 'Rach', 'Caitlin', 'Michael']
    }
  }
  return {
    peers: state.addPeers[0]
  }
}

export default connect(mapStateToProps, null)(Body)
