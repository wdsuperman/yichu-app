import React, { Component } from 'react';
import shouye from '../assets/img/down/首页_u39.png'
import xiaoxi from '../assets/img/down/消息_u45.png'
import huati from '../assets/img/down/话题_u41.png'
import wode from '../assets/img/down/我的_u43.png'
import add from '../assets/img/down/新建_u37.png'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

class News extends Component {
  render() {
    return (
      <div>
        <Show style={{width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
        <Link to='/home' style={{width:'10%',paddingTop:'17.5%',backgroundRepeat:'no-repeat'}}>
        </Link>
        <Link to='/news' style={{width:'10%',paddingTop:'17.5%',backgroundRepeat:'no-repeat'}}>
        </Link>
        <Link to='/news' style={{width:'19%',paddingTop:'18.5%',backgroundRepeat:'no-repeat'}}>
        </Link>
        <Link to='/news' style={{width:'10%',paddingTop:'17.5%',backgroundRepeat:'no-repeat'}}>
        </Link>
        <Link to='/news' style={{width:'10%',paddingTop:'17.5%',backgroundRepeat:'no-repeat'}}>
        </Link>
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
a:nth-child(2){  
  background-image: url(${xiaoxi})}
a:nth-child(3){  
  background-image: url(${add})}
a:nth-child(4){  
  background-image: url(${huati})}
a:nth-child(5){  
  background-image: url(${wode})}
`
export default News;