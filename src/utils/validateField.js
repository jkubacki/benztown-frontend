import React from 'react';

const validateField = ({ input, placeholder, type, className, required, meta: { touched, error } }) => (
  <div>
    <input
      {...input}
      placeholder={placeholder}
      type={type}
      required={required}
      className={className + (touched && error ? ' is-invalid' : '')}
    />
    <span className="invalid-feedback">{error}</span>
  </div>
)

export default validateField;
