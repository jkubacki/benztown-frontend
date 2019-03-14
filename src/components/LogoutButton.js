import React from 'react';
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

export { LogoutButton };

export default compose(
  connect(
    null,
    { logout: logoutAction },
  ),
)(LogoutButton);
