import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem, Grid, Row, Col } from 'react-bootstrap';
import NavComponent from './homeComponents/navbar';
import ModalInstance from './homeComponents/createLogIn';
import UserReviews from './homeComponents/userReviews'
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps"

import Services from './homeComponents/services';
import AllProducts from './homeComponents/productsApiCall';
import SplashPage from './homeComponents/SplashPage';
import App from './homeComponents/app';
import MenuCall from './homeComponents/menuCall';

import LocationSpacer from './homeComponents/LocationSpacer';
import Footer from './homeComponents/footer';
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
        <SplashPage />
        <Services
          pictures='services pictures'
          img1='https://hd.unsplash.com/photo-1457972729786-0411a3b2b626'
          img2='https://hd.unsplash.com/photo-1440508319978-8b67875e39d7'
          img3='https://hd.unsplash.com/photo-1470259078422-826894b933aa'

          />
        <MenuCall />
        <UserReviews
          pictures='review pictures'
          img1='https://hd.unsplash.com/photo-1465829284245-fc3c780208d5'
          img2='https://hd.unsplash.com/photo-1428624485403-3af063604a7a'
          img3='https://hd.unsplash.com/photo-1462326569699-70dfd9103ec3'
          revw1='Nini was great! she really helped me find the right color for the right occasion and my nails looked beautuful. Thank You!'
          revw2='I hate it when my feet get rough. The pedicure by the expert staff was much needed and the massage chair was a BONUS.'
          revw3='Always a great experience. I enjoy the atmosphere and the technicians. I was in and out and on with my day looking beautiful.'
          />

        <LocationSpacer />
        <Col className="pull-right">
            <div className="googleMap bottom-section-color">
              <App />
            </div>
        </Col>
        <Footer pictures="footer pictures"
          img1 = 'https://hd.unsplash.com/photo-1457972729786-0411a3b2b626'/>

      </div>
    )
  };

}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
