import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import CurrentUsers from './currentUsers';
import { Button, Nav, NavItem, NavDropdown, MenuItem, Table } from 'react-bootstrap';
import $ from 'jquery';

export default class UserCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: '',
      ready: false
    }
  }
  componentDidMount () {
    this.serverRequest = $.get('https://rocky-escarpment-34849.herokuapp.com/users', function (results) {
      this.setState({
          users: results,
          ready: true
        })
    }.bind(this))
  }

  componentWillUnmount () {
    this.serverRequest.abort();
  }

  render() {
    if(this.state.ready === true){
    return (

      <div>

        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Telephone</th>
              <th>Admin?</th>
              <th>Tech?</th>
              <th>Notes</th>
            </tr>
          </thead>
          <CurrentUsers hey= {this.state.users} />
        </Table>
      </div>
    )
  }else{
    return null
  }
  };
}
