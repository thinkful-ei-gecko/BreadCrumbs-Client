import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import NewsItem from './NewsItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
    <NewsItem />
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});