import React, { Component } from 'react';

import Homepage from 'views/Homepage'
import './App.css';
import { Route } from 'components/navigation';

class App extends Component {
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

export default App;
