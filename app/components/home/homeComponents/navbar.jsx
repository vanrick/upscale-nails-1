import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, NavItem, NavDropdown, Form, FormGroup, FormControl, MenuItem, ControlLabel} from 'react-bootstrap';
import CookieComponent from './cookieComponent';
import { onLogin, onLogout } from './cookieComponent';
import cookie from 'react-cookie';


export default class NavComponent extends Component {

  constructor(props) {
    super(props);
    this.state =  { userId: cookie.load('userId') };
  }

  onSubmit() {
    this.props.onSuccess(document.querySelector('#email').value);
  }

  render() {
    if(document.cookie.split("=")[0] !== "userId") {
    return (
      <div id="top">
        <Nav className="nav-position nav-main" bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
          <NavItem className="nav-bar-text" eventKey="Home" href="#top">Home</NavItem>
          <NavItem className="nav-bar-text" eventKey="Services" href="#services">Services</NavItem>
          <NavItem className="nav-bar-text" eventKey="About Us" href="#about">About Us</NavItem>
          <NavDropdown  className="nav-bar-text" eventKey="4" title="Contact" id="nav-dropdown">
            <MenuItem eventKey="4.1" href="#map"> Map </MenuItem>
            <MenuItem eventKey="4.2" href="#hours">Hours & Location</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4.3" href="https://www.facebook.com/Upscale-Nails-1029696537094258/">Facebook</MenuItem>
            <MenuItem eventKey="4.4" href="https://www.yelp.com/biz/upscale-nails-fort-myers">Yelp</MenuItem>
          </NavDropdown>

          <Form inline  className="pull-right" onSubmit={this.onSubmit.bind(this)}>
           <FormGroup controlId="formInlineName">
             <ControlLabel className="nav-form-text">Email</ControlLabel>
             {' '}
             <FormControl className="nav-form-text" type="email" id="email" placeholder="UpscaleNails@gmail.com" />
           </FormGroup>
           {' '}
           <FormGroup controlId="formInlineEmail">
             <ControlLabel className="nav-form-text">Password</ControlLabel>
             {' '}
             <FormControl className="nav-form-text" type="password" placeholder="password" />
           </FormGroup>
           {' '}
           <Button className="btn btn-info nav-form-text" type="submit">
             Submit
           </Button>
         </Form>
        </Nav>
  </div>
    )
  } else {
    return (
    <div id="top">
      <Nav className="nav-position nav-main" bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
        <NavItem className="nav-bar-text" eventKey="Home" href="#top">Home</NavItem>
        <NavItem className="nav-bar-text" eventKey="Services" href="#services">Services</NavItem>
        <NavItem className="nav-bar-text" eventKey="About Us">About Us</NavItem>
        <NavDropdown  className="nav-bar-text" eventKey="4" title="Contact" id="nav-dropdown">
          <MenuItem eventKey="4.1">Hours & Location</MenuItem>
          <MenuItem eventKey="4.2">Directions</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.3">Facebook</MenuItem>
          <MenuItem eventKey="4.4">Yelp</MenuItem>
        </NavDropdown>
        
        <Button className="btn btn-info nav-form-text" type="submit">
           Logout
         </Button>

      </Nav>
    </div>
    )
  }

  };
}
