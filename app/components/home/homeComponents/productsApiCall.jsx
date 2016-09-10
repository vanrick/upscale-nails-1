import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
// import {getUsers} from '../../../databaseUtilities/databaseRequests';

import { Button, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col } from 'react-bootstrap';
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
    this.serverRequest = $.get('https://rocky-escarpment-34849.herokuapp.com/products', function (results) {
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
        return
          <Grid>
            <Row className="show-grid">
              <Col md={6} mdPush={6} className="text-right">{name.name}</Col>
              <Col md={6} mdPull={6}>Hello! 1</Col>
            </Row>
          </Grid>
      })
    return <tr>{usersList}</tr>
    }else{
      return null
    }
  }
}
