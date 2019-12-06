import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import OvenItem from './OvenItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
    <OvenItem />
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});