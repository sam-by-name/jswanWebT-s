import {ADD_PEERS} from '../actions'

function addPeers (state = [], action) {
  switch (action.type) {
    case ADD_PEERS:
      return [action.peers]

    default:
      return state
  }
}

export default addPeers
