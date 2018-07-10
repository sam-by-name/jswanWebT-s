import {
  SHOW_ERROR,
  SUBMIT_USER,
  GET_CONFIRM
} from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case SUBMIT_USER:
      return true

    case GET_CONFIRM:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
