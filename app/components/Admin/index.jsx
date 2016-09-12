import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD

import CurrentUsers from './adminComponents/currentUsers';
import AdminNav from './adminComponents/adminNav';

import { Button, Nav, NavItem, NavDropdown, MenuItem, Table } from 'react-bootstrap';
=======
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
>>>>>>> 86f4d268c2f3d66692425a8987fd3675f5a26195
import UserCall from './adminComponents/userCall';

export default class Admin extends Component {

  render() {

    return (
      <div>
<<<<<<< HEAD
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

=======
>>>>>>> 86f4d268c2f3d66692425a8987fd3675f5a26195
        <UserCall />
      </div>
    )
  };



}

Admin.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
