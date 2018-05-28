import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

// Components
import InputField from '../components/InputField';

// Actions
import { createBrotherhood } from '../actions';

class Register extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    console.log(data);
    this.props.reset();
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h1>Registrar Hermandad</h1>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="Nombre de la hermandad"
            name="name"
            type="text"
            id="nameInput"
            placeholder="Coloque el nombre de la hermandad"
            component={InputField}
          />
          <Field
            label="Email"
            name="email"
            type="email"
            id="emailInput"
            placeholder="Coloque el email del responsable"
            component={InputField}
          />
          <Field
            label="Fecha de creación"
            name="created"
            type="date"
            id="createdInput"
            placeholder="Fecha de creación de la hermandad"
            component={InputField}
          />
          <button>Registrar</button>
        </form>
      </div>
    );
  }
}

function validate(data) {
  const errors = {};

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
