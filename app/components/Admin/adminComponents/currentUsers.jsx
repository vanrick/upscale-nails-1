import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

// import {getUsers} from '../../../databaseUtilities/databaseRequests';
import { Button, Nav, NavItem, NavDropdown, MenuItem, Table, Grid, Row, Col } from 'react-bootstrap';
import $ from 'jquery';
import UserCall from './userCall'

export default class CurrentUsers extends Component {

  render () {
    var Nambo = this.props.hey;
    

    var Mambo = Nambo.map(function(user, i) {
      return (
        <tr>
          <td>{user.id}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>{user.email}</td>
          <td>{user.telephone}</td>
          <td>{user.is_admin}</td>
          <td>{user.is_tech}</td>
          <td>{user.notes}</td>
        </tr>
      )
    })
    console.log(Mambo);
    console.log(Nambo);
    return(
      <tbody>{Mambo}</tbody>
    )
  }
}
