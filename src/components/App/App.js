import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPageRoute from '../../routes/LandingPageRoute/LandingPageRoute';

export default class App extends Component {
  render() {
    return (
      <main className='App'>
        <Switch>
          <Route 
            exact
            path={'/'}
            component={LandingPageRoute}
          />
        </Switch>
      </main>
    )
  }
}