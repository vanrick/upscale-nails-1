import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
// import {getUsers} from '../../../databaseUtilities/databaseRequests';
import { Button, Nav, NavItem, NavDropdown, MenuItem, Table } from 'react-bootstrap';
import $ from 'jquery';

export default class CurrentUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: 'hey'
    }
  }
  componentDidMount () {
    this.serverRequest = $.get('https://rocky-escarpment-34849.herokuapp.com/users', function (results) {
      console.log("hi there ", results);
      this.setState({
          users: users
        })
    }.bind(this))
  }

  componentWillUnmount () {
    this.serverRequest.abort();
  }





  render () {


    var usersArr = this.props.users;
    console.log("in the render ", usersArr);
    // for(var i=0; i < usersArr.length; i++) {
    //   console.log(usersArr[i])
    // }
    // var getUserInfo = usersArr.forEach(function(user) {
    //   console.log("yo buddy "+ usersArr)
    //     for(var joe in user) {
          // return(
          //   <CurrentUsers
          //     key={user[joe].id}
          //     firstName={user[joe].first_name}
          //     lastName={user[joe].last_name}
          //     email={user[joe].email}
          //     telephone={user[joe].telephone}
          //     isAdmin={user[joe].is_admin}
          //     isTech={user[joe].is_tech}
          //     notes={user[joe].notes} />
          // )
    //     }
    //   })

    return (
<div>
    <div>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
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
        <tbody>
          <tr>
          </tr>
        </tbody>
      </Table>
    </div>
    <p>{this.state.users}</p>
    </div>
    )

  }
}
