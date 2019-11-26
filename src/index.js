import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App';
import { UserProvider } from './contexts/UserContext';
//import 'normalize.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>, 
  document.getElementById('root')
);
