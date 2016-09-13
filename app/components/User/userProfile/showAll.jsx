import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import {a, i, A, p, br, dt, dd, dl, table, tbody, tr, Grid, Row, Col, code,img, Button } from 'react-bootstrap';

export default class ShowAll extends Component {
  render(){
    var { name, img } = this.props
    return (
        <div className="container userBody">
          <div className='row'>
            <div className='toppad pull-right'>
              <Col md={12} mdOffset={0}>
              <Button className='userBlue spcRight' href="#">Edit Profile</Button>
              <Button className='userRed'href="#">Log Out</Button>
              <br/>
              <p className="text-infto ">May 05,2016 03:00 pm </p>
              </Col>
            </div>
             <div className="toppad" >
               <Col xsOffset={0} smOffset={0} mdOffset={2} xs={5} sm={12} md={6} lg={8}>
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
                    <Button className='userBlue btn btn-primary spcRight' href="#">Change Appointments</Button>
                  <Link to="/technician"><Button className='userBlue btn btn-primary'>Notes For Nail Tech</Button></Link>
                  </Col>
                  </div>
                  </div>
                 </div>

                 <div className='panel-footer'>
                  <a href='#' type="button" className="userBlue btn btn-lg btn-primary"><i className="glyphicon glyphicon-phone"></i></a>
                  <span className='pull-right'>
                  <a href='#' type="button" className="userBlue btn btn-lg btn-warning spcRight"><i className="glyphicon glyphicon-flash">FACEBOOK</i></a>
                  <a href='#' type="button" className="btn btn-lg btn-warning"><i className="glyphicon glyphicon-star-empty">SPECIALS</i></a>


                  </span>
                 </div>

               </div>
             </Col>
             </div>
          </div>
        </div>
    )
  }
}
