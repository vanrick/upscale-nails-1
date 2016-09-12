import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { table, tbody, tr, Grid, Row, Col, code,img } from 'react-bootstrap';

export default class Footer extends Component {
  render(){
    var {pictures, img1}= this.props
    return (
      <div id="hours" className="footer-background">
        <div>
          <h1 className="text-center contact-style">Contact Upscale Nails</h1>
        </div>
      <div id="hours" >
        <Grid>
          <Row className="show-grid">
            <Col md={6}>
              <img src={img1} height={300} width={350}/>
            </Col>
            <Col md={6} className="text-left contact-location">
              <h4>Address: 15880 Summerlin Rd #109, Fort Myers, FL 33908</h4>
              <br></br>
              <h4>Telephone Number: (239) 985-0833</h4>
              <br></br>
              <h4>Hours of Opperation: M-F 9:00am-6:30pm</h4>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
    )
  }
}
