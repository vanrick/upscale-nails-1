import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import TableData from './childComponents/tableData';
import { Button, Nav, NavItem, NavDropdown, MenuItem, Table } from 'react-bootstrap';
import $ from 'jquery';
import Admin from '../index'

export default class CurrentUsers extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     users: 'hey',
  //     ready: false
  //   }
  // }
  // componentDidMount () {
  //   this.serverRequest = $.get('https://rocky-escarpment-34849.herokuapp.com/users', function (results) {
  //     this.setState({
  //         users: results,
  //         ready: true
  //       })
  //   }.bind(this))
  // }
  //
  // componentWillUnmount () {
  //   this.serverRequest.abort();
  // }

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
    // if(this.state.ready === true){
    // var usersArr = this.state.users;
    // // var arrayOfUserObj = [];
    // var usersList = usersArr.map(function(row, i) {
    //   // console.log(row)
    //   var displayData = {
      //   id: row.id,
      //   firstName: row.first_name,
      //   lastName: row.last_name,
      //   email: row.email,
      //   telephone: row.telephone,
      //   isAdmin: row.is_admin,
      //   isTech: row.is_tech,
      //   notes: row.notes
      // }
      // return displayData
      // arrayOfUserObj.push(displayData);



        // console.log("HERE IS OUR OBJECT: ", displayData);
        // for(var key in row){
        //   console.log(key)
        //   return <td key={i}>{row[key]}</td>
        // }
    // })
    // function formatDisplayData(usersArrOfObjects){
    //   console.log("this is my array of objects", usersArrOfObjects)
    //   usersArrOfObjects.map(function(user, i){
    //     console.log("This is each user Object", user)
    //     console.log("Hello")
    //     console.log(user.id);
    //
    //     var blah = `<tr><td>${user.id}</td><td>${user.firstName}</td><td>${user.lastName}</td><td>${user.email}</td><td>${user.telephone}</td><td>${user.isAdmin}</td><td>${user.isTech}</td><td>${user.notes}</td></tr>`
    //
    //
    //   })
    //   return blah
    //
    // }
    // console.log("the function results: ")
    // var foo = formatDisplayData(usersList)
    // console.log("foo is: ", {foo})
      // var userRows = arrayOfUserObj.map(function(col, j){
      //   var user = []
      //   for(var key in col) {
      //     user.push(`<td>${col[key]}</td>`)
      //   }
      //   return user
      // })
      //
      // var parseUsers = userRows.map(function(curr, i) {
      //   return <tr>{curr}</tr>
      // })

    // } else {
    //   return null
    // }
  }
}
