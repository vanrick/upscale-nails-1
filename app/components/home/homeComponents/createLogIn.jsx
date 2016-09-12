import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import $ from 'jquery';

export default class ModalInstance extends Component{
  constructor(props){
    super(props);
    this.state = {
     show: false,
     first_name: '',
     last_name: '',
     password: '',
     email: '',
     phone: '',

  }
  this.setFirstName = this.setFirstName.bind(this);
  this.setLastName = this.setLastName.bind(this);
  this.setPassword = this.setPassword.bind(this);
  this.setEmail = this.setEmail.bind(this);
  this.setPhone = this.setPhone.bind(this);

}
setFirstName(e){
  console.log("First")
  console.log(e)
  this.setState({
    show: true,
    first_name: e.target.value
  })
  console.log(this.state);
}
setPhone(e){
  console.log("Phone")
  console.log(e)
  this.setState({
    show: true,
    phone: e.target.value
  })
  console.log(this.state);
}
setLastName(e){
  console.log("Last")
  console.log(e)
  this.setState({
    show: true,
    last_name: e.target.value
  })
  console.log(this.state);
}
setPassword(e){
  console.log("Password")
  console.log(e)
  this.setState({
    show: true,
    password: e.target.value
  })
  console.log(this.state);
}
setEmail(e){
  console.log("Email")
  console.log(e)
  this.setState({
    show: true,
    email: e.target.value
  })
  console.log(this.state);
}
handleSubmit(event){
  event.preventDefault();
  console.log(state)

  // $.ajax({
  //   url: 'https://rocky-escarpment-34849.herokuapp.com/users',
  //   dataType: 'json',
  //   type: 'POST',
  //   data: newUserData,
  //   success: function(userData) {
  //     this.setState({userData: userData});
  //   }.bind(this),
  //   error: function(xhr, status, err) {
  //     console.error(this.props.url, status, err.toString());
  //   }.bind(this)
  // });
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
               <FormControl type="text" placeholder="Jane" onChange={this.setFirstName}/>
             </FormGroup>
             {' '}
             <FormGroup>
               <ControlLabel>Last Name</ControlLabel>
               {' '}
               <FormControl type="text" placeholder="Doe" onChange={this.setLastName}/>
             </FormGroup>
             {' '}
             <FormGroup>
               <ControlLabel>Password</ControlLabel>
               {' '}
               <FormControl type="password" placeholder="password" onChange={this.setPassword}/>
             </FormGroup>
             {' '}
             <FormGroup>
               <ControlLabel>Email</ControlLabel>
               {' '}
               <FormControl type="email" placeholder="123@gmail.com" onChange={this.setEmail}/>
             </FormGroup>
             {' '}
             <FormGroup>
               <ControlLabel>Telephone Number</ControlLabel>
               {' '}
               <FormControl type="number" placeholder="999-999-9999" onChange={this.setPhone}/>
             </FormGroup>
             {' '}
             <input className="btn btn-info" type="submit" value="Submit"/>
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
