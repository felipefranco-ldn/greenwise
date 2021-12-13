import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Estimate from './pages/estimate';
import Electricity from './pages/estimate/Electricity';
import Flights from './pages/estimate/Flights';
import Vehicles from './pages/estimate/Vehicles';
import Home from './pages/home';
import Compensate from './pages/compensate';
import Profile from './pages/profile';
import Reduce from './pages/reduce';
import './styles/App.scss';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Reset from './components/Reset/Reset';
import Account from './components/Account/Account';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="app">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/estimate" exact component={Estimate} />
              <Route
                path="/estimate/electricity"
                exact
                component={Electricity}
              />
              <Route path="/estimate/flights" exact component={Flights} />
              <Route path="/estimate/vehicles" exact component={Vehicles} />
              <Route path="/reduce" component={Reduce} />
              <Route path="/compensate" component={Compensate} />
              <Route path="/my-account" component={Profile} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/reset" component={Reset} />
              <Route exact path="/account" component={Account} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
