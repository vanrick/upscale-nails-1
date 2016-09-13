import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem, Grid, Row, Col } from 'react-bootstrap';
import TechnicianProfile from './technicianProfile/technician';


export default class Technician extends Component {

  render() {
    return (
      <div>
        <TechnicianProfile
         name='WORKS'
         img='http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-D4-icon.png'
          />
      </div>

    )
  };

}

Technician.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
