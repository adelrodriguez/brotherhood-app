import React from 'react';

const Input = field => {
  const {
    meta: { touched, error }
  } = field;

  let valid = touched ? error ? 'is-danger': 'is-success' : '';

  return (
    <div className="field">
      <div className="control">
        <label className="label" htmlFor={field.id}>
          {field.label}
        </label>{' '}
        <input
          className={`input ${valid}`}
          type={field.type}
          name={field.name}
          id={field.id}
          placeholder={field.placeholder}
          {...field.input}
          {...field}
        />
      </div>
      <p className="help is-danger">{touched ? error : ''}</p>
    </div>
  );
};

export default Input;
