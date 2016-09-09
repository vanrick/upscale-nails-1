import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import CurrentUsers from './adminComponents/currentUsers';
import AdminNav from './adminComponents/adminNav';

export default class Admin extends Component {

  render() {
    return (
      <div>
        <AdminNav />
        <CurrentUsers />
      </div>
    )
  };
}

Admin.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
