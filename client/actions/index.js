// import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'

export const SUBMIT_USER = 'SUBMIT_USR'
export const GET_CONFIRM = 'RECEIVE_CONFIRMATION'

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function regUsr (newUser) {
  return {
    type: SUBMIT_USER,
    username: newUser.username,
    password: newUser.password
  }
}

export function newUsrConf () {
  return {
    type: GET_CONFIRM
  }
}
