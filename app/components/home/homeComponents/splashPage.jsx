import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, container, row} from 'react-bootstrap';

export default class SplashPage extends Component {
  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center ">
              <h1>Upscale Nails</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
