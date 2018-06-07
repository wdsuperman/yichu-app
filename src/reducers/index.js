import { combineReducers } from 'redux'
const initialState =[
  {
    id: '1',
    title:'老了又怎么，又不耽误好好活着',
    body:'1《奇葩说》 第四期的问题是：“如果你的父母提出和',
    left:'浮世绘',
    right:'一处精选',
    img:'http://i4.bvimg.com/648728/b965b82ef62f205a.jpg',
    touxiang:'http://i4.bvimg.com/648728/a8ab936e550075b3.jpg'
  },
  {
    id: '2',
    title: '我更喜欢努力的自己',
    body: '你知道，故事的结尾并不重要，生活唯一确保我们的就是光芒。',
    left:'浮世绘',
    right:'毛毛',
    img:'http://i4.bvimg.com/648728/a307d0b97c480d11.jpg',
    touxiang:'http://i4.bvimg.com/648728/48aeeea46e53f2df.jpg'
  }
]

const speak = [
  {
      id:'1',
      title:'通知',
      text:'"我喜欢春娇，我觉得她好，她什么都好,"',
      src:'http://i4.bvimg.com/648795/04fe12a36a6edc17.png',
      time:'刚刚'
  },
  {
      id:'2',
      title:'一处小秘',
      text:'"许多时候，我们都在说过的过程中成长"',
      src:'http://i4.bvimg.com/648795/dde42e81edef51c5.png',
      time:'刚刚'
  },
  {
      id: '3',
      title: '闪耀的宇宙碎片',
      text: '"忘记心中绕，前缘尽勾销"',
      src:'http://i4.bvimg.com/648795/e42ae561ed1280d8.png',
      time:'一分钟前'
  },
  {
      id: '4',
      title: '处方药',
      text: '"等你好久咧"',
      src:'http://i4.bvimg.com/648795/66728602e6d123e7.png',
      time:'昨天'
  },
  {
      id: '5',
      title: 'yaoutin',
      text: '"有点意思"',
      src:'http://i4.bvimg.com/648795/e42ae561ed1280d8.png',
      time:'6-12'
  },
  {
      id: '6',
      title: '处方药',
      text: '"哎呦可以哦"',
      src:'http://i4.bvimg.com/648795/dde42e81edef51c5.png',
      time:'6-13'
  }
]

const rootReducer = (state = initialState) => {
  return state
}
const speakReducer = (state = speak) => {
  return state
}

export default combineReducers({
  rootReducer,speakReducer
})