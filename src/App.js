import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Homepage from 'views/Homepage';
import AcceptInvitationPage from 'views/AcceptInvitationPage';
import AppHeader from 'components/AppHeader';
import { Route } from 'components/navigation';
import { Switch } from 'react-router';

import {
  markAsLoggedIn as markAsLoggedInAction,
  markAsNotLoggedIn as markAsNotLoggedInAction,
} from 'actions/auth';
import { getStorageItem } from 'utils';
import { getRootPath, getAcceptInvitationPath } from './constants/paths';

class App extends Component {
  componentWillMount() {
    this.updateClientStatus();
  }

  updateClientStatus() {
    const { markAsLoggedIn, markAsNotLoggedIn } = this.props;
    const token = getStorageItem('token');
    if (token) {
      markAsLoggedIn();
    } else {
      markAsNotLoggedIn();
    }
  }

  render() {
    return (
      <div className="container">
        <AppHeader />
        <Switch>
          <Route
            path={getRootPath()}
            exact
            component={Homepage}
          />
          <Route
            path={getAcceptInvitationPath()}
            exact
            component={AcceptInvitationPage}
          />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  markAsLoggedIn: PropTypes.func.isRequired,
  markAsNotLoggedIn: PropTypes.func.isRequired,
};

export { App as AppUnwrapped };

export default compose(
  connect(
    null,
    {
      markAsLoggedIn: markAsLoggedInAction,
      markAsNotLoggedIn: markAsNotLoggedInAction,
    },
  ),
)(App);
