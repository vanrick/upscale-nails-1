import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, NavItem, NavDropdown, Form, FormGroup, FormControl, MenuItem, ControlLabel} from 'react-bootstrap';

export default class AdminNav extends Component {

  render() {
    return (
      <div>
        <Nav className="nav-position-admin nav-main " bsStyle="tabs" onSelect={this.handleSelect}>
          <NavItem className="admin-nav-text" eventKey="Home" href="#top">Home</NavItem>
          <NavItem className="admin-nav-text"eventKey="Services" href="#appt">Appointments</NavItem>
          <a href="/">
          <Button className="btn btn-info pull-right admin-nav-button" type="logout">
             Logout
          </Button></a>

        </Nav>


  </div>
    )
  };
}
