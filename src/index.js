import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App';
import { UserAndArticlesProvider }  from './contexts/UserAndArticlesContext'
//import 'normalize.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <UserAndArticlesProvider>
      <App />
    </UserAndArticlesProvider>
  </BrowserRouter>, 
  document.getElementById('root')
);
