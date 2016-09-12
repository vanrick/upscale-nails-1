import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {A, p, br, dt, dd, dl, table, tbody, tr, Grid, Row, Col, code,img, Button } from 'react-bootstrap';

export default class ShowAll extends Component {
  render(){
    var { name, img } = this.props
    return (
        <div className="container">
          <div className='row'>
            <div className='toppad pull-right'>
              <Col md={12} mdOffset={0}>
              <Button href="#">Edit Profile</Button>
              <Button href="#">Log Out</Button>
              <br/>
              <p className="text-infto ">May 05,2016,03:00 pm </p>
              </Col>
            </div>
             <div className="col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >
               <Col xs={5} sm={12} md={6} lg={8}>
               <div className="panel panel-info">
                 <div className='panel-heading'>
                   <h3 className="panel-title">Mertile Escobar</h3>
                 </div>
                 <div className='panel-body'>
                  <div className='row'>
                  <div>
                    <Col md={3} lg={3} >
                    <img src={img} className="img-circle img-responsive smallImg"/>
                    </Col>
                  </div>
                  <div>
                    <Col md={9} lg={9} >
                    <table className="table table-user-information">
                      <tbody>

                        <tr>
                          <td>Appointments:</td>
                          <td>Sept 14, 2016
                            Weds @ 3:30pm</td>
                        </tr>
                        <tr>
                          <td>Technician:</td>
                          <td>Nini</td>
                        </tr>
                        <tr>
                          <td>Services:</td>
                          <td>Pedicure and Manicure package</td>
                        </tr>
                        <tr>
                          <td>Polish Color:</td>
                          <td>#4403</td>
                        </tr>
                        <tr>
                          <td>Email:</td>
                          <td><a href='#'>Mertile@support.com</a></td>
                        </tr>
                        <tr>
                          <td>Phone Number:</td>
                          <td>123-4567-8900(Mobile)</td>
                        </tr>

                      </tbody>
                    </table>
                    <Button className='btn btn-primary' href="#">Change Appointments</Button>
                    <Button className='btn btn-primary' href="#">Notes For Nail Tech</Button>
                  </Col>
                  </div>
                  </div>
                 </div>
               </div>
             </Col>
             </div>
          </div>
        </div>
    )
  }
}
