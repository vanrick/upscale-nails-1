import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import CurrentMenu from './currentMenu';
import { Button, Nav, NavItem, NavDropdown, MenuItem, Table } from 'react-bootstrap';
import $ from 'jquery';

export default class MenuCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: '',
      ready: false
    }
  }
  componentDidMount () {
    this.serverRequest = $.get('https://rocky-escarpment-34849.herokuapp.com/products', function (results) {
      this.setState({
          items: results,
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
      <div menu-container>        
        <h2 className="menu-heading">Service Menu</h2>
        <Table className="menuTable">
          <thead>
            <tr>
              <th>Service</th>
              <th>Cost</th>
              <th>Description</th>
            </tr>
          </thead>
          <CurrentMenu howdy={this.state.items} />
        </Table>
      </div>
    )
  }else{
    return null
  }
  };
}
