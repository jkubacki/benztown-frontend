import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import LogoutButton from 'components/LogoutButton'
import SearchForm from 'components/SearchForm'

import ClientState from 'constants/clientState'

import './AppHeader.css';

function AppHeader({ isLoggedIn }) {
  return (
    <div className="navbar">
      <ul className="navbar-nav nav-fill d-flex w-100 flex-md-row">
        <li className="nav-item">
          <span className="navbar-brand">Benztown</span>
        </li>
        {
          isLoggedIn &&
          <li className="nav-item">
            <SearchForm />
          </li>
        }
        {
          isLoggedIn &&
          <li className="nav-item">
            <LogoutButton />
          </li>
        }
      </ul>
    </div>
  )
}

export default compose(
  connect(({ client }) => ({
    isLoggedIn: client.state === ClientState.LOGGED_IN,
  })),
)(AppHeader);
