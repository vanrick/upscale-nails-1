import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class NavComponent extends Component {

  render() {
    return (
      <div>
        <h1>Unique Nails, A Place for friends!!!</h1>
        <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
          <NavItem eventKey="Home" href="#">Home</NavItem>
          <NavItem eventKey="Services" href="#">Services</NavItem>
          <NavItem eventKey="About Us">About Us</NavItem>
          <NavDropdown eventKey="4" title="Contact" id="nav-dropdown">
            <MenuItem eventKey="4.1">Hours & Location</MenuItem>
            <MenuItem eventKey="4.2">Directions</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4.3">Facebook</MenuItem>
            <MenuItem eventKey="4.4">Yelp</MenuItem>
          </NavDropdown>
        </Nav>
      </div>
    )
  };
}