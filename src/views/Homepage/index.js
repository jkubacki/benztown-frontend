import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import ClientState from 'constants/clientState';
import LoginForm from 'components/LoginForm';
import ElementList from 'components/ElementList';

function Homepage({ isLoggedIn }) {
  return (
    <>
      { isLoggedIn && <ElementList /> }
      { !isLoggedIn && <LoginForm /> }
    </>
  );
}

Homepage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export { Homepage as HomepageUnwrapped };

export default compose(
  connect(({ client }) => ({
    isLoggedIn: client.state === ClientState.LOGGED_IN,
  })),
)(Homepage);
