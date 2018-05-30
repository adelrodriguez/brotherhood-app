import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clearAlert } from '../actions';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUnmount() {
    this.props.clearAlert();
  }

  handleClick() {
    this.props.clearAlert();
  }

  render() {
    const { alerts } = this.props;

    if (!alerts.message) { return null }

    return (
      <div className={`notification ${alerts.class}`}>
        <button onClick={this.handleClick} className="delete" />
        {alerts.message}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { alerts: state.alerts };
}

export default connect(mapStateToProps, { clearAlert })(Alert);
