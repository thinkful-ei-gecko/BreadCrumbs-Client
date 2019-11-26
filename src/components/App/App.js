import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import Landing from '../Landing/Landing'
import Header from '../Header/Header'
//import Login from '../Login/Login'
import LoginPage from '../../routes/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage'
import PublicRoute from '../../routes/PublicRoute'
import NotFoundPage from '../../routes/NotFoundPage'

export default class App extends Component {
  state = { hasError: false }
  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
  render() {
    return (
      <div>
          <header>
          <Header />
          </header>
          <main>
          <Switch>
          <Route exact path={'/'} component={Landing} />
          <PublicRoute path={'/login'} component={LoginPage}/>
          <PublicRoute path={'/signup'} component={RegistrationPage}/>
          <Route component={NotFoundPage} />
        </Switch> 
        </main>
      </div>
     
    )
  }
}