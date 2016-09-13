
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { table, tbody, tr, Grid, Row, Col, code,img,i } from 'react-bootstrap';


export default class Footer extends Component {
  render(){
    var {pictures, img1}= this.props
    var React = require('react');
    var FontAwesome = require('react-fontawesome');
    return (
      <div id="hours" className="footer-background">
        <div>
          <h1 className="text-center contact-style">Contact Upscale Nails</h1>
        </div>
      <div id="hours" >
        <Grid>
          <Row className="show-grid">
            <Col md={6} className="contact-pic">
              <img src={img1} height={300} width={350}/>
            </Col>
            <Col md={6} className="text-left contact-location">
              <FontAwesome
                  className="icons"
                  name='location-arrow'
                  size='2x'
                  /><div>
                  <h4>Address: 15880 Summerlin Rd #109,</h4>
                  <h4>Fort Myers, FL 33908</h4>
                </div>
              <br></br>
              <h4><FontAwesome
                  className="icons"
                  name='phone'
                  size='2x'
                  />Telephone Number: (239) 985-0833</h4>
              <br></br>
              <h4><FontAwesome
                  className="icons"
                  name='clock-o'
                  size='2x'
                  />Hours of Opperation: M-S 9:00am-6:30pm</h4>
            </Col>

          </Row>
        </Grid>
      </div>
    </div>
    )
  }
}
