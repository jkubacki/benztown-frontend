import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import LogoutButton from 'components/LogoutButton'

import ClientState from 'constants/clientState'

function AppHeader({ isLoggedIn }) {
  return (
    <nav class="navbar navbar-light">
      <span class="navbar-brand">Benztown</span>
      {
        isLoggedIn &&
        <ul class="navbar-nav">
          <li class="nav-item">
            <LogoutButton />
          </li>
        </ul>
      }
    </nav>
  )
}

export default compose(
  connect(({ client }) => ({
    isLoggedIn: client.state === ClientState.LOGGED_IN,
  })),
)(AppHeader);
