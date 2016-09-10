import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem, Grid, Row, Col } from 'react-bootstrap';
import NavComponent from './homeComponents/navbar';
import ModalInstance from './homeComponents/createLogIn';
import Services from './homeComponents/services';
import AllProducts from './homeComponents/productsApiCall'

export default class Home extends Component {

  render() {
    return (
      <div>
        <NavComponent />
        <ModalInstance />
        <Services />



      </div>
    )
  };
}
