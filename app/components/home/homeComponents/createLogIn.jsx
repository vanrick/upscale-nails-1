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
      <div className="modal-container" style={{height: 400}}>
        <Button
          className="pull-right btn-danger"
          bsStyle="primary"
          bsSize="medium"
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
            <Form inline  className="pull-right">
             <FormGroup class="pull-left">
               <ControlLabel>Name</ControlLabel>
               {' '}
               <FormControl type="text" placeholder="Jane Doe" />
             </FormGroup>
             {' '}
             <FormGroup className="pull-right">
               <ControlLabel>Password</ControlLabel>
               {' '}
               <FormControl type="password" placeholder="password" />
             </FormGroup>
             {' '}
             <FormGroup>
               <ControlLabel>Email</ControlLabel>
               {' '}
               <FormControl type="email" placeholder="123@gmail.com" />
             </FormGroup>
             {' '}
             <FormGroup className="pull-right">
               <ControlLabel>Telephone Number</ControlLabel>
               {' '}
               <FormControl type="number" placeholder="999-999-9999" />
             </FormGroup>
             {' '}
           </Form>
         </Modal.Body>
         <Modal.Footer>
          <Button className="btn btn-danger" onClick={close}>Cancel</Button>
          <Button className="btn btn-info" type="submit">Submit</Button>
        </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// ModalInstance.contextTypes = {
//   router: React.PropTypes.object.isRequired,
// }
