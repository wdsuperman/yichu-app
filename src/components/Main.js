import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom'
import SignUp from './SignUp';
import Guide from './Guide';
import HomeContainer from '../container/HomeContainer';
import News from './News';
import My from './My';
import New from './New';
import SpeakContainer from '../container/SpeakContainer';
import TopicConyainer from '../container/TopicConyainer';
import TableContainer from '../container/TableContainer';

class Main extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Guide} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={HomeContainer} />
        <Route path="/news" exact component={News} />
        <Route path="/my" component={My} />
        <Route path="/topic" exact component={TopicConyainer} />
        <Route path="/topic/table" component={TableContainer} />
        <Route path="/new" component={New} />
        <Route path="/news/speak" component={SpeakContainer} />
      </div>
    );
  }
}

export default Main;