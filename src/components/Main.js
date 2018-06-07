import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom'
import SignUp from './SignUp';
import Guide from './Guide';
import HomeContainer from '../container/HomeContainer';
import News from './News';

class Main extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Guide} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={HomeContainer} />
        <Route path="/news" component={News} />
      </div>
    );
  }
}

export default Main;