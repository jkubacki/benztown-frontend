import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import Homepage from 'views/Homepage'
import AcceptInvitationPage from 'views/AcceptInvitationPage'
import { Route } from 'components/navigation';

import {
  markAsLoggedIn as markAsLoggedInAction,
  markAsNotLoggedIn as markAsNotLoggedInAction
} from 'actions/auth';
import { getStorageItem} from 'utils';
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
      <div>
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
      </div>
    );
  }
}

export default compose(
  connect(
    null,
    {
      markAsLoggedIn: markAsLoggedInAction,
      markAsNotLoggedIn: markAsNotLoggedInAction
    },
  ),
  withRouter,
)(App);
