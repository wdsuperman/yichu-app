import React, { Component } from 'react';
import Footer from './Footer';
import xinjian from '../assets/img/u26.jpg'
import { Link } from 'react-router-dom'

class New extends Component {
  render() {
    return (
      <div style={{position:'relative'}}>
        <img style={{width:'100%',paddingBottom:'13%'}} src={xinjian} alt=""/>
        <Link to='/home' style={{width:'10%',height:'6%',position: 'absolute',left:'2%',top:'2%',display:'block'}}></Link>
        <Footer />
      </div>
    );
  }
}

export default New;