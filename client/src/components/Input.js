import React from 'react';

const Input = field => {
  return (
    <div>
      <label htmlFor={field.id}>{field.label}</label>{' '}
      <input
        type={field.type}
        name={field.name}
        id={field.id}
        placeholder={field.placeholder}
        {...field.input}
      />
    </div>
  );
};

export default Input;