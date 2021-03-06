import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import CurrentUsers from './adminComponents/currentUsers';
import CurrentAppts from './adminComponents/currentAppts';
import AdminNav from './adminComponents/adminNav';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem, Table } from 'react-bootstrap';
import UserCall from './adminComponents/userCall';
import ApptCall from './adminComponents/apptCall';

export default class Admin extends Component {

  render() {
    return (
      <div>
        <AdminNav />
        <br></br>
        <br></br>
      <div className="admin-style">
        <h1>Registered Users and Staff</h1>
      </div>
        <UserCall />
      <div className="admin-style">
        <h1>Appointments</h1>
      </div>
        <ApptCall />

      </div>
    )
  };
}

Admin.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
