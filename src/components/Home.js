import React, { Component } from 'react';
import top from '../assets/img/u48.png'
import dbtop from '../assets/img/u50.png'
import styled from 'styled-components'
import banner from '../assets/img/webwxgetmsgimg.jpeg'
import bofang from '../assets/img/播放.png'
import paihangbang from '../assets/img/排行榜.png'
import qingdan from '../assets/img/清单.png'
import shouyinji from '../assets/img/收音机.png'
import yinyue from '../assets/img/音乐.png'
import shouye from '../assets/img/down/首页_u39.png'
import xiaoxi from '../assets/img/down/消息_u45.png'
import huati from '../assets/img/down/话题_u41.png'
import wode from '../assets/img/down/我的_u43.png'
import add from '../assets/img/down/新建_u37.png'

class Home extends Component {
  render() {
    const {posts} = this.props
    const postList = posts.map(t => <div style={{width:'90%',margin:'0 auto'}} key={t.id}>
    <div className='top' style={{borderLeft:'1px solid red',display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'25px'}}>
      <span style={{textIndent:'10px'}}>
        {t.left}
      </span>
      <div style={{display:'flex',alignItems:'center'}} className='top-right'>
        <span style={{marginRight:'5px'}}>
          {t.right}
        </span>
        <img style={{width:'40px'}} src={t.touxiang} alt=""/>
      </div>
    </div>
    <div style={{display:'flex',marginTop:'20px',paddingBottom:'10px',justifyContent:'space-between'}}>
      <div style={{width:'45%'}}>
        <span style={{fontSize:'18px'}}>
          {t.title}
        </span>
        <div style={{marginTop:'10px',color:'teal'}}>
          {t.body}
        </div>
      </div>
      <img style={{width:'50%',height:'50%'}} src={t.img} alt=""/>
    </div>
    <hr/>
    </div> )
    return (
      <div>
        <Top>
          <img style={{width:'100%'}} src={top} alt=""/>
          <img style={{width:'90%',left:'5%',top:'8%',position: 'absolute',zIndex:'5'}} src={dbtop} alt=""/>
          <img style={{width:'100%'}} src={banner} alt=""/>
        </Top>
        <Base>
          <img src={yinyue} alt=""/>
          <img src={bofang} alt=""/>
          <img src={qingdan} alt=""/>
          <img src={shouyinji} alt=""/>
          <img src={paihangbang} alt=""/>
        </Base>
        <div>{postList}</div>
        <Show style={{width:'90%',display:'flex',margin:'0 auto',justifyContent:'space-between',alignItems:'center'}}>
          <span style={{width:'10%',paddingTop:'17.5%',backgroundRepeat:'no-repeat'}}></span>
          <span style={{width:'10%',paddingTop:'17.5%',backgroundRepeat:'no-repeat'}}></span>
          <span style={{width:'19%',paddingTop:'18.5%',backgroundRepeat:'no-repeat'}}></span>
          <span style={{width:'10%',paddingTop:'17.5%',backgroundRepeat:'no-repeat'}}></span>
          <span style={{width:'10%',paddingTop:'17.5%',backgroundRepeat:'no-repeat'}}></span>
        </Show>
      </div>
    );
  }
}
const Top = styled.div`
position: relative;
`
const Base = styled.div`
img{
  width:8%;
  height:50%;
}
display:flex;
justify-content:space-around;
width:90%;
margin:0 auto;
height:60px;
align-items:center;
margin-top:10px;
box-shadow: 0px 3px 4px 0px #ccc inset;
border-radius: 3px;
`
const Show = styled.div`
span{
  background-size: 70%;
  background-position: center center;
}
span:nth-child(1){
  background-image: url(${shouye})}
span:nth-child(2){  
  background-image: url(${xiaoxi})}
span:nth-child(3){  
  background-image: url(${add})}
span:nth-child(4){  
  background-image: url(${huati})}
span:nth-child(5){  
  background-image: url(${wode})}
`
export default Home;