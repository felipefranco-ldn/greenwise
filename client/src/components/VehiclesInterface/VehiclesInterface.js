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
    userVehicleCo2: 0,
    totalVehicleCo2: 0,
  };
  render() {
    return (
      <div className="ve-container">
        {/* //! input section (left side) starts here */}
        <div className="ve-input">
          <form className="fl-input__form">
            <div className="fl-input__form-question">
              <label className="fl-input__form-label">
                <span className="span">{'>>'} </span> How long was your ride?
              </label>

              <div className="fl-input__form-distance-box"></div>
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
