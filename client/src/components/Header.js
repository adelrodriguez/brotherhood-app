import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <NavLink to="/">Registrar</NavLink>
        <NavLink to="/hermandades">Listado</NavLink>
        This is the header
      </header>
    );
  }
}

export default Header;