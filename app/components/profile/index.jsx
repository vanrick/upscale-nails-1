import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem, Grid, Row, Col } from 'react-bootstrap';
import ShowAll from './userProfile/showAll';


export default class User extends Component {

  render() {
    return (
      <div>
        <ShowAll
          />
    </div>

    )
  };

}

User.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
