import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { parse } from 'query-string';

import { acceptInvitation } from 'actions/auth';
import validateField from 'utils/validateField'

class AcceptInvitationPage extends React.Component {
  handleSubmit = this.props.acceptInvitation;

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <label>Password</label>
        <div className="form-group">
          <Field
            label="password"
            placeholder="Set your password"
            name="password"
            type="password"
            component={validateField}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Accept Invitation</button>
      </form>
    );
  }
}

const mapStateToProps = (state, { location }) => {
  const { invitation_token } = parse(location.search);

  return {
    initialValues: { invitation_token },
  };
};

export default compose(
  connect(
    mapStateToProps,
    { acceptInvitation },
  ),
  reduxForm({
    form: 'acceptInvitation',
  }),
)(AcceptInvitationPage);
