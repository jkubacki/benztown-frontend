import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Field, reduxForm } from 'redux-form';
import { login } from 'actions/auth';

class LoginForm extends React.Component {

  handleSubmit = values =>
    this.props.login({
      username: values.email,
      password: values.password,
      rememberMe: values.remember,
    });

  render() {
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="form-group">
          <label>Email address</label>
          <Field
            label="email"
            placeholder="Enter email"
            name="email"
            type="email"
            component="input"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <Field
            label="password"
            placeholder="password"
            name="password"
            type="password"
            component="input"
            className="form-control"
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
          <label className="form-check-label">Remember me</label>
        </div>
        <button type="submit" className="btn btn-outline-primary">Submit</button>
      </form>
    )
  }
}

export default compose(
  connect(
    null,
    { login },
  ),
  withRouter,
  reduxForm({
    form: 'login',
    initialValues: {
      remember: true,
    },
  }),
)(LoginForm)
