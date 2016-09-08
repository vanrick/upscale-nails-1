import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import NavComponent from './homeComponents/navbar';
import ModalInstance from './homeComponents/createLogIn';



export default class Home extends Component {

// Import react
// Import all of the bootstrap components in the file that will be using it
// Create the class which is the folder that holds the file
// list all components that will be used on the index page

  render() {

    return (
      <div>
        <NavComponent />
        <ModalInstance />
      </div>
    )
  };
}









/// In the render() method

// Home.contextTypes = {
//   router: React.PropTypes.object.isRequired,
// }
