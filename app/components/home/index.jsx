import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem, Grid, Row, Col } from 'react-bootstrap';
import NavComponent from './homeComponents/navbar';
import ModalInstance from './homeComponents/createLogIn';
import Services from './homeComponents/services';
import AllProducts from './homeComponents/productsApiCall';
import UserReviews from './homeComponents/userReviews';
import SplashPage from './homeComponents/SplashPage';


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
        <SplashPage />

        <Services
          pictures='services pictures'
          img1='https://hd.unsplash.com/photo-1457972729786-0411a3b2b626'
          img2='https://hd.unsplash.com/photo-1440508319978-8b67875e39d7'
          img3='https://hd.unsplash.com/photo-1470259078422-826894b933aa'

          />
        <UserReviews
          pictures='review pictures'
          img1='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRmfttjG1fKbycQzVYmoD4sTeK6Nx9cPbbYqxt2qqV9KABxwWEQ'
          img2='https://hd.unsplash.com/photo-1462326569699-70dfd9103ec3'
          img3='https://hd.unsplash.com/photo-1468488718849-422a2a5efc03'
          revw1='Nini was great! she really helped me find the right color for the right occasion and my nails looked beautuful. THANK YOU!'
          revw2='My husband hates it when my feet get rough so the pedicure was much needed and the massage chair was a BONUS!'
          revw3='Always a great experience. I was in and out and on with my day looking beautiful.'
          />
      </div>
    )
  };
}
