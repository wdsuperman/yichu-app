import React from 'react'
import Speak from '../components/Speak';
import { connect } from 'react-redux'
const SpeakContainer = props => <Speak {...props} />
const mapStateToProps = state =>{
  return{
    titles:state.speakReducer
  }
}
export default connect(mapStateToProps)(SpeakContainer)