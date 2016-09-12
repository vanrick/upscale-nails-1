import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

// import {getUsers} from '../../../databaseUtilities/databaseRequests';
import { Button, Nav, NavItem, NavDropdown, MenuItem, Table, Grid, Row, Col } from 'react-bootstrap';
import $ from 'jquery';
import ApptCall from './apptCall';

export default class CurrentAppts extends Component {

  render () {
    var apptResults = this.props.hello;
    console.log(apptResults);

    var parseAppts = apptResults.appointments.map(function(appt, i) {
      return (
        <tr>
          <td>{appt.id}</td>
          <td>{appt.customer.first_name} {appt.customer.last_name}</td>
          <td>{appt.technician.first_name} {appt.technician.last_name}</td>
          <td>{appt.product.name}</td>
          <td>{appt.state}</td>
          <td>{appt.description}</td>
          <td>{Date(appt.appointment_start)}</td>
          <td>{Date(appt.appointment_end)}</td>
        </tr>
      )
    })
    console.log(apptResults);
    console.log(parseAppts);
    return(
      <tbody>{parseAppts}</tbody>
    )
  }
}
