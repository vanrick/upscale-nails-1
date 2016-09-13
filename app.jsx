import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import Home from './app/components/home/index';
import Admin from './app/components/Admin/index';
import User from './app/components/User/index'
import Technician from './app/components/Technicians/index'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './assets/style.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/admin" component={Admin} />
    <Route path="/user" component={User} />
    <Route path="/technician" component={Technician} />
  </Router>,
document.getElementById('app')
);
