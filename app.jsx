import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './app/components/home/index';
<<<<<<< HEAD
=======
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
>>>>>>> master
import './assets/style.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
  </Router>,
  document.getElementById('app')
);
