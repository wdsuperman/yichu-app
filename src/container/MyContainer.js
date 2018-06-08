import React from 'react'
import My from '../components/My';
import { connect } from 'react-redux'
const MyContainer = props => <My  {...props} />
const mapStateToProps = state =>{
  return{
    sj:state.myR
  }
}
export default connect(mapStateToProps)(MyContainer)