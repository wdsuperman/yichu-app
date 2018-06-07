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
      <div style={{marginTop:'10px',width:'45%'}}>
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
export default Home;