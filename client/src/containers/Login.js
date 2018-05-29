import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';

import { login } from '../actions';

import Input from '../components/Input';
import Button from '../components/Button';

class Login extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    this.props.login(data, () => {
      this.props.history.push('/hermandades');
    });
  }

  render() {
    const { handleSubmit, authenticated } = this.props;

    // If user is already authenticated, skip login form
    if (authenticated) {
      return <Redirect to="/hermandades" />;
    }

    return (
      <div>
        <h1>Ingresar a plataforma</h1>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="Usuario"
            name="username"
            type="text"
            id="usernameInput"
            placeholder="Coloque su usuario"
            component={Input}
          />
          <Field
            label="Contraseña"
            name="password"
            type="password"
            id="passwordInput"
            placeholder="Coloque su contraseña"
            component={Input}
          />
          <Button text="Ingresar" />
        </form>
        <Link to="/">
          <Button text="Volver" />
        </Link>
      </div>
    );
  }
}

function validate(data) {
  const errors = {};
  const { username, password } = data;

  if (!username) {
    errors.username = 'Por favor coloque un usuario';
  }

  if (!password) {
    errors.password = 'Por favor coloque una contraseña';
  }

  return errors;
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default reduxForm({
  validate,
  form: 'login'
})(connect(mapStateToProps, { login })(Login));
