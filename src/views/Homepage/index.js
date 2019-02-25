import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import ClientState from 'constants/clientState'
import LoginForm from 'components/LoginForm'
import ElementList from 'components/ElementList'

function Homepage({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn && <ElementList />}
      {!isLoggedIn && <LoginForm />}
    </div>
  )
}

export default compose(
  withRouter,
  connect(({ client }) => ({
    isLoggedIn: client.state === ClientState.LOGGED_IN,
  })),
)(Homepage);
