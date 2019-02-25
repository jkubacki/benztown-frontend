import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import ClientState from 'constants/clientState'

function AppHeader({ isLoggedIn }) {
  return (
    <nav class="navbar navbar-light">
      <span class="navbar-brand">Benztown</span>
      {
        isLoggedIn &&
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Logout</a>
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
