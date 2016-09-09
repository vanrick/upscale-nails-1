import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

export default class ModalInstance extends Component{
  constructor(){
    super();
    this.state = {
     show: false
  };
}
  render (){
    let close = () => this.setState({ show: false});

    return (
      <div className="modal-container" style={{height: 500}}>
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
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">New Customer Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
             <FormGroup>
               <ControlLabel>First Name</ControlLabel>
               {' '}
               <FormControl type="text" placeholder="Jane" />
             </FormGroup>
             {' '}
             <FormGroup>
               <ControlLabel>Last Name</ControlLabel>
               {' '}
               <FormControl type="text" placeholder="Doe" />
             </FormGroup>
             {' '}
             <FormGroup>
               <ControlLabel>Email</ControlLabel>
               {' '}
               <FormControl type="email" placeholder="123@gmail.com" />
             </FormGroup>
             {' '}
             <FormGroup>
               <ControlLabel>Password</ControlLabel>
               {' '}
               <FormControl type="password" placeholder="password" />
             </FormGroup>
             {' '}
             <FormGroup>
               <ControlLabel>Telephone Number</ControlLabel>
               {' '}
               <FormControl type="number" placeholder="999-999-9999" />
             </FormGroup>
             {' '}
             <button className="btn btn-info">Submit</button>
             <button className="btn btn-danger">Cancel</button>
           </Form>
         </Modal.Body>
       </Modal>
      </div>
    );
  }
}

ModalInstance.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
