import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import './Routes.css';

import HomePage from './components/Pages/HomePage';
import DashboardPage from './components/Pages/DashboardPage';

class Routes extends Component {

  constructor() {
    super();
    
  }

  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/dashboard' component={DashboardPage} />
          </Switch>        
      </div>
    );
  }
}

export default Routes;