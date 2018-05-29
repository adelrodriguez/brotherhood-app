import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

// Components
import ListItem from '../containers/ListItem';

// Actions
import { fetchBrotherhoods } from '../actions';

class List extends Component {
  componentDidMount() {
    this.props.fetchBrotherhoods();
  }

  renderBrotherhoods(brotherhoods) {
    return brotherhoods.map((brotherhood, index) => {
      const { id, name, email, created, place } = brotherhood;

      return (
        <ListItem
          key={`${index}.${id}`}
          id={id}
          name={name}
          email={email}
          created={created}
          place={place}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Hermandad</th>
              <th>Email</th>
              <th>Fecha de creación</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderBrotherhoods(_.sortBy(this.props.brotherhoods, 'place'))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { brotherhoods: state.brotherhoods };
}

export default connect(mapStateToProps, { fetchBrotherhoods })(List);
