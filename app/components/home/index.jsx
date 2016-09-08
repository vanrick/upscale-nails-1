import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import NavComponent from './homeComponents/navbar';
// import CreateLogin from './homeComponents/createLogIn'
import SplashPage from './homeComponents/splashPage';

export default class Home extends Component {

// Import react
// Import all of the bootstrap components in the file that will be using it
// Create the class which is the folder that holds the file
// list all components that will be used on the index page

  render() {
    return (
    <div>
      <div>
        <NavComponent />
      </div>
      <div>
        <SplashPage />
      </div>
      <div>
      </div>
    </div>


    )
  };
}


// Home.contextTypes = {
//   router: React.PropTypes.object.isRequired,
// }
