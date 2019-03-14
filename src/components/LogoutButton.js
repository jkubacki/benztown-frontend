import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logout as logoutAction } from 'actions/auth';

import './LogoutButton.css';

function LogoutButton({ logout }) {
  return (
    <button type="button" onClick={logout} className="btn btn btn-outline-dark btn-block-sm">
      Logout
    </button>
  );
}

LogoutButton.propTypes = {
  logout: PropTypes.func.isRequired,
};

export { LogoutButton as LogoutButtonUnwrapped };

export default compose(
  connect(
    null,
    { logout: logoutAction },
  ),
)(LogoutButton);
