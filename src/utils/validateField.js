import React from 'react';
import PropTypes from 'prop-types';

const validateField = ({
  input, placeholder, type, className, required, meta: { touched, error },
}) => (
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
);

validateField.propTypes = {
  input: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

validateField.defaultProps = {
  placeholder: '',
  type: 'text',
  className: '',
  required: false,
  meta: null,
};

export default validateField;
