import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Route, RouteHandler, Link } from 'react-router';
import AuthService from '../services/AuthService'
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Home extends Component {
  render() {
    return <h1>hello</h1>
    <Nav pullRight>
        <NavItem eventKey={1}>Home</NavItem>
        <NavItem eventKey={2}>Book Inv</NavItem>
        <NavDropdown eventKey={3} title="Authorization" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Logout</MenuItem>
        </NavDropdown>
    </Nav>
  }
};

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}








/// In the render() method
