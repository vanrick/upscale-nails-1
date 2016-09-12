import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import Home from './app/components/home/index';
import Admin from './app/components/admin/index';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './assets/style.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/admin" component={Admin} />
  </Router>
document.getElementById('app')
);
