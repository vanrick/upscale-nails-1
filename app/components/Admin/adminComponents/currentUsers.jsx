import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
// import {getUsers} from '../../../databaseUtilities/databaseRequests';
import { Button, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import $ from 'jquery';

export default class CurrentUsers extends Component {


  constructor() {
    super();
    this.state = {
      users: ''
    }
  }
  componentDidMount () {
    this.serverRequest = $.get('https://rocky-escarpment-34849.herokuapp.com/users', function (results) {
      log: results => {
        console.log("results:", results);
      }
      this.setState({
        users: results[0].first_name.toString()
      })
    }.bind(this))
  }

  componentWillUnmount () {
    this.serverRequest.abort();
  }


  render () {
    return <div>{this.state.users}</div>
  }

}
