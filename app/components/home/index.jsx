import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import NavComponent from './homeComponents/navbar';
import CreateLogin from './homeComponents/createLogin';


export default class Home extends Component {

// Import react
// Import all of the bootstrap components in the file that will be using it
// Create the class which is the folder that holds the file
// list all components that will be used on the index page

  render() {
    return (
      <div>
        <NavComponent />
        <CreateLogin />
      </div>
    )
  };
}


// Home.contextTypes = {
//   router: React.PropTypes.object.isRequired,
// }
