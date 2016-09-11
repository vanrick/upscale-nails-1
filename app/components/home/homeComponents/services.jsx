
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
                    <ul className="ul-style text-left">
                      <li>Acrylic Full Set $50</li>
                      <li> Acrylic Full Set with Gel $55</li>
                      <li>Rebase $30</li>
                      <li>pedicure $50</li>
                      <li>Manicure $30</li>
                      <li>Buff and Polish $15</li>
                      <li>Nail Repair $5</li>
                      <li>Toe Polish Change $20</li>
                      <li>Finger Polish Change $12</li>
                    </ul>
                  </Col>
                <Col xs={6} md={4} className="text-center">
                  <h3 className="text-center">Skin</h3>
                  <img src={img2} height={300} width={350} />
                  <hr></hr>
                    <ul className="ul-style text-left">
                      <li>Eyebrows $22</li>
                      <li>Underarms $22</li>
                      <li>Half Leg $60</li>
                      <li>Full Leg $60</li>
                      <li>Bikini Line $24</li>
                      <li>Brazilian $50</li>
                      <li>Brow Tint $30</li>
                      <li>Mini-Facial $50</li>
                      <li>European Facial $70</li>
                    </ul>
                </Col>
                <Col xsHidden md={4} className="text-right">
                  <h3 className="text-center">Hair</h3>
                  <img src={img3} height={300} width={350} />
                  <hr></hr>
                    <ul className="ul-style text-left">
                      <li>Ladies Haircut $50</li>
                      <li>Gentlemans Haircut $35</li>
                      <li>Full Color $65</li>
                      <li>Partial Hi-Lite $80</li>
                      <li>Full Hi-Lite $100 </li>
                      <li>Blowdry $40</li>
                      <li>Perm $75</li>
                      <li>Relaxer $80</li>
                      <li>Deep Conditioning $35</li>
                    </ul>
                </Col>
              </Row>
            </Grid>
          </div>
    )
  }
}
