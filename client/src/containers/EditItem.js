import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import { editBrotherhood, deleteBrotherhood } from '../actions';

import Input from '../components/Input';
import Button from '../components/Button';

class EditItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  onSubmit(data) {
    this.props.editBrotherhood(this.state.id, data, () => {
      this.props.history.push('/hermandades');
    });
  }

  handleDelete() {
    this.props.deleteBrotherhood(this.state.id, () => {
      this.props.history.push('/hermandades');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h1>Editar Hermandad</h1>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="Nombre de la hermandad"
            name="name"
            type="text"
            id="nameInput"
            component={Input}
          />
          <Field
            label="Email"
            name="email"
            type="email"
            id="emailInput"
            component={Input}
          />
          <Field
            label="Fecha de creación"
            name="created"
            type="date"
            id="createdInput"
            component={Input}
          />
          <Button text="Guardar cambios" />
        </form>
        <Button text="Eliminar" handleClick={this.handleDelete} />{' '}
        <Link to="/hermandades">
          <Button text="Volver" />
        </Link>
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

function mapStateToProps(state, ownProps) {
  return {
    initialValues: state.brotherhoods[ownProps.match.params.id]
  };
}

export default compose(
  connect(mapStateToProps, { editBrotherhood, deleteBrotherhood }),
  reduxForm({
    validate,
    form: 'editItem',
    enableReinitialize: true
  })
)(EditItem);
