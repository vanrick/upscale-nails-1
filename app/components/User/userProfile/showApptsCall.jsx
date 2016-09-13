import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

// import {getUsers} from '../../../databaseUtilities/databaseRequests';
import { Button, Nav, NavItem, NavDropdown, MenuItem, Table, Grid, Row, Col } from 'react-bootstrap';
import $ from 'jquery';
import UserAppts from './showAll';
import UserShow from './userAll';

export default class UserApptCall extends Component {

  render () {
    var apptResults = this.props.bingBong;
    var userResults = this.props.pingPong;
    // console.log(apptResults.appointments[0].description);
    console.log(userResults)

    return(
      <div>
      <div>
      <h1>{userResults[0].first_name}</h1>
      </div>
      <div>
      <h1>{apptResults.appointments[0].description}</h1>
      </div>
    </div>
    )
  }
}
