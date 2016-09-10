import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Col, Row, Grid} from 'react-bootstrap';

export default class Services extends Component{

render (){
  return (
    <div>
      <h1 className="text-center">Unique Nails Services</h1>
          <p className="text-center">At Unique Nails we want to provide you with the best service in Fort Myers Florida.</p>
          <p className="text-center">With just one of our services you will leave refreshed and ready to take on your day.</p>
    <Grid>
      <Row className="show-grid">
        <Col md={6} mdPush={6} className="text-right">Hello! 2</Col>
        <Col md={6} mdPull={6}>Hello! 1</Col>
      </Row>
    </Grid>
      

    </div>
    )
  }
}
