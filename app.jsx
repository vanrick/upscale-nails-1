var React = require('react');
var ReactDOM = require('react-dom');

import { Router, Route, browserHistory } from 'react-router';
import Home from './app/components/home/index';
import Home from './app/components/home/second';
import './assets/style.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/second" component={Second} />
  </Router>,
  document.getElementById('app')
);
