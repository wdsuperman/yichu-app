import React from 'react'
import Home from '../components/Home';
import { connect } from 'react-redux'

const HomeContainer = props => <Home {...props}/>

const mapStateToProps = state =>{
  return{
    posts:state
  }
}
export default connect(mapStateToProps)(HomeContainer)