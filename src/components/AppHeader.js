import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import LogoutButton from 'components/LogoutButton'
import SearchForm from 'components/SearchForm'

import ClientState from 'constants/clientState'

function AppHeader({ isLoggedIn }) {
  return (
    <nav className="navbar navbar-light">
      <span className="navbar-brand">Benztown</span>
      {
        isLoggedIn &&
        <ul className="navbar-nav">
          <li className="nav-item">
           <SearchForm />
          </li>
        </ul>
      }
      {
        isLoggedIn &&
        <ul className="navbar-nav">
          <li className="nav-item">
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
