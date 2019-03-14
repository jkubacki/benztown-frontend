import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login as loginAction } from 'actions/auth';
import validateField from 'utils/validateField';

class LoginForm extends React.Component {
  handleSubmit = (values) => {
    const { login } = this.props;
    return login({
      username: values.email,
      password: values.password,
      rememberMe: values.remember,
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <Field
            label="email"
            placeholder="Enter email"
            name="email"
            type="email"
            component={validateField}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field
            label="password"
            placeholder="Enter password"
            name="password"
            type="password"
            component={validateField}
            className="form-control"
            required
          />
        </div>
        <div className="form-group form-check">
          <Field
            label="Remember me"
            type="checkbox"
            name="remember"
            component="input"
            className="form-check-input"
          />
          <label htmlFor="remember" className="form-check-label">Remember me</label>
        </div>
        <button type="submit" className="btn btn-outline-primary">Submit</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export { LoginForm as LoginFormUnwrapped };

export default compose(
  connect(
    null,
    { login: loginAction },
  ),
  reduxForm({
    form: 'login',
    initialValues: {
      remember: true,
    },
  }),
)(LoginForm);
