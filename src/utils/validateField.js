import React from 'react';

const validateField = ({ input, placeholder, type, className, meta: { touched, error } }) => (
  <div>
    <input
      {...input}
      placeholder={placeholder}
      type={type}
      className={className + (touched && error ? ' is-invalid' : '')}
    />
    <span className="invalid-feedback">{error}</span>
  </div>
)

export default validateField;
