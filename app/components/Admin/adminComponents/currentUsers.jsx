import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {getUsers} from '../../../databaseUtilities/databaseRequests';
import { Button, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


export default class CurrentUsers extends Component {


  constructor() {
    super()
    this.state = {users: []}
  }

  getUsers().then(function(users) {
    this.setState({users});
  });

  componentWillMount() {
    this.getUsers();
  }

  render() {
    const {users} = this.state
    return (
      <div>
        <ul className="list-unstyled">
          <li>{users[0]}</li>
        </ul>
        <h1>React is working</h1>
      </div>
    );
  }
}
