// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom";
import { Route, Router } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'

import App from './App';

const history = createBrowserHistory();

const app = document.getElementById('root');

ReactDOM.render((
  <Router history={history}>
    <Route path='/' component={App}/>
  </Router>),
app);
