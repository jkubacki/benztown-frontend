import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import Homepage from 'views/Homepage'
import './App.css';
import { Route } from 'components/navigation';

import {
  markAsLoggedIn as markAsLoggedInAction,
  markAsNotLoggedIn as markAsNotLoggedInAction
} from 'actions/auth';
import { getStorageItem} from 'utils';

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
          path="/"
          exact
          component={Homepage}
        />
        <Route
          path="/home"
          exact
          component={Homepage}
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
