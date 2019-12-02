import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LandingPageRoute from '../../routes/LandingPageRoute/LandingPageRoute';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import HomePage from '../../routes/HomePage/HomePage';
import PublicRoute from '../../routes/PublicRoute/PublicRoute';
import PrivateRoute from '../../routes/PublicRoute/PublicRoute';
import UserPage from '../UserPage/UserPage';
import SavedArticles from '../SavedArticles/SavedArticles'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import './App.css'

export default class App extends Component {
 
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main id='middle'>
          <Switch>
            <Route exact path={'/'} component={LandingPageRoute} />
            <PublicRoute path={'/login'} component={LoginPage}/>
            <PublicRoute path={'/register'} component={RegistrationPage}/>
            <PrivateRoute path={'/home'} component={HomePage}/>
            <Route path={'/userpage'} component={UserPage}/>
            <Route path={'/savedarticles'} component={SavedArticles}/>
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    )
  }
}
     
