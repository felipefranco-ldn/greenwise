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
import Login from './pages/profile/Login';
import Register from './pages/profile/Register';
import Help from './pages/profile/Help';
import AboutInterface from './components/AboutInterface/AboutInterface';
import IntroInterface from './components/IntroInterface/IntroInterface';

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
              <Route exact path="/help" component={Help} />
              <Route exact path="/about" component={AboutInterface} />
              <Route exact path="/intro" component={IntroInterface} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
