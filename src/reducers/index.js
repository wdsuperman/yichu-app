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

const topic = [
  {
    name:'不安海水安于咸',
    id:1,
    title:'没有上进心我错了么？',
    body:'我要自己选择我这一生怎么爱，更要自己选择我这医生怎么活，一个文明社会就是允许用任何方式活着。所以，六一儿童节，我想吃棒棒糖就吃棒棒糖，想去游乐园就去游乐园。',
    src:'http://i4.bvimg.com/648795/dde42e81edef51c5.png',
    time:'05-20 20:56'
  },
  {
    name:'MislankaNova',
    id:2,
    title:'找对象该不该差不多得了？',
    body:'运气是要转的，你一直等这幸福来敲门，好八十年了，幸福不来敲门，是不是你家住的太偏远的。',
    src:'http://i4.bvimg.com/648795/66728602e6d123e7.png',
    time:'05-20 20:56'
  }
]
 const cirD = [
  {
      id:'1',
      title:'不想上班的理由',
      body:'还有1周结束',
      src:'http://i4.bvimg.com/648795/1cc6fd30542e2795.jpg'
  },
  {
      id: '2',
      title: '你已经做的足够好',
      body: '还有9小时结束',
      src: 'http://i4.bvimg.com/648795/e42ae561ed1280d8.png'
  },
  {
      id: '3',
      title: '稳住我们能赢',
      body: '330.6k 次浏览，11.7k人关注',
      src: 'http://i4.bvimg.com/648795/e42ae561ed1280d8.png'
  },
  {
      id: '4',
      title: '现在几点了',
      body: '1.4m 次浏览，11.7k人关注',
      src: 'http://i4.bvimg.com/648795/dde42e81edef51c5.png'
  },
  {
      id: '5',
      title: '听说大家都考完了',
      body: '1.4m 次浏览，11.7k人关注',
      src: 'http://i4.bvimg.com/648795/1cc6fd30542e2795.jpg'
  },
  {
      id: '6',
      title: '你是不是膨胀了',
      body: '1.4m 次浏览，11.7k人关注',
      src: 'http://i4.bvimg.com/648795/04fe12a36a6edc17.png'
  },
  {
      id: '7',
      title: '注册会计师之路',
      body: '1.4m 次浏览，11.7k人关注',
      src: 'http://i4.bvimg.com/648795/1cc6fd30542e2795.jpg'
  }
]
const my = [
  {
    id:1,
    title:'收藏',
    body:'文章 歌曲 精彩回答都在这里了',
    num:'32',
    src:'http://i4.bvimg.com/648795/e42ae561ed1280d8.png'
  },
  {
    id:2,
    title:'回信',
    body:'你的回答',
    num:'7个',
    src:'http://i4.bvimg.com/648795/e42ae561ed1280d8.png'
  },
  {
    id:3,
    title:'提问',
    body:'你的提问',
    num:'2个',
    src:'http://i4.bvimg.com/648795/e42ae561ed1280d8.png'
  },
  {
    id:4,
    title:'钱包',
    body:'邀请好友来拿钱',
    num:'50.00',
    src:'http://i4.bvimg.com/648795/e42ae561ed1280d8.png'
  } 
]
const rootReducer = (state = initialState) => {
  return state
}
const speakReducer = (state = speak) => {
  return state
}
const topicReducer = (state = topic) => {
  return state
}
const cir = (state = cirD) => {
  return state
}
const myR = (state = my) => {
  return state
}
export default combineReducers({
  rootReducer,speakReducer,topicReducer,cir,myR
})