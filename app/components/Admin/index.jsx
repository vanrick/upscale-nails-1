import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import CurrentUsers from './adminComponents/currentUsers';
import { Button, Nav, NavItem, NavDropdown, MenuItem, Table } from 'react-bootstrap';

export default class Admin extends Component {

  render() {
    return (
      <div>
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

      </div>
    )
  };
}

Admin.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
