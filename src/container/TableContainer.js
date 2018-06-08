import React from 'react'
import Table from '../components/Table';
import { connect } from 'react-redux'
const TableContainer = props => <Table {...props} />
const mapStateToProps = state =>{
  return{
    table:state.cir
  }
}
export default connect(mapStateToProps)(TableContainer)