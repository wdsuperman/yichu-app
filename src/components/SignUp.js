import React, { Component } from 'react';
import signup from '../assets/img/u14.jpg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class SignUp extends Component {
  render() {
    return (
      <div style={{position:'relative'}}>
        <img style={{width:'100%'}} src={signup} alt=""/>
        <Link to='/'><Back></Back></Link>
        <Link to='/home'><Signup></Signup></Link>
      </div>
    );
  }
}
const Back = styled.div`
position: absolute;
left: 4%;
top: 4%;
width: 40px;
height: 40px;
` 
const Signup = styled.div`
position: absolute;
left: 22%;
top: 55%;
width: 228px;
height: 43px;
`
export default SignUp;