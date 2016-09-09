import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
// import {getUsers} from '../../../databaseUtilities/databaseRequests';
import { Button, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col } from 'react-bootstrap';
import $ from 'jquery';

export default class CurrentUsers extends Component {


  constructor() {
    super();
    this.state = {
      users: ''
    };
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
    return <div>
      <Grid>
    <Row className="show-grid">
      <Col md={12} className="text-center"><h1>All Users</h1></Col>
    </Row>
    <Row>
      <Col md={6} className="text-left"><h3>User Name: {this.state.users}</h3></Col>
    </Row>
    </Grid>


    </div>
  }
}
