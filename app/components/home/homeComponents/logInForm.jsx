import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class LogInForm extends Component {
  render() {
    return (
      <div>
        <h1>This is the login</h1>
      </div>
    )
  };
}

NavComponent.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
