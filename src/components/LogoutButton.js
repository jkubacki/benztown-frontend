import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { logout } from 'actions/auth';

import './LogoutButton.css';

class LogoutButton extends React.Component {
  render() {
    const { logout } = this.props;

    return(
      <button onClick={logout} className="btn btn btn-outline-dark btn-block-sm">Logout</button>
    )
  }
}

export { LogoutButton }

export default compose(
  connect(
    null,
    { logout },
  ),
)(LogoutButton)
