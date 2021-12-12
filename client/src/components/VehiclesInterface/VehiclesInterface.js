import React, { Component } from 'react';
import './VehiclesInterface.scss';
import { EXT_API_KEY, EXT_API_URL } from '../../utils/api';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default class VehiclesInterface extends Component {
  state = {
    userDistance: 0,
    userDistanceUnits: '',
    userVehicleSize: '',
    userVehicleCo2: 0,
    totalVehicleCo2: 0,
  };
  render() {
    return (
      <div className="ve-container">
        {/* //! input section (left side) starts here */}
        <div className="ve-input">
          <form className="ve-input__form">
            <div className="ve-input__form-question">
              <label className="ve-input__form-label">
                <span className="span">{'>>'} </span> How long was your ride?
              </label>

              <div className="ve-input__form-distance-box">
                <input
                  type="text"
                  name="itemName"
                  className="ve-input__form-input"
                  placeholder="Please enter travel distance"
                  // onChange={handleChange}
                  // value={itemName}
                />
                <select
                  name="userCountry"
                  className="ve-input__form-select"
                  onChange={this.handleCountryChange}
                  value={this.userCountry}
                >
                  <option value="">Please select units</option>
                  <option value="km">Kilometres</option>
                  <option value="mi">Miles</option>
                </select>
              </div>
            </div>
            <div className="ve-input__form-question">
              <label className="ve-input__form-label">
                <span className="span">{'>>'} </span> On what type of car did
                you ride?
              </label>
              <div className="ve-input__form-type-box">
                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="micro"
                  name="carSize"
                  value="micro"
                  onChange={this.handleChange}
                />
                <label className="ve-input__form-size" htmlFor="micro">
                  <h3 className="ve-input__form-label-title">
                    Micro car or City car
                  </h3>
                  <img
                    className="ve-input__car-image"
                    alt="micro car example"
                    // src={flightsMap}
                  />
                </label>

                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="compact"
                  name="carSize"
                  value="compact"
                  onChange={this.handleChange}
                />
                <label className="ve-input__form-size" htmlFor="compact">
                  <h3 className="ve-input__form-label-title">
                    Compact saloon or coupé
                  </h3>
                  <img
                    className="ve-input__car-image"
                    alt="compact car example"
                    // src={flightsMap}
                  />
                </label>
              </div>

              <div className="ve-input__form-type-box">
                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="fullSize"
                  name="carSize"
                  value="fullSize"
                  onChange={this.handleChange}
                />
                <label className="ve-input__form-size" htmlFor="fullSize">
                  <h3 className="ve-input__form-label-title">
                    Full-size saloon or hatchback
                  </h3>
                  <img
                    className="ve-input__car-image"
                    alt="full-size car example"
                    // src={flightsMap}
                  />
                </label>

                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="minivan"
                  name="carSize"
                  value="minivan"
                  onChange={this.handleChange}
                />
                <label className="ve-input__form-size" htmlFor="minivan">
                  <h3 className="ve-input__form-label-title">Minivan</h3>
                  <img
                    className="ve-input__car-image"
                    alt="minivan example"
                    // src={flightsMap}
                  />
                </label>
              </div>

              <div className="ve-input__form-type-box">
                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="cuv"
                  name="carSize"
                  value="cuv"
                  onChange={this.handleChange}
                />
                <label className="ve-input__form-size" htmlFor="cuv">
                  <h3 className="ve-input__form-label-title">
                    Compact Utility Vehicle - CUV
                  </h3>
                  <img
                    className="ve-input__car-image"
                    alt="CUV example"
                    // src={flightsMap}
                  />
                </label>

                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="suv"
                  name="carSize"
                  value="suv"
                  onChange={this.handleChange}
                />
                <label className="ve-input__form-size" htmlFor="suv">
                  <h3 className="ve-input__form-label-title">
                    Sport Utility Vehicle - SUV
                  </h3>
                  <img
                    className="ve-input__car-image"
                    alt="SUV example"
                    // src={flightsMap}
                  />
                </label>
              </div>

              <div className="ve-input__form-type-box">
                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="pickup"
                  name="carSize"
                  value="pickup"
                  onChange={this.handleChange}
                />
                <label className="ve-input__form-size" htmlFor="pickup">
                  <h3 className="ve-input__form-label-title">Pick-up </h3>
                  <img
                    className="ve-input__car-image"
                    alt="pick-up example"
                    // src={flightsMap}
                  />
                </label>

                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="other"
                  name="carSize"
                  value="other"
                  onChange={this.handleChange}
                />
                <label className="ve-input__form-size" htmlFor="other">
                  <h3 className="ve-input__form-label-title">
                    Other large vehicle{' '}
                  </h3>
                  <img
                    className="ve-input__car-image"
                    alt="other car example"
                    // src={flightsMap}
                  />
                </label>
              </div>

              <div className="ve-input__form-power-box">
                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="petrol"
                  name="carPower"
                  value="petrol"
                  onChange={this.handleChange}
                />
                <label className="ve-input__form-size" htmlFor="petrol">
                  <h3 className="ve-input__form-label-title">
                    Petrol or Diesel{' '}
                  </h3>
                  <img
                    className="ve-input__car-image"
                    alt="petrol car icon"
                    // src={flightsMap}
                  />
                </label>

                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="hybrid"
                  name="carPower"
                  value="hybrid"
                  onChange={this.handleChange}
                />
                <label className="ve-input__form-size" htmlFor="hybrid">
                  <h3 className="ve-input__form-label-title">Hybrid</h3>
                  <img
                    className="ve-input__car-image"
                    alt="hybrid car icon"
                    // src={flightsMap}
                  />
                </label>

                <input
                  className="ve-input__form-radio"
                  type="radio"
                  id="electric"
                  name="carPower"
                  value="electric"
                  onChange={this.handleChange}
                />
                <label className="ve-input__form-size" htmlFor="electric">
                  <h3 className="ve-input__form-label-title">Electric</h3>
                  <img
                    className="ve-input__car-image"
                    alt="electric car icon"
                    // src={flightsMap}
                  />
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* //! output section (right side) starts here */}
        <div className="ve-output">
          {this.state.chartData ? (
            <div className="ve-output__content">
              <div className="el-output__content-title">
                Your flight in {this.state.userFlightClass} Class <br />
                compared to other classes
              </div>
              {/* <FlightsChart chartData={this.state.chartData} /> */}
              <div className="el-output__content-text">
                Your flight released approx.{' '}
                <span className="span--bold">
                  {' '}
                  {Number(this.state.totalFlightCo2).toFixed(0)} kilograms of
                  CO2{' '}
                </span>
                into the atmosphere. <br />
                Covering the same distance by train would have generated
                <span className="span--bold">
                  {' '}
                  {Number((this.state.userFlightCo2 / 5).toFixed(0))} kilograms
                  of CO2
                </span>{' '}
                instead.
              </div>
              <div className="el-output__content-button-box">
                <div className="el-output__content-button">
                  Save estimate in dashboard
                  <span className="span"> {'>>'} </span>
                </div>
                <Link className="el-output__link" to="/estimate/flights">
                  <div className="el-output__content-button el-output__content-button--next">
                    Go to Next Step <span className="span"> {'>>'} </span>
                  </div>
                </Link>
              </div>
            </div>
          ) : (
            <div className="fl-output__intro">
              <h3 className="fl-output__intro-title">
                Flying often represents a
                <br />
                signifcant part of people's footprint. <br />
                Use the map below to estimate yours.
              </h3>
              <img
                className="fl-output__intro-image"
                alt="home electricity consumption and network"
                // src={flightsMap}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
