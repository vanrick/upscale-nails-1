import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Home from './app/components/home/index';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './assets/style.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
  </Router>,
  document.getElementById('app')
);
