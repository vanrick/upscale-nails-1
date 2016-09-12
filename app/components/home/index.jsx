import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import NavComponent from './homeComponents/navbar';
import ModalInstance from './homeComponents/createLogIn';
import UserReviews from './homeComponents/userReviews'
import GoogleMaps from './homeComponents/googleMaps'
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps"


export default class Home extends Component {


// Import react
// Import all of the bootstrap components in the file that will be using it
// Create the class which is the folder that holds the file
// list all components that will be used on the index page

  render() {

    return (
      <div>
         <script src="https://maps.googleapis.com/maps/api/js"></script>
        <NavComponent />
        <ModalInstance />
        <UserReviews
          pictures='pictures yo'
          img1='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRmfttjG1fKbycQzVYmoD4sTeK6Nx9cPbbYqxt2qqV9KABxwWEQ'
          img2='https://crimeandscienceradio.files.wordpress.com/2014/03/beatrice-yorker.jpg'
          img3='http://education.gsu.edu/files/2013/11/gertrude-tinker-sachs-300x3001-300x300.jpg'
          revw1='Nini was great! she really helped me find the right color for the right occasion. THANK YOU!'
          revw2='My husband hates it when my feet gets rough so the pedicure was much needed and the massage chair was a BONUS!'
          revw3='Never had a bad experience. I was in and out and on with my day.'
          />
        <GoogleMaps />
      </div>
    )
  };
}
