import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, NavItem, NavDropdown, Form, FormGroup, FormControl, MenuItem, ControlLabel} from 'react-bootstrap';
import NavComponent from './navbar'
import cookie from 'react-cookie';

export default class CookieComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { userId: cookie.load('userId')};
  }

  onLogin(userId) {
    console.log('userId', userId);
    console.log("RICK");
    this.setState({ userId });
    cookie.save('userId', userId);
  }

  onLogout() {
    cookie.remove('userId', { path: '/' });
    /** Clear all cookies starting with 'session' (to get all cookies, omit regex argument) */
    Object.keys(cookie.select(/^session.*/i)).forEach(name => cookie.remove(name, { path: '/' }))
  }

  render() {
    return (
      <NavComponent onSuccess={this.onLogin.bind(this)} />
    );
  }
}
