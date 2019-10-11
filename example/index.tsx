import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { App } from './app';

ReactDOM.render(
  <Router>
    <LastLocationProvider>
      <App />
    </LastLocationProvider>
  </Router>,
  document.getElementById('root') as HTMLElement
);
