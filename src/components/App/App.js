import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import Header from '../Header/Header'
import LandingPageRoute from '../../routes/LandingPageRoute/LandingPageRoute';
import LoginPage from '../../routes/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage'
import PublicRoute from '../../routes/PublicRoute'
import NotFoundPage from '../../routes/NotFoundPage'

export default class App extends Component {
 
  render() {
    return (
      <div>
          <header>
          <Header />
          </header>
          <main>
          <Switch>
          <Route exact path={'/'} component={LandingPageRoute} />
          <PublicRoute path={'/login'} component={LoginPage}/>
          <PublicRoute path={'/register'} component={RegistrationPage}/>
          <Route component={NotFoundPage} />
        </Switch> 
        </main>
      </div>
    )
  }
}
     
