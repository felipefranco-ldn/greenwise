import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Estimate from './pages/estimate';
import Home from './pages/home';
import Offset from './pages/offset';
import Profile from './pages/profile';
import Reduce from './pages/reduce';
import './styles/App.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="app">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/estimate" exact component={Estimate} />
              <Route path="/reduce" exact component={Reduce} />
              <Route path="/offset" exact component={Offset} />
              <Route path="/my-account" exact component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
