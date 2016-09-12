import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem, Grid, Row, Col } from 'react-bootstrap';
import NavComponent from './homeComponents/navbar';
import ModalInstance from './homeComponents/createLogIn';
import Services from './homeComponents/services';
import AllProducts from './homeComponents/productsApiCall';
import UserReviews from './homeComponents/userReviews';
import SplashPage from './homeComponents/SplashPage';
import App from './homeComponents/app';
// import SimpleMap from './homeComponents/SimpleMap';


export default class Home extends Component {


// Import react
// Import all of the bootstrap components in the file that will be using it
// Create the class which is the folder that holds the file
// list all components that will be used on the index page

  render() {
    return (
      <div>


        <App />
    </div>

    )
  };
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
