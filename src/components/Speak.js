import React, { Component } from 'react';
import Footer from './Footer';
// import styled from 'styled-components'
import top from '../assets/img/u48.png'
import {NavLink} from 'react-router-dom'

class Speak extends Component {
  render() {
    const {titles} =this.props
    const titleList = titles.map(t => <div style={{width:'100%'}} key={t.id}>
    <div style={{width:'90%',display:'flex',alignItems:'center',margin:'0 auto',padding:'3% 0'}}>
      <img src={t.src} alt="" style={{width:'15%'}}/>
      <div  style={{borderBottom:'1px solid #ccc',width:'100%',marginLeft:'5%',paddingBottom:'3%'}}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <p style={{fontSize:'16px'}}>{t.title}</p>
        <p style={{color:'#ccc'}}>{t.time}</p>
      </div>
        <p style={{color:'#00b3d4'}}>{t.text}</p>
      </div>
    </div>
    </div> )
    return (
      <div>
        <div style={{backgroundImage:`url(${top})`,paddingTop:'6%',paddingBottom:'6%',backgroundSize:'cover',width:'100%'}}>
          <div style={{width:'100%',display:'flex',justifyContent:'space-around'}}>
            <div><NavLink style={{color:'black'}} to='/news' exact activeStyle={{color:'#fff'}}>动态</NavLink></div>
            <div><NavLink style={{color:'black'}} to='/news/speak' activeStyle={{color:'#fff'}}>聊天</NavLink></div>
          </div>
        </div>
        <div style={{width:'100%',textAlign:'center',backgroundColor:'#ccc',padding:'2% 0'}}>
          <input type="text" placeholder='假的不能搜索' style={{outline:'0',border:'0',borderRadius:'5px',width:'90%',fontSize:'16px',height:'20%',textIndent:'5px'}}/ >
        </div>
        <div>
          {titleList}
        </div>
        <Footer />
      </div>
    );
  } 
}

export default Speak;