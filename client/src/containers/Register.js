import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import ReCAPTCHA from 'react-recaptcha';

import Header from './Header';
import Input from '../components/Input';
import Button from '../components/Button';
import Alert from './Alert';

// Actions
import { createBrotherhood } from '../actions';

let recaptchaInstance;

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = { robot: true };

    this.onSubmit = this.onSubmit.bind(this);
    this.onVerification = this.onVerification.bind(this);
  }

  onVerification() {
    this.setState({ robot: false });
  }

  onSubmit(data) {
    this.props.createBrotherhood(data, () => this.props.reset());
    recaptchaInstance.reset();
    this.setState({ robot: true });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="section">
        <div className="container">
          <Header />
          <div className="columns is-centered">
            <div className="column is-half">
              <h1 className="title">Registrar Hermandad</h1>
              <Alert />
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
                <div className="field">
                  <div className="control">
                    <ReCAPTCHA
                      ref={e => recaptchaInstance = e}
                      sitekey="6LfeQVwUAAAAANg7cHxbWUW_PpRcRN--pEpqJ2nj"
                      verifyCallback={this.onVerification}
                      hl="es"
                    />
                  </div>
                </div>
                <Button
                  disabled={this.state.robot}
                  className="is-primary is-outlined"
                  text="Registrar"
                />
              </form>
            </div>
          </div>
        </div>
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

export default reduxForm({
  validate,
  form: 'register'
})(connect(null, { createBrotherhood })(Register));
