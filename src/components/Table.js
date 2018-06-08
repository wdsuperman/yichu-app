import React, { Component } from 'react';
import Footer from './Footer';
// import styled from 'styled-components'
import top from '../assets/img/u48.png'
import {NavLink,Link} from 'react-router-dom'

class Table extends Component {
  render() {
    const {table} = this.props
    const tableList = table.map((t,index) => index === 0 ?  <Link to='/liyou' style={{display:'flex',alignItems:'center',width:'90%',margin:'0 auto',padding:'1.5%',backgroundColor:'#fff',borderRadius:'10px',marginTop:'3%'}} key={t.id}>
      <img src={t.src} style={{width:'15%'}} alt=""/>
      <div style={{marginLeft:'4%'}} >
        <p style={{color:'#502323'}}>{t.title}</p>
        <p style={{color:'#808080',fontSize:'12px'}} >{t.body}</p>
      </div>
    </Link> :<div style={{display:'flex',alignItems:'center',width:'90%',margin:'0 auto',padding:'1.5%',backgroundColor:'#fff',borderRadius:'10px',marginTop:'3%'}} key={t.id}>
      <img src={t.src} style={{width:'15%'}} alt=""/>
      <div style={{marginLeft:'4%'}} >
        <p style={{color:'#502323'}}>{t.title}</p>
        <p style={{color:'#808080',fontSize:'12px'}} >{t.body}</p>
      </div>
    </div>)
    return (
      <div>
        <div style={{paddingBottom:'18%',backgroundColor:'#F5F5F5'}} >
          <div style={{backgroundImage:`url(${top})`,paddingTop:'6%',paddingBottom:'6%',backgroundSize:'cover',width:'100%'}}>
            <div style={{width:'100%',display:'flex',justifyContent:'space-around'}}>
              <div><NavLink style={{color:'black'}} to='/topic' exact activeStyle={{color:'#fff'}}>推荐</NavLink></div>
              <div><NavLink style={{color:'black'}} to='/topic/table' activeStyle={{color:'#fff'}}>圆桌</NavLink></div>
            </div>
          </div>
          <div>
            {tableList}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Table;