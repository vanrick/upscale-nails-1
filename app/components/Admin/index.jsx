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
        <UserCall />
      </div>
    )
  };
}

Admin.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
