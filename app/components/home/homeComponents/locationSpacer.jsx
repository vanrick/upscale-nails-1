import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { table, tbody, tr, Grid, Row, Col, code,img } from 'react-bootstrap';

export default class LocationSpacer extends Component {
  render(){
    return (
      <div id="map">
        <div className="location-style">
          <h1 className="text-center location-style">Location</h1>
        </div>
      </div>
    )
  }
}
