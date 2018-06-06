import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import styled from 'styled-components'
import u1 from '../assets/img/u5.png'
import u2 from '../assets/img/u7.png'
import u3 from '../assets/img/u9.png'
import u4 from '../assets/img/u11.png'
import { Link } from 'react-router-dom'
class Guide extends Component {
  state = {
    data: ['1', '2', '3','4']
  }
  render() {
    const imgArr = [u1,u2,u3,u4]
    return (
      <div style={{width:'100%'}}>
      <WingBlank style={{marginLeft:'0',marginRight:'0',position: 'relative'}}>
        <Carousel
          autoplay={false}
          infinite={false}
          slideWidth={1}
          dots={false}
        >
          {this.state.data.map(val => (
            <img
              src={imgArr[Number(val) - 1]}
              alt=""
              key={val}
              style={{ width: '100%',height:'100vh'}}
            //   onLoad={() => {
            //     window.dispatchEvent(new Event('resize'));
            //     this.setState({ imgHeight: 'auto' });
            //   }
            // }
            />
          ))}
        </Carousel>
        <Link to='/signup'><Go></Go></Link>
      </WingBlank>
      </div>
    );
  }
}
const Go = styled.div`
  z-index:999;
  position:absolute;
  top:72.5%;
  width:110px;
  left:50%;
  margin-left:-55px;
  height:30px;
  background-color:#000;
`
export default Guide;
