import request from 'superagent'

// import saveUserToken from 'tobemade' // to be created
// import receiveLogin from 'tobemade'  // to be created

export const SHOW_ERROR = 'SHOW_ERROR'
export const REG_USER = 'SUBMIT_USR'
export const CONFIRM_USER = 'CONFIRM_USER'

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function register (newUser) {
  return {
    type: REG_USER,
    username: newUser.username,
    password: newUser.password
  }
}

export function newUsrConf () {
  return {
    type: CONFIRM_USER
  }
}

export function regUser (deets) {
  return dispatch => {
    dispatch(register(deets))
    return request('post', '/register')
      .then((res) => {
        if (!res.ok) {
          dispatch(showError(res.body.message))
          return Promise.reject(res.body.message)
        } else {
          const userInfo = saveUserToken(res.body.token)
          dispatch(receiveLogin(userInfo))
        }
      }).catch(err => {
        dispatch(showError(err.message))
      })
  }
}
