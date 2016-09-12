import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
// import {getUsers} from '../../../databaseUtilities/databaseRequests';
import { Button, Nav, NavItem, NavDropdown, MenuItem, Table } from 'react-bootstrap';
import $ from 'jquery';

export default class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: 'hey',
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

  render () {
    if(this.state.ready === true){
    var usersArr = this.state.users;
    var arrayOfUserObj = [];
    var usersList = usersArr.map(function(row, i) {
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

      arrayOfUserObj.push(displayData);

      // var userRows = Object.keys(displayData).map(function(col, j){
      //   return (
      //     <td key={j}>{displayData[col]}</td>
      //   )
      // })
      //
      // return (
      //   <tr>{userRows}</tr>
      // )

        // console.log("HERE IS OUR OBJECT: ", displayData);
        // for(var key in row){
        //   console.log(key)
        //   return <td key={i}>{row[key]}</td>
        // }
    })
    // console.log({arrayOfUserObj});
    console.log("we're cookin");
    return this.props.onUserData(arrayOfUserObj);

    } else {
      return null
    }
  }
}
