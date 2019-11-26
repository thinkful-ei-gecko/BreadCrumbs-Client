import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import {ContextProvider} from "./Context/Context"
import App from './components/App/App';
import './index.css';

ReactDOM.render(<ContextProvider><BrowserRouter><App /></BrowserRouter></ContextProvider>, document.getElementById('root'));