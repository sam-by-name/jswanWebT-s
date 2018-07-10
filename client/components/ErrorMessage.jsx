import React from 'react'
import {connect} from 'react-redux'

const ErrorMessage = (props) => {
  return (
    <div className='err'>
      {props.errorMessage}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps)(ErrorMessage)
