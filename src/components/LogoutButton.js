import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { logout } from 'actions/auth';

class LogoutButton extends React.Component {

  render() {
    const { logout } = this.props;

    return(
      <a class="nav-link" onClick={logout}>Logout</a>
    )
  }
}

export default compose(
  connect(
    null,
    { logout },
  ),
)(LogoutButton)
