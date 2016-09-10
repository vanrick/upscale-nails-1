import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
// import {getUsers} from '../../../databaseUtilities/databaseRequests';

import { Button, Nav, NavItem, NavDropdown, MenuItem, Table } from 'react-bootstrap';
import $ from 'jquery';


export default class CurrentUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: 'hey',
      ready: false
    }
  }
  componentDidMount () {
    this.serverRequest = $.get('https://rocky-escarpment-34849.herokuapp.com/users', function (results) {
      console.log("from the top: ", results);
      this.setState({
          users: results,
          ready: true
        })
    }.bind(this))
    console.log("hello from the top: ", this.state.users);
  }

  componentWillUnmount () {
    this.serverRequest.abort();
  }

  render () {
    if(this.state.ready === true){
    var usersArr = this.state.users;
    console.log("in the render ", usersArr);

    var usersList = usersArr.map(function(name) {
        return <td>{name.first_name}</td>
      })
    return <tr>{usersList}</tr>
    }else{
      return null
    }
  }
}
