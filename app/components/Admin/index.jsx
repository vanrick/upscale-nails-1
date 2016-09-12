import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import UserCall from './adminComponents/userCall';

export default class Admin extends Component {

  render() {

    return (
      <div>
        <UserCall />
      </div>
    )
  };
}

Admin.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
