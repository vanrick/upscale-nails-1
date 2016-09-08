import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Unique Nails, A Place for friends!!!</h1>
        <button className="btn btn-danger">Click Me!</button>
        <nav className = "navbar navbar-default" role = "navigation">
          <div className = "navbar-header">
            <a className = "navbar-brand" href = "#">Upscale Nails</a>
          </div>
          <div>
            <ul className = "nav navbar-nav">
              <li className = "active"><a href = "#">Home</a></li>
              <li><a href = "#">Services</a></li>
              <li className = "dropdown">
                <a href = "#" className = "dropdown-toggle" data-toggle = "dropdown">Contact<b className = "caret"></b></a>
                <ul className = "dropdown-menu">
                  <li><a href = "#">About Us</a></li>
                  <li><a href = "#">Location</a></li>
                  <li><a href = "#">Directions</a></li>
                  <li className = "divider"></li>
                  <li><a href = "#">Yelp</a></li>
                  <li className = "divider"></li>
                  <li><a href = "#">Facebook</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
};

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
