import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import $ from 'jquery';


export default class AllProducts extends Component {

  constructor() {
    super();
    this.state = {
      products: ''
    };
  }
  componentDidMount () {
    var arr = []
    this.serverRequest = $.get('https://rocky-escarpment-34849.herokuapp.com/products', function (results) {
      for(var key in results){
        arr.push(results[key])
      }

      this.setState({
        arr: arr,
      })

    }.bind(this))
  }

  componentWillUnmount () {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div>
        {this.state.products}
      </div>
    );
  }
}
