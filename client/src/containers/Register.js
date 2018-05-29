import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

// Components
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';

// Actions
import { createBrotherhood } from '../actions';

class Register extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    this.props.createBrotherhood(data, () => this.props.reset());
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <Header />
        <h1>Registrar Hermandad</h1>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="Nombre de la hermandad"
            name="name"
            type="text"
            id="nameInput"
            placeholder="Coloque el nombre de la hermandad"
            component={Input}
          />
          <Field
            label="Email"
            name="email"
            type="email"
            id="emailInput"
            placeholder="Coloque el email del responsable"
            component={Input}
          />
          <Field
            label="Fecha de creación"
            name="created"
            type="date"
            id="createdInput"
            placeholder="Fecha de creación de la hermandad"
            component={Input}
          />
          <Button text="Registrar" />
        </form>
      </div>
    );
  }
}

function validate(data) {
  const errors = {};
  const { name, email, created } = data;

  if (!name) {
    errors.name = 'Debes colocar un nombre';
  }

  if (!email) {
    errors.email = 'Debes colocar un email';
  }

  if (!created) {
    errors.created = 'Debes colocar una fecha';
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    alert: state.alert
  };
}

export default reduxForm({
  validate,
  form: 'register'
})(connect(mapStateToProps, { createBrotherhood })(Register));