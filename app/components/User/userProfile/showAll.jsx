import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import UserApptCall from './showApptsCall';
import { Button, A, Grid, Row, Col, Nav, NavItem, NavDropdown, MenuItem, Table } from 'react-bootstrap';
import $ from 'jquery';

 export default class UserAppts extends Component {
   constructor(props) {
     super(props);
     this.state = {
       appointments: '',
       ready: false
     }
   }
   componentDidMount () {
     this.serverRequest = $.get(`https://rocky-escarpment-34849.herokuapp.com/users/${document.cookie.split("=")[1]}/appointments`, function (results) {
       this.setState({
           appointments: results,
           ready: true
         })
     }.bind(this))
   }

   componentWillUnmount () {
     this.serverRequest.abort();
   }

   render() {
     var { name, img } = this.props

     if(this.state.ready === true){
       return (
         <UserApptCall bingBong={this.state.appointments}/>
       )
     }else{
       return null
   }
 }
}
