import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

// import {getUsers} from '../../../databaseUtilities/databaseRequests';
import { Button, Nav, NavItem, NavDropdown, MenuItem, Table, Grid, Row, Col } from 'react-bootstrap';
import $ from 'jquery';
import MenuCall from './menuCall';

export default class CurrentMenu extends Component {

  render () {
    var Rambo = this.props.howdy;
    var services = [];
    function getServices(item) {
      return item.product_type === "service";
    }
    var Lambo = Rambo.filter(getServices);

    console.log("Rambo is: ", Rambo);
    console.log("Lambo is: ", Lambo);

    var Zambo = Lambo.map(function(item, i) {
      return (
        <tr>
          <td>{item.name}</td>
          <td>${item.cost}0</td>
          <td>{item.description}</td>
        </tr>
      )
    })

    return(
      <tbody>{Zambo}</tbody>
    )
  }
}
