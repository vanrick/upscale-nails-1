
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Col, Row, Grid} from 'react-bootstrap';

export default class Services extends Component{

render (){
  var {pictures, img1, img2, img3} = this.props

  return (
    <div id="services">
      <h1 className="text-center">Upscale Nails and Spa Services</h1>
          <p className="text-center">At Upscale Nails we want to provide you with the best service in Fort Myers Florida.</p>
          <p className="text-center">With just one of our services you will leave refreshed and ready to take on your day.</p>
            <Grid>
              <Row className="show-grid">
                <Col xs={6} md={4} className="text-left">
                  <h3 className="text-center">Nails</h3>
                  <img src={img1} height={300} width={350}/>
                  <hr></hr>
                </Col>
                <Col xs={6} md={4} className="text-center">
                  <h3 className="text-center">Skin</h3>
                  <img src={img2} height={300} width={350} />
                  <hr></hr>
                </Col>
                <Col xsHidden md={4} className="text-right">
                  <h3 className="text-center">Hair</h3>
                  <img src={img3} height={300} width={350} />
                  <hr></hr>
                </Col>
              </Row>
            </Grid>
          </div>
    )
  }
}
