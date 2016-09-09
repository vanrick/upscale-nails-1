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
  componentDidMount() {
    this.serverRequest = $.get( 'https://rocky-escarpment-34849.herokuapp.com/products', function (results) {
      var allProducts = results.forEach(function(x) {
        var prodArr = [];
        for(var products in x){
          prodArr.push(x[products]);
        }
        // console.log(prodArr);
        return prodArr
      });

      this.setState({
        products: allProducts
      });
    }.bind(this));
  }

  componentWillUnmount() {
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
