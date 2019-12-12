import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LandingPageRoute from '../../routes/LandingPageRoute/LandingPageRoute';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import HomePage from '../../routes/HomePage/HomePage';
import PublicRoute from '../../routes/PublicRoute/PublicRoute';
import PrivateRoute from '../../routes/PrivateRoute/PrivateRoute';
import UserPage from '../UserPage/UserPage';
import SavedArticles from '../SavedArticles/SavedArticles'
import Comments from '../Comments/Comments'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import './App.css'

export default class App extends Component {
 
  render() {
    return (
      <>
        <Header />
        <main id='middle'>
          <Switch>
            <Route exact path={'/'} component={LandingPageRoute} />
            <PublicRoute exact path={'/login'} component={LoginPage}/>
            <PublicRoute exact path={'/register'} component={RegistrationPage}/>
            <PrivateRoute exact path={'/home'} component={HomePage}/>
            <PrivateRoute exact path={'/userpage'} component={UserPage}/>
            <PrivateRoute exact path={'/savedarticles'} component={SavedArticles}/>
            <PrivateRoute exact path={'/comments'} component={Comments}/>
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <Footer />
      </>
    )
  }
}
     
