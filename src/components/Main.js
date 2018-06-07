import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom'
import SignUp from './SignUp';
import Guide from './Guide';
import HomeContainer from '../container/HomeContainer';
import News from './News';
import My from './My';
import Topic from './Topic';
import New from './New';
import SpeakContainer from '../container/SpeakContainer';

class Main extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Guide} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={HomeContainer} />
        <Route path="/news" exact component={News} />
        <Route path="/my" component={My} />
        <Route path="/topic" component={Topic} />
        <Route path="/new" component={New} />
        <Route path="/news/speak" component={SpeakContainer} />
      </div>
    );
  }
}

export default Main;