import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import ListItem from '../containers/ListItem';
import Header from '../containers/Header';
import Alert from './Alert';

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
      <div className="section">
        <div className="container">
          <Header />
          <div className="columns is-centered">
            <div className="column is-three-quarters">
              <Alert />
              <table className="table is-hoverable is-fullwidth">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Hermandad</th>
                    <th>Email</th>
                    <th>Fecha de creación</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderBrotherhoods(
                    _.sortBy(this.props.brotherhoods, 'place')
                  )}
                </tbody>
              </table>            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { brotherhoods: state.brotherhoods };
}

export default connect(mapStateToProps, { fetchBrotherhoods })(List);
