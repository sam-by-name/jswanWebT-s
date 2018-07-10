import {combineReducers} from 'redux'

import errorMessage from './error-message'
import waiting from './waiting'
// import cohort from './cohort'
import profile from './profile'
import newUsr from './newUsr'

export default combineReducers({
  errorMessage,
  waiting,
  newUsr,
  // cohort,
  profile
})
