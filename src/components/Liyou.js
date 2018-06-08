import React, { Component } from 'react';
import liy from '../assets/img/u171.jpg'
import { Link } from 'react-router-dom'

class Liyou extends Component {
  render() {
    return (
      <div style={{position:'relative'}}>
        <img src={liy} style={{width:'100%'}} alt=""/>
        <Link to='/topic/table' style={{width:'10%',height:'6%',position: 'absolute',left:'2%',top:'2%',display:'block'}}></Link>
      </div>
    );
  }
}

export default Liyou;