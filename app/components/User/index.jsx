import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem, Grid, Row, Col } from 'react-bootstrap';
import UserAppts from './userProfile/showAll';
import UserShow from './userProfile/userAll'


export default class User extends Component {

  render() {
    return (
      <div>
        <UserAppts
         name='WORKS'
         img='http://babyinfoforyou.com/wp-content/uploads/2014/10/avatar-300x300.png'
          />
        <UserShow />
      </div>

    )
  };

}

User.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
