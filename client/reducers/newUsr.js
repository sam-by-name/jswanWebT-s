import {CONFIRM_USER} from '../actions'

function newUsr (state = '', action) {
  switch (action.type) {
    case CONFIRM_USER:
      return action.message

    default:
      return state
  }
}

export default newUsr
