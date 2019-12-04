import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App';
import { UserProvider } from './contexts/UserContext';
import {ArticlesContextProvider}  from './contexts/ArticlesContext'
//import 'normalize.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <ArticlesContextProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ArticlesContextProvider>
  </BrowserRouter>, 
  document.getElementById('root')
);
