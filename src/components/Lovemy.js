import React, { Component } from 'react';
import love from '../assets/img/u105.jpg'
import { Link } from 'react-router-dom'
class Lovemy extends Component {
  render() {
    return (
      <div style={{position:'relative'}}>
        <img src={love} style={{width:'100%'}} alt=""/>
        <Link to='/home' style={{width:'10%',height:'6%',position: 'absolute',left:'2%',top:'2%',display:'block'}}></Link>
      </div>
    );
  }
}

export default Lovemy;