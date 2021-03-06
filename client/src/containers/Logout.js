import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logout } from '../actions';

class Logout extends Component {
  componentWillMount() {
    this.props.logout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

export default connect(null, { logout })(Logout);