import {GET_CONFIRM} from '../actions'

function newUsr (state = '', action) {
  switch (action.type) {
    case GET_CONFIRM:
      return action.message

    default:
      return state
  }
}

export default newUsr
