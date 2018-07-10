import request from 'superagent'

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

export function registerUser () {
  return dispatch => {
    dispatch(regUsr())
    return request('post', '/register')
      .then((response) => {
        if (!response.ok) {
          dispatch(showError(response.body.message))
          return Promise.reject(response.body.message)
        } else {
          const userInfo = saveUserToken(response.body.token)
          dispatch(receiveLogin(userInfo))
        }
      }).catch(err => {
        dispatch(showError(err.message))
      })
  }
}
