import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LandingPageRoute from '../../routes/LandingPageRoute/LandingPageRoute';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import PublicRoute from '../../routes/PublicRoute/PublicRoute';
import UserPage from '../UserPage/UserPage';
import Savedarticles from '../SavedArticles/SavedArticles'
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
            <Route path={'/userpage'} component={UserPage}></Route>
            <Route path={'/savedarticles'} component={Savedarticles}></Route>
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
     
