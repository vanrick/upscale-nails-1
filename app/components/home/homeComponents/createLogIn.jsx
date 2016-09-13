import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import $ from 'jquery';

export default class ModalInstance extends Component{

 constructor(props){
   super(props);
   this.state = {
      first_name: '',
      last_name: '',
      password: '',
      email: '',
      telephone: '',
   }
   this.handleSubmit = this.handleSubmit.bind(this);
   this.setFirstName = this.setFirstName.bind(this);
   this.setLastName = this.setLastName.bind(this);
   this.setPassword = this.setPassword.bind(this);
   this.setEmail = this.setEmail.bind(this);
   this.setPhone = this.setPhone.bind(this);
 }
 setFirstName(e){
   this.setState({
     first_name: e.target.value
   })
 }
 setPhone(e){
   this.setState({
     telephone: e.target.value
   })
 }
 setLastName(e){
   this.setState({
     last_name: e.target.value
   })
 }
 setPassword(e){
   this.setState({
     password: e.target.value
   })
 }
 setEmail(e){
   this.setState({
     email: e.target.value
   })
 }
 handleSubmit(e){

   e.preventDefault()
   $.ajax({
     url: 'https://rocky-escarpment-34849.herokuapp.com/users',
     dataType: 'json',
     type: 'POST',
     data: this.state,
     success: function(userData) {
       this.setState({userData: userData});
     }.bind(this),
     error: function(xhr, status, err) {
     }.bind(this)
   });
 }

 render (){
   let close = () => this.setState({ show: false});
   return (
     <div className="modal-container">
       <Button
         className="pull-right btn-danger"
         bsStyle="primary"
         bsSize="small"
         onClick={() => this.setState({ show: true})}
       >
         Create New Account
       </Button>
       <Modal
         show={this.state.show}
         onHide={close}
         container={this}
         aria-labelledby="contained-modal-title"
         className="modal-bucket"
       >
         <Modal.Header closeButton>
           <Modal.Title id="contained-modal-title">New Customer Information</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <ControlLabel>First Name</ControlLabel>
              {' '}
              <FormControl type="text"  ref="first_name" placeholder="Jane" onChange={this.setFirstName}/>
            </FormGroup>
            {' '}
            <FormGroup>
              <ControlLabel>Last Name</ControlLabel>
              {' '}
              <FormControl type="text" ref="last_name" placeholder="Doe" onChange={this.setLastName}/>
            </FormGroup>
            {' '}
            <FormGroup>
              <ControlLabel>Password</ControlLabel>
              {' '}
              <FormControl type="password" ref="password" placeholder="password" onChange={this.setPassword}/>
            </FormGroup>
            {' '}
            <FormGroup>
              <ControlLabel>Email</ControlLabel>
              {' '}
              <FormControl type="email" ref="email" placeholder="123@gmail.com" onChange={this.setEmail}/>
            </FormGroup>
            {' '}
            <input className="btn btn-info button-margin" onClick={close} type="submit"/>
            <Button className="btn btn-danger" onClick={close}>Cancel</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
       </Modal.Footer>
       </Modal>
     </div>
   );
 }
}


ModalInstance.contextTypes = {
 router: React.PropTypes.object.isRequired,
}
