import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { authenticated } = this.props;

    return (
      <nav className="navbar" aria-label="main navigation">
        <div class="navbar-menu">
          <div className="navbar-end">
            {authenticated ? (
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <Link className="button" to="/hermandades">
                      Ver Listado
                    </Link>
                  </p>
                  <p className="control">
                    <Link className="button" to="/logout">
                      Salir
                    </Link>    
                  </p>
                </div>
              </div>
            ) : (
              <div className="navbar-item">
                <Link className="button" to="/login">
                  Ingresar
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
