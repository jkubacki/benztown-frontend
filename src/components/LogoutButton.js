import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { logout } from 'actions/auth';

class LogoutButton extends React.Component {

  render() {
    const { logout } = this.props;

    return(
      <button onClick={logout} className="btn btn-sm btn-outline-dark">Logout</button>
    )
  }
}

export default compose(
  connect(
    null,
    { logout },
  ),
)(LogoutButton)
