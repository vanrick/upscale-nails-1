import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import CurrentUsers from './adminComponents/currentUsers';

export default class Admin extends Component {

  render() {
    return (
      <div>
        <CurrentUsers />
      </div>
    )
  };
}

Admin.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
