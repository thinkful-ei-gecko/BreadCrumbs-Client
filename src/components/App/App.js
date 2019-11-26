import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LandingPageRoute from '../../routes/LandingPageRoute/LandingPageRoute';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import HomePage from '../../routes/HomePage/HomePage';
import PublicRoute from '../../routes/PublicRoute/PublicRoute';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';

export default class App extends Component {
 
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path={'/'} component={LandingPageRoute} />
            <PublicRoute path={'/login'} component={LoginPage}/>
            <PublicRoute path={'/register'} component={RegistrationPage}/>
            <Route path={'/home'} component={HomePage}/>
            <Route component={NotFoundPage} />
          </Switch>
        <footer>
          <Footer />
        </footer>
        </main>
      </>
    )
  }
}
     
