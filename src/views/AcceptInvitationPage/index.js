import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { parse } from 'query-string';

import { acceptInvitation as acceptInvitationAction } from 'actions/auth';
import validateField from 'utils/validateField'

class AcceptInvitationPage extends React.Component {
  handleSubmit = (params) => {
    const { acceptInvitation } = this.props;
    return acceptInvitation(params);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <label htmlFor="password">Password</label>
        <div className="form-group">
          <Field
            label="password"
            placeholder="Set your password"
            name="password"
            type="password"
            component={validateField}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Accept Invitation</button>
      </form>
    );
  }
}

AcceptInvitationPage.propTypes = {
  acceptInvitation: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { location }) => {
  const invitationToken = parse(location.search).invitation_token;

  return {
    initialValues: { invitation_token: invitationToken },
  };
};

export { AcceptInvitationPage as AcceptInvitationPageUnwrapped };

export default compose(
  connect(
    mapStateToProps,
    { acceptInvitation: acceptInvitationAction },
  ),
  reduxForm({
    form: 'acceptInvitation',
  }),
)(AcceptInvitationPage);
