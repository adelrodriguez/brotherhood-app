import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

// Components
import ListItem from '../components/ListItem';

// Actions
import { fetchBrotherhoods } from '../actions';

class List extends Component {
  componentDidMount() {
    this.props.fetchBrotherhoods();
  }

  renderBrotherhoods(brotherhoods) {
    return brotherhoods.map((brotherhood, index) => {
      return (
        <ListItem
          key={index}
          id={brotherhood.id}
          name={brotherhood.name}
          email={brotherhood.email}
          created={brotherhood.created}
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
              <th>#</th>
              <th>Hermandad</th>
              <th>Email</th>
              <th>Fecha de creación</th>              
            </tr>
          </thead>
          <tbody>
            {this.renderBrotherhoods(_.values(this.props.brotherhoods))}
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
