import React, { Component } from 'react';
import Footer from './Footer';
import styled from 'styled-components'
import top from '../assets/img/u48.png'
import {NavLink} from 'react-router-dom'
import xx from '../assets/img/消息4_03.png'
import syjg from '../assets/img/xiaoxi_03.png'
import xsx from '../assets/img/消息2_03.png'

class News extends Component {
  render() {
    return (
      <div>
        <div style={{backgroundImage:`url(${top})`,paddingTop:'6%',paddingBottom:'6%',backgroundSize:'cover',width:'100%'}}>
          <div style={{width:'100%',display:'flex',justifyContent:'space-around'}}>
            <div><NavLink style={{color:'black'}} to='/news' activeStyle={{color:'#fff'}}>动态</NavLink></div>
            <div><NavLink style={{color:'black'}} to='/news/speak' activeStyle={{color:'#fff'}}>聊天</NavLink></div>
          </div>
        </div>
        <div style={{width:'90%',margin:'0 auto'}}>
          <div>
            <p style={{color:'#ccc'}}>一起说:</p>
            <div style={{display:'flex'}}>
              <div style={{width:'40%'}}>
                <img src={xx} alt="" style={{borderRadius:'5px',width:'75%'}}/>
              </div>
              <Up>
                <p>让第毒鸡汤给你醒醒脑</p>
                <p>大家一起来聊聊</p>
                <p>最新更新:</p>
                <p>虽然你又胖又丑</p>
              </Up>
            </div>
            <hr/>
          </div>
          <div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <p style={{color:'#ccc'}}>让他回信:</p>
              <p style={{color:'#ccc',textDecoration:'underline'}}>查看全部 ></p>
            </div>
              <div style={{width:'100%',display:'flex'}}>
                <div>
                  <img src={syjg} alt="" style={{borderRadius:'5px',width:'95%'}}/>
                  <p style={{textAlign:'center'}}>岁月寄歌</p>
                  <p style={{textAlign:'center',color:'teal'}}>我很碎碎念</p>
                </div>
                <div>
                  <img src={xsx} alt="" style={{borderRadius:'5px',width:'95%'}}/>
                  <p style={{textAlign:'center'}}>想三旬</p>
                  <p style={{textAlign:'center',color:'teal'}}>我还好啦</p>
                </div>
              </div>
            <hr/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const Up = styled.div`
  p{
    margin:0;
    font-size: 14px;
  }
  p:nth-child(1){
    font-size: 16px;
    padding-bottom:5px;
  }
  p:nth-child(3){
    margin-top:35%;
    padding-bottom:5px;
    color:#ccc;
  }
  p:nth-child(4){
    color:teal;
  }
  padding-bottom:10px;

`
export default News;