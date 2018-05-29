import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../components/Button';

import { deleteBrotherhood } from '../actions';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { options: false };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState({ options: !this.state.options });
  }

  render() {
    const { options } = this.state;
    const { id, name, email, created } = this.props;

    return (
      <tr onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{created}</td>
        <td>
          {options && (
            <Link to={`/hermandades/${id}/edit`}>
              <Button text="Editar" />
            </Link>
          )}
        </td>
      </tr>
    );
  }
}

export default connect(null, { deleteBrotherhood })(ListItem);
