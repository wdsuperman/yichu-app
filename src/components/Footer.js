import React, { Component } from 'react';
import {NavLink ,Link} from 'react-router-dom'
import shouye from '../assets/img/down/首页_u39.png'
import xiaoxi from '../assets/img/down/消息_u45.png'
import huati from '../assets/img/down/话题_u41.png'
import wode from '../assets/img/down/我的_u43.png'
import add from '../assets/img/down/新建_u37.png'

import sshouye from '../assets/img/down/首页_u39_disabled.png'
import sxiaoxi from '../assets/img/down/消息_u45_disabled.png'
import shuati from '../assets/img/down/话题_u41_disabled.png'
import swode from '../assets/img/down/我的_u43_disabled.png'

import styled from 'styled-components'


class Footer extends Component {
  render() {
    return (
      <div>
        <Show style={{width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
        <NavLink to='/home' activeClassName='one' style={{width:'10%',paddingTop:'17.5%',backgroundRepeat:'no-repeat'}}>
        </NavLink>
        <NavLink to='/news' activeClassName='two' style={{width:'10%',paddingTop:'17.5%',backgroundRepeat:'no-repeat'}}>
        </NavLink>
        <Link to='/new' style={{width:'19%',paddingTop:'18.5%',backgroundRepeat:'no-repeat'}}>
        </Link>
        <NavLink to='/topic' activeClassName='for' style={{width:'10%',paddingTop:'17.5%',backgroundRepeat:'no-repeat'}}>
        </NavLink>
        <NavLink to='/my' activeClassName='fiv' style={{width:'10%',paddingTop:'17.5%',backgroundRepeat:'no-repeat'}}>
        </NavLink>
        </Show>
      </div>
    );
  }
}
const Show = styled.div`
position: fixed;
background-color:#fff;
bottom: 0;
height:8%;
a{
  background-size: 60%;
  background-position: center center;
}
a:nth-child(1){
  background-image: url(${shouye})}
a.one{
  background-image: url(${sshouye})}
a:nth-child(2){  
  background-image: url(${xiaoxi})}
a.two{
  background-image: url(${sxiaoxi})
}
a:nth-child(3){  
  background-image: url(${add})}
a:nth-child(4){  
  background-image: url(${huati})}
a.for{
  background-image: url(${shuati})
}
a:nth-child(5){  
  background-image: url(${wode})}
a.fiv{
  background-image: url(${swode})
}
`
export default Footer;