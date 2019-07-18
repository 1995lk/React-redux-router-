import React from 'react';
import ReactDOM from 'react-dom';
import App from './ht/app';

import {
  BrowserRouter as Router,
} from 'react-router-dom'

if (module.hot) module.hot.accept();


ReactDOM.render(
  <Router>
      <App />
  </Router>,
  document.getElementById('root')
);