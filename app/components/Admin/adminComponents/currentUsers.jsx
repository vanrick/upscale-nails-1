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
      var usersList = usersArr.forEach(function(row, i) {
        // console.log(row)
        var displayData = {
          id: row.id,
          firstName: row.first_name,
          lastName: row.last_name,
          email: row.email,
          telephone: row.telephone,
          isAdmin: row.is_admin,
          isTech: row.is_tech,
          notes: row.notes
        }
        console.log(usersList)
      }
    // return <tr>{usersList.firstName}</tr>
    }else{
      return null
    }
}
