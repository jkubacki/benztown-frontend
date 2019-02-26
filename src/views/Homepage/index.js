import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import ClientState from 'constants/clientState'
import LoginForm from 'components/LoginForm'
import ElementList from 'components/ElementList'

function Homepage({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn && <ElementList />}
      {!isLoggedIn && <LoginForm />}
    </>
  )
}

export { Homepage }

export default compose(
  connect(({ client }) => ({
    isLoggedIn: client.state === ClientState.LOGGED_IN,
  })),
)(Homepage);
