import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Estimate from "./pages/estimate";
import Electricity from "./pages/estimate/Electricity";
import Flights from "./pages/estimate/Flights";
import Vehicles from "./pages/estimate/Vehicles";
import Home from "./pages/home";
import Compensate from "./pages/compensate";
import Profile from "./pages/profile";
import Reduce from "./pages/reduce";
import "./styles/App.scss";
import Login from "./pages/profile/Login";
import Register from "./pages/profile/Register";
import Help from "./pages/profile/Help";
import AboutInterface from "./components/AboutInterface/AboutInterface";
import IntroInterface from "./components/IntroInterface/IntroInterface";

export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div className="app">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/estimate" component={Estimate} />
              <Route
                exact
                path="/estimate/electricity"
                component={Electricity}
              />
              <Route exact path="/estimate/flights" component={Flights} />
              <Route exact path="/estimate/vehicles" component={Vehicles} />
              <Route exact path="/reduce" component={Reduce} />
              <Route exact path="/compensate" component={Compensate} />
              <Route exact path="/my-account" component={Profile} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/help" component={Help} />
              <Route exact path="/about" component={AboutInterface} />
              <Route exact path="/intro" component={IntroInterface} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}
