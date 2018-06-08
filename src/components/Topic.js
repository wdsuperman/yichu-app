import React, { Component } from 'react';
import Footer from './Footer';
import {NavLink} from 'react-router-dom'
import top from '../assets/img/u48.png'
import tuijian from '../assets/img/tuiijian.jpeg'

class Topic extends Component {
  render() {
    const { topic } = this.props
    const topicList = topic.map(t => <div style={{width:'90%',margin:'0 auto',paddingTop:'10%'}} key={t.id}>
      <div style={{display:'flex',alignItems:'center'}}>
        <img src={t.src} style={{width:'8%'}} alt=""/>
        <span style={{marginLeft:'3%'}}>
          {t.name}
        </span>
      </div>
      <p style={{fontSize:'17px'}} >
        {t.title}
      </p>
      <p style={{color:'#696969',marginTop:'5%'}} >{t.body}</p>
      <p style={{color:'#C0C0C0',marginTop:'3%'}} >{t.time}</p>
    </div> )
    return (
      <div>
        <div className='wrap'style={{paddingBottom:'18%'}} >
          <div style={{backgroundImage:`url(${top})`,paddingTop:'6%',paddingBottom:'6%',backgroundSize:'cover',width:'100%'}}>
            <div style={{width:'100%',display:'flex',justifyContent:'space-around'}}>
              <div><NavLink style={{color:'black'}} to='/topic' exact activeStyle={{color:'#fff'}}>推荐</NavLink></div>
              <div><NavLink style={{color:'black'}} to='/topic/table' activeStyle={{color:'#fff'}}>圆桌</NavLink></div>
            </div>
          </div>
          <img src={tuijian} style={{width:'100%'}} alt=""/>
          <div>
          {topicList}
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Topic;