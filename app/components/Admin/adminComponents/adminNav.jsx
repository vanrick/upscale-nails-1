import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, NavItem, NavDropdown, Form, FormGroup, FormControl, MenuItem, ControlLabel} from 'react-bootstrap';

export default class AdminNav extends Component {

  render() {
    return (
      <div>
        <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
          <NavItem eventKey="Home" href="#">Home</NavItem>
          <NavItem eventKey="Services" href="#">Appointments</NavItem>
          <a href="/">
          <Button className="btn btn-info pull-right" type="logout">
             Logout
          </Button></a>

        </Nav>


  </div>
    )
  };
}
