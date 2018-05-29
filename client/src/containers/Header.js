import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { authenticated } = this.props;

    return (
      <header>
        {authenticated ? (
          <div>
            <Link to="/hermandades">Ver Listado</Link>
            <Link to="/logout">Salir</Link>
          </div>
        ) : (
          <Link to="/login">Ingresar</Link>
        )}
      </header>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
