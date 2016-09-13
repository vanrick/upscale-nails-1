import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

// import {getUsers} from '../../../databaseUtilities/databaseRequests';
import { Button, Nav, NavItem, NavDropdown, MenuItem, Table, Grid, Row, Col } from 'react-bootstrap';
import $ from 'jquery';
import UserAppts from './showAll';
// import UserShow from './userAll';

export default class UserApptCall extends Component {

  render () {
    var apptResults = this.props.bingBong;

    return(
      <div className="container userBody">
      <div className='row'>
      <div className='toppad pull-right'>
        <Col md={12} mdOffset={0}>
        <Button className='userBlue' href="#">Edit Profile</Button>
        <Button className='userRed'href="#">Log Out</Button>
        <br/>
        </Col>

      </div>
       <div className="col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >
         <Col xs={5} sm={12} md={6} lg={8}>
         <div className="panel panel-info">
           <div className='panel-heading'>
             <h3>{apptResults.appointments[0].customer.first_name} {apptResults.appointments[0].customer.last_name}</h3>
           </div>
           <div className='panel-body'>
            <div className='row'>
            <div>
            </div>
            <div>
              <Col md={9} lg={9} >
              <table className="table table-user-information">
                <tbody>

                  <tr>
                    <td>Appointments:</td>
                    <td>{Date(apptResults.appointments[0].appointment_start)}</td>
                  </tr>
                  <tr>
                    <td>Technician:</td>
                    <td>Tom</td>
                  </tr>
                  <tr>
                    <td>Services:</td>
                    <td>{apptResults.appointments[0].product.name}</td>
                  </tr>
                  <tr>
                    <td>Polish Color:</td>
                    <td>#4403</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{apptResults.appointments[0].customer.email}</td>
                  </tr>

                </tbody>
              </table>
              <Button className='userBlue btn btn-primary' href="#">Change Appointments</Button>
              <Button className='userBlue btn btn-primary' href="#">Notes For Nail Tech</Button>
            </Col>
            </div>
            </div>
           </div>

           <div className='panel-footer'>
            <a href='#' type="button" className="userBlue btn btn-lg btn-primary"><i className="glyphicon glyphicon-phone"></i></a>
            <span className='pull-right'>
            <a href='#' type="button" className="userBlue btn btn-lg btn-warning"><i className="glyphicon glyphicon-flash">FACEBOOK</i></a>
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
