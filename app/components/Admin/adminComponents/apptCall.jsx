import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import CurrentAppts from './currentAppts';
import { Button, Nav, NavItem, NavDropdown, MenuItem, Table } from 'react-bootstrap';
import $ from 'jquery';

export default class ApptCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: '',
      ready: false
    }
  }
  componentDidMount () {
    this.serverRequest = $.get('https://rocky-escarpment-34849.herokuapp.com/appointments', function (results) {
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
    if(this.state.ready === true){
    return (

      <div>

        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Technician</th>
              <th>Service</th>
              <th>Status</th>
              <th>Notes</th>
              <th>Start</th>
              <th>End</th>
            </tr>
          </thead>
          <CurrentAppts hello={this.state.appointments} />
        </Table>
      </div>
    )
  }else{
    return null
  }
  };
}
