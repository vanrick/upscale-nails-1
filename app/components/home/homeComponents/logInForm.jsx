import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, FormControl, MenuItem, ControlLabel } from 'react-bootstrap';

export default class LogInForm extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-primary"></button>
  <Form inline>
   <FormGroup controlId="formInlineName">
     <ControlLabel>Name</ControlLabel>
     {' '}
     <FormControl type="text" placeholder="Jane Doe" />
   </FormGroup>
   {' '}
   <FormGroup controlId="formInlineEmail">
     <ControlLabel>Password</ControlLabel>
     {' '}
     <FormControl type="password" placeholder="password" />
   </FormGroup>
   {' '}
   <Button type="submit">
     Submit
   </Button>
 </Form>

      </div>
    )
  };
}

// NavComponent.contextTypes = {
//   router: React.PropTypes.object.isRequired,
// }
LogInForm.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
