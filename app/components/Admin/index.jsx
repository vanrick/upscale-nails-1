import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import CurrentUsers from './adminComponents/currentUsers';
import AdminNav from './adminComponents/adminNav';

import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem, Table } from 'react-bootstrap';
import UserCall from './adminComponents/userCall';

export default class Admin extends Component {

  render() {

    return (
      <div>
        <AdminNav />
        <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Telephone</th>
              <th>Admin?</th>
              <th>Tech?</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <CurrentUsers />
          </tbody>
        </Table>
      </div>

        <UserCall />
      </div>
    )
  };



}

Admin.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
