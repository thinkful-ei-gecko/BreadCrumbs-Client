import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App';
import { UserAndArticlesProvider }  from './contexts/UserAndArticlesContext';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faNewspaper, faBreadSlice, faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faNewspaper, faBreadSlice, faHeart);

ReactDOM.render(
  <BrowserRouter>
    <UserAndArticlesProvider>
      <App />
    </UserAndArticlesProvider>
  </BrowserRouter>, 
  document.getElementById('root')
);
